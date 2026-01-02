# MindMap AI - Text to Mind Map with AI

An intelligent visualization tool that transforms complex text into clear, hierarchical mind maps using advanced AI models via OpenRouter.

## 🚀 Features

- **AI-Powered Extraction**: Automatically identifies key concepts and hierarchies from raw text.
- **Interactive Visualization**: Pan, zoom, and rearrange nodes using a powerful React Flow canvas.
- **Privacy First**: Your OpenRouter API key is stored locally in your browser and never touches our servers.
- **Modern UI**: Built with Tailwind CSS and Shadcn UI for a sleek, responsive experience.

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Visualization**: React Flow
- **Styling**: Tailwind CSS, Shadcn UI, Framer Motion
- **AI Integration**: OpenRouter API (Gemini 2.0 Flash)
- **State Management**: TanStack Query

## 🏁 Getting Started

### Prerequisites

- Node.js (v18+)
- An OpenRouter API Key (get one at [openrouter.ai](https://openrouter.ai))

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🔑 Configuration

The application requires an **OpenRouter API Key** to function. 
1. Navigate to the home page.
2. Enter your key in the "OpenRouter API Key" field.
3. Your key will be saved to `localStorage` for future sessions.

## 📂 Project Structure

- `src/components/`: Reusable UI components and layout.
- `src/pages/`: Main application views (Home, Features, Pricing, etc.).
- `src/lib/`: AI service integration and core logic.
- `src/hooks/`: Custom React hooks.
- `src/utils/`: Helper functions and toast notifications.

---
*Managed with [AutoPlans.dev](https://autoplans.dev)*