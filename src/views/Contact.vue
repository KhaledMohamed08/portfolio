<script setup>
import PageTitle from "../components/PageTitle.vue";
import { reactive } from "vue";

// Contact info data (keeps original layout, no structure change)
const contactInfo = [
  {
    icon: "bi bi-geo-alt flex-shrink-0",
    title: "Address",
    text: "A108 Adam Street, New York, NY 535022",
    delay: 200,
  },
  {
    icon: "bi bi-telephone flex-shrink-0",
    title: "Call Me",
    text: "+1 5589 55488 55",
    delay: 300,
  },
  {
    icon: "bi bi-envelope flex-shrink-0",
    title: "Email Us",
    text: "info@example.com",
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
  { icon: "bi bi-facebook", link: "#" },
  { icon: "bi bi-instagram", link: "#" },
  { icon: "bi bi-skype", link: "#" },
  { icon: "bi bi-linkedin", link: "#" },
];

// form model (does not affect UI)
const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const submitForm = () => {
  console.log(form)
};
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

              <p v-if="!item.isSocial">{{ item.text }}</p>

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

      <!-- FORM (unchanged visually, just v-model + submit event) -->
      <form
        class="php-email-form"
        @submit.prevent="submitForm"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div class="row gy-4">
          <div class="col-md-6">
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Your Name"
              v-model="form.name"
              required
            />
          </div>

          <div class="col-md-6">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Your Email"
              v-model="form.email"
              required
            />
          </div>

          <div class="col-md-12">
            <input
              type="text"
              class="form-control"
              name="subject"
              placeholder="Subject"
              v-model="form.subject"
              required
            />
          </div>

          <div class="col-md-12">
            <textarea
              class="form-control"
              name="message"
              rows="6"
              placeholder="Message"
              v-model="form.message"
              required
            ></textarea>
          </div>

          <div class="col-md-12 text-center">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </form>

    </div>
  </section>
</template>
