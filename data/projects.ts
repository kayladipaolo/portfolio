export type Project = {
  slug: string;
  title: string;
  tagline: string;

  heroImage?: string; 
  youtubeId?: string; 
  videoSrc?: string;

  role?: string;
  stack: string[];

  overview: string;
  problem: string;
  solution: string;
  outcome: string;

  bullets: string[];
  challenges?: string[];
  learnings?: string[];

  links?: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "api-integration",
    title: "ShopGenius – Intelligent Tech Shopping Assistant",
    tagline:
        "Automated shopping assistant that aggregates pricing, reviews, and sentiment across platforms to deliver concise, personalized tech recommendations.",
    heroImage: "/projects/api-integration/architecture.jpeg",
    stack: [
        "TypeScript",
        "REST APIs",
        "Amazon Product API",
        "YouTube API",
        "Best Buy API",
        "eBay API",
        "Google NLP",
        "OpenAI API",
    ],

    overview:
        "ShopGenius is an automated shopping assistant designed to reduce the time and effort required to research technology purchases. By aggregating pricing data, customer sentiment, and expert reviews across multiple platforms, the system generates a concise, personalized recommendation based on minimal user input.",

    problem:
        "Researching technology purchases is time-consuming and fragmented. Consumers often compare prices across multiple retailers, watch review videos, and read customer feedback separately, making it difficult to reach confident decisions efficiently.",

    solution:
        "ShopGenius consolidates the research process into a single automated workflow. User input is validated early, relevant data is collected concurrently across multiple APIs, sentiment analysis is applied to filter noise, and a final recommendation is synthesized into a clear pros-and-cons summary.",

    outcome:
        "The system successfully demonstrated how multiple external data sources can be orchestrated into a cohesive recommendation engine. By validating inputs early and structuring API calls efficiently, ShopGenius delivered fast, reliable, and readable outputs while reducing user research effort.",

    bullets: [
        "Designed a modular, scalable architecture for integrating multiple external APIs",
        "Implemented concurrent API requests to minimize response time",
        "Integrated Amazon API for product validation and query refinement",
        "Pulled pricing and review data from Best Buy and eBay",
        "Processed YouTube review transcripts for expert sentiment signals",
        "Applied Google NLP to analyze sentiment and filter low-confidence opinions",
        "Used OpenAI to synthesize heterogeneous data into human-readable summaries",
    ],

    challenges: [
        "Managing ambiguous user queries without introducing cascading API errors",
        "Ensuring consistency across heterogeneous data sources",
        "Balancing response time with data completeness and reliability",
        "Filtering noisy or low-quality reviews before summarization",
    ],

    learnings: [
        "Early validation reduces downstream complexity and error propagation",
        "Concurrency is critical when orchestrating multiple external APIs",
        "Clear data flow design improves both system reliability and debuggability",
        "Effective system design requires balancing technical execution with coordination and planning",
    ],
 },
 {
    slug: "ai-project",
    title: "Predicting Future U.S. Unemployment Rates",
    tagline:
        "Time-series forecasting of monthly U.S. unemployment using statistical baselines and deep learning models under strict time-aware evaluation.",
    heroImage: "/projects/ai-project/forecast.png",
    stack: [
        "Python",
        "Time-Series Forecasting",
        'Data Engineering',
        "ARIMA / SARIMA",
        "MLP",
        "LSTM",
        "GRU",
        "Pandas",
        "PyTorch",
    ],

    overview:
        "This project evaluated how effectively statistical and deep learning models can forecast monthly U.S. unemployment rates using a unified macroeconomic dataset spanning multiple decades. Classical baselines were compared against neural approaches under realistic, time-aware evaluation to assess both accuracy and generalization.",

    problem:
        "Unemployment time series are slow-moving, highly autocorrelated, and heavily influenced by unpredictable economic shocks. These properties make short-term forecasting difficult and limit the effectiveness of increasingly complex models, especially when dataset size is constrained.",

    solution:
        "A structured forecasting pipeline was built beginning with classical ARIMA and SARIMA baselines, followed by progressively more expressive neural models. Additional macroeconomic indicators were incorporated to provide broader economic context, while careful preprocessing and chronological dataset splitting ensured realistic evaluation.",

    outcome:
        "Recurrent neural networks produced the strongest overall forecasts, with an optimized GRU model achieving the best balance between responsiveness and generalization. While improvements over naïve baselines were modest, the GRU consistently tracked long-term trends more reliably than other approaches.",

    bullets: [
        "Compiled a unified macroeconomic dataset from multiple U.S. labor and economic indicators",
        "Aligned mixed-frequency data to a consistent monthly timeline without dropping observations",
        "Engineered lagged features representing up to 12 months of prior economic conditions",
        "Trained and evaluated ARIMA, SARIMA, MLP, LSTM, and GRU models",
        "Applied strict chronological train/validation/test splits to prevent data leakage",
        "Performed hyperparameter tuning to balance model complexity and generalization",
    ],

    challenges: [
        "Highly persistent unemployment series limited achievable forecast improvements",
        "Non-stationarity and economic shocks reduced short-term predictability",
        "Deep learning models were sensitive to over-parameterization given dataset size",
        "Outperforming naïve baselines proved difficult despite increased model complexity",
    ],

    learnings: [
        "Model performance is often constrained more by data characteristics than architecture choice",
        "In macroeconomic forecasting, realism and generalization matter more than marginal accuracy gains",
        "Recurrent models benefit from careful regularization and sequence-length tuning",
        "Thorough preprocessing and evaluation design are critical for meaningful results",
    ],

    links: [
        {
        label: "GitHub Repository",
        href: "https://github.com/JoshSwantko/AISE-4010---Group-18-Code",
        },
    ],
},
  {
    slug: "autonomous-robot",
    title: "Autonomous Scavenger Robot",
    tagline:
        "Fully autonomous robot using state-based control and multi-sensor integration to identify, collect, and return target objects in an unmarked environment.",
    // youtubeId: "PASTE_VIDEO_ID_HERE", // optional
    videoSrc: "/projects/autonomous-robot/demo.mp4",
    stack: [
        "ESP32",
        "Embedded C/C++",
        "Circuit Design",
        "Ultrasonic Sensor",
        "IR Beacon",
        "Color Sensor",
        "Encoders",
    ],

    overview:
        "This project involved designing and building a fully autonomous scavenger robot capable of exploring an unmarked environment, identifying only green target objects, collecting them, and returning to a home base within a strict time limit. The system was built around an ESP32 microcontroller and required tight integration of sensing, actuation, and control logic under constraints on size, power, cost, and reliability.",

    problem:
        "Achieving reliable autonomy in a real-world environment proved non-trivial due to sensor noise, wheel drift, lighting variation, and surface inconsistency. Without external guides or predefined paths, the robot had to make all navigation and decision-making choices onboard in real time.",

    solution:
        "A state-based control architecture was implemented to break complex autonomous behavior into clear, modular states. Navigation, object identification, collection, and homing were each handled independently, allowing behavior to remain predictable and tunable despite environmental uncertainty.",

    outcome:
        "The completed system successfully demonstrated full autonomous operation, reliably identifying and collecting green objects and returning to the home base within the required time limit. Sensor prioritization and iterative calibration significantly improved consistency across different environments.",

    bullets: [
        "Designed a state-based control system to manage exploration, identification, collection, homing, and deposit behaviors",
        "Integrated ultrasonic, infrared, color, and encoder sensors into a unified decision-making pipeline",
        "Mitigated wheel drift by prioritizing infrared beacon alignment during homing",
        "Calibrated color sensor thresholds to reliably distinguish green targets under varying lighting conditions",
        "Optimized intake geometry to improve collection reliability without complex mechanical actuation",
    ],

    challenges: [
        "Accumulated wheel drift caused inconsistent homing behavior",
        "Lighting and floor surface variations affected color sensor accuracy",
        "Sensor noise required careful filtering and prioritization during decision-making",
        "Maintaining reliability under tight time and power constraints",
    ],

    learnings: [
        "Real-world autonomy requires continuous calibration and testing, not static configuration",
        "State machines provide clarity and robustness when managing complex autonomous behavior",
        "Sensor fusion and prioritization are more effective than relying on a single data source",
        "Mechanical simplicity can outperform complex actuation when paired with good geometry",
    ],
    links: [
        {
        label: "GitHub Repository",
        href: "https://github.com/MSE2202/project-pdf-team-003-08",
        },
    ],    
 },
];
