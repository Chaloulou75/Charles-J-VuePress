module.exports = {
    plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'],
    head: [
        ['link', { rel: 'icon', href: '/img/laravel-logo.svg' }]
    ],
    title: 'Charles Jeandey',
    description: 'Web Developper Laravel',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/laravel-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Mes sites',
                ariaLabel: 'website réalisés',
                items: [
                  { text: 'Apuestamigo.com', link: 'https://www.apuestamigo.com/' },
                  { text: 'julienlepretre.com', link: 'https://www.julienlepretre.com/' }
                ]
            },        
            { text: 'Contact', link: '/contact/' },
            { text: 'Team', link: '/team/' },
            { text: 'Github', link: 'https://www.github.com/Chaloulou75/' },
        ],
        sidebar: [
            ['/', 'Home'],
            ['/contact/', 'Contact'],
            ['/team/', 'Team']
        ],
        displayAllHeaders: true,
        smoothScroll: true,
        search: false,
    }
}