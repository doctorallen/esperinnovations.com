<template>
  <div class="layout">
    <Navbar />
    <transition name="slide-fade" appear>
      <main>
        <!-- a wrapper for slot is needed -->
        <slot />
        <!-- the content -->
      </main>
    </transition>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Copyright &copy; Esper Innovations, 2020.
        </p>
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
@import '@/assets/scss/main.scss';

// for some reason this overrides the Default layout too...?
html {
    background: $primary; 
    color: white;
}

body {
  color: white;
}

.footer {
    background-color: transparent;
    color: white;
}
</style>
