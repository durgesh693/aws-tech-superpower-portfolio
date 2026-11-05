import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", iconName: "Terminal", featured: true },
      { name: "SQL", iconName: "Database", featured: true },
      { name: "JavaScript", iconName: "Code2", featured: true },
      { name: "TypeScript", iconName: "Code", featured: false },
      {name: "C++" , iconName: "C++", featured: true}
    ],
  },
  {
    category: "Data Analysis & Visualization",
    skills: [
      { name: "NumPy", iconName: "Binary", featured: true },
      { name: "Pandas", iconName: "Table", featured: true },
      { name: "Matplotlib", iconName: "LineChart", featured: false },
      { name: "Seaborn", iconName: "PieChart", featured: false },
      { name: "Plotly", iconName: "BarChart2", featured: true },
      { name: "Excel", iconName: "Table", featured: false },
      { name: "Power BI (Learning)", iconName: "BarChart", featured: false },
      { name: "Tableau (Learning)", iconName: "BarChart3", featured: false },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", iconName: "Cpu", featured: true },
      { name: "Regression", iconName: "TrendingUp", featured: false },
      { name: "Classification", iconName: "Layers", featured: false },
      { name: "Clustering", iconName: "PieChart", featured: false },
      { name: "Feature Engineering", iconName: "Sliders", featured: false },
      { name: "Feature Selection", iconName: "Filter", featured: false },
      { name: "Model Evaluation", iconName: "CheckCircle", featured: false },
      { name: "Hyperparameter Tuning", iconName: "Sliders", featured: false },
      { name: "Cross Validation", iconName: "CheckCircle", featured: false },
    ],
  },
  {
    category: "Deep Learning & AI",
    skills: [
      { name: "Deep Learning", iconName: "Brain", featured: true },
      { name: "Neural Networks", iconName: "Cpu", featured: true },
      { name: "TensorFlow (Learning)", iconName: "Zap", featured: false },
      { name: "PyTorch (Learning)", iconName: "Zap", featured: false },
    ],
  },
  {
    category: "Backend & Deployment",
    skills: [
      { name: "FastAPI", iconName: "Zap", featured: true },
      { name: "Flask", iconName: "Server", featured: false },
      { name: "Streamlit", iconName: "Layout", featured: true },
      { name: "REST API", iconName: "Server", featured: false },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", iconName: "HardDrive", featured: true },
      { name: "SQLite", iconName: "Database", featured: false },
      { name: "MySQL", iconName: "Database", featured: false },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS (Learning)", iconName: "Server", featured: false },
      { name: "Docker", iconName: "Box", featured: false },
      { name: "Kubernetes", iconName: "Layers", featured: false },
      { name: "Git", iconName: "GitBranch", featured: false },
      { name: "GitHub", iconName: "Github", featured: false },
      { name: "Linux", iconName: "Terminal", featured: false },
      { name: "VS Code", iconName: "Code", featured: false },
    ],
  },
  {
    category: "Data Science Workflow",
    skills: [
      { name: "Data Cleaning", iconName: "CheckCircle", featured: false },
      { name: "Data Preprocessing", iconName: "Sliders", featured: false },
      { name: "Exploratory Data Analysis", iconName: "BarChart2", featured: false },
      { name: "Feature Engineering", iconName: "Sliders", featured: false },
      { name: "Model Building", iconName: "Cpu", featured: false },
      { name: "Model Deployment", iconName: "Server", featured: false },
      { name: "ML Pipelines", iconName: "Layers", featured: false },
    ],
  },
];