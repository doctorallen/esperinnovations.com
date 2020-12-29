<template>
  <Layout :pageTitle="$page.post.title">
    <div class="box">
      <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li><g-link to="/blog">Blog</g-link></li>
          <li v-if="$page.post.series">
            <g-link :to="$page.post.series.path">{{
              $page.post.series.title
            }}</g-link>
          </li>
          <li class="is-active">
            <a href="#" aria-current="page">{{ $route.params.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <section class="section">
      <div class="container">
        <div class="content">
          <div v-html="$page.post.content"></div>
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
     tags {
       id
     }
     author {
       id
     }
     series {
       id
       title
       path
     }
    }
  }
</page-query>
