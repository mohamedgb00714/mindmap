# Text to Mind Map with AI

An intelligent visualization tool that transforms complex text into clear, hierarchical mind maps using advanced AI models via OpenRouter.

## Overview

This project is managed using [autoplans.dev](https://autoplans.dev) - an AI-powered development automation platform. It leverages React Flow for interactive visualizations and OpenRouter for state-of-the-art language model processing.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Visualization**: React Flow
- **Styling**: Tailwind CSS, Shadcn UI, Framer Motion
- **AI Integration**: OpenRouter API (Gemini 2.0 Flash)
- **State Management**: TanStack Query, React Hooks

## Getting Started

### Prerequisites

- Node.js (v18+)
- An OpenRouter API Key (get one at [openrouter.ai](https://openrouter.ai))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedgb00714/mindmap.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

The application currently uses client-side storage for the OpenRouter API key to ensure privacy. Users can enter their key directly in the UI, which is then stored in `localStorage`.

## Project Structure

```
.autoplans/          # AI agent instructions and task tracking
src/
  ├── components/    # Reusable UI components (Layout, MindMapViewer, etc.)
  ├── hooks/         # Custom React hooks
  ├── lib/           # Core logic and AI service integration
  ├── pages/         # Application pages (Index, Features, Pricing, etc.)
  └── utils/         # Utility functions and toast notifications
```

## For AI Agents

**Before starting ANY work:**

1. Read the `.autoplans/` folder for context
2. Check `tasks.md` for current priorities
3. Refer to `architecture.md` for system design

**Available AutoPlans tools:**
- `autoplans_list_tasks` - Get tasks from cloud
- `autoplans_create_task` - Create new tasks  
- `autoplans_update_task` - Update task status

---

*This directory is automatically managed by autoplans.dev.*