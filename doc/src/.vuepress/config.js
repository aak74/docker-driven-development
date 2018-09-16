module.exports = {
  themeConfig: {
    sidebar: [
      {
        title: 'Общая информация',
        collapsable: false,
        children: [
          '/',
          '/history/',
          '/weaknesses/',
          '/examples/',
        ]
      },
    ],
    sidebarDepth: 3
  },
  // markdown: {
  //   config: md => {
  //     md.use(require('markdown-it-plantuml'))
  //   }
  // }
}
