module.exports = {
    plugins: ['@vuepress/back-to-top'],
    title: 'Charles Jeandey',
    description: 'Web Developper Laravel',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/img/psg.png',
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
        '/': {
            sidebar: 'auto'
        },
        displayAllHeaders: true,
        smoothScroll: true,
        search: false,
    }
}