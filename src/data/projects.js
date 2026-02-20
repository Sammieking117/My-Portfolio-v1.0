export const projects = [
    {
        image: "/images/semgr.png", 
        name: "Semester Manager", 
        id: "1",
        overview: [
             "Semester Manager is a React-based web application designed to help students manage their courses, track credit units, and automatically calculate their GPA per semester.",
             "It was built to simulate a practical academic tracking system with a focus on clean state management, data persistence, and structured component architecture."
        ],
        role: "Frontend Developer",
        techStack: "React, JavaScript, CSS, LocalStorage",
        type: "Personal Project",
        status: "Completed",
        problem: [
            "Many students calculate their GPA manually or rely on spreadsheets that lack structure and usability. I wanted to build a dedicated interface that allowed structured course entry, real-time GPA calculation, and persistent academic tracking within a single application.",
            "The goal was not just to display data, but to manage it properly and ensure recalculations happen automatically when changes occur."
        ], 
        keyFeatures: [
            "Add, edit, and delete courses dynamically",
            "Automatic GPA calculation based on credit units and grades",
            "Real-time updates when course data changes",
            "Persistent data storage using localStorage",
            "Structured and reusable component architecture",
            "Responsive layout for desktop and mobile use"
        ],
        compStructureTop: "The application was divided into focused, reusable components to separate concerns clearly:",
        compStructureBody: [
            "A form component responsible for handling user input",
            "A course list component for rendering added courses",
            "A GPA display component responsible solely for calculation output"
        ],
        compStructureBottom: "This separation ensured that logic and UI responsibilities remained distinct, making the application easier to maintain and refactor.",
        stateManagementStrategyTop: "The core challenge was ensuring GPA recalculates automatically whenever course data changes. To achieve this:",
        stateManagementStrategyBody: [
            "Course data was stored in a centralized state at a higher-level component.",
            "Derived GPA values were calculated based on that state.",
            "State updates triggered automatic recalculation without redundant logic."
        ],
        stateManagementStrategyBottom: "This approach avoided unnecessary prop drilling and reduced duplicated logic",
        dataPersistenceTop: "LocalStorage was used to persist course data across sessions. On application load:",
        dataPersistenceBody: [
            "Stored course data is retrieved",
            "State is initialized using persisted data"
        ],
        dataPersistenceBottom: "This ensured users do not lose progress when refreshing or reopening the app.",
        challengesFacedBody: [
            "Preventing unnecessary recalculations when updating course data",
            "Structuring components to avoid tightly coupled logic",
            "Handling form validation cleanly without cluttering the UI"
        ],
        challengesFacedBottom: "Refactoring early structural decisions improved clarity and reduced complexity as features expanded.",
        whatILearnedTop: "This project strengthened my understanding of:",
        whatILearnedBody: [
            "React state flow and derived data",
            "Component responsibility and separation of concerns",
            "Data persistence in client-side applications",
            "Structuring logic before adding features"
        ],
        whatILearnedBottom: "It reinforced the importance of thinking about architecture early rather than patching logic later.",
        futureImprovementsTop: "If I were to extend this project, I would:",
        futureImprovementsBody: [
            "Integrate a backend to support multi-semester tracking and user accounts",
            "Add proper form validation and edge-case handling",
            "Implement role-based access (e.g., admin vs student)",
            "Add unit testing for GPA calculation logic",
            "Improve perfomance optimization for larger datasets"
        ],
        liveLinks: "https://semester-manager.vercel.app/",
    },
    {
        image: "/images/pulse.png",
        name: "Pulse", 
        id: "2",
        overview: [
            "Pulse is a React-based frontend application that replicates the core layout and interaction patterns of a modern music streaming platform.",
            "The goal was not just visual imitation, but to recreate a dynamic interface with structured component architecture, reusable UI patterns, and controlled state management."
        ],
        role: "Frontend Developer",
        techStack: "React, JavaScript, CSS",
        type: "Personal Project",
        status: "Completed",
        problem: [
            "Modern streaming platorms combine complex layouts, nested components, and interactive UI states. I built this project to challenge my ability to manage dynamic UI structure, component reusability, and state synchronization across multiple sections of an application.",
            "The objective was to replicate real-world frontend complexity not just static design."
        ],
        keyFeatures: [
            "Sidebar navigation with dynamic content switching",
            "Music card components rendered from structured data",
            "Reusable playlist and album layouts",
            "Interactive UI state (hover, active, selection)",
            "Simulated play controls and track interaction",
            "Responsive layout across screen sizes"
        ],
        compStructureTop: "The application was divided into reusable layout blocks:",
        compStructureBody: [
            "Sidebar navigation component",
            "Main content display container",
            "Reusable card components (album, playlist, track)"
        ],
        compStructureBottom: "Each component was designed to handle a single responsibility to avoid tightly coupled UI logic. This made it easier to scale new sections without restructuring the entire application.",
        stateManagementStrategyTop: "Although the application is frontend-only, state was used to manage:",
        stateManagementStrategyBody: [
            "Active navigation selection",
            "Currently selected track",
            "COnditional rendering of different content views"
        ],
        stateManagementStrategyBottom: "State where lifted where necessary to ensure synchronized UI updates across components. This prevented isolated UI changes that could break consistency between sections.",
        dataPersistenceTop: "Music and playlist data were structured as arrays of objects and mapped into reusable components. This approach allowed:",
        dataPersistenceBody: [
            "Easy scalability",
            "Clean rendering logic",
            "Minimal duplication of markup"
        ],
        dataPersistenceBottom: "It also mirrors how real streaming platforms handle dynamic content from APIs.",
        challengesFacedBody: [
            "Managing layout complexity witout creating deeply nested components",
            "Keeping styling consistent across reusable components",
            "Avoiding repetition while maintaining flexibily in UI variations",
            "Ensuring responsive behavior without breaking structural alignment"
        ],
        challengesFacedBottom: "Several layout sections were refactored to improve component reusability and reduce duplication.",
        whatILearnedTop: "This project improved my understanding of:",
        whatILearnedBody: [
            "Designing scalable UI architecture",
            "Structuring reusable React components",
            "Managing UI state across multiple sections",
            "Building complex layouts without losing maintainability"
        ],
        whatILearnedBottom: "It reinforced how important component boundaries are in larger frontend systems.",
        futureImprovementsTop: "If I were to extend this project, I would:",
        futureImprovementsBody: [
            "Integrate a real music API",
            "Add backend authentication and user-specific playlists",
            "Implement real audio playback functionality",
            "Introduce global state management for better track synchronization",
            "Optimize rendering performance for large data sets"
        ],
        liveLinks: "https://pulse-henna-seven.vercel.app/",
    },
    {
        image: "/images/portfolio.png", 
        name: "My Porfolio", 
        id: "3",
        overview: [
            "This portfolio website is a React-based personal platform designed to present my projects, technical decisions, and development process in a structured and professional format.",
            "Rather than focusing purely on aesthetics, the goal was to build a clean, scalable, and well-structured application that reflects how I approach frontend architecture and user experience."
        ],
        role: "Frontend Developer",
        techStack: "React, JavaScript, CSS",
        type: "Personal Project",
        status: "Completed",
        problem: [
            "Many developer portfolio prioritize visual design but fail to communicate technical depth or problem-solving ability.",
            "I wanted to build a portfolio that: Clearly presents projects and technical decisions, demonstrates structured component design, maintains performance and readability, reflects growth and intentional learning.",
            "The goal was clarity over flash."
        ],
        keyFeatures: [
            "Clean hero section with focused value proposition",
            "Dedicated project detail pages with technical breakdowns",
            "Reusable layout components across sections",
            "Smooth navigation and scroll handling",
            "Responsive design for different screen sizes",
            "Clear separation between presentation and logic"
        ],
        compStructureTop: "The application was structured into modular sections:",
        compStructureBody: [
            "Navigation component",
            "Hero section",
            "Projects preview section",
            "Dedicated project detail pages",
            "Footer/contact section"
        ],
        compStructureBottom: "Reusable layout wrappers were used to maintain consistent spacing and alignment across pages. This made the design predictable and scalable.",
        stateManagementStrategyTop: "Client-side routing was implemented to support:",
        stateManagementStrategyBody: [
            "Individual project detail pages",
            "Smooth navigation between sections",
            "Clear URL structure for scalability"
        ],
        stateManagementStrategyBottom: "This ensures the portfolio behaves like a real multi-page application rather than a single static page.",
        dataPersistenceTop: "The design prioritizes:",
        dataPersistenceBody: [
            "Readability over decoration",
            "Strong typography hierarchy",
            "Consistent spacing",
            "Limited color palette"
        ],
        dataPersistenceBottom: "This approach avoids visual noise and keeps attention on the content and projects.",
        challengesFacedBody: [
            "Balancing simplicity with personality",
            "Structuring project detail pages to communicate depth without overwhelming users",
            "Maintaining consistency across sections while keeping each unique"
        ],
        challengesFacedBottom: "Refactoring layout components improved maintainability and reduced duplication.",
        whatILearnedTop: "This project reinforced:",
        whatILearnedBody: [
            "The importance of communiication in software development",
            "Structuring applications for scalability",
            "Designing with clarity and hierarchy",
            "Writing about technical decisions effectively"
        ],
        whatILearnedBottom: "It highlighted that presentation and engineering should work together.",
        futureImprovementsTop: "If extended further, I would:",
        futureImprovementsBody: [
            "Add backend integration for a blog or dynamic project updates",
            "Implement performance optimization techniques such as lazy loading",
            "Improve accessibility compliance",
            "Add analytics to track user interaction"
        ],
        liveLinks: "",
        isCurrentSite: true,
    },/*
    {
        image: "", 
        name: "", 
        id: "",
        overview: [],
        role: "",
        techStack: "",
        type: "",
        status: "",
        problem: [],
        keyFeatures: [],
        compStructureTop: "",
        compStructureBody: [],
        compStructureBottom: "",
        stateManagementStrategyTop: "",
        stateManagementStrategyBody: [],
        stateManagementStrategyBottom: "",
        dataPersistenceTop: "",
        dataPersistenceBody: [],
        dataPersistenceBottom: "",
        challengesFacedBody: [],
        challengesFacedBottom: "",
        whatILearnedTop: "",
        whatILearnedBody: [],
        whatILearnedBottom: "",
        futureImprovementsTop: "",
        futureImprovementsBody: [],
        liveLinks: "",
    }*/
]