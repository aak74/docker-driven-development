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
        ]
      },
      {
        title: 'Примеры использования',
        collapsable: false,
        children: [
          '/examples/ex0/',
          '/examples/ex1/',
          '/examples/ex2/',
          '/examples/ex3/',
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
