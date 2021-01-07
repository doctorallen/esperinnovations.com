<template>
  <div class="layout">
    <Navbar />
    <section class="hero is-medium is-primary">
      <div class="hero-body">
        <transition name="slide-down-fade" appear>
          <div class="container">
            <h1 class="title is-1">
              {{ pageTitle }}
            </h1>
            <h2 v-if="pageSubtitle" class="subtitle">
              {{ pageSubtitle }}
            </h2>
            <slot name="heroContent" />
          </div>
        </transition>
      </div>
    </section>
    <section class="accent-bar">
      <transition name="expand-fade" appear>
        <slot name="accentBar" />
      </transition>
    </section>
    <transition name="slide-fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
        <!-- the content -->
      </main>
    </transition>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>Copyright &copy; Esper Innovations, 2021.</p>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '../components/Navbar';
export default {
  props: { pageTitle: '', pageSubtitle: '', color: '' },
  components: { Navbar },
};
</script>

<style lang="scss">
@import '@/assets/scss/dark.scss';
</style>
