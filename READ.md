# Project Name: Employee Task Management App
----------------------------------------------------

## Description

A employee task management application that allows users to track, assign, and manage tasks. Employees can view, accept, complete, or mark tasks as failed. The app also uses localStorage to persist data, including employee information and tasks.

----------------------------------------------------------------------------

## Tech Stack
----------

1. Frontend: React, Tailwind CSS

2. State Management: React Context API

3. Storage: LocalStorage

4. Authentication: Custom (LocalStorage-based)

-------------------------------------------
Features:
----------
> Employee Task Management: Employees can view tasks assigned to them, accept new tasks, mark tasks as completed or failed.
>
> Admin View: Admin can view the count of active, new, completed, and failed tasks for all employees.
>
> Data Persistence: Task and employee data is saved in the localStorage to persist between page reloads.
>
> Responsive Design: The app is fully responsive for different screen sizes.

-------------------------------------------------


# Project Directory Structure 

Folder Structure
-------------------

├── node_modules/                 # Contains all installed npm packages

├── public/

│   ├── vite.svg                  # Default Vite logo

├── src/

│   ├── assets/

│   │   └── react.svg             # React logo asset

│   ├── components/

│   │   ├── Auth/

│   │   │   └── Login.jsx         # Login component for user authentication

│   │   ├── Dashboard/

│   │   │   ├── AdminDashboard.jsx        # Dashboard for admin users

│   │   │   └── EmployeeDashboard.jsx     # Dashboard for employees

│   │   ├── others/

│   │   │   ├── AllTask.jsx               # Component for displaying all tasks

│   │   │   ├── CreateTask.jsx            # Form to create and assign tasks

│   │   │   ├── Header.jsx                # Displays the header with greetings and logout

│   │   │   └── TaskListNumber.jsx        # Displays task counts (active, new, completed, failed)

│   │   ├── TaskList/

│   │   │   ├── AcceptTask.jsx            # Component to display accepted (active) tasks

│   │   │   ├── CompleteTask.jsx          # Component to display completed tasks

│   │   │   ├── FailedTask.jsx            # Component to display failed tasks

│   │   │   ├── NewTask.jsx               # Component to display new tasks

│   │   │   └── TaskList.jsx              # Wrapper component for task cards (Accept, Complete, etc.)

│   ├── context/

│   │   └── AuthProvider.jsx              # Provides authentication context

│   ├── pages/                            # Reserved for routing and pages (currently empty)

│   ├── utils/

│   │   └── localStorage.jsx              # Utility for interacting with localStorage

│   ├── App.css                           # Global CSS styles

│   ├── App.jsx                           # Main entry point for the application

│   ├── index.css                         # Additional global CSS styles

│   ├── main.jsx                          # ReactDOM entry file

├── .gitignore                            # Git ignored files

├── eslint.config.js                      # ESLint configuration

├── index.html                            # HTML file that renders the React app

├── package-lock.json                     # NPM lock file

├── package.json                          # NPM package file (contains dependencies, scripts, etc.)

├── postcss.config.js                     # PostCSS configuration for Tailwind CSS

├── README.md                             # Project documentation

├── tailwind.config.js                    # Tailwind CSS configuration

├── vite.config.js                        # Vite project configuration

----------------------------------


## Explanation
1. **`node_modules/`**: Stores all the external dependencies and modules installed via `npm`.
2. **`public/`**: Contains static assets such as logos and the base HTML file.
3. **`src/`**: Main source code folder where all the React components, assets, context, and utility files reside.
   - **`components/`**: Contains reusable UI components such as authentication, dashboard, tasks, and task-related utilities.
   - **`context/`**: Manages shared state, such as user authentication, using React Context API.
   - **`utils/`**: Helper functions or utilities for common operations (e.g., local storage interaction).
   - **`App.jsx`**: The main entry point of the React application. Defines the app layout and routing.
4. **Configuration Files**:
   - **`eslint.config.js`**: For maintaining consistent coding standards.
   - **`tailwind.config.js`** and **`postcss.config.js`**: Tailwind CSS configuration for styling.
   - **`vite.config.js`**: Configuration for Vite, the build tool used for development.
5. **`README.md`**: Contains project documentation to help developers understand and use the application.

This structure is designed to ensure scalability, modularity, and ease of maintenance for the project. Let me know if you need more details or assistance!


## Installation Instructions:

### Clone the repository:

> git clone https://github.com/jagriti-12/employee_task_management_dashboard.git

> cd task-management-app

### Install dependencies:

Make sure you have Node.js installed, then run the following command:

> npm install
Run the app:

After the dependencies are installed, run the app:


> npm start


#### The app will be available at http://localhost:5173 in your browser.

## Local Storage Details:
1. Employees: Contains an array of employee objects with their tasks and task counts.
2. Admin: Contains an admin object with login credentials.

These are saved in the browser's localStorage to persist user data across page reloads.

## How to Use:
### Login:

1. Employees can be managed in the system by updating their task data in the localStorage.

2. Admin credentials are stored in localStorage and can be modified manually for access.

### Task Management:

> Employees can accept, complete, or mark tasks as failed.
>
> Admins can view the count of tasks across various categories.

--------------------------

License:
This project is licensed under the MIT License - see the LICENSE file for details.
