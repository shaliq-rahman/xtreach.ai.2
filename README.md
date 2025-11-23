# Xtreach Website

A modern, clean, high-end website for Xtreach - a digital agency specializing in mobile app development, website development, UI/UX design, product design, and branding.

## Features

- **Modern Design**: Minimal, premium, futuristic aesthetic with smooth rounded corners and clean layouts
- **Responsive**: Fully responsive design optimized for mobile and desktop
- **Brand Colors**: Green (#00C569), black, white, and light grey color scheme
- **Pages**:
  - Home Page with hero, services, portfolio, testimonials, FAQ, blog, and CTA sections
  - Works Page - Grid of completed mobile apps, websites, dashboards, and brand projects
  - Design Detail Page - Dedicated case-study layout for each project
  - About Us Page - Mission, story, team, and approach
  - Contact Page - Form, phone, email, and map integration

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **React** - UI library

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── HeroSection.tsx # Homepage hero section
│   ├── ServiceSection.tsx
│   ├── HowWeWorkSection.tsx
│   ├── PortfolioSection.tsx
│   ├── TestimonialSection.tsx
│   ├── FAQSection.tsx
│   ├── BlogSection.tsx
│   └── CTASection.tsx
├── works/              # Portfolio pages
│   ├── page.tsx       # Works listing page
│   └── [id]/          # Individual project detail pages
│       └── page.tsx
├── about/              # About page
│   └── page.tsx
├── contact/            # Contact page
│   └── page.tsx
├── layout.tsx          # Root layout
├── page.tsx            # Home page
└── globals.css         # Global styles
```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Brand Guidelines

- **Primary Color**: #00C569 (Xtreach Green)
- **Secondary Colors**: Black (#000000), White (#FFFFFF), Light Grey (#F5F5F5)
- **Typography**: Inter font family (modern sans-serif)
- **Style**: Minimal, premium, futuristic, smooth rounded corners
