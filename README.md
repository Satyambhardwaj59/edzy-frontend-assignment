# 🍽️ Canteen Portal

A **React.js** web application for managing a school canteen, allowing students to view snacks, place orders, and track spending. The app uses **Redux Toolkit** for state management and **TailwindCSS/DaisyUI** for styling, with a responsive design for desktop and mobile devices.

---

## 📌 Features

- **Student Management**
  - View existing students.
  - Add new students.  

- **Snack Management**
  - View available snacks.
  - Add new snacks.  

- **Order Management**
  - Place orders for snacks.
  - Track total amount spent per student.
  - Loading shimmer effect for API calls.
  - Error handling with notifications (Toast).

- **Responsive UI**
  - Fully responsive Navbar with mobile hamburger menu.
  - Works smoothly on mobile and desktop devices.

- **Mock API**
  - Dummy API simulates backend operations.
  - Supports adding students, snacks, and orders.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, React Router
- **State Management:** Redux Toolkit
- **Styling:** TailwindCSS, DaisyUI

---

## 🚀 Installation & Setup

1. **Clone the repository**

```bash
git clone <https://github.com/Satyambhardwaj59/edzy-frontend-assignment>
cd edzy-frontend-assignment
```
2. **Install dependencies**
```bash
npm install
```
 3. **Start the development server**
 ```bash
 npm run dev
 ```
 4. **Open http://localhost:3000 in your browser.**
 
##  🔧 Usage

1. **Navigation**

 - Desktop: Menu links are visible on the top bar.
 - Mobile: Responsive mobile menu toggles the links.

2. **Students**

- View all students.
- Add a new student using the "Add Student" link.

3. **Snacks**

- View all snacks.
- Add a new snack using the "Add Snack" link.

4. **Orders**

- Click on a snack to place an order.
- Select a student and quantity.
- Orders update the student’s total spent automatically.

## 🎯 Key Highlights

- Async order handling using Redux Toolkit Thunks.
- Loading and error states handled.
- Responsive design with TailwindCSS and DaisyUI.
- Reusable components for easy extension.

## ⚡ Future Improvements

- Integrate with a real backend (Node.js + Express + MongoDB).
- Add authentication for students and admin.
- Payment simulation and order history per student.
- Enhanced animations for mobile menus and modals.