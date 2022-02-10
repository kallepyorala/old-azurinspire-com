---
title: SkillFactory
date: '2022-02-10'
tags:
  [
    'projects',
    'laravel',
    'vuejs',
    'inertiajs',
    'nuxt',
    'laravel-vapor',
    'statamic',
    'aws-s3',
    'aws-lambda',
    'postgresql',
  ]
draft: false
summary: What is SkillFactory and what is my contribution to it
layout: NoComments
---

[www.skillfactory.io](https://skillfactory.io/)

## What is SkillFactory?

SkillFactory combines online, contact and remote training to one universally accessible platform. It solves the problem where company needs educations from multiple providers and they all have different learning platforms, which means that employees need to learn how to use them all before they can start actual learning.

## My contribution to SkillFactory

I’m the principal architect of all parts of SkillFactory and have chosen all the technologies used in the project.

### Landing page

I did the landing page by modifying Tailwind UI’s components using VueJS for interactive parts.

### LMS

I started the LMS project by planning the database structure and then building the system with Laravel and VueJS clued together with [Inertia.js](https://inertiajs.com/). LMS is using state machines for all key components and has custom made data table with multi level sorting, filtering and saved views. I configured the LMS to run in [Laravel Vapor](https://vapor.laravel.com/) and it’s using AWS S3 as data storage.

### xAPI

I installed and configured [TRAX LRS](https://traxlrs.com/) to SkillFactory’s Laravel Vapor / AWS Lambda environment.

### SDK

SkillFactory’s customers can integrate learning system to their website, intranet, ERP or some other system by using the SDK. I have done the first version SDK has components with VueJS including authentication, course browser, e-commerce and group management. Components are using LMS API for communication.

### Trinno’s website

Trinno’s un-launched website is first customer to SkillFactory. [Rafal Kuczynski](https://www.toptal.com/designers/resume/rafal-kuczynski) did the layout and I continued by building first HTML mockup and then setting it up on top of [Statamic CMS](https://statamic.com/).
