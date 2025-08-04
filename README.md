# Little Lemon Restaurant - Meta Frontend Capstone

A modern, responsive restaurant website built with React and Vite as part of the Meta Frontend Developer Capstone course on Coursera. This project showcases a complete restaurant booking system with a beautiful user interface and seamless user experience.

## 🍋 About Little Lemon

Little Lemon is a family-owned Mediterranean restaurant located in Chicago, Illinois. We focus on traditional recipes served with a modern twist, drawing inspiration from Italian, Greek, and Turkish cultures.

## ✨ Features

### 🏠 Homepage

- Hero section with restaurant introduction
- Weekly specials showcase with dynamic API integration
- Customer testimonials
- Restaurant gallery and about section
- Responsive design with modern animations

### 📅 Reservation System

- Interactive booking form with validation
- Real-time availability checking
- Success/error notifications with modal dialogs
- Form validation with user-friendly error messages
- Reservation confirmation with unique booking ID

### 🔧 Technical Features

- **React Hooks**: useState, useEffect for state management
- **API Integration**: Simulated backend with realistic delays
- **Loading States**: Skeleton components for better UX
- **Form Validation**: Client-side validation with error handling
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: shadcn/ui components
- **Icons**: Lucide React icons
- **Routing**: React Router for navigation

## 🛠️ Technologies Used

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Hooks
- **Animation**: CSS transitions and transforms

## 📁 Project Structure

```
src/
├── components/
│   ├── api/
│   │   ├── getWeeksSpecials.js    # API for weekly specials
│   │   └── submitBooking.js       # Booking submission API
│   ├── pages/
│   │   ├── home.jsx               # Homepage component
│   │   ├── reservation.jsx        # Reservation booking page
│   │   └── order-online.jsx       # Order online page
│   ├── re-use/
│   │   ├── app-sidebar.jsx        # Main navigation sidebar
│   │   └── under-construction.jsx # Placeholder component
│   └── ui/                        # shadcn/ui components
├── hooks/
│   └── use-mobile.js              # Mobile detection hook
├── App.jsx                        # Main app component
└── main.jsx                       # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Med-Echbiy/meta-frontend-capstone.git
cd meta-frontend-capstone
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎨 UI Components

This project uses shadcn/ui components for a consistent and accessible design system:

- **Form Components**: Input, Label, Select, Textarea, Button
- **Layout Components**: Card, Sidebar, Separator, Breadcrumb
- **Feedback Components**: Dialog, Badge, Skeleton
- **Navigation Components**: Sidebar with responsive behavior

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktop (1024px and up)
- Large screens (1280px and up)

## 🔄 API Simulation

The project includes simulated API endpoints that mimic real-world behavior:

### Weekly Specials API

- Fetches restaurant's weekly special dishes
- Includes dish details, pricing, and ratings
- Simulated network delay for realistic experience

### Booking Submission API

- Processes reservation requests
- Includes form validation
- Returns confirmation with booking ID
- Simulates success/failure scenarios

## 📋 Features Showcase

### Dynamic Content Loading

- Weekly specials loaded from API
- Skeleton loading states
- Error handling and fallbacks

### Form Validation

- Required field validation
- Email format validation
- Phone number validation
- Date validation (future dates only)
- Real-time error feedback

### User Experience

- Loading indicators during form submission
- Success/error modals with appropriate icons
- Form reset after successful submission
- Responsive navigation with mobile support

## 🎓 Learning Outcomes

This capstone project demonstrates proficiency in:

- React fundamentals and advanced concepts
- Component composition and reusability
- State management with hooks
- API integration and async operations
- Form handling and validation
- Responsive web design
- Modern CSS with Tailwind
- User experience design principles

## 🤝 Contributing

This is a capstone project for educational purposes. However, suggestions and feedback are welcome!

## 📄 License

This project is part of the Meta Frontend Developer Certificate program on Coursera.

## 🙏 Acknowledgments

- Meta Frontend Developer Certificate program
- Coursera for the educational platform
- shadcn/ui for the beautiful component library
- Lucide for the icon library

---

**Course**: Meta Frontend Developer Capstone  
**Platform**: Coursera  
**Student**: Mohamed Echbiy
