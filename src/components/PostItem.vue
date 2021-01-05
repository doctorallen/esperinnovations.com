<template>
  <article class="card grid-item">
    <div class="card-image">
      <g-link :to="post.node.path">
        <figure class="image is-16by9">
          <img :src="`../../../${post.node.featuredImage}`" :alt="`${post.node.title} image`" />
        </figure>
      </g-link>
    </div>

    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <g-link :to="post.node.author.path">
            <figure class="image is-48x48">
              <img :src="`../../../${post.node.author.image}`" alt="Placeholder image" />
            </figure>
          </g-link>
        </div>
        <div class="media-content">
          <h2 class="title is-4">
            <g-link :to="post.node.path">
              {{ post.node.title }}
            </g-link>
          </h2>
          <p class="subtitle is-6">
            <g-link :to="post.node.author.path">
              {{ post.node.author.title }}
            </g-link>
          </p>
        </div>
      </div>

      <div class="content">
        {{ post.node.excerpt }}
      </div>

      <p v-if="post.node.series" class="subtitle series-subtitle is-6">
        Part {{ post.node.seriesPart }} of
        <g-link :to="post.node.series.path">{{ post.node.series.title }} </g-link>
      </p>
    </div>
    <div class="card-footer-tags">
      <div class="tags">
        <div class="tag" v-for="tag in post.node.tags" :key="tag.id">
          <g-link :to="tag.path">
            {{ tag.id }}
          </g-link>
        </div>
      </div>
    </div>
  </article>
  <!-- <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <img :src="`../../${post.node.author.image}`" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h2 class="title is-3">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </h2>
        <p class="subtitle is-6">
          <g-link :to="post.node.author.path">{{ post.node.author.title }} </g-link>
        </p>
        <p>{{ post.node.excerpt }}</p>
        <p v-if="post.node.series" class="subtitle is-6">
          Part {{ post.node.seriesPart }} of
          <g-link :to="post.node.series.path">{{ post.node.series.title }} </g-link>
        </p>
      </div>
      <div class="tags">
        <div class="tag" v-for="tag in post.node.tags" :key="tag.id">
          <g-link :to="tag.path">
            {{ tag.id }}
          </g-link>
        </div>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item">
            <span class="icon is-small"><i class="fas fa-reply"></i></span>
          </a>
        </div>
      </nav>
    </div>
  </article> -->
</template>

<script>
export default {
  props: { post: {} },
};
</script>
