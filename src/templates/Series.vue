<template>
  <Layout :pageTitle="`Posts in ${$page.series.title}`">
    <template slot="heroContent"
      ><div v-html="$page.series.content"></div>
      <div>
      <b-icon
                pack="fas"
                icon="newspaper"
                >
            </b-icon>
            {{ $page.series.belongsTo.totalCount }}
            post<span v-if="$page.series.belongsTo.totalCount > 1"
                      >s</span>
    </div>
    </template>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <ul
              v-for="post in $page.series.belongsTo.edges"
              :key="post.node.id"
            >
              <li>
                <PostItem :post="post" />
              </li>
              <hr />
            </ul>
          </div>
          <div class="column">
            <p>
              The latest post in this series was published on
            </p>
            <div class="box">
              <div class="columns">
                <div class="column">
                  <div class="stats-post-count">
                    
                  </div>
                  <div class="stats-label">
                  </div>
                </div>
                <div class="column">
                  <div class="stats-date">
                    {{ $page.series.belongsTo.edges[0].node.date }}
                  </div>
                  <div class="stats-data-label">
                    latest post
                  </div>
                </div>
              </div>
              <figure class="image is-rounded is-128x128">
                <img class="is-rounded" :src="`../../${$page.series.image}`" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
 query($id: ID!) {
    series(id: $id) {
      title
      path
      image
      content
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
              date(format:"MMMM Do YYYY")
              
          
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

.large-data {
  font-size: 4rem;
  text-align: center;
}

.large-data-label {
  text-align: center;
}

.post {
  padding-bottom: 1rem;
  border-bottom: 12px solid $primary;
}
</style>
