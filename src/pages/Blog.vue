<template>
  <Layout pageTitle="Blog">
    <div class="section main-section">
      <div class="container">
        <div class="cards-grid">
          <article class="card grid-item" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <div class="card-image">
              <g-link :to="edge.node.path">
                <figure class="image is-16by9">
                  <img
                    :src="`../../${edge.node.featuredImage}`"
                    :alt="`${edge.node.title} image`"
                  />
                </figure>
              </g-link>
            </div>

            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <g-link :to="edge.node.author.path">
                    <figure class="image is-48x48">
                      <img :src="`../../${edge.node.author.image}`" alt="Placeholder image" />
                    </figure>
                  </g-link>
                </div>
                <div class="media-content">
                  <h2 class="title is-4">
                    <g-link :to="edge.node.path">
                      {{ edge.node.title }}
                    </g-link>
                  </h2>
                  <p class="subtitle is-6">
                    <g-link :to="edge.node.author.path">
                      {{ edge.node.author.title }}
                    </g-link>
                  </p>
                </div>
              </div>

              <div class="content">
                {{ edge.node.excerpt }}
              </div>

              <p v-if="edge.node.series" class="subtitle series-subtitle is-6">
                Part {{ edge.node.seriesPart }} of
                <g-link :to="edge.node.series.path">{{ edge.node.series.title }} </g-link>
              </p>
            </div>
            <div class="card-footer-tags">
              <div class="tags">
                <div class="tag" v-for="tag in edge.node.tags" :key="tag.id">
                  <g-link :to="tag.path">
                    {{ tag.id }}
                  </g-link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          path
          excerpt
          featuredImage
          seriesPart
          author {
            id
            title
            path
            image
          }
          tags {
            id
            path
          }
          series {
            id
            title
            path
          }
        }
      }
    }
  }
</page-query>

<script>
export default {
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
  justify-content: flex-start;
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
