<template>
  <div class="layout">
    <Navbar />
    <transition name="slide-fade" appear>
      <main class="homepage">
        <div class="centered-title">
          <h1 class="title">Esper Innovations</h1>
          <h2 class="subtitle">Better software, better business, naturally.</h2>
          <h2 class="subtitle">Innovative software, better business, naturally.</h2>
          <h2 class="subtitle">No-bullshit software that enables your business to work smarter.</h2>
          <h2 class="subtitle">
            We build no-bullshit software that enables your business to work smarter, not harder.
          </h2>
          <h2 class="subtitle">
            Our no-bullshit consultants work with your teams to identify problem-areas and build
            innovative software solutions before they slow you down any more.
          </h2>
          <h2 class="subtitle">
            Our no-bullshit consultants work with your teams to identify road blocks and build
            innovative software solutions before they stop you in your tracks.
          </h2>
          <h2 class="subtitle">
            We innovate your business through software, before it's too late.
          </h2>
          <h2 class="subtitle">
            We enable your business to innovate in your domain, through our no-bullshit software
            consulting.
          </h2>
          <h2 class="subtitle">
            Before breakfast you've likely interacted with dozens of different software
            applications. If your business is mired with tired legacy systems that keep getting in
            your way, you're letting yourself get left behind. Talk to us about how you can fix
            that.
          </h2>
          <h2 class="subtitle">Lead your business to a better a more promising tomorrow.</h2>
          <h2 class="subtitle">Exceptional Software, Progressive Experiences, Really.</h2>
        </div>
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
