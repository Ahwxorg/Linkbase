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
          { text: 'MacOS stuff', link: '/general-tech/macos' },
          { text: 'NixOS stuff', link: '/general-tech/nixos/' },
          { text: 'VPS providers', link: '/server-related/vps' },
          { text: 'Tunnels', link: '/server-related/tunnels' },
          { text: 'Webserver init guide', link: '/server-related/simple-init-guide' },
          { text: 'GPG guide', link: '/privacy/gpg' },
          { text: 'Awesome selfhosted services', link: '/server-related/selfhosted-services' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ahwxorg/Linkbase' },
      { icon: 'mastodon', link: 'https://social.ahwx.org/@ahwx' }
    ]
  }
})
