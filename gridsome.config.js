// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // Load all Blog Posts from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          series: {
            typeName: 'Series',
          },
          author: {
            typeName: 'Author',
          },
        },
      },
    },

    // Load Authors from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/authors/**/*.md',
        typeName: 'Author',
        refs: {
          posts: {
            typeName: 'Post',
          },
        },
      },
    },

    // Load Series from file system
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/series/**/*.md',
        typeName: 'Series',
        refs: {
          posts: {
            typeName: 'Post',
          },
        },
      },
    },

    // Netlify CMS Plugin
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },

    // Google Analytics
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-157138394-1',
      },
    },
  ],

  templates: {
    Post: [
      {
        path: '/blog/:year/:month/:day/:title',
        componenent: '~/templates/Post.vue',
      },
    ],
    Tag: [
      {
        path: '/blog/tags/:title',
        componenent: '~/templates/Tag.vue',
      },
    ],
    Author: [
      {
        path: '/blog/authors/:title',
        componenent: '~/templates/Author.vue',
      },
    ],
    Series: [
      {
        path: '/blog/series/:title',
        componenent: '~/templates/Series.vue',
      },
    ],
  },

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: ['@gridsome/remark-prismjs'],
      autolinkHeadings: {
        content: {
          type: 'text',
          value: '# ',
        },
      },
    },
  },
};
