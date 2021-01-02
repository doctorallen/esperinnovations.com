<template>
  <Layout :pageTitle="$page.series.title">
    <template slot="heroContent"
      ><div class="hero-content-section" v-html="$page.series.content"></div>
            <div>
            <p class="heading">
                    Post<span v-if="$page.series.belongsTo.totalCount > 1"
                            >s</span></p>
            <p class="title">{{ $page.series.belongsTo.totalCount }}</p>
            </div>
            <div>
            <p class="heading">Last Updated</p>
            <p class="title">{{ $page.series.belongsTo.edges[0].node.date }}</p>
            </div>
     <!-- <b-icon
                pack="fas"
                icon="newspaper"
                >
            </b-icon>
            {{ $page.series.belongsTo.totalCount }}
            post<span v-if="$page.series.belongsTo.totalCount > 1"
                      >s</span> -->
    </template>
    <section class="section">
      <div class="container">
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
              seriesPart
              timeToRead
              date(format:"MMMM Do, YYYY")
              
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
