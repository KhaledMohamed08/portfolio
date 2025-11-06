<script setup>
import profileImg from "../assets/images/profile-img.jpg";
import PageTitle from "../components/PageTitle.vue";

const title = "UI/UX Designer & Web Developer.";

// Left column info
const personalInfoLeft = [
  { label: "Birthday", value: "1 May 1995" },
  { label: "Website", value: "www.example.com" },
  { label: "Phone", value: "+123 456 7890" },
  { label: "City", value: "New York, USA" },
];

// Right column info
const personalInfoRight = [
  { label: "Age", value: "30" },
  { label: "Degree", value: "Master" },
  { label: "Email", value: "email@example.com" },
  { label: "Freelance", value: "Available" },
];
</script>

<template>
  <PageTitle title="About">
    Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio
    sint voluptas consequatur ut a odio voluptatem.
  </PageTitle>

  <section id="about" class="about section">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 justify-content-center">
        <div class="col-lg-4">
          <img :src="profileImg" class="img-fluid" alt="Profile Image" />
        </div>

        <div class="col-lg-8 content">
          <h2 class="py-3">{{ title }}</h2>

          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li v-for="item in personalInfoLeft" :key="item.label">
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ item.label }}:</strong>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-6">
              <ul>
                <li v-for="item in personalInfoRight" :key="item.label">
                  <i class="bi bi-chevron-right"></i>
                  <strong>{{ item.label }}:</strong>
                  <span>{{ item.value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
