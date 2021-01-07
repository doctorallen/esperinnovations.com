<template>
  <Layout :pageTitle="$page.post.title">
    <template slot="heroContent">
      <p v-if="$page.post.series" class="subtitle is-6">
        Part {{ $page.post.seriesPart }} of
        <g-link :to="$page.post.series.path">{{ $page.post.series.title }} </g-link>
      </p>
    </template>
    <template slot="accentBar">
      <div class="box breadcrumb-container">
        <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li><g-link to="/blog">Blog</g-link></li>
            <li v-if="$page.post.series">
              <g-link :to="$page.post.series.path">{{ $page.post.series.title }}</g-link>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">{{ $route.params.title }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </template>
    <section class="section main-section">
      <div class="container">
        <div class="content post-content">
          <div v-html="$page.post.content"></div>
          <article class="card grid-item author-card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <g-link :to="$page.post.author.path">
                    <figure class="image is-96x96">
                      <img
                        :src="`../../../../../${$page.post.author.image}`"
                        alt="Placeholder image"
                      />
                    </figure>
                  </g-link>
                </div>
                <div class="media-content">
                  <p class="heading">WRITTEN BY</p>
                  <h2 class="title is-4">
                    <g-link :to="$page.post.author.path">
                      {{ $page.post.author.title }}
                    </g-link>
                  </h2>
                  <p class="subtitle is-6">
                    <g-link :to="$page.post.author.path">
                      {{ $page.post.author.companyTitle }} at {{ $page.post.author.companyName }}
                    </g-link>
                  </p>
                  <div class="social-grid">
                    <a
                      v-if="$page.post.author.github"
                      :href="$page.post.author.github"
                      target="_blank"
                    >
                      <b-icon pack="fab" size="is-medium" icon="github"> </b-icon>
                    </a>
                    <a
                      v-if="$page.post.author.email"
                      :href="`mailto:${$page.post.author.email}`"
                      target="_blank"
                    >
                      <b-icon pack="fas" size="is-medium" icon="envelope"> </b-icon>
                    </a>
                    <a
                      v-if="$page.post.author.twitter"
                      :href="$page.post.author.twitter"
                      target="_blank"
                    >
                      <b-icon pack="fab" size="is-medium" icon="twitter"> </b-icon>
                    </a>
                    <a
                      v-if="$page.post.author.instagram"
                      :href="$page.post.author.instagram"
                      target="_blank"
                    >
                      <b-icon pack="fab" size="is-medium" icon="instagram"> </b-icon>
                    </a>
                  </div>
                  <div class="content">
                    {{ $page.post.author.blurb }}
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div class="disqus-comments">
            <Disqus shortname="esperinnovations" :identifier="$page.post.title" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      //   meta: [
      //     { name: "description", content: this.$page.post.excerpt },
      //     { name: "twitter:card", content: "summary_large_image" },
      //     { name: "twitter:description", content: this.$page.post.excerpt },
      //     { name: "twitter:title", content: this.$page.post.title },
      //     { name: "twitter:site", content: "@therealdanvega" },
      //     { name: "twitter:image", content: this.getCoverImage },
      //     { name: "twitter:creator", content: "@therealdanvega" },
      //     { property: "og:type", content: "article" },
      //     { property: "og:title", content: this.$page.post.title },
      //     { property: "og:description", content: this.$page.post.excerpt },
      //     {
      //       property: "og:url",
      //       content: `${this.getBaseUrl}${this.$page.post.path}`
      //     },
      //     {
      //       property: "article:published_time",
      //       content: moment(this.$page.post.date).format("MM-DD-YYYY")
      //     },
      //     { property: "og:updated_time", content: this.$page.post.date },
      //     { property: "og:image", content: this.getCoverImage },
      //     { property: "og:image:secure_url", content: this.getCoverImage }
      //   ],
    };
  },
};
</script>

<page-query>
  query blog($path: String){
    post: post(path: $path){
     id
     title
     excerpt
     featuredImage
     content
     seriesPart
     tags {
       id
     }
     author {
       id
       title
       path
       image
       blurb
       content
       companyName
       companyTitle
       github
       email
     }
     series {
       id
       title
       path
     }
    }
  }
</page-query>
