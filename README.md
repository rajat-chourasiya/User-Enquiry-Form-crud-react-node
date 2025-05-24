# 📝 User Enquiry Form (CRUD App)
📷 UI Preview

![Screenshot 2025-05-25 021323](https://github.com/user-attachments/assets/e8b4dac1-54f2-4ccb-8eee-0016e5b2c1d7)

A full-stack **User Enquiry Form** built with **ReactJS**, **Node.js**, **Express.js**, and **MongoDB**. It allows users to submit, view, update, and delete enquiries. The application features a modern UI with toast alerts, background video, and modal dialogs.

## 📁 Project Structure

User-Enquiry-Form/
├── client/ # ReactJS frontend (Vite-based)
├── server/ # Node.js + Express backend
├── README.md


---

## 🚀 Tech Stack

### 🧩 Frontend (`client`)
- **ReactJS** (via **Vite**)
- **Axios** – for making API requests
- **Flowbite-React** – for styled UI components
- **React-Toastify** – for toast notifications
- **SweetAlert2** – for confirmation modals
- **React-Icons** – for icon support
- **Tailwind CSS** – utility-first styling
- **Background Video** – to enhance visual design

### 🔧 Backend (`server`)
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose** (ODM)
- **CORS** – to allow frontend-backend communication
- **RESTful APIs** – for CRUD functionality

---

## 📦 Features

- 🔄 **Full CRUD** functionality for managing user enquiries
- 🌐 **Axios** integration for API calls
- 🎥 **Background Video** on the form page
- 🔔 **Toast Notifications** (React-Toastify)
- 💬 **Modal Prompts** (SweetAlert2) for confirmations
- 🎨 **Responsive UI** with Tailwind CSS + Flowbite
- 🔌 **REST API** connected to MongoDB with Mongoose

---

## 📌 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/User-Enquiry-Form.git
cd User-Enquiry-Form

### 2.Setup Backend

cd server
npm install

Create a .env file inside the server/ folder:

PORT=8020
MONGODB_URI=your_mongo_connection_string

Start the backend:
npm start

3. Setup Frontend
cd ../client
npm install

Start the React app:
npm run dev

🧪 API Endpoints

| Method | Endpoint                          | Description             |
| ------ | --------------------------------- | ----------------------- |
| POST   | `/api/website/enquiry/insert`     | Add a new enquiry       |
| GET    | `/api/website/enquiry/view`       | Get all enquiries       |
| PUT    | `/api/website/enquiry/update/:id` | Update an enquiry by ID |
| DELETE | `/api/website/enquiry/delete/:id` | Delete an enquiry by ID |

🛠 Tools & Libraries Used
ReactJS

Vite

Axios

Flowbite React

React Toastify

SweetAlert2

React Icons

MongoDB

Express.js

Tailwind CSS

CORS

📄 License
This project is licensed under the MIT License.

Let me know if you want a `deployment` section or if you're using `.env.local` for the frontend as well.

