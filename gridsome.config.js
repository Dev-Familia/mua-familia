// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteUrl: 'https://muafamilia.pl',
  siteName: 'MUA Familia | Najszczęśliwsza Agencja Wizażystek',
  siteDescription: "Agencja wizażystek z Krakowa oferująca makijaż ślubny, okolicznościowy oraz makijaż sesyjny.",
  plugins: [
    // {
    //   use: 'gridsome-plugin-bundle-analyzer'
    // },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: ['svg-inline--fa', 'table', 'table-striped', 'table-bordered', 'table-hover', 'table-sm'],
          whitelistPatterns: [/fa-$/, /blockquote$/, /code$/, /pre$/, /table$/, /table-$/, /vueperslide$/, /vueperslide-$/]
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-5Z84QGN',
        enabled: true,
        debug: false
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {}
      }
    },
    // {
    //   use: 'gridsome-source-static-meta',
    //   options: {
    //     path: 'content/site/*.json'
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'Author',
    //     path: './content/author/*.md'
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'Blog',
    //     path: './content/blog/**/*.md',
    //     refs: {
    //       author: 'Author',
    //       tags: {
    //         typeName: 'Tag',
    //         create: true
    //       },
    //       category: {
    //         typeName: 'Category',
    //         create: true
    //       }
    //     }
    //   }
    // },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     typeName: 'CustomPage',
    //     path: './content/pages/*.md'
    //   }
    // },
    // {
    //   use: 'gridsome-plugin-flexsearch',
    //   options: {
    //     searchFields: ['title', 'content'],
    //     collections: [{
    //       typeName: 'Blog',
    //       indexName: 'Blog',
    //       fields: ['title', 'category', 'excerpt', 'content']
    //     }]
    //   }
    // }
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-autolink-headings',
        'remark-attr',
      ],
      
      processImages: false
      
    }
  },
  templates: {
    // Blog: [{
    //   path: '/posts/:title'
    // }],
    // CustomPage: [{
    //   path: '/:title',
    //   component: '~/templates/CustomPage.vue'
    // }],
    // Category: [{
    //   path: '/category/:title',
    //   component: '~/templates/Category.vue'
    // }],
    // Author: [{
    //   path: '/author/:name',
    //   component: '~/templates/Author.vue'
    // }],
    // Tag: [{
    //   path: '/tags/:title',
    //   component: '~/templates/Tag.vue'
    // }]
  },
  chainWebpack: config => {
      config.resolve.alias.set('@pageImage', '@/assets/images');
  }
}
