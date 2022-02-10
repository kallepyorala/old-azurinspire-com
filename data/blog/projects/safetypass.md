---
title: Safetypass
date: '2022-02-10'
tags:
  [
    'projects',
    'laravel',
    'api',
    'swagger',
    'figma',
    'react-native',
    'expo',
    'laravel-livewire',
    'postgresql',
    'gitlab-ci',
    'oauth',
  ]
draft: false
summary: What is Safetypass and what is my contribution to it
layout: NoComments
---

[www.safetypass.eu](https://www.safetypass.eu)

## What is Safetypass?

SafetyPass qualification management system developed by [Redicom Oy](https://www.redicom.fi). It's primary made for HR-departments to have have easy overview of all needed qualifications of employees. It shows which employees are in need of new education or it gives warnings when qualifications are expiring.

## My contribution

### Landing Page

Safetypass landing page was completely my project. First I did the design of it with [Figma](https://www.figma.com/) and then I did HTML+CSS mockup using Tailwind CSS. Next I made the working version with [Laravel Livewire](https://laravel-livewire.com/) and [Alpine.js](https://alpinejs.dev/). It was my first time working in production app with these tools and they provide really fast and easy way set up this kind of landing page. I could test all functionalities with PHPUnit and there is no hassle with frontend compiling and bundling.

### Mobile Application

[Safetypass iOS application](https://apps.apple.com/lk/app/safetypass/id1524625130) was also completely my project, I did the design in [Figma](https://www.figma.com/) again and then I used [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) to make layout for the React Native project, which handled by[Expo](https://expo.dev/) in managed workflow mode. Interesting part of the application was communication between two phones, where user1 can scan a QR-code from user2’s application, then user2 is asked permission to give some qualifications to user1 which will see the qualification status if permission was given.

### API

Safetypass API is using Laravel based REST-api and [Swagger documentation](https://github.com/DarkaOnLine/L5-Swagger) so that end users can test APIs before production usage. It is using [Laravel Passport](https://laravel.com/docs/8.x/passport) tokens for authentication.

### Azure AD OAuth authentication

I did also integration for Azure AD users to sign-in to SafetyPass using OAuth.

### Devops

I configured the Gitlab CI pipelines for automated testing and publishing of staging and production installations with no downtime using [Laravel Envoy](https://laravel.com/docs/8.x/envoy).
