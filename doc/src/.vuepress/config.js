module.exports = {
  base: '/docker-driven-development/',
  title: 'Docker Driven Development',
  description: 'Использование docker в процессе разработки',
  serviceWorker: true,
  themeConfig: {
    sidebar: [{
        title: 'Введение',
        collapsable: true,
        children: [
          '/',
          '/history/',
          '/weaknesses/',
          '/how-to-install/',
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
    sidebarDepth: 3,
    serviceWorker: {
      updatePopup: true
    },
    repo: 'aak74/docker-driven-development',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'aak74/docker-driven-development',
    // if your docs are not at the root of the repo:
    docsDir: 'doc',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Помоги улучшить страницу!'
  },
}
