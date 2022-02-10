const siteMetadata = {
  title: 'Kalle Pyörälä | AzurInspire',
  author: 'Kalle Pyörälä',
  headerTitle: null,
  description:
    'Professional developer since 1999. Currently working mostly with VueJS & Nuxt, ReactJS & NextJS, Svelte, React Native & Expo, Laravel, PostgreSQL, Serverless. Actively learning Web3.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.azurinspire.com',
  siteRepo: 'https://github.com/azurinspire/azurinspire-com',
  siteLogo: '/static/images/azurinspire.svg',
  image: '/static/images/kalle.pyorala.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'kalle.pyorala@azurinspire.com',
  github: 'https://github.com/azurinspire',
  twitter: 'https://twitter.com/AzurInspire',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/azurinspire',
  instagram: 'https://www.instagram.com/kallepyorala',
  locale: 'en-US',
  analytics: {
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '47cbdf9c-78ca-465c-ba26-293e135bed2e', //" src="https://azurinspire-analytics.vercel.app/umami.js"
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
    disqusConfig: {
      // https://help.disqus.com/en/articles/1717111-what-s-a-shortname
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

export default siteMetadata
