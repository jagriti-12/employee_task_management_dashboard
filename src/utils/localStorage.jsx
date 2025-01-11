
const employees = [
    {
        "id": 1,
        "firstName": "Jagriti",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Submit Project Report",
                "taskDescription": "Complete the final report for the ongoing project.",
                "taskDate": "2024-12-23",
                "category": "Reporting",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false
            },
            {
                "taskTitle": "Update Documentation",
                "taskDescription": "Ensure all documentation is up-to-date.",
                "taskDate": "2024-12-20",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the scheduled team meeting to discuss progress.", 
                "taskDate": "2024-12-25",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 0,
            "completedTask": 1,
            "failedTask": 0
        }
    },
    {
        "id": 2,
        "firstName": "Jags",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review the codebase for any potential bugs.",
                "taskDate": "2024-12-21",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completedTask": false,
                "failedTask": false
            },
            {
                "taskTitle": "Client Presentation",
                "taskDescription": "Prepare slides and deliver the client presentation.",
                "taskDate": "2024-12-24",
                "category": "Presentations",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false
            }
        ],
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completedTask": 0,
            "failedTask": 0
        }
    },
    {
        "id": 3,
        "firstName": "Jatin",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Optimization",
                "taskDescription": "Improve the efficiency of the database queries.",
                "taskDate": "2024-12-22",
                "category": "Database",
                "active": false,
                "newTask": false,
                "completedTask": true,
                "failedTask": false
            }
        ],
        "taskCount": {
            "active": 0,
            "newTask": 0,
            "completedTask": 1,
            "failedTask": 0
        }
    },
    {
        "id": 4,
        "firstName": "Raman",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Fix UI Bugs",
                "taskDescription": "Resolve issues reported in the user interface.",
                "taskDate": "2024-12-26",
                "category": "UI/UX",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false
            },
            {
                "taskTitle": "Update API Documentation",
                "taskDescription": "Document the latest updates to the API endpoints.",
                "taskDate": "2024-12-19",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 0,
            "failedTask": 1
        }
    },
    {
        "id": 5,
        "firstName": "Ankit",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Conduct Research",
                "taskDescription": "Perform research on the competitor's products.",
                "taskDate": "2024-12-27",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completedTask": false,
                "failedTask": false
            },
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Write a blog post on the latest industry trends.",
                "taskDate": "2024-12-28",
                "category": "Content Creation",
                "active": false,
                "newTask": false,
                "completedTask": false,
                "failedTask": true
            }
        ],
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completedTask": 0,
            "failedTask": 1
        }
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];


// Save data to localStorage
export const setLocalStorage = () => {
    // Store employees and admin data in localStorage as stringified JSON
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

// Retrieve data from localStorage
export const getLocalStorage = () => {
    // Retrieve and parse the employees and admin data from localStorage
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    // Return the parsed data as an object
    return { employees, admin };
};
