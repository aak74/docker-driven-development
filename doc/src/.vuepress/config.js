// const mermaid = require('markdown-it-mermaid');
// const mermaid = require('markdown-it-mermaid-real');
// const mermaid = require('markdown-it-mermaid');
// import mermaid from 'markdown-it-mermaid-real';
// console.log(mermaid.default);

module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Общая информация',
        collapsable: false,
        children: [
          '/',
          '/how-to-deploy/',
          '/how-to-install/',
          '/database/',
          '/amqp/',
        ]
      },
      {
        title: 'Основные сервисы',
        collapsable: false,
        children: [
          '/web-server/getData',
          '/get-data/',
          '/updater/',
          '/web-server/',
          '/web-server/auth',
          '/web-server/updated',
          '/web-server/update-schedule',
        ]
      },
      {
        title: 'Служебные сервисы',
        collapsable: false,
        children: [
          '/monitoring/',
          '/admin/',
          '/doc/',
          '/logger/',
          '/cleaner/',
          '/cleaner/files/',
          '/cleaner/database/',
        ]
      },
    ],
    sidebarDepth: 3
  },
  markdown: {
    config: md => {
      // md.use(mermaid.default)
      md.use(require('markdown-it-plantuml'))

      // md.use('../node_modules/markdown-it-mermaid')
    }
  }
}
