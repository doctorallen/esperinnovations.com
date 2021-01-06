<template>
  <Layout :pageTitle="`Posts by ${$page.author.title}`">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <div class="cards-grid">
              <PostItem
                v-for="post in $page.author.belongsTo.edges"
                :key="post.node.id"
                :post="post"
              />
            </div>
          </div>
          <div class="column">
            <div class="box author-box">
              <figure class="image is-rounded author-image">
                <img class="is-rounded" :src="`../../../${$page.author.image}`" />
              </figure>
              <div class="content">
                <h2 class="title is-3">{{ $page.author.title }}</h2>
                <p class="subtitle">
                  {{ $page.author.companyTitle }} at {{ $page.author.companyName }}
                </p>
                <div class="social-grid">
                  <a v-if="$page.author.github" :href="$page.author.github" target="_blank">
                    <b-icon pack="fab" size="is-large" icon="github"> </b-icon>
                  </a>
                  <a
                    v-if="$page.author.email"
                    :href="`mailto:${$page.author.email}`"
                    target="_blank"
                  >
                    <b-icon pack="fas" size="is-large" icon="envelope"> </b-icon>
                  </a>
                  <a v-if="$page.author.twitter" :href="$page.author.twitter" target="_blank">
                    <b-icon pack="fab" size="is-large" icon="twitter"> </b-icon>
                  </a>
                  <a v-if="$page.author.instagram" :href="$page.author.instagram" target="_blank">
                    <b-icon pack="fab" size="is-large" icon="instagram"> </b-icon>
                  </a>
                </div>
                <p>{{ $page.author.blurb }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
 query($id: ID!) {
    author(id: $id) {
      title
      path
      image
      blurb
      content
      github
      email
      companyName
      companyTitle
      belongsTo {
        totalCount
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on Post {
              id
              title
              excerpt
              featuredImage
              path
              content
              seriesPart
              date(format:"MMMM Do YYYY")

              tags {
                  id
                  path
              }
              
              author {
                id
                title
                image
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
    }  
  }
</page-query>
<script>
import PostItem from '../components/PostItem';
export default {
  components: { PostItem },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/overrides.scss';

.post {
  padding-bottom: 1rem;
  border-bottom: 12px solid $primary;
}

.author-image {
  width: 75%;
  margin: 0 auto;
}

.social-grid {
  margin-top: -1rem;
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
    width: 100%;
  }
}
/*Wide Width */
@media screen and (min-width: 991px) {
  .grid-item {
    width: calc((100% / 2) - 30px);
  }
}
</style>
