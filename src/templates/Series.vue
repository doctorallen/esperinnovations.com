<template>
  <Layout :pageTitle="`Posts in ${$page.series.title}`">
    <div v-html="$page.series.content"></div>
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
              <span v-if="$page.series.belongsTo.totalCount > 1">
                There are {{ $page.series.belongsTo.totalCount }} posts in this
                series.
              </span>
              <span v-if="$page.series.belongsTo.totalCount === 1">
                There is 1 post in this series.
              </span>
              The latest post in this series was published on
              {{ $page.series.belongsTo.edges[0].node.date }}.
            </p>
            <div class="box">
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

.post {
  padding-bottom: 1rem;
  border-bottom: 12px solid $primary;
}
</style>
