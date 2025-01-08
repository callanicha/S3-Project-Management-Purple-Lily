# PurpleLilies

PurpleLilies is an interactive web application that helps users find the perfect bouquet for any occasion. By guiding users through a personalized questionnaire, PurpleLilies provides tailored flower recommendations, making the process of selecting flowers both enjoyable and effortless.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#testing)

## Features

- Interactive questionnaire to gather user preferences
- Personalized bouquet recommendations based on user input
- Dashboard with insights on flower preferences and trends
- Information about flower shops in Paris
- About page with developer information
- Responsive design for optimal viewing on various devices
- Animated flower background for enhanced user experience

## Technologies Used

- **Next.js 13** (App Router)
- **React 18**
- **TypeScript 4.9+**
- **Tailwind CSS 3**
- **Chart.js** and **react-chartjs-2** for data visualization
- **Framer Motion** for animations
- **ESLint** for code linting
- **Prettier** for code formatting

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (v14.6.0 or later)
- **npm** (v6.14.0 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/callanicha/S3-Project-Management-Purple-Lilies

2. Navigate to the project directory:

    ```bash
    cd purplelilies

3. Install dependencies:

    ```bash
    npm install

4. Start the development server:

    ```bash
    npm run dev

5. Open the app in your browser:
    Go to (http://localhost:5173/) or other port depends on your local

## Project Structure
Here is an overview of the project structure:

purplelilies/
├── app/
│   ├── components/      # Reusable components like buttons, inputs, etc.
│   ├── pages/           # Application pages (home, questionnaire, results)
│   ├── styles/          # Global styles (tailwind config, etc.)
│   └── utils/           # Utility functions and helper files
├── public/              # Static assets (images, icons, etc.)
├── scripts/             # Custom scripts for project setup, etc.
├── package.json         # Project configuration and dependencies
└── tsconfig.json        # TypeScript configuration

## Usage

- Questionnaire: Users will be guided through a series of questions related to their flower preferences (occasion, recipient, budget, etc.).
- Recommendations: Based on user input, a tailored bouquet recommendation will be generated.
- Dashboard: View insights about flower preferences and trends, visualized with charts and graphs.
- Google maps: Link to google directly search up decent flowers shops in Paris.

## Test
    ```bash
    npm run dev