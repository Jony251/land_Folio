<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import emailjs from '@emailjs/browser'
import { CONTENT, LANGS } from './content'
import sunIcon from './assets/sun.svg'
import moonIcon from './assets/moon.svg'
import sideHustleLogo from './assets/logo.png'
import heroAvatar from './assets/dasha_lodo.png'
import firstPreviewImg from './assets/first_img.png'
import secondPreviewImg from './assets/secon_img.png'
import thirdPreviewImg from './assets/therd_img.png'

const lang = ref('en')
const isRtl = computed(() => lang.value === 'he')
const theme = ref('light')
const isDark = computed(() => theme.value === 'dark')

const c = computed(() => CONTENT[lang.value])

const galleryShots = computed(() => [
  { img: firstPreviewImg, href: '#', label: 'Preview 1' },
  { img: secondPreviewImg, href: '#', label: 'Preview 2' },
  { img: thirdPreviewImg, href: '#', label: 'Preview 3' },
])

const contactEmail = ref('')
const contactCompany = ref('')
const contactStatus = ref('idle')
const contactError = ref('')

const emailIsValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim())

const sendContact = async () => {
  contactError.value = ''
  if (contactCompany.value) return
  if (!emailIsValid(contactEmail.value)) {
    contactStatus.value = 'error'
    contactError.value = 'Please enter a valid email.'
    return
  }

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    contactStatus.value = 'error'
    contactError.value = 'Email service is not configured.'
    return
  }

  contactStatus.value = 'sending'
  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        from_email: contactEmail.value.trim(),
        reply_to: contactEmail.value.trim(),
        message: `Contact request from ${contactEmail.value.trim()}`,
        lang: lang.value,
      },
      { publicKey },
    )
    contactStatus.value = 'sent'
    contactEmail.value = ''
    contactCompany.value = ''
  } catch (e) {
    contactStatus.value = 'error'
    contactError.value = 'Failed to send. Please try again.'
  }
}

const setDocumentLang = () => {
  document.documentElement.lang = lang.value
  document.documentElement.dir = isRtl.value ? 'rtl' : 'ltr'
}

const setDocumentTheme = () => {
  document.documentElement.dataset.theme = theme.value
}

onMounted(() => {
  const saved = localStorage.getItem('lang')
  if (saved && LANGS.includes(saved)) lang.value = saved
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'light' || savedTheme === 'dark') theme.value = savedTheme
  setDocumentLang()
  setDocumentTheme()
})

watch([lang, isRtl], () => {
  localStorage.setItem('lang', lang.value)
  setDocumentLang()
})

watch([theme, isDark], () => {
  localStorage.setItem('theme', theme.value)
  setDocumentTheme()
})
</script>

<template>
  <div class="page" :data-dir="isRtl ? 'rtl' : 'ltr'">
    <div class="container">
      <div class="panel">
        <header class="top">
          <div class="lang" aria-label="Language">
            <button
              v-for="code in LANGS"
              :key="code"
              class="lang-btn"
              type="button"
              :aria-pressed="lang === code"
              :data-active="lang === code"
              @click="lang = code"
            >
              {{ code.toUpperCase() }}
            </button>
          </div>

          <button class="theme" type="button" :aria-pressed="isDark" :aria-label="isDark ? 'Switch to Day' : 'Switch to Night'" @click="theme = isDark ? 'light' : 'dark'">
            <img class="theme-icon" :src="isDark ? sunIcon : moonIcon" alt="" />
          </button>
        </header>

        <section class="hero" aria-label="Hero">
          <img class="hero-avatar" :src="heroAvatar" :alt="c.hero.name" />
          <h1 class="hero-name">{{ c.hero.name }}</h1>
          <p class="hero-tagline">{{ c.hero.tagline }}</p>
          <div class="hero-badges">
            <span v-if="c.hero.available" class="badge badge--dark">{{ c.hero.available }}</span>
          </div>
        </section>

        <section class="gallery" aria-label="Preview">
          <a
            v-for="(shot, i) in galleryShots"
            :key="i"
            class="shot"
            :href="shot.href"
            :style="{ '--img': `url('${shot.img}')` }"
            :aria-label="shot.label"
          />
        </section>

        <main class="content">
        <section id="experience" class="section" aria-label="Experience">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.experience.title }}</h2>
          </div>

          <div class="timeline">
            <article v-for="(item, i) in c.experience" :key="i" class="timeline-item">
              <div class="timeline-icon" aria-hidden="true" />
              <div class="timeline-card" :class="{ 'is-plain': item.plain }">
                <div class="timeline-date">{{ item.date }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <div v-if="item.location" class="timeline-loc">{{ item.location }}</div>
                <ul v-if="item.bullets?.length" class="timeline-bullets">
                  <li v-for="(b, bi) in item.bullets" :key="bi">{{ b }}</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="education" class="section" aria-label="Education">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.education.title }}</h2>
          </div>

          <div class="stack">
            <div v-for="(e, i) in c.education" :key="i" class="row-card">
              <div class="row-head">
                <span class="row-domain">{{ e.date }}</span>
              </div>
              <div class="row-title">{{ e.title }}</div>
              <div class="row-desc">{{ e.org }}</div>
              <div v-if="e.desc" class="row-desc">{{ e.desc }}</div>
            </div>
          </div>

          <div class="edu-sub">Certifications</div>
          <div class="stack">
            <component
              :is="x.href ? 'a' : 'div'"
              v-for="(x, i) in c.certifications"
              :key="i"
              class="row-card"
              :href="x.href || undefined"
            >
              <div class="row-head">
                <span class="row-domain">{{ x.date }}</span>
                <span v-if="x.href" class="row-arrow" aria-hidden="true" />
              </div>
              <div class="row-title">{{ x.title }}</div>
              <div class="row-desc">{{ x.org }}</div>
              <div v-if="x.expires" class="row-desc">{{ x.expires }}</div>
            </component>
          </div>
        </section>

        <section id="articles" class="section" aria-label="Articles">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.articles.title }}</h2>
          </div>

          <div class="stack">
            <a v-for="(a, i) in c.articles" :key="i" class="row-card" :href="a.href">
              <div class="row-head">
                <span class="row-domain">{{ a.domain }}</span>
                <span class="row-arrow" aria-hidden="true" />
              </div>
              <div class="row-title">{{ a.title }}</div>
              <div class="row-desc">{{ a.desc }}</div>
            </a>
          </div>
        </section>

        <section id="projects" class="section" aria-label="Projects">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.projects.title }}</h2>
          </div>

          <div class="grid grid--2">
            <a v-for="(p, i) in c.projects" :key="i" class="mini-card" :href="p.href">
              <span class="mini-arrow" aria-hidden="true" />
              <img class="mini-icon" :src="sideHustleLogo" alt="" />
              <div class="mini-title">{{ p.title }}</div>
              <div class="mini-desc">{{ p.desc }}</div>
            </a>
          </div>
        </section>

        <!--
        <section id="recommendations" class="section" aria-label="Recommendations">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.recommendations.title }}</h2>
          </div>

          <div class="recs">
            <figure v-for="(r, i) in c.recommendations" :key="i" class="rec" :class="{ 'is-muted': r.muted }">
              <div class="rec-head">
                <img class="rec-avatar" :src="r.avatar" alt="" />
                <div>
                  <div class="rec-name">{{ r.name }}</div>
                  <div class="rec-role">{{ r.role }}</div>
                </div>
              </div>
              <blockquote class="rec-quote">{{ r.quote }}</blockquote>
            </figure>
          </div>
        </section>
        -->

        <section id="connect" class="section" aria-label="Connect">
          <div class="section-head">
            <h2 class="section-title">{{ c.sections.connect.title }}</h2>
          </div>

          <form class="newsletter" @submit.prevent="sendContact">
            <input v-model="contactCompany" class="hp" tabindex="-1" autocomplete="off" />
            <input v-model="contactEmail" class="newsletter-input" :placeholder="c.connect.placeholder" inputmode="email" autocomplete="email" />
            <button class="newsletter-btn" type="submit" :disabled="contactStatus === 'sending'">
              {{ contactStatus === 'sending' ? 'Sending...' : c.connect.cta }}
            </button>
          </form>

          <div v-if="contactStatus === 'sent'" class="form-status">Sent.</div>
          <div v-else-if="contactStatus === 'error'" class="form-status is-error">{{ contactError }}</div>
        </section>

        <footer class="footer">
          <div class="footer-links">
            <a v-for="(l, i) in c.footer.links" :key="i" class="footer-icon" :href="l.href">{{ l.label }}</a>
          </div>
          <div class="footer-copy">
            <template v-if="c.footer.credit?.href">
              © <a class="footer-credit" :href="c.footer.credit.href">{{ c.footer.credit.label }}</a>. {{ c.footer.copy }}
            </template>
            <template v-else>
              {{ c.footer.copy }}
            </template>
          </div>
        </footer>
        </main>
      </div>
    </div>
  </div>
</template>
