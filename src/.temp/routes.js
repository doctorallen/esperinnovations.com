const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/david/projects/esperinnovations.com/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/david/projects/esperinnovations.com/src/templates/Tag.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--series-vue" */ "/Users/david/projects/esperinnovations.com/src/templates/Series.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--author-vue" */ "/Users/david/projects/esperinnovations.com/src/templates/Author.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/david/projects/esperinnovations.com/src/pages/Blog.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/david/projects/esperinnovations.com/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/david/projects/esperinnovations.com/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/david/projects/esperinnovations.com/src/pages/Index.vue")

export default [
  {
    path: "/blog/:year/:month/:day/:title/",
    component: c1
  },
  {
    path: "/tag/:title/",
    component: c2
  },
  {
    path: "/series/:title/",
    component: c3
  },
  {
    path: "/author/:title/",
    component: c4
  },
  {
    path: "/blog/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
