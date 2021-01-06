<template>
  <Homepage>
    <div class="section">
      <div class="container">Homepage</div>
    </div>
  </Homepage>
</template>

<script>
import Homepage from '~/layouts/Homepage.vue';
export default {
  components: {
    Homepage,
  },
  metaInfo: {
    title: 'Hello, world!',
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 1.5rem;
}

.cards-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  width: 100%;
  justify-content: center;
}

/* Mobile First */
.grid-item {
  width: 100%;
  transition: all 0.2s ease-in-out;
}
/*Medium Width */
@media screen and (min-width: 740px) {
  .grid-item {
    width: calc((100% / 2) - 30px);
  }
}
/*Wide Width */
@media screen and (min-width: 991px) {
  .grid-item {
    width: calc((100% / 3) - 30px);
  }
}
</style>
