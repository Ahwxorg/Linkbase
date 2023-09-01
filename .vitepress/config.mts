import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ahwx' Linkbase",
  description: "List of cool stuff I find on the internet",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Server related', link: '/server-related/' },
      { text: 'Programming notes', link: '/programming-notes/' },
      { text: 'General tech notes', link: '/general-tech/' }
    ],

    sidebar: [
      {
        text: 'Items',
        items: [
          { text: 'React notes', link: '/programming-notes/react-notes' },
          { text: 'Installing Void Linux', link: '/general-tech/voidlinux' },
          { text: 'MacOS stuff', link: '/general-tech/macos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ahwxorg/Linkbase' },
      { icon: 'mastodon', link: 'https://social.ahwx.org/@ahwx' }
    ]
  }
})
