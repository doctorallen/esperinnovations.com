<template>
  <Layout :pageTitle="$page.series.title">
    <template slot="heroContent">
      <div class="columns">
        <div class="column is-half-desktop is-full-tablet">
          <div class="hero-content-section" v-html="$page.series.content"></div>
          <div class="columns">
            <div class="column is-one-third">
              <p class="heading">Post<span v-if="$page.series.belongsTo.totalCount > 1">s</span></p>
              <p class="title">{{ $page.series.belongsTo.totalCount }}</p>
            </div>
            <div class="column has-text-right-tablet">
              <p class="heading">Last Updated</p>
              <p class="title">{{ $page.series.belongsTo.edges[0].node.date | moment }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="hero-content-stats">
        <p class="heading">Post<span v-if="$page.series.belongsTo.totalCount > 1">s</span></p>
        <p class="title">{{ $page.series.belongsTo.totalCount }}</p>
      </div>
      <div class="hero-content-stats">
        <p class="heading">Last Updated</p>
        <p class="title">{{ $page.series.belongsTo.edges[0].node.date }}</p>
      </div> -->
    </template>
    <section class="section main-section">
      <div class="container">
        <div class="cards-grid">
          <PostItem v-for="post in $page.series.belongsTo.edges" :key="post.node.id" :post="post" />
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
              seriesPart
              timeToRead
              date

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
import moment from 'moment';
export default {
  components: { PostItem },
  metaInfo() {
    return {
      title: this.$page.series.title,
      meta: [
        { name: 'description', content: this.$page.series.content },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: this.$page.series.content },
        { name: 'twitter:title', content: this.$page.series.title },
        //     { name: "twitter:site", content: "@therealdanvega" },
        // { name: 'twitter:image', content: this.getFeaturedImage },
        //     { name: "twitter:creator", content: "@therealdanvega" },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.$page.series.title },
        { property: 'og:description', content: this.$page.series.content },
        {
          property: 'og:url',
          content: `${process.env.GRIDSOME_BASE_URL}${this.$page.series.path}`,
        },
        {
          property: 'article:published_time',
          content: moment(this.$page.series.belongsTo.edges[0].node.date).format('MM-DD-YYYY'),
        },
        { property: 'og:updated_time', content: this.$page.series.belongsTo.edges[0].node.date },
        // { property: 'og:image', content: this.getFeaturedImage },
        // { property: 'og:image:secure_url', content: this.getFeaturedImage },
      ],
    };
  },
  filters: {
    moment: function (date) {
      return moment(date).format('MMMM Do, YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/dark.scss';
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
