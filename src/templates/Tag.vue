<template>
  <Layout :pageTitle="pageTitle">
    <template slot="heroContent">
      <div class="columns">
        <div class="column is-half-desktop is-full-tablet">
          <div class="hero-content-section" v-html="$page.tag.content"></div>
          <div class="columns">
            <div class="column is-one-third">
              <p class="heading">Post<span v-if="$page.tag.belongsTo.totalCount > 1">s</span></p>
              <p class="title">{{ $page.tag.belongsTo.totalCount }}</p>
            </div>
            <div class="column has-text-right-tablet">
              <p class="heading">Last Updated</p>
              <p class="title">{{ $page.tag.belongsTo.edges[0].node.date | moment }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="hero-content-stats">
        <p class="heading">Post<span v-if="$page.tag.belongsTo.totalCount > 1">s</span></p>
        <p class="title">{{ $page.tag.belongsTo.totalCount }}</p>
      </div>
      <div class="hero-content-stats">
        <p class="heading">Last Updated</p>
        <p class="title">{{ $page.tag.belongsTo.edges[0].node.date }}</p>
      </div> -->
    </template>
    <section class="section main-section">
      <div class="container">
        <div class="cards-grid">
          <PostItem v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" :post="post" />
        </div>
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
      title: this.$page.tag.title,
      meta: [
        { name: 'description', content: this.pageTitle },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:description', content: this.pageTitle },
        { name: 'twitter:title', content: this.pageTitle },
        //     { name: "twitter:site", content: "@therealdanvega" },
        // { name: 'twitter:image', content: this.getFeaturedImage },
        //     { name: "twitter:creator", content: "@therealdanvega" },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: this.pageTitle },
        { property: 'og:description', content: this.pageTitle },
        {
          property: 'og:url',
          content: `${process.env.GRIDSOME_BASE_URL}${this.$page.tag.path}`,
        },
        {
          property: 'article:published_time',
          content: moment(this.$page.tag.belongsTo.edges[0].node.date).format('MM-DD-YYYY'),
        },
        { property: 'og:updated_time', content: this.$page.tag.belongsTo.edges[0].node.date },
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
  computed: {
    pageTitle: function () {
      return `Posts tagged "${this.$page.tag.title}"`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/dark.scss';

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
