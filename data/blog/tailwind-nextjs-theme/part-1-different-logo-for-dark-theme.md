---
title: 'Modify Tailwind NextJS theme, part 1: Different logo for dark theme'
date: '2022-02-11'
tags: ['nextjs', 'tailwind', 'react', 'tailwind-nextjs-starter-blog']
draft: false
summary: How to show different logo when theme is dark
---

## Tailwind NextJS Starter Blog

This blog is made with excellent [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) project which is really easy to start using; modify couple of files, add first blog post and publish to Vercel or similar hosting services with couple of clicks.

It’s also really easy project to modify and that is what this series is about. I’m going to explain all modifications I will do to this site.

First thing I needed to change was my logo, which is partly black and doesn’t work as such in dark theme.

## Different logo for dark theme

First I added [inverted version](https://github.com/azurinspire/azurinspire-com/blob/7642b7fccda87a52e2fef4b705aea9c1fab87a15/data/dark-logo.svg) of my logo to `data` folder. And then only thing to modify is `components/LayoutWrapper.tsx`:

```tsx
...
import Logo from '@/data/logo.svg'
// import also your dark logo
import DarkLogo from '@/data/dark-logo.svg'
...
// import useEffect and useState
import { ReactNode, useEffect, useState } from 'react'
// import theme hook
import { useTheme } from 'next-themes'
...
const LayoutWrapper = ({ children }: Props) => {
	// get resolvedTheme from the hook
	// resolved theme is always dark or light
  // there is also `theme` value
	// but it can be system, dark or light
  const { resolvedTheme } = useTheme()
	// Theme is not available on server side
  // when page is rendered first time
	// so to avoid hydration mismatch
	// I show the dark logo only after component is mounted
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
	return (
    <SectionContainer>
    ...
                <div className="mr-3">
                  {/* if component is mounted
                      and theme is dark, show dark logo */}
                  {mounted && resolvedTheme === 'dark' ? (
                    <DarkLogo key="dark-logo" />
                  ) : (
                    <Logo key="light-logo" />
                  )}
                </div>
    ...
```

And that’s all, now inverted logo is shown where theme is dark! You can test this by changing theme from upper right corner and see how the logo is partly white in dark theme and partly black in light theme.
