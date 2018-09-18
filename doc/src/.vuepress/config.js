module.exports = {
  base: '/docker-driven-development/',
  title: 'Docker Driven Development',
  description: 'Использование docker в процессе разработки',
  themeConfig: {
    sidebar: [{
        title: 'Введение',
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
      {
        title: 'Выводы',
        collapsable: false,
        children: [
          '/summary/',
        ]
      },
    ],
    sidebarDepth: 3
  },
}
