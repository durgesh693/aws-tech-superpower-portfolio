import { NavItem } from "@/types/portfolio";

export const siteConfig = {
  name: "Durgesh Maurya",
  title: "Durgesh Maurya | Data Scientist | Data Analyst | Machine Learning Portfolio",
  description: "Portfolio of Durgesh Maurya, a BCA student specializing in Data Science, Data Analytics, Machine Learning, Deep Learning, Neural Networks, AI Engineering, Python Development, and modern AI applications.",
  url: "https://durgeshmauryaportfolio.vercel.app/",
  ogImage: "../og-image.jpeg",
  keywords: [
    "Durgesh Maurya",
    "durgesh maurya portfolio",
    "Data Scientist",
    "Data Analyst",
    "Machine Learning",
    "Deep Learning",
    "Artificial Intelligence",
    "Neural Networks",
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "FastAPI",
    "AWS",
    "MongoDB",
    "Portfolio",
    "AI Engineer",
    "BCA Student",
    "Data Science Portfolio"
  ],
  author: {
    name: "Durgesh Maurya",
    url: "https://durgeshmauryaportfolio.vercel.app/",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
};