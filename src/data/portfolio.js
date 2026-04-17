export const personal = {
  name: "Widiya Pramestika",
  roles: ["Data Analyst", "Data Annotator", "System Analyst"],
  summary: "Transforming raw data into strategic insight. I bridge the gap between complex datasets, precise annotation workflows, and robust system architectures  building solutions that are both technically rigorous and business-ready.",
  email: "wdyapramestika@gmail.com",
  linkedin: "https://www.linkedin.com/in/widiyatika/",
  github: "https://github.com",
  cvUrl: "#",
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
    title: "Retail Sales Forecasting Engine",
    problem: "A mid-size retail chain was experiencing 23% inventory waste due to inaccurate demand forecasting.",
    tools: ["Python", "Prophet", "SQL", "Power BI"],
    process: "Cleaned 3 years of transactional data, engineered seasonal features, built Prophet time-series models per SKU category.",
    insight: "Reduced forecasting error by 34% and cut inventory waste by $480K annually.",
    visual: "bar",
  },
  {
    title: "Customer Churn Prediction",
    problem: "Telecom company losing 18% of customers monthly with no early-warning system.",
    tools: ["Python", "XGBoost", "SHAP", "Tableau"],
    process: "Built binary classifier on 50K customer records, used SHAP for explainability, deployed risk score dashboard.",
    insight: "Model achieved 89% AUC. Retention campaigns triggered on top 15% at-risk customers.",
    visual: "donut",
  },
  {
    title: "Supply Chain Anomaly Detector",
    problem: "Manual review of 10,000+ daily shipment records for fraud was unsustainable.",
    tools: ["Python", "Isolation Forest", "PostgreSQL", "Streamlit"],
    process: "Implemented unsupervised anomaly detection on shipment patterns, built real-time alerting dashboard.",
    insight: "Flagged 127 fraudulent transactions in first month, saving $92K.",
    visual: "line",
  },
];

export const caseStudy = {
  title: "Hospital Appointment Management System",
  problem: "A private hospital's scheduling system relied on paper-based processes, leading to 40% appointment overlap and 3-hour average patient wait times.",
  requirements: [
    { type: "Functional", items: ["Online appointment booking", "Doctor schedule management", "Patient record integration", "Automated reminders (SMS/Email)", "Reporting dashboard"] },
    { type: "Non-Functional", items: ["99.9% uptime SLA", "Response time < 2s", "HIPAA compliant data storage", "Mobile-responsive interface"] },
  ],
  solution: "Designed a microservices architecture with a React frontend, Node.js API gateway, and PostgreSQL database. Implemented calendar-based conflict detection and patient notification workflows.",
  outcome: "Wait times reduced to 45 minutes. Appointment overlap eliminated. Staff admin time cut by 60%.",
};

export const annotationWork = [
  {
    title: "Medical Image Segmentation",
    tool: "CVAT",
    type: "Polygon + Semantic Segmentation",
    description: "Annotated 12,000 chest X-ray images for pneumonia detection model. Defined 6 label classes with strict medical ontology.",
    stats: { images: "12,000+", accuracy: "98.4%", classes: 6 },
  },
  {
    title: "Sentiment NLP Dataset",
    tool: "Label Studio",
    type: "Text Classification",
    description: "Built a 50K-tweet sentiment dataset for a social media monitoring product. Implemented inter-annotator agreement checks.",
    stats: { samples: "50,000", agreement: "94.2%", labels: 4 },
  },
  {
    title: "Autonomous Vehicle Object Detection",
    tool: "Roboflow",
    type: "Bounding Box Detection",
    description: "Annotated dashcam footage with 8 object classes (pedestrians, vehicles, signs) for self-driving training pipelines.",
    stats: { frames: "8,500", classes: 8, precision: "96.1%" },
  },
];

export const dashboards = [
  { title: "Sales Performance KPI Dashboard", tools: "Power BI", metric: "↑ 34% revenue insight speed", type: "bar" },
  { title: "Customer Segmentation Map", tools: "Tableau", metric: "12 distinct customer clusters", type: "scatter" },
  { title: "Real-time Anomaly Monitor", tools: "Streamlit + Plotly", metric: "< 200ms alert latency", type: "line" },
];
