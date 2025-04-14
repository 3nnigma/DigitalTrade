# DigitalTrade

DigitalTrade is a comprehensive 3-in-1 web application that integrates trading, banking, and financial services into a unified platform. Built with modern technologies, it offers seamless user experiences for portfolio management, payments, and market analysis.

## Key Features

- **Trading Module**
  - Real-time charting with TradingView
  - Order execution and portfolio tracking
- **Banking Module**
  - Secure account management
  - Stripe integration for payments
- **Finance Module**
  - Budgeting and expense tracking
  - Financial analytics and reports
- **Authentication**
  - JWT-based sessions
  - OAuth via GitHub and Google
- **Responsive UI** with Framer Motion animations and ShadcnUI componentss
- **Dockerized** development and deployment

## Tech Stack

- **Frontend:**
  - Next.js
  - Tailwind CSS
  - shadcn/ui
  - Zustand (state management)
  - TanStack Query (data fetching)
  - Framer Motion (animations)
- **Backend:**
  - Django REST Framework
  - PostgreSQL
  - Docker & Docker Compose

## Presentation

### Dashboard
![Dashboard](https://github.com/3nnigma/DigitalTrade/blob/main/dashboard.png)
The Dashboard provides an at-a-glance overview of your portfolio performance, market trends, and key metrics. Interactive charts and summary cards help users quickly assess their financial status.

### Banking Panel
![Banking Panel](https://github.com/3nnigma/DigitalTrade/blob/main/bank.png)
The Banking Panel enables users to manage accounts, initiate payments via Stripe, and review transaction history. Secure authentication and real-time updates ensure reliable financial operations.

### Trading Panel
![Trading Panel](https://github.com/3nnigma/DigitalTrade/blob/main/trading.png)
The Trading Panel integrates TradingView charts for technical analysis, supports order placement, and displays live market data. Users can customize indicators and track open positions seamlessly.

## Getting Started

### Prerequisites

- Node.js (v16+)
- Docker & Docker Compose
- Python (v3.9+)
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/3nnigma/DigitalTrade.git
   cd DigitalTrade
   ```
2. Create environment variables:
   ```env
   # .env
   DATABASE_URL=...
   STRIPE_SECRET_KEY=...
   JWT_SECRET_KEY=...
   OAUTH_GITHUB_CLIENT_ID=...
   OAUTH_GITHUB_CLIENT_SECRET=...
   OAUTH_GOOGLE_CLIENT_ID=...
   OAUTH_GOOGLE_CLIENT_SECRET=...
   ...
   ```
3. Start services:
   ```bash
   docker-compose up --build
   ```
4. Access the application at `http://localhost:3000`.

## Deployment

Use Docker Compose or integrate with CI/CD pipelines for automated builds and deployments.

