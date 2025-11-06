<script setup>
import PageTitle from "../components/PageTitle.vue";

const contactInfo = [
  {
    icon: "bi bi-telephone flex-shrink-0",
    title: "Call Me",
    text: "+1 5589 55488 55",
    link: "tel:+155895548855",
    delay: 200,
  },
  {
    icon: "bi bi-whatsapp flex-shrink-0",
    title: "Whatsapp",
    text: "+1 5589 55488 55",
    link: "https://wa.me/155895548855",
    delay: 300,
  },
  {
    icon: "bi bi-envelope flex-shrink-0",
    title: "Email Us",
    text: "info@example.com",
    link: "mailto:info@example.com",
    delay: 400,
  },
  {
    icon: "bi bi-share flex-shrink-0",
    title: "Social Profiles",
    isSocial: true,
    delay: 500,
  },
];

const socialLinks = [
  { icon: "bi bi-twitter-x", link: "#" },
  // { icon: "bi bi-facebook", link: "#" },
  // { icon: "bi bi-instagram", link: "#" },
  { icon: "bi bi-linkedin", link: "#" },
];
</script>

<template>
  <PageTitle title="Contact">
    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio
    sint voluptas consequatur ut a odio voluptatem.
  </PageTitle>

  <section id="contact" class="contact section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">
        <div
          v-for="item in contactInfo"
          :key="item.title"
          class="col-md-6"
        >
          <div
            class="info-item d-flex align-items-center"
            data-aos="fade-up"
            :data-aos-delay="item.delay"
          >
            <i class="icon" :class="item.icon"></i>
            <div>
              <h3>{{ item.title }}</h3>

              <!-- Normal clickable link -->
              <p v-if="!item.isSocial">
                <a
                  :href="item.link"
                  :target="item.title === 'Call Me' ? null : '_blank'"
                >
                  {{ item.text }}
                </a>
              </p>

              <!-- Social links -->
              <div v-else class="social-links">
                <a
                  v-for="social in socialLinks"
                  :key="social.icon"
                  :href="social.link"
                  target="_blank"
                >
                  <i :class="social.icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
