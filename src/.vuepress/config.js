const { description, title } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Liceo',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'liceo-social/liceo-social.github.io',
    editLinks: true,    
    docsDir: 'src',
    editLinkText: 'Editar esta pagina en Github!',
    lastUpdated: false,
    nav: [
      {
        text: 'Guia',
        link: '/guide/',
      },
      {
        text: 'Instalacion',
        link: '/install/',
      },
      {
        text: 'Desarrollo',
        link: '/development/'
      },
    ],
    search: false,
    sidebar: {
      '/guide/': [
        {
          title: 'Guia',
          collapsable: false,
          children: [
            '',
            'login',
            'dashboard',
            'personas',
            'procesos',
            'documentacion',
            'datos-maestros',
          ]
        }
      ],
      '/install/': [
        {
          title: 'Instalacion',
          collapsable: false,
          children: [
            '',
            'docker',
            'docker-compose',
            'k8s-helm',
            'manual',            
          ]
        }
      ],
      '/development': [
        {
          title: 'Desarrollo',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
