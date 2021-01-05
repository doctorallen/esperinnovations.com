<template>
  <Layout :pageTitle="$page.post.title">
    <template slot="heroContent">
      <p v-if="$page.post.series" class="subtitle is-6">
        Part {{ $page.post.seriesPart }} of
        <g-link :to="$page.post.series.path">{{ $page.post.series.title }} </g-link>
      </p>
    </template>
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
    <section class="section">
      <div class="container">
        <div class="content post-content">
          <div v-html="$page.post.content"></div>
          <article class="card grid-item author-card">
            <div class="card-content">
              <div class="media">
                <div class="media-left">
                  <g-link :to="$page.post.author.path">
                    <figure class="image is-48x48">
                      <img
                        :src="`../../../../../${$page.post.author.image}`"
                        alt="Placeholder image"
                      />
                    </figure>
                  </g-link>
                </div>
                <div class="media-content">
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
                </div>
              </div>

              <div class="content">
                {{ $page.post.author.blurb }}
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
     }
     series {
       id
       title
       path
     }
    }
  }
</page-query>
