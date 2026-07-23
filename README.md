<p align="center">
  <img src="public/logo.webp" alt="Talkiepedia" width="180" />
</p>

<h1 align="center">Talkiepedia — Voices That Lead</h1>

<p align="center">
  <strong>A career-podcast platform by <a href="https://forgealumnus.com">Forge Alumnus</a></strong><br/>
  Unlock career insights from top industry leaders through authentic, meaningful conversations.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Groq_AI-Powered-FF6B57?logo=openai&logoColor=white" alt="Groq" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <strong><a href="https://talkiepedia.vercel.app/">🚀 View Live Demo</a></strong>
</p>

---

## ✨ Overview

**Talkiepedia** is a flagship initiative by Forge Alumnus, designed to bridge the gap between aspiring professionals and the corporate world. The platform features career-focused podcasts with real voices from top companies, leaders, and industry experts.

This repository contains the **complete redesign** of the Talkiepedia web platform — rebuilt from scratch with a modern tech stack, premium UI, and AI-powered features.

---

## 🎯 Key Features
| Feature | Description |
|---|---|
| 🎙️ **Podcast Hub** | Browse episodes with rich metadata — guest info, duration, category tags, and thumbnails |
| 🤖 **Ask Talkiepedia (AI)** | AI-powered Q&A grounded in real episode transcripts via Groq LLM API |
| 👤 **Guest Profiles** | Meet the voices behind the stories with linked social profiles |
| 🖼️ **Gallery** | Visual journey through podcast sessions, team moments, and studio setups |
| ❓ **FAQ** | Accordion-style frequently asked questions |
| 📬 **Contact** | Reach out for collaborations or guest appearances |
| 📰 **Newsletter** | Stay updated with the latest episodes and news |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite 8 |
| **Styling** | Tailwind CSS v4 (CSS-first config) |
| **Routing** | React Router DOM v7 |
| **Icons** | Lucide React |
| **AI** | Groq API (LLaMA 3 70B) |
| **Deployment** | Vercel |

---

## 🎨 Design System

The platform follows a meticulously crafted design system:

```
Colors
├── Primary Text     #111111  (Deep Charcoal)
├── Page Background  #F8F8F6
├── Surface/Cards    #FFFFFF
├── Accent (Coral)   #FF6B57  — CTAs, active states, hover
├── Secondary (Gold) #F5C96A  — Achievements, premium
└── Neutrals         #202124 → #E8EAED

Typography
├── Headings         Inter (700)
├── Body             Inter (400–600)
└── Stats/Mono       Space Grotesk

Radius
├── Buttons          14px
├── Cards            22px
├── Images           24px
└── Sections         32px
```

**Signature Motif**: A flowing voice/sound-waveform used across dividers, loading states, and hero backgrounds.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/tarun-gk/gov-scheme-eligibilty-platform.git
cd talkiepedia

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
talkiepedia/
├── public/
│   ├── logo.webp           # Talkiepedia logo
│   ├── ai-avatar.jpeg      # AI assistant avatar
│   └── favicon.svg
├── src/
│   ├── api/
│   │   └── groq.js          # Groq AI integration + citation parser
│   ├── components/
│   │   ├── Navbar.jsx        # Floating glass navbar
│   │   ├── Footer.jsx        # Dark footer with social links
│   │   ├── EpisodeCard.jsx   # Podcast episode card
│   │   ├── GuestCard.jsx     # Guest profile card
│   │   ├── StatBar.jsx       # Animated statistics bar
│   │   ├── WaveformMotif.jsx # Signature waveform component
│   │   ├── NewsletterBand.jsx # Email subscription strip
│   │   └── AIDigestPanel.jsx # AI digest sidebar
│   ├── data/
│   │   ├── episodes.json     # Episode metadata
│   │   ├── guests.json       # Guest profiles
│   │   ├── partners.json     # Partner organizations
│   │   └── transcripts.json  # Episode transcript excerpts
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero + sections
│   │   ├── Podcasts.jsx      # Episode listing with filters
│   │   ├── EpisodeDetail.jsx # Single episode player page
│   │   ├── Guests.jsx        # Guest directory
│   │   ├── AskTalkiepedia.jsx # AI-powered Q&A
│   │   ├── About.jsx         # About + mission/vision
│   │   ├── Gallery.jsx       # Photo gallery grid
│   │   ├── FAQ.jsx           # Accordion FAQ
│   │   └── Contact.jsx       # Contact form
│   ├── App.jsx               # Router shell
│   ├── main.jsx              # Entry point
│   └── index.css             # Design system tokens + animations
├── vercel.json               # SPA routing config
├── vite.config.js            # Vite + API proxy config
└── tailwind.config.js        # Tailwind v4 config
```

---

## 🤖 AI Integration

The **Ask Talkiepedia** feature uses the Groq API to answer career questions grounded in actual episode content:

1. User asks a question
2. System loads transcript excerpts from episode data
3. Groq LLM (LLaMA 3 70B) generates an answer citing specific guests and timestamps
4. Citations are parsed and displayed as source cards

The AI never fabricates information — every answer is traceable to real episode content.

---

## 🌐 Deployment

The app is deployed on **Vercel** with automatic SPA routing.

```bash
# Deploy to production
npx vercel --prod
```

---

## 📸 Screenshots

| Home Hero | Episodes | Ask AI |
|---|---|---|
| Dark cinematic hero with waveform | Episode cards with rich metadata | AI chatbot with avatar + citations |

---

## 👥 Team

**Talkiepedia** is a product of [Forge Alumnus](https://forgealumnus.com) — empowering professionals through career insights and industry connections.

- **Dhananjay Dubey** — Founder & Host
- Built with ❤️ by the Forge Alumnus team

---

## 📄 License

This project is proprietary to Forge Alumnus. All rights reserved.

---

<p align="center">
  <strong>🎙️ Voices That Lead — Talkiepedia</strong><br/>
  <sub>Career insights from industry leaders, one conversation at a time.</sub>
</p>
