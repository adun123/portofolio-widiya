export const personal = {
  name: "Widiya Pramestika",
  roles: ["Data Analyst", "Data Annotator", "System Analyst"],
  summary: "Transforming raw data into strategic insight. I bridge the gap between complex datasets, precise annotation workflows, and robust system architectures  building solutions that are both technically rigorous and business-ready.",
  email: "wdyapramestika@gmail.com",
  linkedin: "https://www.linkedin.com/in/widiyatika/",
  github: "https://github.com",
  cvUrl: "/Widiya-Pramestika-CV.pdf",
  whatsapp: '6285791514810',
};

export const skills = [
  {
    category: "Data Analysis",
    icon: "BarChart3",
    color: "#8B0000",
    items: ["Python (Pandas, NumPy, Scikit-learn)", "SQL & PostgreSQL", "Microsoft Excel & Power Query", "Statistical Analysis", "A/B Testing"],
  },
  {
    category: "Visualization",
    icon: "PieChart",
    color: "#C0152A",
    items: ["Tableau", "Power BI", "Matplotlib & Seaborn", "Plotly Dash", "D3.js Basics"],
  },
  {
    category: "Data Annotation",
    icon: "Tag",
    color: "#E63950",
    items: ["CVAT", "Label Studio", "Roboflow", "Image Segmentation", "NLP Annotation", "Quality Control Pipelines"],
  },
  {
    category: "System Analysis",
    icon: "GitBranch",
    color: "#F4A0B0",
    items: ["UML Diagrams", "ERD Design", "Requirement Analysis", "BPMN Workflows", "Figma Prototyping", "Agile / Scrum"],
  },
];

export const projects = [
  {
      title: "Automated Data Cleaning with Fuzzy Matching",
      problem: "Manual cleaning of inconsistent and unstructured text data led to inefficiencies and frequent data quality issues.",
      tools: ["Python", "Pandas", "NumPy", "RapidFuzz", "FuzzyWuzzy"],
      process: "Developed automated pipelines for text normalization and cleaning, and implemented fuzzy matching algorithms to identify and reconcile duplicate or inconsistent records.",
      insight: "Reduced manual workload and significantly improved data-processing efficiency and reliability for downstream analytics.",
      visual: "table",
  },
 {
    title: "Music Genre Classification (Major vs Minor)",
    problem: "Understanding how audio features influence musical characteristics is complex and difficult to analyze manually.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    process: "Analyzed audio features such as tempo, energy, and mode; performed preprocessing and feature selection; and trained classification models to predict major or minor characteristics.",
    insight: "Built a reliable classification model and uncovered key audio features that significantly influence genre characteristics.",
    visual: "scatter",
  },
   {
    title: "Point of Sale (POS) System",
    problem: "Small retail stores often lack simple and affordable systems to manage inventory and daily transactions efficiently.",
    tools: ["Python"],
    process: "Developed a desktop-based POS application with CRUD functionality for product management and transaction processing, structured using modular programming practices for maintainability.",
    insight: "Delivered a functional prototype that streamlined basic store operations and improved transaction recording efficiency.",
    visual: "table",
  },
];

export const caseStudy = {
  title: "Automated Data Cleaning System with Fuzzy Matching",
  problem: "Data processing workflows relied heavily on manual cleaning of inconsistent and unstructured text data, leading to inefficiencies, duplicated records, and unreliable datasets for analysis.",
  requirements: [
    { 
      type: "Functional", 
      items: [
        "Automated text normalization and cleaning",
        "Duplicate and inconsistency detection",
        "Fuzzy matching for record reconciliation",
        "Batch data processing pipeline",
        "Export cleaned dataset for analysis"
      ] 
    },
    { 
      type: "Non-Functional", 
      items: [
        "High processing efficiency for large datasets",
        "Scalable data pipeline",
        "Maintainable and modular code structure",
        "High accuracy in duplicate detection"
      ] 
    },
  ],
  solution: "Developed an automated data cleaning pipeline using Python, Pandas, and NumPy. Implemented fuzzy matching algorithms (RapidFuzz, FuzzyWuzzy) to identify and reconcile inconsistent records, reducing reliance on manual cleaning.",
  outcome: "Significantly reduced manual data cleaning effort and improved dataset consistency, resulting in more reliable data for downstream analytics and reporting.",
};

export const annotationWork = [
  {
    title: "Music Genre Classification Dataset",
    tool: "Python (Pandas, Scikit-learn)",
    type: "Data Preprocessing & Feature Engineering",
    description: "Processed and prepared audio feature datasets (tempo, energy, mode) for machine learning classification tasks (major vs minor).",
    stats: { samples: "N/A", features: "Multiple audio attributes", model: "Classification" },
  },
  {
    title: "Retail Sales Forecasting Dataset",
    tool: "Python (Pandas, Prophet)",
    type: "Time Series Data Preparation",
    description: "Cleaned and structured transactional sales data, engineered seasonal features, and prepared datasets for time-series forecasting models.",
    stats: { period: "3 years", granularity: "SKU-level", model: "Forecasting" },
  },
  {
    title: "POS Transaction Data Handling",
    tool: "Python",
    type: "CRUD & Data Management",
    description: "Managed product and transaction data through CRUD operations in a POS system prototype, ensuring structured and consistent data storage.",
    stats: { system: "Desktop App", features: "CRUD", scope: "Small retail operations" },
  },
];

export const dashboards = [
  { title: "Sales Performance KPI Dashboard", tools: "Power BI", metric: "↑ 34% revenue insight speed", type: "bar" },
  { title: "Customer Segmentation Map", tools: "Tableau", metric: "12 distinct customer clusters", type: "scatter" },
  { title: "Real-time Anomaly Monitor", tools: "Streamlit + Plotly", metric: "< 200ms alert latency", type: "line" },
];
