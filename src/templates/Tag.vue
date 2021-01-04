<template>
  <Layout :pageTitle="`Posts tagged ${$page.tag.title}`">
    <template slot="heroContent">
      <div>
        <p class="heading">Post<span v-if="$page.tag.belongsTo.totalCount > 1">s</span></p>
        <p class="title">{{ $page.tag.belongsTo.totalCount }}</p>
      </div>
      <div>
        <p class="heading">Last Updated</p>
        <p class="title">{{ $page.tag.belongsTo.edges[0].node.date }}</p>
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
        <ul v-for="post in $page.tag.belongsTo.edges" :key="post.node.id">
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
    tag(id: $id) {
      title
      path
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
