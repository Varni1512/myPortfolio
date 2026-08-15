export const projects = [
  {
    title: "ArchMind - AI System Design Platform",
    slug: "archmind",
    tagline:
      "An AI-powered system design platform for designing, validating, and understanding scalable software architectures.",
    overview:
      "ArchMind helps developers design scalable systems through interactive HLD and LLD diagrams, AI-powered architecture generation, validation, code generation, and intelligent guidance for system design decisions.",
    features: [
      "Interactive HLD & LLD architecture canvas",
      "AI-powered system architecture generation",
      "Architecture validation and design suggestions",
      "LLD code generation",
      "Diagram-based AI question answering",
      "Difficulty-based system design generation",
      "AI system design mentor",
      "Approximate cloud cost estimation for services like Redis and S3",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Groq API",
    ],
    challenges: [
      "Designing an interactive canvas for complex system architectures",
      "Generating consistent and scalable architectures using AI",
      "Validating system designs and maintaining relationships between components",
      "Converting high-level architecture into detailed low-level designs and code",
    ],
    learnings: [
      "Understanding and implementing HLD and LLD system design concepts",
      "Building AI-powered developer tools using LLM APIs",
      "Designing interactive architecture visualization systems",
      "Applying scalability, reliability, and cost considerations to system design",
    ],
    feedback: true,
    links: {
      live: "https://archmind.codewithvarni.app/",
      github: "https://github.com/Varni1512/ArchMind",
    },
  },
  {
    title: "CompileVerse - AI Code Compiler",
    slug: "compileverse",
    tagline:
      "An AI-powered online compiler supporting multiple languages with smart code analysis.",
    overview:
      "CompileVerse enables real-time code execution with AI-driven review and insights. It enhances coding efficiency through intelligent feedback and integrated development tools.",
    features: [
      "Multi-language compiler (C++, Java, Python)",
      "Monaco Editor integration",
      "AI code review system",
      "Complexity analysis",
      "Real-time output",
    ],
    techStack: ["React", "Node.js", "Express", "Monaco Editor", "Gemini API"],
    challenges: [
      "Handling secure code execution",
      "Integrating AI-based analysis",
      "Managing backend execution environment",
    ],
    learnings: [
      "Working with compilers & execution APIs",
      "AI integration in developer tools",
      "Editor integrations (Monaco)",
    ],
    feedback: true,
    links: {
      live: "https://compileverse.codewithvarni.app/",
      github: "https://github.com/Varni1512/CompileVerse",
    },
  },
  {
    title: "Recruit Sphere - Hiring System",
    slug: "recruit-sphere",
    tagline:
      "A scalable hiring and workflow management platform for efficient recruitment operations.",
    overview:
      "Recruit Sphere streamlines hiring workflows with candidate tracking, automation, and dashboards. It improves recruitment efficiency through structured processes and centralized management.",
    features: [
      "Candidate tracking",
      "Workflow automation",
      "Dashboard system",
    ],
    techStack: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    challenges: [
      "Designing scalable workflow logic",
    ],
    learnings: [
      "Recruitment system architecture",
    ],
    feedback: true,
    links: {
      live: "https://recruit-sphere.vercel.app/",
      github: "https://github.com/Varni1512/Recruit_Sphere",
    },
  },
  {
    title: "KisanHub - Smart Agriculture Marketplace",
    slug: "kisanhub",
    tagline:
      "A MERN-based platform enabling farmers, buyers, and vendors to connect directly.",
    overview:
      "KisanHub eliminates middlemen by enabling direct crop selling and communication. It features role-based dashboards, real-time chat, and secure transactions for better farmer profitability.",
    features: [
      "Role-based dashboards for users",
      "Direct crop selling marketplace",
      "Medicine shop integration",
      "Real-time chat system",
      "Secure authentication",
    ],
    techStack: ["React", "MongoDB", "Node.js", "Express.js", "Tailwind CSS"],
    challenges: [
      "Designing scalable role-based system",
      "Implementing real-time communication",
      "Managing complex backend APIs",
    ],
    learnings: [
      "Full MERN stack architecture",
      "Authentication & authorization handling",
      "Building real-time applications",
    ],
    feedback: true,
    links: {
      live: "https://kisanhub.vercel.app/",
      github: "https://github.com/Varni1512/KisanHub",
    },
  },

  {
    title: "Macbook 3D Website",
    slug: "macbook-3d",
    tagline:
      "An immersive Apple-style 3D product showcase with smooth animations and interactions.",
    overview:
      "A visually rich 3D website built with interactive models and scroll animations. It delivers a premium product experience using modern UI design and performance optimization.",
    features: [
      "Interactive 3D models using Three.js",
      "Scroll-based animations with GSAP",
      "Pinned sections for storytelling UI",
      "Smooth transitions and motion effects",
      "Fully responsive design",
    ],
    techStack: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    challenges: [
      "Handling performance issues with 3D rendering",
      "Synchronizing scroll animations with GSAP",
      "Maintaining responsiveness across devices",
    ],
    learnings: [
      "Deep understanding of Three.js rendering pipeline",
      "Advanced animation handling using GSAP",
      "Improved UI/UX design for product storytelling",
    ],
    feedback: true,
    links: {
      live: "https://macbook-sigma.vercel.app/",
      github: "https://github.com/Varni1512/Macbook",
    },
  },

  {
    title: "PlacementPrep - Study Platform",
    slug: "placementprep",
    tagline:
      "A comprehensive platform for placement preparation with resources and structured learning tools.",
    overview:
      "PlacementPrep offers notes, coding questions, quizzes, and interview preparation. It helps students organize learning efficiently with structured resources and guided preparation.",
    features: [
      "Authentication system",
      "Study notes & interview prep",
      "Coding questions",
      "Resume templates",
      "Aptitude quizzes",
    ],
    techStack: ["React", "Firebase", "Node.js", "Tailwind CSS"],
    challenges: [
      "Handling large content structure",
      "Designing scalable UI",
    ],
    learnings: [
      "Firebase integration",
      "Building educational platforms",
    ],
    feedback: true,
    links: {
      live: "https://placement-prep-varni.vercel.app/",
      github: "https://github.com/Varni1512/PlacementPrep",
    },
  },

  {
    title: "N-Queens Visualizer",
    slug: "n-queens",
    tagline:
      "An interactive visualization tool demonstrating backtracking algorithm for solving N-Queens problem.",
    overview:
      "This tool visualizes the N-Queens problem using step-by-step backtracking. It helps users understand recursion and constraint solving through dynamic board interactions.",
    features: [
      "Step-by-step visualization",
      "Dynamic board size",
      "Backtracking explanation",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Visualizing recursive backtracking",
    ],
    learnings: [
      "Deep understanding of recursion",
      "Algorithm visualization",
    ],
    feedback: true,
    links: {
      live: "https://varni1512.github.io/N-queens-visualiser/",
      github: "https://github.com/Varni1512/N-queens-visualiser",
    },
  },

  {
    title: "Tree Visualizer",
    slug: "tree-visualizer",
    tagline:
      "An interactive tool to visualize tree structures and traversal algorithms dynamically.",
    overview:
      "Tree Visualizer demonstrates binary trees, BSTs, and AVL structures visually. It simplifies learning of traversal algorithms through interactive and graphical representations.",
    features: [
      "Tree creation and traversal",
      "BST & AVL visualization",
      "Interactive UI",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Rendering dynamic tree structures",
    ],
    learnings: [
      "Tree data structures",
      "Visualization logic",
    ],
    feedback: true,
    links: {
      live: "https://varni1512.github.io/Tree-Visualizer/",
      github: "https://github.com/Varni1512/Tree-Visualizer",
    },
  },

  {
    title: "Sudoku Solver",
    slug: "sudoku-solver",
    tagline:
      "A backtracking-based Sudoku solver with interactive interface and dynamic solving visualization.",
    overview:
      "Sudoku Solver uses backtracking to solve puzzles efficiently in real time. It allows users to input grids and observe algorithmic solving step-by-step.",
    features: [
      "Auto solve Sudoku",
      "Manual input support",
      "Backtracking algorithm",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    challenges: [
      "Optimizing backtracking performance",
    ],
    learnings: [
      "Constraint solving techniques",
    ],
    feedback: true,
    links: {
      live: "https://varni1512.github.io/Sudoku-Solver/",
      github: "https://github.com/Varni1512/Sudoku-Solver",
    },
  },

  {
    title: "OLA Data Analyst Dashboard",
    slug: "ola-dashboard",
    tagline:
      "A data analytics dashboard providing insights into ride patterns and performance metrics.",
    overview:
      "This dashboard analyzes ride data using visual charts and trends. It helps understand performance metrics and user behavior through structured data visualization.",
    features: [
      "Data visualization",
      "Interactive charts",
      "Trend analysis",
    ],
    techStack: ["Power BI / Excel / SQL"],
    challenges: [
      "Handling large datasets",
    ],
    learnings: [
      "Data analysis & visualization",
    ],
    feedback: true,
    links: {
      live: "https://app.powerbi.com/links/utnKqb8MDQ?ctid=09bd1956-edda-4e9a-9543-7c7aa2cf4e81&pbi_source=linkShare",
      github: "https://github.com/Varni1512/OLA-Data-Analyst-Dashboard",
    },
  },

  {
    title: "IPL Data Analyst Dashboard",
    slug: "ipl-dashboard",
    tagline:
      "An interactive dashboard analyzing IPL data with player and match performance insights.",
    overview:
      "IPL Dashboard visualizes match data, player statistics, and trends effectively. It provides insights into performance using structured analytics and interactive charts.",
    features: [
      "Player stats analysis",
      "Match insights",
      "Interactive charts",
    ],
    techStack: ["Power BI / Excel / SQL"],
    challenges: [
      "Cleaning and structuring sports data",
    ],
    learnings: [
      "Sports analytics",
    ],
    feedback: true,
    links: {
      live: "https://app.powerbi.com/links/Ux-d5dHuBj?ctid=09bd1956-edda-4e9a-9543-7c7aa2cf4e81&pbi_source=linkShare",
      github: "https://github.com/Varni1512/IPL",
    },
  },
];