import { Project } from "@/types/portfolio";

export const projectsData: Project[] = [
  {
    id: "toxic-comment-detection",
    title: "Toxic Comment Detection",
    tagline: "NLP-driven classification pipeline for automated online content moderation",
    category: "Machine Learning",
    featured: true,
    description: "Multi-label text classification system built to identify toxic, obscene, threatening, and insulting online comments using natural language processing techniques.",
    problemStatement: "Online platforms struggle with large volumes of toxic comments that harm community engagement and require manual moderation at scale.",
    solution: "Trained TF-IDF feature extractors paired with optimized Logistic Regression and Linear SVC classifiers to categorize toxic text with high precision and low latency.",
    techStack: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas", "Streamlit"],
    keyFeatures: [
      "Real-time text analysis and toxicity score prediction",
      "Multi-label classification across 6 distinct toxicity categories",
      "Preprocessed NLP pipeline with custom tokenization and stop-word removal",
      "Interactive Streamlit web GUI for batch evaluation"
    ],
    challenges: [
      "Handling severely imbalanced target classes in toxic text datasets",
      "Optimizing feature matrix density without exploding memory usage"
    ],
    futureImprovements: [
      "Fine-tune fine-grained Transformer models (RoBERTa / DistilBERT)",
      "Containerize API using Docker for horizontal scalability"
    ],
    githubUrl: "https://github.com/durgesh-maurya/toxic-comment-detection",
    demoUrl: "https://toxic-comment-detector.streamlit.app",
    imagePlaceholder: "/assets/projects/toxic-comment.png"
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction System",
    tagline: "End-to-end regression framework for real estate valuation modeling",
    category: "Machine Learning",
    featured: true,
    description: "Supervised regression model pipeline that predicts real estate prices based on spatial, structural, and demographic features.",
    problemStatement: "Home buyers and real estate analysts face pricing opacity due to non-linear relationships between property attributes and market valuation.",
    solution: "Engineered robust pipeline with missing value imputation, outlier pruning, categorical encoding, and ensemble regression models (Gradient Boosting & Random Forest).",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Matplotlib", "FastAPI"],
    keyFeatures: [
      "Comprehensive Exploratory Data Analysis (EDA) and feature correlation matrix",
      "Automated feature scaling and One-Hot Encoding pipeline",
      "Ensemble modeling achieving high R² valuation accuracy",
      "RESTful API serving inference requests via FastAPI"
    ],
    challenges: [
      "Detecting and scaling skewed numerical features and multi-collinearity",
      "Selecting relevant cross-validation splits to prevent target leakage"
    ],
    futureImprovements: [
      "Integrate interactive geospatial maps using Plotly / Folium",
      "Implement Automated ML hyperparameter tuning via Optuna"
    ],
    githubUrl: "https://github.com/durgesh-maurya/house-price-prediction",
    demoUrl: "https://house-price-predictor.streamlit.app",
    imagePlaceholder: "/assets/projects/house-price.png"
  },
  {
    id: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection",
    tagline: "Anomaly detection system tailored for highly imbalanced financial transactions",
    category: "Machine Learning",
    featured: true,
    description: "Financial anomaly detection model leveraging advanced sampling techniques and probabilistic classifiers to flag fraudulent credit transactions.",
    problemStatement: "Fraudulent transactions comprise less than 0.2% of total financial data, causing standard classifiers to default to baseline majority classes.",
    solution: "Implemented Synthetic Minority Over-sampling Technique (SMOTE) paired with Random Forest and Isolation Forests, evaluating performance via Precision-Recall AUC.",
    techStack: ["Python", "Scikit-learn", "Imbalanced-learn", "Seaborn", "Flask"],
    keyFeatures: [
      "Resampling strategy utilizing SMOTE to balance class ratios",
      "Precision-Recall AUC evaluation tailored for low-incidence fraud",
      "Probability threshold tuning to minimize costly false negatives",
      "Lightweight Flask web interface for single-transaction testing"
    ],
    challenges: [
      "Preventing overfitting on synthetic minority samples during cross-validation",
      "Maintaining low inference latency for real-time verification requirements"
    ],
    futureImprovements: [
      "Test Deep Learning Autoencoder models for unsupervised anomaly detection",
      "Integrate Kafka stream integration simulation"
    ],
    githubUrl: "https://github.com/durgesh-maurya/credit-card-fraud-detection",
    demoUrl: "https://credit-card-fraud-detector.streamlit.app",
    imagePlaceholder: "/assets/projects/fraud-detection.png"
  },
  {
    id: "spacex-falcon9-landing",
    title: "SpaceX Falcon 9 Landing Prediction",
    tagline: "Predictive analytics determining first-stage rocket booster recovery success",
    category: "Data Science",
    featured: true,
    description: "Data science case study evaluating launch parameters to predict whether the SpaceX Falcon 9 first stage will land successfully.",
    problemStatement: "Rocket landing success dictates launch cost efficiency. Predicting landing outcomes helps estimate commercial payload pricing.",
    solution: "Scraped SpaceX launch records via REST API, performed SQL querying, created interactive Plotly maps, and trained Logistic Regression, SVM, and Tree-based models.",
    techStack: ["Python", "SQL", "Pandas", "Plotly", "Scikit-learn", "Folium"],
    keyFeatures: [
      "SpaceX REST API payload extraction and web scraping pipeline",
      "SQL exploratory querying for payload mass vs. orbit site analysis",
      "Interactive Folium maps marking launch sites and landing zones",
      "Model comparison dashboard evaluating SVM vs Decision Trees"
    ],
    challenges: [
      "Cleaning null payload records and normalizing heterogeneous API parameters",
      "Optimizing hyperparameter grids across small dataset sample sizes"
    ],
    futureImprovements: [
      "Incorporate atmospheric weather condition data as launch day variables",
      "Publish dynamic dashboard using Streamlit Cloud"
    ],
    githubUrl: "https://github.com/durgesh-maurya/spacex-falcon9-landing",
    demoUrl: "https://spacex-landing-predictor.streamlit.app",
    imagePlaceholder: "/assets/projects/spacex.png"
  },
  {
    id: "gesture-control-gaming",
    title: "Gesture Control Interface",
    tagline: "Computer vision application mapping human hand gestures to interactive controls",
    category: "Computer Vision",
    featured: false,
    description: "Real-time human-computer interaction system translating webcam hand tracking landmarks into virtual game keyboard inputs.",
    problemStatement: "Traditional physical input devices lack natural gestural interaction for modern desktop and gaming interfaces.",
    solution: "Leveraged MediaPipe Hand Tracking to detect 21 spatial landmarks in real-time video frames, calculating Euclidean distances to trigger keypress actions.",
    techStack: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy"],
    keyFeatures: [
      "Real-time 60 FPS hand tracking via OpenCV webcam feed",
      "21-point spatial hand landmark extraction",
      "Gesture state machine mapping hand pinches to keyboard triggers",
      "Minimal latency keypress simulation using PyAutoGUI"
    ],
    challenges: [
      "Maintaining stable tracking across varying ambient room light levels",
      "Filtering noisy frame jitter without introducing motion lag"
    ],
    futureImprovements: [
      "Train custom lightweight CNN model for dynamic gesture recognition",
      "Add support for two-handed multi-gesture commands"
    ],
    githubUrl: "https://github.com/durgesh-maurya/gesture-control-system",
    demoUrl: "https://github.com/durgesh-maurya/gesture-control-system#demo",
    imagePlaceholder: "/assets/projects/gesture-control.png"
  },
  {
    id: "olist-customer-intelligence",
    title: "Olist Customer Intelligence & Event Gateway",
    tagline: "Dual-pipeline machine learning & real-time ops alerting system on 100k+ marketplace orders",
    category: "Machine Learning",
    featured: true,
    description: "Production-grade dual-pipeline machine learning platform predicting pre-dispatch logistics friction and first-order VIP repeat propensity with automated Discord ops alerting.",
    problemStatement: "E-commerce marketplaces suffer high post-dispatch churn and customer support overhead from logistics latency, while natural customer repeat purchasing sits at an ultra-sparse ~3.1%.",
    solution: "Trained dual LightGBM classifiers with calibrated cost thresholds (tau >= 0.5397 for friction, tau >= 0.0500 for VIP retention), deployed on FastAPI microservices with asynchronous Discord webhook routing.",
    techStack: ["Python", "LightGBM", "FastAPI", "Streamlit", "Scikit-learn", "Plotly", "Discord API", "Render"],
    keyFeatures: [
      "Dual LightGBM inference pipelines optimized for operational cost curves",
      "Dynamic root-cause diagnostics translating input vectors into actionable warehouse playbooks",
      "Real-time event routing triggering priority packaging alerts via Discord Webhooks",
      "Interactive Streamlit decision console featuring dynamic Plotly gauge visualizations"
    ],
    challenges: [
      "Mitigating severe class imbalance across 100k+ sparse marketplace retention records",
      "Aligning multi-transformer pipeline schemas between local development and cloud production environments"
    ],
    futureImprovements: [
      "Containerize API and dashboard microservices using Docker Compose",
      "Integrate Apache Kafka or Celery workers for asynchronous queue buffering during peak sale loads"
    ],
    githubUrl: "https://github.com/durgesh693/olist-customer-intelligence",
    demoUrl: "https://olist-customer-intelligence-dashboard.streamlit.app",
    imagePlaceholder: "/assets/projects/olist-intelligence.png"
  },
];