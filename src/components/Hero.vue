<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import Typed from 'typed.js'

const name = 'Wiam Muhammed'

let typedInstance = null

const titles = ['Designer', 'Developer', 'Freelancer', 'Photographer']

onMounted(() => {
  const el = document.querySelector('.typed')

  if (el) {
    typedInstance = new Typed(el, {
      strings: titles,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    })
  }
})

onBeforeUnmount(() => {
  if (typedInstance) {
    typedInstance.destroy()
    typedInstance = null
  }
})

const socialLinks = [
  { link: '#', icon: 'bi bi-twitter-x' },
  { link: '#', icon: 'bi bi-facebook' },
  { link: '#', icon: 'bi bi-instagram' },
  { link: '#', icon: 'bi bi-linkedin' },
]
</script>

<template>
  <section id="hero" class="hero section dark-background">
    <img src="../assets/images/hero-bg.jpg" alt="" data-aos="fade-in" />

    <div class="container" data-aos="zoom-out" data-aos-delay="100">
      <h2>{{ name }}</h2>

      <p>
        I'm
        <span class="typed"></span>
        <span class="typed-cursor typed-cursor--blink"></span>
      </p>

      <div class="social-links">
        <a 
          v-for="link in socialLinks" 
          :key="link.icon" 
          :href="link.link" 
          target="_blank"
        >
          <i :class="link.icon"></i>
        </a>
      </div>
    </div>
  </section>
</template>
