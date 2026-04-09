const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Report",
        description: "Prepare monthly sales report",
        date: "2026-04-10",
        category: "Reports"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Email Client",
        description: "Send project update email",
        date: "2026-04-05",
        category: "Communication"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Bug",
        description: "Resolve login issue",
        date: "2026-04-06",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design UI",
        description: "Create dashboard UI",
        date: "2026-04-11",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting",
        description: "Attend weekly meeting",
        date: "2026-04-07",
        category: "Meeting"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Update Docs",
        description: "Update API documentation",
        date: "2026-04-08",
        category: "Documentation"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Backup",
        description: "Backup production database",
        date: "2026-04-10",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Code Review",
        description: "Review teammate code",
        date: "2026-04-06",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Optimize Query",
        description: "Improve slow SQL query",
        date: "2026-04-07",
        category: "Database"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Feature",
        description: "Test new payment feature",
        date: "2026-04-12",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Report",
        description: "Submit bug report",
        date: "2026-04-06",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Automation Script",
        description: "Write test automation script",
        date: "2026-04-08",
        category: "Testing"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Deploy App",
        description: "Deploy latest build",
        date: "2026-04-11",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Server Check",
        description: "Check server health",
        date: "2026-04-05",
        category: "DevOps"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Fix Pipeline",
        description: "Fix CI/CD pipeline issue",
        date: "2026-04-07",
        category: "DevOps"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];


export const setLocalStorage = () => {

  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))

    const admin = JSON.parse(localStorage.getItem('admin'))

  console.log(employees, admin);

}

