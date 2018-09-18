module.exports = {
  base: '/docker-driven-development/',
  title: 'Docker Driven Development',
  description: 'Использование docker в процессе разработки',
  themeConfig: {
    sidebar: [{
        title: 'Введение',
        collapsable: true,
        children: [
          '/',
          '/history/',
          '/weaknesses/',
        ]
      },
      {
        title: 'Примеры использования',
        collapsable: true,
        children: [
          '/examples/',
          '/examples/ex0/',
          '/examples/ex10/',
          '/examples/ex11/',
          '/examples/ex12/',
          '/examples/ex13/',
          '/examples/ex14/',
          '/examples/ex20/',
          '/examples/ex2/',
          '/examples/ex3/',
          '/examples/ex5/',
          // '/examples/ex7/',
          // '/examples/ex8/',
          // '/examples/ex9/',
        ]
      },
      '/extra/',
      '/summary/',
    ],
    sidebarDepth: 3
  },
}
