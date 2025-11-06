<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";
import PageTitle from "../components/PageTitle.vue";

const activeFilter = ref("*");
const portfolioItems = ref([]);
const filters = ref([{ name: "All", value: "*" }]);
let iso = ref(null);
let lightbox = null;

// For GLightbox inert/focus management
let lastFocusedElement = null;
let inertBackgroundElements = [];

// Manage background elements when lightbox opens
function setBackgroundInertForLightbox() {
  const activeEl = document.activeElement;
  if (activeEl && activeEl instanceof HTMLElement) {
    lastFocusedElement = activeEl;
    activeEl.blur();
  }

  inertBackgroundElements = [];
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach((el) => {
    const classList = el.classList || { contains: () => false };
    const isLightboxEl =
      classList.contains("glightbox-container") ||
      classList.contains("glightbox-overlay");
    if (!isLightboxEl) {
      if (!el.hasAttribute("inert")) {
        el.setAttribute("inert", "");
        inertBackgroundElements.push(el);
      }
    }
  });
}

function clearBackgroundInert() {
  inertBackgroundElements.forEach((el) => el.removeAttribute("inert"));
  inertBackgroundElements = [];
  if (lastFocusedElement && lastFocusedElement instanceof HTMLElement) {
    try {
      lastFocusedElement.focus();
    } catch (_) {}
    lastFocusedElement = null;
  }
}

// Get YouTube thumbnail
function getYoutubeThumbnail(url) {
  const idMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
  if (idMatch) return `https://img.youtube.com/vi/${idMatch[1]}/hqdefault.jpg`;
  return "/data/images/video.png";
}

onMounted(async () => {
  try {
    const response = await fetch("/json/portfolio.json");
    const data = await response.json();

    portfolioItems.value = data.map((item, index) => ({
      ...item,
      id: index + 1,
      filterClass: `filter-${item.type}s`,
      thumbnail:
        item.type === "video"
          ? getYoutubeThumbnail(item.url)
          : item.thumbnail || "/data/images/pdf.png",
    }));

    const types = [...new Set(data.map((item) => item.type))];
    types.forEach((type) => {
      filters.value.push({
        name: type.charAt(0).toUpperCase() + type.slice(1) + "s",
        value: `.filter-${type}s`,
      });
    });

    await nextTick();

    const container = document.querySelector(".isotope-container");

    // Remove AOS attributes if needed
    container.querySelectorAll(".isotope-item").forEach((el) => {
      el.removeAttribute("data-aos");
      el.removeAttribute("data-aos-delay");
      el.removeAttribute("data-aos-duration");
    });

    // Wait for images to load before initializing Isotope
    imagesLoaded(container, () => {
      iso.value = new Isotope(container, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        percentPosition: true,
        masonry: { columnWidth: ".isotope-item" },
        transitionDuration: "0.4s",
        stagger: 30,
        hiddenStyle: { opacity: 0, transform: "scale(0.95)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });

      // Initialize GLightbox safely
      lightbox = GLightbox({
        selector: ".portfolio-link",
        openEffect: "fade",
        closeEffect: "fade",
        loop: true,
        height: "80%",
        width: "80%",
        autofocus: false,
      });

      lightbox.on("open", setBackgroundInertForLightbox);
      lightbox.on("close", clearBackgroundInert);
    });
  } catch (error) {
    console.error("Failed to load portfolio JSON:", error);
  }
});

onBeforeUnmount(() => {
  if (lightbox) lightbox.destroy();
  clearBackgroundInert();
  if (iso.value) iso.value.destroy();
});

const filterItems = (filterValue, event) => {
  activeFilter.value = filterValue;
  if (iso.value) {
    requestAnimationFrame(() => {
      iso.value.arrange({ filter: filterValue });
    });
  }

  const buttons = event.currentTarget.parentNode.querySelectorAll("li");
  buttons.forEach((btn) => btn.classList.remove("filter-active"));
  event.currentTarget.classList.add("filter-active");
};
</script>

<template>
  <PageTitle title="Portfolio">
    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio
    sint voluptas consequatur ut a odio voluptatem.
  </PageTitle>

  <section id="portfolio" class="portfolio section">
    <div class="container">
      <div class="isotope-layout" data-default-filter="*" data-layout="masonry">
        <!-- Filters -->
        <ul class="portfolio-filters isotope-filters">
          <li
            v-for="filter in filters"
            :key="filter.value"
            :class="{ 'filter-active': activeFilter === filter.value }"
            @click="filterItems(filter.value, $event)"
          >
            {{ filter.name }}
          </li>
        </ul>

        <!-- Portfolio Items -->
        <div class="row gy-4 isotope-container">
          <div
            v-for="item in portfolioItems"
            :key="item.id"
            class="col-lg-4 col-md-6 portfolio-item isotope-item"
            :class="item.filterClass"
          >
            <a
              :href="item.url"
              class="portfolio-link"
              v-bind="item.type === 'video'
                ? { 'data-type': 'video', 'data-source': 'youtube', 'data-poster': item.thumbnail }
                : { 'data-type': 'external' }"
            >
              <div class="portfolio-content h-100">
                <div class="portfolio-thumbnail">
                  <img :src="item.thumbnail" class="img-fluid" :alt="item.type" />
                </div>
                <div class="portfolio-info">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.isotope-container {
  position: relative;
}

.portfolio-content {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.portfolio-thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.portfolio-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.portfolio-info {
  padding: 12px;
  flex: 1;
}
</style>
