module.exports = {
  base: '/docker-driven-development',
  title: 'Docker Driven Development',
  description: 'Использование docker в процессе разработки',
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
