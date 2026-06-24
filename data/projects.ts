export type Project = {
  slug: string;
  title: string;
  tagline: string;

  heroImage?: string; 
  gallery?: string[];
  youtubeId?: string; 
  videoSrc?: string;
  videos?: string[];

  sections?: Array<{
    title: string;
    text: string;
    image?: string;
    images?: string[];
    reverse?: boolean;
    group?: number;
  }>;

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
    heroImage: "/projects/ai-project/forecast-plot.jpg",
    stack: [
        "Python",
        "Time-Series Forecasting",
        'Data Engineering',
        "ARIMA / SARIMA",
        "MLP",
        "LSTM",
        "GRU",
        "TensorFlow / Keras",
        "Keras Tuner",
        "Pandas",
        "statsmodels",
        "Bayesian Optimization",
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

  sections: [
    {
      title: "Problem & Approach",
      text:
        "Predicting monthly U.S. unemployment is notoriously difficult: the series is slow-moving, persistent, and highly sensitive to economic shocks that are by definition hard to predict. The project framed this as a time-aware forecasting problem, requiring every model to be evaluated on strictly chronological train/validation/test splits — no random shuffling, no data leakage.",
      image: "/projects/ai-project/forecast-plot.jpg",
    },
    {
      title: "Model Development & Hyperparameter Optimization",
      text:
        "A structured pipeline was built in four stages: ARIMA and SARIMA baselines, a stateless MLP, then two recurrent architectures (LSTM and GRU) with lagged window sequences. Both recurrent models went through a second pass of Bayesian hyperparameter optimization via Keras Tuner, narrowing the search space around the best-performing 64 -> 32 unit two-layer architecture with modest dropout and a 1e-3 learning rate.",
      image: "/projects/ai-project/hpo-gru.jpg",
      reverse: true,
    },
  ],

  gallery: [
    "/projects/ai-project/hpo-gru.jpg",
  ],

  videos: [],

    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/JoshSwantko/AISE-4010---Group-18-Code",
      },
    ],
 },

 {
    slug: "smart-focus-dock",
    title: "Smart Focus Dock",
    tagline:
      "An embedded state-machine system that turns phone-down time into measurable focus sessions — prototyped on the DE10-SoC and proposed as an STM32 product with IR proximity sensing and OLED feedback.",

    heroImage: "/projects/smart-focus-dock/hero-image.jpg",

    gallery: [
      "/projects/smart-focus-dock/system-flowchart.jpg",
    ],

    sections: [
      {
        group: 1,
        title: "Problem & Goal",
        text:
          "Phone distractions break focus during study and work sessions. The Smart Focus Dock is a small embedded device that detects when a phone is placed on the dock, starts a timed focus session, and gives clear visual feedback on progress. If the phone stays for the full duration the session is marked complete; if it's removed early, the session is flagged as interrupted. The goal was to prototype and validate the system logic before laying out a realistic hardware implementation roadmap.",
        image: "/projects/smart-focus-dock/hero-image.jpg",
      },
      {
        group: 2,
        title: "Prototype (DE10-SoC)",
        text:
          "The initial prototype ran on the DE10-SoC board using switches to simulate phone presence and four LEDs to represent progress states: Idle (all off), Active (LEDs 1-4 light up progressively), Complete (all LEDs on), and Interrupted (blinking flash). A polling-loop state machine checked SW0 every cycle - pressing the switch started the session timer, releasing it early triggered the interrupted flash sequence, and holding it through all four progress steps led to completion. One bug surfaced during testing: the interrupted-state flash sequence didn't fully clear its loop variables before returning to Idle, causing leftover blink bursts after reset. Fixing the state-reset logic resolved it.",
        image: "/projects/smart-focus-dock/system-flowchart.jpg",
        reverse: true,
      },
      {
        group: 3,
        title: "Transition: Prototype to Product",
        text:
          "Three upgrades were planned to move toward a real consumer device. First, the pushbutton was replaced with an IR proximity sensor (Sharp GP2Y0A21YK0F) connected to the STM32's ADC for actual phone-presence detection. Second, the software-delay timer was upgraded to the STM32's hardware timer peripheral so the processor remains responsive while tracking elapsed time. Third, the LED-only interface was replaced with an SSD1306 OLED driven over I2C, displaying session time, live countdown, and completion/interrupted prompts. An added Timer Setup state lets users select session durations via GPIO buttons before the session begins.",
      },
      {
        group: 3,
        title: "STM32 Software Architecture",
        text:
          "The proposed final implementation shifts from polling to an interrupt-driven design: the IR sensor connects to an external GPIO interrupt so phone placement and removal are handled instantly, timer-selection buttons use GPIO interrupts, and a hardware timer fires every 1 second to update the countdown without blocking the CPU. The state machine expands to five states - Idle -> Timer Setup -> Focus Active -> Session Complete / Session Interrupted -> back to Idle - with each state managed by a dedicated module (Input, Timer, State Machine, Display).",
      },
    ],

    stack: [
      "C",
      "Embedded C",
      "ARM Cortex-A9 (DE10-SoC)",
      "STM32",
      "GPIO",
      "Hardware Timers",
      "External Interrupts",
      "7-Segment Display",
      "OLED (SSD1306) / I2C",
      "ADC",
      "IR Proximity Sensor",
      "State Machines",
      "Polling & Interrupt-Driven Design",
    ],

    overview:
      "The Smart Focus Dock is an embedded productivity device that helps users resist phone distractions during focus sessions. Built across a structured prototyping cycle, it was first validated on the DE10-SoC board using a polling-based state machine, then redesigned as a proposed STM32 product with interrupt-driven input handling, hardware timers, and an OLED display.",

    problem:
      "Phone interruptions during study or work reduce productivity by breaking sustained focus. The system needed reliable phone detection, accurate elapsed-time tracking, clear progress feedback, and low power consumption without adding complexity that would make the device impractical as a desk accessory.",

    solution:
      "A layered design approach was used: prototype-first on the DE10-SoC to validate the state-machine logic with simulated input, then a proposed STM32 implementation with a real IR proximity sensor, hardware timer interrupts, and an OLED display. The shift from software delays and polling to hardware timers and external interrupts preserved the core logic while making the final design responsive, accurate, and power-efficient.",

    outcome:
      "The four-state prototype was successfully demonstrated on the DE10-SoC, correctly handling focus-start, progress tracking, completion, and interruption. A state-loop bug in the interrupted sequence was identified through lab testing and corrected. The proposed STM32 redesign provides a clear and realistic path to a functional physical product.",

    bullets: [
      "Designed and validated a four-state embedded state machine (Idle, Active, Complete, Interrupted) on the DE10-SoC platform",
      "Used switches to simulate phone presence and four LEDs as a visual progress indicator across four timed steps",
      "Identified and resolved a state-loop variable bug where the interrupted flash sequence continued blinking after reset",
      "Proposed an IR proximity sensor (Sharp GP2Y0A21YK0F) replacing the prototype switch for real-world phone detection",
      "Sketched a five-state STM32 implementation adding Timer Setup with interrupt-driven GPIO and hardware timer peripherals",
      "Structured final software into modular Input, Timer, State Machine, and Display units for clean extension",
      "Selected STM32 over MSP430 and the DE10 ARM Cortex-A9 as the balanced choice for cost, power, and peripheral support",
    ],

    challenges: [
      "Validating phone-detection logic without a real sensor - pushbutton is a limited stand-in for IR presence detection",
      "State-loop variable leakage caused unexpected blinking cycles after reset",
      "Software-delay timing blocks the CPU and is unsuitable for a real-hardware implementation",
      "Scoping the final design to stay competitive with existing focus tools while remaining buildable",
    ],

    learnings: [
      "Polling loops validate logic but introduce timing fragility; hardware timers and interrupts are essential in production embedded systems",
      "State-machine bugs often hide in reset paths - full-cycle reset testing is critical",
      "Modular software design makes the transition from prototype board to production microcontroller much cleaner",
      "Even simple devices benefit from an explicit roadmap so prototype decisions don't constrain the final design",
    ],

    videos: [],

    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/kayladipaolo/Smart-Focus-Dock",
      },
    ],
  },


  {
    slug: "pmdc-motor-modeling",
    title: "PMDC Motor Modeling",
    tagline:
      "Mathematical modeling and virtual validation of a Permanent Magnet DC motor across open-loop and closed-loop control using MATLAB/Simulink.",
    heroImage: "/projects/pmdc-motor-modeling/overall-view.jpg",
    stack: [
      "MATLAB",
      "Simulink",
      "PWM",
      "H-Bridge",
      "PI Control",
      "DC Motor Festo",
      "Power Electronics",
    ],

    overview:
      "The goal was to build a mathematical model of a Festo 24 V brushed DC motor and validate it in Simulink using the motor excitation test data. Three scenarios were evaluated: open-loop duty-cycle speed control, closed-loop PI speed control, and closed-loop PI torque control under varying load conditions.",

    problem:
      "Predicting PMDC motor behaviour across different operation modes requires a consistent modelling approach that captures electrical, mechanical, and load-dependent non-linearities. A model that only fits one scenario breaks down under different operating conditions, so the team needed a structure that could be updated consistently across open-loop, speed, and torque control cases.",

    solution:
      "The motor was modelled in Simulink using transfer functions derived from the motor's electrical (armature resistance, inductance, back-EMF constant) and mechanical parameters (moment of inertia, viscous friction, load torque). Current, speed, and position loops were wrapped with PI controllers whose gains were tuned iteratively in Simulink, then cross-checked against the motor datasheet test data.",

    outcome:
      "The update-to-date Simulink model successfully matched the published excitation-test results in the neighbourhood-uncertain region. Open-loop duty-cycle control showed the expected speed-to-duty linearity, the closed-loop speed controller reduced steady-state error under varying load, and the torque-control loop delivered consistent torque output during simulated loading. The model's validation matched the reference curve, and the report's final model met the project spec.",

    bullets: [
      "Derived transfer functions for the Festo 24 V PMDC motor from armature electrical and mechanical parameters",
      "Built initial Simulink model from first principles and matched it to the excitation-test published dataset",
      "Evaluated open-loop duty-cycle speed control and characterized speed-to-duty linearity",
      "Implemented closed-loop PI speed controller tuned for steady-state accuracy under varying load",
      "Designed a closed-loop PI torque-control loop for consistent torque output during loading",
      "Used iterative Simulink tuning and analytical PI equations to align the three scenarios into a single consistent model",
    ],

    challenges: [
      "Motor non-linearity near zero made small-signal PI tuning unstable at very low speeds",
      "Load variations shifted the operating point and required separate PI gain sets for different control loops",
      "Simulink solver step-size affected numerical noise in position and acceleration signals",
      "Reconciling the project model with the published datasheet curve required normalizing parameter scales",
    ],

    learnings: [
      "A first-principles Simulink model is more generalizable than curve-fitting one operating point",
      "PI controller performance is tightly coupled to sampling rate, solver step, and load assumptions",
      "Iterative simulation tuning in Simulink is more productive when paired with analytical PI design equations",
      "Motor modeling naturally spans three control domains (current/speed/torque) that must stay consistent with each other",
    ],

    links: [
      {
        label: "Course Folder",
        href: "https://github.com/kayladipaolo/PMDC-Motor-Modeling",
      },
    ],
  },

  {
    slug: "crank-slider-pneumatic",
    title: "Crank-Slider Pneumatic Engine",
    tagline:
      "Synthesized, CAD-modelled, and three-way validated a crank-slider mechanism for a reciprocating pneumatic engine — matching SolidWorks simulation against MATLAB loop-closure and hand graphical analysis.",
    heroImage: "/projects/crank-slider-pneumatic/overall-view.jpg",
    gallery: [
      "/projects/crank-slider-pneumatic/front-side-view.jpg",
      "/projects/crank-slider-pneumatic/sign-convention.jpg",
    ],
    videos: [
      "/projects/crank-slider-pneumatic/full-engine-motion.mp4",
      "/projects/crank-slider-pneumatic/piston-cylinder-displacement.mp4",
      "/projects/crank-slider-pneumatic/piston-displacement.mp4",
      "/projects/crank-slider-pneumatic/crank-flywheel-rotation.mp4",
    ],
    sections: [
      {
        title: "Design Goal & Synthesis",
        text:
          "The goal was to synthesize a crank-slider linkage in SolidWorks that converts rotational motion into linear reciprocating motion for a reciprocating air compressor. Loop-closure geometry and vector algebra set the crank radius at 10 mm and the coupler at 72.8 mm, satisfying Grashof's law for continuous rotation. The piston has dual air ports (inlet right, outlet left, 20 mm apart), and a 20 mm flywheel smooths torque fluctuations.",
        image: "/projects/crank-slider-pneumatic/overall-view.jpg",
      },
      {
        title: "Kinematic Validation — Three Methods",
        text:
          "Motion was analyzed at a constant 20 rad/s input using SolidWorks Motion Analysis, analytical Loop Closure (MATLAB), and a hand Graphical Vector Analysis drawn to scale. Position, velocity, and acceleration were compared. Piston velocity showed excellent agreement — average cross-method error 0.80 %. Acceleration errors up to ~26 % were from numerical differentiation noise in simulation, making the smooth MATLAB analytical result the more reliable reference. Overall average error 10.29 % confirms the assembly is kinematically sound.",
        image: "/projects/crank-slider-pneumatic/front-side-view.jpg",
        reverse: true,
      },
      {
        title: "Key Design Decisions",
        text:
          "Targeted decisions: (1) zero offset between crank and piston axes for 1:1 timing; (2) cylinder pivot placed 35 mm above the crank line to minimise angular sweep and sliding contact; (3) all links sized 10–100 mm to reduce weight and wear; (4) dual-port cylinder doubled inlet/exhaust window over single-port. SolidWorks interference checking confirmed no collisions across full piston travel.",
      },
    ],
    stack: [
      "SolidWorks",
      "CAD Assembly",
      "Kinematic Synthesis",
      "Loop Closure Method",
      "Graphical Vector Analysis",
      "MATLAB",
      "Pneumatic Systems",
      "Flywheel Design",
      "Mechanism Design",
      "MBD (SolidWorks Motion Analysis)",
    ],
    overview:
      "This project was the complete design of a crank-slider mechanism for a reciprocating pneumatic air compressor. The team synthesised linkage geometry from first principles, built a full 7-component SolidWorks assembly (crank, coupler, piston, cylinder, flywheel, additional shaft, frame), and validated kinematic outputs against two independent analytical methods.",
    problem:
      "Designing a mechanism that satisfies Grashof's law for continuous rotation, the 10–100 mm link constraint, precise piston-to-port alignment, and verifiable outputs required rigorous geometric synthesis. Comparing simulation against analytical results without standardised sign and time conventions added further complexity.",
    solution:
      "The linkage was synthesised via vector loop-closure equations driven by inlet/outlet port positions: crank 10 mm, coupler 72.8 mm, zero offset. SolidWorks Motion Study exported time-series; MATLAB loop-closure code and hand graphical construction provided independent checks, with outputs mapped to absolute-value magnitudes against a shared angular baseline to resolve sign convention differences.",
    outcome:
      "Piston velocity showed excellent agreement (0.80 % average error). Acceleration errors reached ~26 %, traced to numerical noise from differentiating discrete velocity steps. Loop Closure had the lowest overall error (9.75 % vs 11.09 % graphical), making it the most reliable verification approach. The assembly was confirmed dimensionally correct and kinematically sound.",
    bullets: [
      "Synthesised linkage to satisfy Grashof's law and the 10-100 mm sizing constraint",
      "Selected a 10 mm crank radius and 72.8 mm coupler via vector loop closure",
      "Designed a dual-port cylinder aligned with frame openings for symmetric intake and exhaust",
      "Built and interference-checked a full 7-component SolidWorks assembly",
      "Applied a 20 mm flywheel to increase rotational inertia",
      "Implemented a 40-line MATLAB script for analytical loop-closure kinematics",
      "Conducted hand Graphical Vector Analysis (velocity and acceleration polygons at leftmost crank extreme) as an independent check",
      "Compared SolidWorks Motion, MATLAB loop-closure, and graphical results — overall average error 10.29 %",
    ],
    challenges: [
      "SolidWorks and MATLAB used opposite sign conventions — resolved by mapping outputs to absolute values",
      "Acceleration from differentiating discrete simulation data amplifies noise to ~26% error vs analytical",
      "Sizing piston port curve radius for adequate airflow while keeping ports inside layout constraints",
      "Hand graphical construction required consistent polygon scale across position, velocity, and acceleration diagrams",
    ],
    learnings: [
      "Loop Closure with MATLAB is the most reliable method — 9.75% avg error vs 11.09% for graphical",
      "Differentiation of discrete simulation data amplifies noise; analytical solutions give cleaner theoretical reference curves",
      "SolidWorks Motion Study is ideal for qualitative observation but requires stringent time-step control for quantitative use",
      "First-principles synthesis produces explainable, defensible designs rather than relying on iterative trial-and-error",
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/kayladipaolo/CrankSlider-Pneumatic-MME3381",
      },
    ],
  },

  {
    slug: "autonomous-robot",
    title: "Autonomous Scavenger Robot",
    tagline:
        "Fully autonomous robot using state-based control and multi-sensor integration to identify, collect, and return target objects in an unmarked environment.",
    // youtubeId: "PASTE_VIDEO_ID_HERE", // optional
    heroImage: "/projects/autonomous-robot/robot-iso.jpg",
    gallery: [
      "/projects/autonomous-robot/robot-iso.jpg",
      "/projects/autonomous-robot/robot-top.jpg",
      "/projects/autonomous-robot/board-circuit.jpg",
    ],
    videos: [
      "/projects/autonomous-robot/demo-1.mp4",
      "/projects/autonomous-robot/demo-2.mp4",
      "/projects/autonomous-robot/demo-3.mp4",
      "/projects/autonomous-robot/demo-4.mp4",
    ],
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

 {
  slug: "ros2-autonomous-vehicle",
  title: "Autonomous ROS2 Robotics Platform",
  tagline:
    "Redesigned and upgraded a Freenove 4WD robot into a ROS2-based autonomous platform with custom mechanical systems, AI perception, and distributed control.",

  heroImage: "/projects/ros2-autonomous-vehicle/hero.png",
  
  gallery: [
   "/projects/ros2-autonomous-vehicle/Full Assembly Cad.png",
   "/projects/ros2-autonomous-vehicle/Gimbal head Cad.png",
   "/projects/ros2-autonomous-vehicle/Chassis Enclosure.png",
   "/projects/ros2-autonomous-vehicle/ROS2 Architecture Diagram.png",
  ],

  videos: [
    "/projects/ros2-autonomous-vehicle/Live Demo_Auto Mode.mov",
    "/projects/ros2-autonomous-vehicle/Live Demo_Manual Mode.mov",
  ],

  sections: [
    {
        title: "Problem",
        text:
        "The stock Freenove 4WD platform was useful as an educational robot, but it was not reliable enough for repeated autonomous operation. The main issues were weak structural support, messy wiring, exposed battery packaging, and a cantilevered gimbal design that placed unnecessary bending stress on the servos.",
        image: "/projects/ros2-autonomous-vehicle/Full Assembly Cad.png",
    },
    {
        title: "Mechanical Redesign",
        text:
        "The robot was redesigned with custom CAD components including chassis enclosures, bumpers, cable routing, and a dual-supported pan-tilt gimbal. The goal was to make the platform more durable, easier to service, and better suited for real autonomous testing.",
        image: "/projects/ros2-autonomous-vehicle/Gimbal head Cad.png",
        reverse: true,
    },
    {
        title: "ROS2 System Architecture",
        text:
        "The software was built around a modular ROS2 architecture. Separate nodes handled joystick input, manual driving, autonomous commands, mode switching, motor control, ultrasonic obstacle detection, and AI-based person detection.",
        image: "/projects/ros2-autonomous-vehicle/ROS2 Architecture Diagram.png",
    },
 ],

  stack: [
    "ROS2",
    "Python",
    "Raspberry Pi",
    "Computer Vision",
    "CAD",
    "SolidWorks",
    "3D Printing",
    "Ultrasonic Sensors",
    "Embedded Systems",
    "Git",
  ],

  overview:
    "This project transformed a stock Freenove 4WD educational robot into a more robust autonomous robotics platform through a combination of mechanical redesign, ROS2 software architecture, perception systems, and hardware integration. The project was completed over four development sprints and focused on improving reliability, modularity, and autonomous functionality.",

  problem:
    "The original Freenove platform suffered from structural weaknesses, poor cable management, exposed battery packaging, and a cantilevered gimbal system that introduced excessive loading on servo components. The software architecture was also limited for future autonomous robotics development.",

  solution:
    "Our team redesigned critical mechanical systems including the chassis, bumpers, battery housing, and pan-tilt gimbal while migrating the platform to a distributed ROS2 architecture. Separate nodes were used for motor control, camera perception, ultrasonic sensing, teleoperation, and autonomous decision-making. AI-based person detection and obstacle stopping were integrated into the final system.",

  outcome:
    "The completed platform successfully demonstrated manual teleoperation, autonomous navigation, obstacle avoidance, ROS2 node communication, AI-based person detection, and significantly improved structural reliability. The project provided experience across robotics software, mechanical design, embedded systems, and systems integration.",

  bullets: [
    "Redesigned the stock pan-tilt gimbal using a dual-support architecture to reduce servo spline loading",
    "Developed custom CAD models for chassis reinforcements, battery enclosures, and impact-resistant bumpers",
    "Migrated the platform to a modular ROS2 distributed control architecture",
    "Integrated joystick teleoperation using ROS2 topics and command arbitration",
    "Implemented ultrasonic-based obstacle detection and emergency stopping",
    "Integrated camera-based person detection for autonomous safety behavior",
    "Performed full-system validation including wiring reliability, motion testing, and integration testing",
    "Designed and 3D printed custom structural components to improve durability and serviceability",
  ],

  challenges: [
    "Configuring ROS2 communication between Raspberry Pi hardware and development workstations",
    "Managing mechanical load paths to eliminate cantilever-induced servo fatigue",
    "Maintaining reliable communication between multiple ROS2 nodes",
    "Balancing structural reinforcement with overall system weight and manufacturability",
    "Integrating perception, control, and actuation into a single reliable system",
  ],

  learnings: [
    "Robotics projects require tight integration across software, hardware, and mechanical systems",
    "ROS2 provides significant advantages in modularity and scalability compared to monolithic architectures",
    "Mechanical reliability often determines overall system performance more than software sophistication",
    "System-level testing is critical for identifying integration failures that individual subsystems cannot reveal",
    "Distributed robotics architectures improve maintainability and future extensibility",
  ],

  links: [],
 },
 {
  slug: "rps1-hand",
  title: "Autonomous RPS-1 Mechatronic Hand",
  tagline:
    "Designed and built a mechatronic system that plays Rock-Paper-Scissors-Minus-One: two 3D-printed tendon-driven hands, dual ESP32 master-slave control, and a probabilistic game-theory decision engine.",

  heroImage: "/projects/rps1-hand/hero.jpg",

  gallery: [
    "/projects/rps1-hand/system-architecture.jpg",
    "/projects/rps1-hand/knuckles.jpg",
    "/projects/rps1-hand/hand-view-1.jpg",
    "/projects/rps1-hand/hand-view-2.jpg",
    "/projects/rps1-hand/hand-view-3.jpg",
    "/projects/rps1-hand/software-flowchart.jpg",
    "/projects/rps1-hand/spool-design.jpg",
    "/projects/rps1-hand/servo-mount.jpg",
  ],

  sections: [
    {
      title: "System Overview",
      text:
        "The goal was a fully integrated mechatronic system capable of displaying two hand gestures, accepting opponent input, and autonomously removing the weaker gesture using game theory. Two 3D-printed hands are actuated by DC motors driven through an H-bridge motor driver, with cover-based retraction handled by servo motors. Two ESP32 microcontrollers communicate peer-to-peer via ESP-NOW in a master-slave configuration - the master executes strategy and controls the left hand, the slave manages the right.",
      image: "/projects/rps1-hand/system-architecture.jpg",
    },
    {
      title: "Mechanical Design",
      text:
        "The hands were 3D printed in separate bone-like finger segments and a single palm. Fingers are actuated through a tendon-driven system: DC motors wind nylon string wrapped around custom-designed spools with a centre groove to prevent entanglement. Elastic bands return the fingers to their default position when the motor reverses, eliminating the need for return actuators. A servo-driven cover mechanism performs the 'minus one' action - one hand is covered based on the optimal calculated move.",
      images: [
          "/projects/rps1-hand/hand-view-1.jpg",
          "/projects/rps1-hand/hand-view-2.jpg",
          "/projects/rps1-hand/hand-view-3.jpg",
        ],
      reverse: true,
    },
    {
      title: "Control & Communication Architecture",
      text:
        "The master ESP32 initialises the hands to paper, randomly generates two distinct gestures (PR, PS, or RS), and drives the left hand's motors directly. It then prompts the user to enter the opponent's two-character gesture string (validated character-by-character). Once confirmed, the game strategy algorithm computes the optimal hand to retain and signals the slave ESP32 via ESP-NOW to move both the right hand and the cover servo. A sequence-numbering scheme filters stale or duplicated packets to prevent desynchronisation.",
      image: "/projects/rps1-hand/software-flowchart.jpg",
    },
    {
      title: "Game Strategy & Testing",
      text:
        "Because both hands always display distinct gestures, the system transforms the input space into only three cases. A dedicated strategy routine compares our gestures against the opponent's and selects the hand that maximises the probability of winning. Iterative mechanical testing refined the spool design (single spool with centre groove, 1 cm depth) and calibrated motor timing constants for reliable gesture formation under real friction and tendon tension. Software fixes addressed GPIO initialisation glitches at startup, servo misalignment, and ESP-NOW peer-pairing errors.",
      image: "/projects/rps1-hand/spool-design.jpg",
      reverse: true,
    },
  ],

  stack: [
    "ESP32",
    "Embedded C/C++",
    "ESP-NOW",
    "DC Motor Control (H-Bridge)",
    "Servo Motors",
    "CAD / SolidWorks",
    "3D Printing",
    "Game Theory",
    "State Machines",
    "Master-Slave Architecture",
  ],

  overview:
    "This project explored how a robotic system can autonomously play Rock-Paper-Scissors-Minus-One by combining tendon-driven mechanical actuation, distributed embedded control, and probabilistic decision-making. The system was built by a five-person team and completed across structured sprints with full mechanical, electrical, and software integration.",

  problem:
    "Playing RPS-1 requires both forming two physical gestures simultaneously and making a rapid strategic decision about which gesture to keep - a challenge that spans mechanical actuation, real-time control, wireless communication between two controllers, and game-theory optimisation. The open-loop tendon system introduced repeatability risks, while managing four DC motors and two servos across two boards required careful power distribution and communication reliability.",

  solution:
    "A dual-ESP32 architecture was chosen for power distribution and modular control. Mechanical fingers were grouped into two tendon lines per hand driven by compact grooved spools. Servo covers handle the withdrawal gesture. The master board normalises the initial display to two distinct gestures, validates user input, and applies a three-case strategy algorithm before signalling the slave via ESP-NOW with packet sequence validation.",

  outcome:
    "The integrated system reliably formed rock, paper, and scissors gestures, accepted validated opponent input, and autonomously selected the optimal hand to keep. Key fixes included boot-time GPIO stabilisation, explicit servo position initialisation, and ESP-NOW peer-pairing correction. The project demonstrated cross-discipline mechatronic integration including embedded communication, mechanical design iteration, and algorithm-backed decision execution.",

  bullets: [
    "Designed a 3D-printed tendon-driven hand mechanism with grouped finger actuation using only two DC motors per hand",
    "Developed a grooved dual-line spool to prevent wire entanglement on a single motor shaft",
    "Implemented elastic return bands for passive finger retraction, reducing actuator count",
    "Built a master-slave ESP32 communication layer using ESP-NOW with sequence-numbered packet validation",
    "Implemented a three-case probabilistic game strategy algorithm based on opponent gesture input",
    "Created a servo-driven cover mechanism to physically withdraw one hand with game-theory-guided selection",
    "Conducted iterative mechanical testing to calibrate motor timing constants and spool dimensions",
    "Diagnosed and resolved boot-time motor drift, servo misalignment, and slave communication desync issues",
  ],

  challenges: [
    "Timing-based open-loop control produced gesture inconsistencies requiring iterative calibration",
    "Managing four DC motors and two servos across two ESP32s within power distribution constraints",
    "Wire entanglement in the dual-tendon spool design resolved through iterative geometric refinement",
    "Sensor-free finger positioning made the system sensitive to friction and tendon tension variation",
    "Maintaining ESP-NOW communication reliability across rapid consecutive game rounds",
  ],

  learnings: [
    "Mechanical and software subsystems must be developed in parallel - small CAD changes directly affect motor timing",
    "Open-loop tendon actuation is highly repeatable once calibrated but difficult to repurpose for new tasks",
    "Sequence-numbered packet validation is essential for reliable peer-to-peer communication in distributed embedded systems",
    "Early mechanical prototyping (one hand at a time) prevents wasted material and isolates failure modes",
    "Game-theory-backed decision logic is straightforward to implement once the input space is constrained to feasible cases",
  ],

  videos: [
    "/projects/rps1-hand/demo.mov",
  ],

}
];
