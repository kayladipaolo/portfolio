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
      "Stop drowning in browser tabs. ShopGenius pulls pricing, reviews, and expert sentiment from six APIs and turns them into one clear recommendation.",
    heroImage: "/projects/api-integration/architecture-clean.png",
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

    sections: [
      {
        title: "The Problem with Tech Shopping",
        text:
          "Buying a new laptop or GPU shouldn't take six hours of research. You open Amazon, then Best Buy, then Reddit, then a YouTube review — and you still aren't sure. ShopGenius was built to collapse that whole process into a single automated workflow: one product query in, one clear recommendation out.",
        image: "/projects/api-integration/architecture.jpeg",
      },
      {
        title: "How It Works",
        text:
          "User input is validated against the Amazon Product API first — catching bad queries before they cascade into broken downstream calls. From there, pricing data is pulled concurrently from Best Buy and eBay, YouTube review transcripts are fetched and scored with Google NLP for sentiment, and all of it gets synthesized by OpenAI into a pros-and-cons summary. Concurrent requests kept the response time tight; early validation kept the error rate low.",
        reverse: true,
      },
    ],

    overview:
      "ShopGenius is an automated shopping assistant that reduces the time and effort required to research tech purchases. It aggregates pricing, customer sentiment, and expert reviews across six platforms and generates a personalized recommendation from minimal user input.",

    problem:
      "Researching tech purchases is fragmented and time-consuming. Consumers compare prices across retailers, watch review videos, and read customer feedback separately — making it hard to reach a confident decision efficiently.",

    solution:
      "ShopGenius consolidates the process into one automated pipeline. Input is validated early, API calls run concurrently, sentiment analysis filters noise, and OpenAI synthesizes everything into a clear summary.",

    outcome:
      "The system demonstrated how multiple external data sources can be orchestrated into a cohesive recommendation engine — fast, reliable, and readable, with minimal input required from the user.",

    bullets: [
      "Designed a modular, layered architecture for integrating six external APIs without tight coupling",
      "Implemented concurrent API requests to minimize total response time across data sources",
      "Used the Amazon Product API for early input validation to prevent cascading errors downstream",
      "Fetched and compared pricing and review data from Best Buy and eBay in parallel",
      "Processed YouTube review transcripts through Google NLP to extract sentiment signals from expert sources",
      "Synthesized heterogeneous data into a human-readable pros-and-cons summary via OpenAI",
    ],

    challenges: [
      "Handling ambiguous user queries without triggering cascading errors across dependent API calls",
      "Maintaining consistency across heterogeneous data sources with different formats and quality levels",
      "Balancing response time against data completeness — not all APIs respond at the same speed",
      "Filtering low-confidence or noisy reviews before they pollute the final recommendation",
    ],

    learnings: [
      "Early input validation dramatically reduces downstream complexity — catching bad data at the source is always cheaper",
      "Concurrency is essential when orchestrating multiple external APIs; sequential calls compound latency",
      "Clean data flow design pays off in both reliability and debuggability when things go wrong",
      "Good system design is as much about coordination and planning as it is about implementation",
    ],
  },

  {
    slug: "ai-project",
    title: "Predicting Future U.S. Unemployment Rates",
    tagline:
      "Can deep learning beat a naïve baseline on one of the most persistent time series in macroeconomics? We built the pipeline to find out.",
    heroImage: "/projects/ai-project/forecast-plot.jpg",
    stack: [
      "Python",
      "Time-Series Forecasting",
      "Data Engineering",
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
      "This project evaluated how well statistical and deep learning models can forecast monthly U.S. unemployment rates. Classical baselines were compared against neural approaches under time-aware evaluation to assess both accuracy and real-world generalization.",

    problem:
      "Unemployment series are slow-moving, highly autocorrelated, and disrupted by economic shocks that are inherently hard to predict. These properties make short-term forecasting difficult and limit how much more complex models can actually help.",

    solution:
      "We built a structured forecasting pipeline starting with ARIMA and SARIMA baselines, then progressing through MLP, LSTM, and GRU architectures. Additional macroeconomic indicators provided broader context, and every split was strictly chronological to prevent data leakage.",

    outcome:
      "An optimized GRU achieved the best balance of responsiveness and generalization. Improvements over naïve baselines were modest — a result that turned out to be the most interesting finding of the project.",

    bullets: [
      "Compiled a unified macroeconomic dataset from multiple U.S. labor and economic indicator sources",
      "Aligned mixed-frequency data to a consistent monthly timeline without dropping observations",
      "Engineered lagged features representing up to 12 months of prior economic conditions",
      "Trained and evaluated ARIMA, SARIMA, MLP, LSTM, and GRU models on the same dataset",
      "Enforced strict chronological train/validation/test splits to prevent any form of data leakage",
      "Applied Bayesian hyperparameter optimization via Keras Tuner across both recurrent architectures",
    ],

    challenges: [
      "A highly persistent series meant achievable improvements over simple baselines were inherently small",
      "Non-stationarity and economic shocks made short-term predictability fundamentally limited",
      "Deep learning models were prone to over-parameterization given the dataset size",
      "Outperforming naïve baselines proved difficult — the data characteristics constrained results more than architecture did",
    ],

    learnings: [
      "Model performance is often bottlenecked by data characteristics, not architecture — more complexity doesn't always help",
      "In macroeconomic forecasting, generalization and realism matter far more than chasing marginal accuracy gains",
      "Recurrent models benefit from careful regularization and sequence-length tuning — defaults rarely work well",
      "Rigorous preprocessing and evaluation design are what make results actually meaningful",
    ],

    sections: [
      {
        title: "The Forecasting Challenge",
        text:
          "Monthly U.S. unemployment is notoriously hard to predict: it's slow-moving, highly persistent, and extremely sensitive to economic shocks that are by definition unpredictable. The project treated this as a time-aware forecasting problem from the start — every model was evaluated on strictly chronological splits, no shuffling, no leakage. The question wasn't just 'can we build a model,' it was 'does more complexity actually help here?'",
        image: "/projects/ai-project/forecast-plot.jpg",
      },
      {
        title: "Model Pipeline & Hyperparameter Optimization",
        text:
          "We built a four-stage pipeline: ARIMA and SARIMA baselines first, then a stateless MLP, then LSTM and GRU with lagged window sequences. Both recurrent models went through Bayesian hyperparameter optimization with Keras Tuner, converging on a 64→32 unit two-layer architecture with modest dropout and a 1e-3 learning rate. The optimized GRU tracked long-term trends the most reliably — though beating a naïve baseline by a large margin proved harder than expected, which was the most honest result of the project.",
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
      "An embedded focus-session device — state machine prototyped on the DE10 board via CPUlator, then redesigned as a proposed STM32 product with IR sensing and OLED feedback.",

    heroImage: "/projects/smart-focus-dock/hero-image.jpg",

    gallery: [
      "/projects/smart-focus-dock/system-flowchart.jpg",
    ],

    sections: [
      {
        group: 1,
        title: "The Idea",
        text:
          "Phones are the easiest way to break your own focus. The Smart Focus Dock is a small embedded device that detects when a phone is placed on it, starts a timed session, and tracks whether you make it through. Leave the phone there — session complete. Pick it up early — session interrupted. The goal was to validate the core logic in simulation before scoping a realistic hardware path.",
      },
      {
        group: 1,
        title: "Prototype on CPUlator",
        text:
          "The initial prototype ran on the CPUlator ARM simulator targeting the DE10-Standard board. SW0 simulated phone presence; SW1 was a reset. The 7-segment HEX displays showed system state: HEX1 displayed P (focus active), C (complete), or E (interrupted), while HEX0 stepped through 1–4 as the session progressed. A polling-loop state machine checked SW0 each cycle. One bug surfaced: the interrupted flash sequence failed to clear its loop counter before returning to Idle, causing phantom blink bursts on reset. Isolating and fixing the state-reset path resolved it.",
      },
      {
        group: 2,
        title: "Moving Toward a Real Product",
        text:
          "Three upgrades were planned to take this from a simulated prototype to a real desk device. First, SW0 gets replaced with a Sharp GP2Y0A21YK0F IR proximity sensor wired to the STM32's ADC — actual phone detection instead of a button press. Second, the software delay loop that blocks the CPU gets replaced with a hardware timer peripheral firing every 1 second. Third, the HEX displays get replaced with an SSD1306 OLED over I2C, showing a live countdown, session duration, and state prompts. A new Timer Setup state lets users set duration before starting.",
      },
      {
        group: 2,
        title: "STM32 Architecture",
        text:
          "The proposed STM32 implementation shifts from polling to interrupt-driven design throughout. Phone placement and removal trigger an external GPIO interrupt immediately. Timer-selection buttons do the same. The hardware timer ISR updates the countdown every second without blocking anything else. The state machine expands from four states to five — Idle → Timer Setup → Focus Active → Complete / Interrupted → Idle — with each state managed by a dedicated software module: Input, Timer, State Machine, and Display.",
      },
    ],

    stack: [
      "Embedded C",
      "ARM Cortex-A9 (DE10 / CPUlator)",
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
      "The Smart Focus Dock is an embedded productivity device that detects phone placement and runs timed focus sessions with visual feedback. It was prototyped in CPUlator targeting the DE10 board, then redesigned as a proposed STM32 product with interrupt-driven input, hardware timers, and an OLED display.",

    problem:
      "Phone interruptions break sustained focus during work and study. The system needed reliable phone detection, accurate elapsed-time tracking, clear progress feedback, and low power consumption — without being so complex it becomes impractical as a desk accessory.",

    solution:
      "Prototype-first on CPUlator to validate state-machine logic with simulated inputs, then a proposed STM32 implementation with a real IR sensor, hardware timer interrupts, and OLED display. Shifting from polling to interrupts and from software delays to hardware timers preserved the core logic while making the final design responsive and power-efficient.",

    outcome:
      "The four-state CPUlator prototype correctly handled focus-start, progress tracking, completion, and interruption. A state-reset bug in the interrupted sequence was identified and fixed. The proposed STM32 redesign provides a clear path to a functional physical product.",

    bullets: [
      "Implemented a four-state state machine (Idle, Active, Complete, Interrupted) in Embedded C targeting the DE10 via CPUlator",
      "Used SW0 and SW1 (switches) to simulate phone presence and reset; HEX0/HEX1 (7-segment) for state and progress display",
      "Identified and fixed a state-reset variable bug causing phantom blink bursts in the interrupted-state flash sequence",
      "Proposed an IR proximity sensor (Sharp GP2Y0A21YK0F) connected to the STM32 ADC for real phone detection",
      "Designed a five-state STM32 implementation with a new Timer Setup state and interrupt-driven GPIO throughout",
      "Replaced software delay timing with a hardware timer peripheral that fires an ISR every 1 second",
      "Structured the final software into four modular units: Input, Timer, State Machine, and Display",
      "Chose STM32 over MSP430 and the DE10 Cortex-A9 based on peripheral support, cost, and power efficiency",
    ],

    challenges: [
      "Validating phone-detection behavior without a real sensor — a switch is a limited stand-in for IR presence detection",
      "State-loop variable leakage caused unexpected blink cycles after returning to Idle from Interrupted",
      "Software-delay timing blocks the CPU and is fundamentally unsuitable for a responsive production device",
      "Scoping the final design to remain buildable while staying competitive with existing focus tools",
    ],

    learnings: [
      "Polling loops are fine for validating logic, but hardware timers and interrupts are non-negotiable in a real embedded product",
      "State machine bugs tend to hide in reset and transition paths — testing full state cycles, not just happy paths, is essential",
      "Modular software structure makes the jump from prototype board to production microcontroller significantly cleaner",
      "Even a simple device benefits from an explicit roadmap — prototype decisions shouldn't constrain the final design",
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
    title: "PMDC Motor Modeling & Simulation",
    tagline:
      "Built a first-principles Simulink model of a 24V Festo DC motor and validated it across three control modes — open-loop speed, closed-loop speed, and closed-loop torque.",
    heroImage: "/projects/pmdc-motor-modeling/hero-image.jpg",
    stack: [
      "MATLAB",
      "Simulink",
      "PWM",
      "H-Bridge",
      "PI Control",
      "DC Motor (Festo)",
      "Power Electronics",
    ],

    sections: [
      {
        title: "Modeling from First Principles",
        text:
          "The Festo 24V brushed DC motor was modeled in Simulink using transfer functions derived directly from its electrical and mechanical parameters — armature resistance, inductance, back-EMF constant, moment of inertia, viscous friction, and load torque. Rather than curve-fitting a single operating point, the goal was a consistent model structure that could hold up across three distinct control scenarios without being re-derived each time.",
        image: "/projects/pmdc-motor-modeling/hero-image.jpg",
      },
      {
        title: "Three Control Scenarios",
        text:
          "The same model was validated under open-loop duty-cycle speed control, closed-loop PI speed control, and closed-loop PI torque control. PI gains were tuned iteratively in Simulink against published excitation-test data, and cross-checked using analytical PI design equations. Open-loop testing confirmed expected speed-to-duty linearity; the closed-loop speed controller reduced steady-state error under varying loads; the torque loop maintained consistent output during simulated loading.",
        reverse: true,
      },
    ],

    overview:
      "The goal was to build a mathematical model of a Festo 24V brushed DC motor and validate it in Simulink against published excitation-test data. Three scenarios were evaluated: open-loop duty-cycle speed control, closed-loop PI speed control, and closed-loop PI torque control under varying load conditions.",

    problem:
      "Predicting PMDC motor behavior across multiple operation modes requires a model structure that captures electrical, mechanical, and load-dependent non-linearities consistently. A model that only fits one scenario breaks down under different conditions — the challenge was building one that could be updated coherently across all three.",

    solution:
      "The motor was modeled in Simulink using transfer functions derived from datasheet parameters. PI controllers were wrapped around current, speed, and position loops, with gains tuned iteratively in Simulink and cross-checked against analytical PI equations.",

    outcome:
      "The Simulink model successfully matched the published excitation-test results. All three control scenarios validated correctly — open-loop linearity, closed-loop speed accuracy under load, and consistent torque output during simulated loading.",

    bullets: [
      "Derived transfer functions for the Festo 24V PMDC motor from first-principles electrical and mechanical parameters",
      "Built and parameterized a Simulink model matched against the published excitation-test dataset",
      "Evaluated open-loop duty-cycle speed control and characterized speed-to-duty linearity",
      "Implemented and tuned a closed-loop PI speed controller for steady-state accuracy under varying load",
      "Designed a closed-loop PI torque-control loop for consistent torque output during simulated loading",
      "Used iterative Simulink tuning paired with analytical PI design equations to keep all three scenarios consistent",
    ],

    challenges: [
      "Motor non-linearity near zero speed made small-signal PI tuning unstable at very low speeds",
      "Load variations shifted the operating point and required separate PI gain consideration for each control loop",
      "Simulink solver step-size introduced numerical noise into position and acceleration signals",
      "Reconciling the simulation model with the published datasheet curve required careful parameter normalization",
    ],

    learnings: [
      "A first-principles model generalizes far better than curve-fitting a single operating point — it holds up when conditions change",
      "PI controller performance is tightly coupled to sampling rate, solver step size, and load assumptions — getting one wrong cascades",
      "Iterative Simulink tuning is most effective when anchored by analytical PI design equations, not guesswork",
      "Motor modeling spans three control domains (current, speed, torque) that must stay internally consistent — you can't tune them in isolation",
    ],
  },

  {
    slug: "crank-slider-pneumatic",
    title: "Crank-Slider Pneumatic Engine",
    tagline:
      "Designed a crank-slider mechanism for a reciprocating air compressor from scratch — synthesized in SolidWorks, verified analytically in MATLAB, and cross-checked by hand.",
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
        title: "Design & Synthesis",
        text:
          "The goal was to synthesize a crank-slider linkage that converts continuous rotation into linear reciprocating motion for a pneumatic air compressor. Vector loop-closure equations driven by the piston port positions set the crank at 10 mm and the coupler at 72.8 mm — satisfying Grashof's law for full continuous rotation. A 20 mm flywheel was added to smooth torque fluctuations, and a dual-port cylinder (inlet right, outlet left, 20 mm apart) was designed for symmetric intake and exhaust.",
        image: "/projects/crank-slider-pneumatic/overall-view.jpg",
      },
      {
        title: "Three-Method Kinematic Validation",
        text:
          "Kinematics were analyzed at a constant 20 rad/s input using three independent methods: SolidWorks Motion Analysis, MATLAB loop-closure equations, and a hand-drawn graphical vector analysis. Piston velocity showed excellent agreement — average cross-method error of 0.80%. Acceleration errors ran up to ~26%, traced to numerical noise from differentiating discrete simulation data; the smooth MATLAB analytical curve was the more reliable reference. Overall average error of 10.29% confirmed the assembly is kinematically sound.",
        image: "/projects/crank-slider-pneumatic/front-side-view.jpg",
        reverse: true,
      },
      {
        title: "Key Design Decisions",
        text:
          "Zero offset between crank and piston axes for 1:1 timing. Cylinder pivot placed 35 mm above the crank line to minimize angular sweep and sliding contact. All links sized 10–100 mm to reduce weight and wear. Dual-port cylinder doubles the inlet/exhaust window over a single-port design. SolidWorks interference checking confirmed no collisions across full piston travel.",
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
      "SolidWorks Motion Analysis",
    ],
    overview:
      "Complete design of a crank-slider mechanism for a reciprocating pneumatic air compressor. Linkage geometry was synthesized from first principles, a full 7-component SolidWorks assembly was built, and kinematic outputs were validated against two independent analytical methods.",
    problem:
      "The mechanism had to satisfy Grashof's law, a 10–100 mm link constraint, precise piston-to-port alignment, and produce verifiable kinematic outputs. Comparing simulation against analytical results across methods with different sign and time conventions added further complexity.",
    solution:
      "Linkage synthesized via vector loop-closure equations from port positions: crank 10 mm, coupler 72.8 mm, zero offset. SolidWorks Motion Study exported time-series data; MATLAB loop-closure code and hand graphical construction provided independent checks, with all outputs mapped to absolute-value magnitudes to resolve sign convention differences.",
    outcome:
      "Piston velocity agreement was excellent (0.80% average error). Acceleration errors reached ~26%, traced to numerical differentiation noise. MATLAB loop closure had the lowest overall error (9.75% vs 11.09% graphical), making it the most reliable verification method.",
    bullets: [
      "Synthesized a crank-slider linkage satisfying Grashof's law and a 10–100 mm sizing constraint via vector loop closure",
      "Selected 10 mm crank radius and 72.8 mm coupler length from port position geometry",
      "Designed a dual-port cylinder with symmetric inlet and exhaust openings aligned to the frame",
      "Built and interference-checked a full 7-component SolidWorks assembly across the complete piston travel",
      "Added a 20 mm flywheel to increase rotational inertia and smooth torque output",
      "Implemented a MATLAB loop-closure script for independent analytical kinematic verification",
      "Conducted hand Graphical Vector Analysis (velocity and acceleration polygons at leftmost crank extreme)",
      "Compared all three methods — overall average error 10.29%, with velocity agreement at 0.80%",
    ],
    challenges: [
      "SolidWorks and MATLAB used opposite sign conventions — resolved by mapping outputs to absolute-value magnitudes",
      "Differentiating discrete simulation data amplified noise in acceleration results to ~26% vs the analytical reference",
      "Sizing piston port curve radius for adequate airflow while keeping ports within tight layout constraints",
      "Hand graphical construction required consistent polygon scale across position, velocity, and acceleration diagrams",
    ],
    learnings: [
      "MATLAB loop closure is the most reliable kinematic verification method here — 9.75% avg error vs 11.09% for graphical",
      "Differentiating discrete data amplifies noise significantly; use analytical solutions for any quantitative comparison",
      "SolidWorks Motion Study is excellent for visualizing motion but needs tight time-step control for quantitative accuracy",
      "First-principles synthesis produces designs that are explainable and defensible — not just things that happened to work",
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
    title: "Autonomous Scavenger Robot – BUMBLEBEE",
    tagline:
      "Designed and built BUMBLEBEE: a fully autonomous robot that explores an unmarked arena, sorts gems by color, collects only the green ones, and returns home to deposit them — no human input, no predefined path.",
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
      "ESP32-WROOM-32",
      "Arduino / Embedded C++",
      "TCS34725 Color Sensor",
      "HR-SR04 Ultrasonic",
      "IR Beacon (TSOP32238)",
      "Quadrature Encoders",
      "MX1508 Motor Driver",
      "Servo Actuation",
      "Circuit Design",
      "SolidWorks CAD",
    ],

    sections: [
      {
        title: "The Mission",
        text:
          "BUMBLEBEE had to navigate an unmarked arena, detect and sort incoming gems by color, collect only the green ones, and return to home base to deposit them — all within a strict time limit and without any external guidance. The arena had no predefined paths, lighting varied across the floor, and the robot had to make every navigation and sorting decision onboard in real time.",
        image: "/projects/autonomous-robot/robot-top.jpg",
      },
      {
        title: "Sorting, Collection & Homing",
        text:
          "A TCS34725 color sensor continuously read raw RGBC values as objects entered the intake. After extensive calibration, green gems were identified within a tight window (R: 16–20, G: 18–23, B: 11–14) and routed by a servo-driven sorting arm to the collection bucket; non-green gems were deflected. After traveling ~100 cm in collection mode, the robot stopped, reversed, and entered deposit mode — spinning in place listening on UART2 at 2400 baud for the IR beacon's 'U' signal. Once three consecutive detections confirmed alignment, the robot drove backward and used the ultrasonic sensor to stop within 2 cm of the base before dumping the bucket.",
        image: "/projects/autonomous-robot/board-circuit.jpg",
        reverse: true,
      },
    ],

    overview:
      "BUMBLEBEE is a fully autonomous scavenger robot built for MSE 2202. It explores an unmarked arena, identifies green target gems using a color sensor with calibrated RGBC thresholds, collects them via a servo-driven sorting mechanism, then navigates home using an IR beacon and deposits using a bucket servo.",

    problem:
      "Real-world autonomy is non-trivial: color sensor readings shift with lighting, wheel drift accumulates over distance, and the IR beacon signal is noisy without confirmation logic. Every decision had to be made onboard under tight time and power constraints.",

    solution:
      "A multi-stage state machine drove the robot through collection, return, IR lock, ultrasonic approach, and deposit phases. Tight RGBC calibration windows replaced normalized ratios for green detection. IR homing used a 3-detection consensus threshold before committing to reverse approach, eliminating false triggers from beacon reflections.",

    outcome:
      "The robot successfully demonstrated full autonomous operation — collecting green gems and returning home to deposit within the time limit. Iterative sensor calibration and the multi-detection IR lock were the biggest factors in achieving consistent runs.",

    bullets: [
      "Built a multi-stage autonomous state machine: standby → collection → return → IR lock → ultrasonic approach → deposit",
      "Calibrated TCS34725 color sensor to a tight RGBC window (R:16–20, G:18–23, B:11–14) for reliable green detection under varying arena lighting",
      "Implemented servo-driven sorting arm with three positions: test, accept (green), and reject (not green)",
      "Used TSOP32238 IR receiver on UART2 at 2400 baud with a 3-consecutive-detection threshold for robust home-base locking",
      "Homed to base using IR alignment then switched to HR-SR04 ultrasonic for final close-range approach (stop within 2 cm)",
      "Tracked distance with dual quadrature encoders (1096 counts/rev) for dead-reckoning and turn control",
      "Designed and assembled full custom circuit using ESP32-WROOM-32 and MX1508 dual motor driver",
      "Built robot chassis in SolidWorks and integrated all mechanical and electrical systems",
    ],

    challenges: [
      "Color sensor readings were highly sensitive to lighting angle and floor surface — static thresholds worked initially then failed in different arena zones",
      "Wheel drift accumulated over the full collection run, causing the return path to overshoot the IR detection zone",
      "IR beacon reflections off arena walls caused false positives — solved with a 3-consecutive-detection consensus before committing to approach",
      "Coordinating sorting arm timing with robot motion required careful interrupt and timer management to avoid blocking the drive loop",
    ],

    learnings: [
      "Tight empirical RGBC thresholds outperformed normalized ratios for color detection — the simpler approach was more robust",
      "Consensus-based sensor confirmation (3 detections before acting) is worth the latency cost when false positives cause catastrophic behavior",
      "State machines for autonomous robots need explicit failure handling — an unchecked state transition at the wrong time can derail the entire run",
      "Mechanical design and software are tightly coupled in robotics: the sorting arm geometry directly constrained what timing was achievable in software",
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
      "Took a basic educational robot kit and rebuilt it into a properly engineered autonomous platform — custom CAD, modular ROS2 architecture, and AI person detection.",

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
        title: "What Was Wrong with the Stock Platform",
        text:
          "The Freenove 4WD kit is great for learning, but not for actual autonomous testing. The structure flexed under load, wiring was exposed and prone to snagging, the battery pack had no housing, and the pan-tilt gimbal was cantilevered — concentrating bending stress directly on the servo splines. After a few runs, reliability became the limiting factor.",
        image: "/projects/ros2-autonomous-vehicle/Full Assembly Cad.png",
      },
      {
        title: "Mechanical Redesign",
        text:
          "We redesigned the platform with custom SolidWorks CAD across four sprints. The gimbal got a dual-support architecture to distribute servo loading. Chassis enclosures organized wiring and protected electronics. Impact-resistant bumpers were added front and rear. A battery enclosure replaced the exposed pack. Everything was designed to be 3D-printable and field-serviceable.",
        image: "/projects/ros2-autonomous-vehicle/Gimbal head Cad.png",
        reverse: true,
      },
      {
        title: "ROS2 Architecture",
        text:
          "The software was rebuilt from scratch as a modular ROS2 system. Separate nodes handled joystick input, manual drive commands, autonomous behavior, mode switching, motor control, ultrasonic obstacle detection, and AI-based person detection. Nodes communicated via ROS2 topics, making individual subsystems easy to develop, test, and swap out independently. Getting reliable inter-node communication between the Raspberry Pi and development workstations was the biggest software challenge.",
        image: "/projects/ros2-autonomous-vehicle/ROS2 Architecture Diagram.png",
      },
    ],

    stack: [
      "ROS2",
      "Python",
      "Raspberry Pi",
      "Computer Vision",
      "SolidWorks",
      "CAD",
      "3D Printing",
      "Ultrasonic Sensors",
      "Embedded Systems",
      "Git",
    ],

    overview:
      "This project transformed a stock Freenove 4WD educational robot into a robust autonomous platform through mechanical redesign, a distributed ROS2 software architecture, and integrated perception systems. Completed over four development sprints.",

    problem:
      "The original platform had structural weaknesses, poor cable management, exposed battery packaging, and a cantilevered gimbal causing servo fatigue. The software architecture was also too limited for real autonomous development.",

    solution:
      "We redesigned the chassis, bumpers, battery housing, and gimbal with custom SolidWorks CAD, then migrated to a distributed ROS2 architecture with separate nodes for motor control, perception, sensing, teleoperation, and autonomous decision-making.",

    outcome:
      "The platform demonstrated manual teleoperation, autonomous navigation, obstacle avoidance, and AI-based person detection — with significantly improved structural reliability throughout.",

    bullets: [
      "Redesigned the pan-tilt gimbal with a dual-support architecture to distribute servo spline loading",
      "Developed custom CAD models for chassis reinforcements, battery enclosures, and impact-resistant bumpers",
      "Migrated the platform to a modular ROS2 distributed control architecture from scratch",
      "Integrated joystick teleoperation via ROS2 topics with command arbitration between manual and autonomous modes",
      "Implemented ultrasonic-based obstacle detection with emergency stopping behavior",
      "Integrated camera-based AI person detection for autonomous safety response",
      "Ran full-system validation including wiring reliability, motion testing, and integration testing",
      "3D printed all custom structural components for durability and field serviceability",
    ],

    challenges: [
      "Configuring reliable ROS2 communication between the Raspberry Pi and development workstations across the network",
      "Managing mechanical load paths to eliminate cantilever-induced servo fatigue in the gimbal",
      "Keeping multiple ROS2 nodes synchronized and communicating reliably under real operating conditions",
      "Balancing structural reinforcement with overall system weight and printability constraints",
      "Integrating perception, control, and actuation into a single system without subsystem interference",
    ],

    learnings: [
      "Robotics projects demand tight integration across software, hardware, and mechanical — weakness in any one layer limits the whole system",
      "ROS2's modular architecture pays off: being able to develop and test nodes independently made the project manageable",
      "Mechanical reliability often gates overall system performance more than software does",
      "System-level integration testing surfaces failures that isolated subsystem testing never would",
    ],

    links: [],
  },

  {
    slug: "rps1-hand",
    title: "Autonomous RPS-1 Mechatronic Hand",
    tagline:
      "Two 3D-printed tendon-driven hands, dual ESP32 controllers talking over ESP-NOW, and a game-theory algorithm that picks the winning gesture — all to play Rock-Paper-Scissors-Minus-One.",

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
          "The system plays RPS-1 (Rock-Paper-Scissors-Minus-One): both hands display a gesture, the opponent reveals theirs, and the system autonomously removes the weaker of its two hands. Two 3D-printed hands are driven by DC motors through H-bridge motor drivers, with a servo-controlled cover performing the 'minus one' withdrawal. Two ESP32s communicate peer-to-peer via ESP-NOW — the master runs strategy and drives the left hand, the slave manages the right hand and cover servo.",
        image: "/projects/rps1-hand/system-architecture.jpg",
      },
      {
        title: "Mechanical Design",
        text:
          "Each hand was 3D printed as individual bone-like finger segments joined to a single palm. Fingers are actuated through a tendon-driven system: DC motors wind nylon string around custom grooved spools (single spool, 1 cm centre groove depth) to prevent entanglement. Elastic bands handle passive finger return when the motor reverses, eliminating the need for a second set of actuators. The cover servo physically withdraws one hand over the selected gesture.",
        images: [
          "/projects/rps1-hand/hand-view-1.jpg",
          "/projects/rps1-hand/hand-view-2.jpg",
          "/projects/rps1-hand/hand-view-3.jpg",
        ],
        reverse: true,
      },
      {
        title: "Control & Communication",
        text:
          "The master ESP32 initializes both hands to paper, randomly generates two distinct gestures (PR, PS, or RS), and drives its motors. The user inputs the opponent's gesture character by character; the system validates each input before accepting it. The strategy algorithm then evaluates the three-case outcome space and selects the hand with the highest win probability. It signals the slave via ESP-NOW with sequence-numbered packets to prevent desync from stale or duplicate transmissions.",
        image: "/projects/rps1-hand/software-flowchart.jpg",
      },
      {
        title: "Calibration & Testing",
        text:
          "Open-loop tendon control requires precise motor timing constants — small changes in friction or tension shift the gesture. Iterative bench testing refined spool geometry and timing values until gestures were consistent under real conditions. Key bugs fixed along the way: boot-time motor drift from GPIO initialization order, servo misalignment from missing explicit position initialization, and ESP-NOW peer-pairing errors that caused the slave to miss commands.",
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
      "A fully integrated mechatronic system that plays Rock-Paper-Scissors-Minus-One using tendon-driven mechanical actuation, distributed embedded control across two ESP32s, and a probabilistic game-theory decision algorithm. Built by a five-person team across structured development sprints.",

    problem:
      "Playing RPS-1 requires forming two physical gestures simultaneously and making a fast strategic decision — a challenge spanning mechanical actuation, real-time control, wireless communication, and game-theory optimization. Open-loop tendon actuation introduced repeatability risk, and managing four DC motors and two servos across two boards added power and communication complexity.",

    solution:
      "Dual-ESP32 architecture for modular control and power distribution. Fingers grouped into two tendon lines per hand driven by compact grooved spools. Master validates input, applies a three-case strategy algorithm, and signals the slave via ESP-NOW with sequence-validated packets.",

    outcome:
      "The system reliably formed all three gestures, accepted validated input, and selected the optimal hand autonomously. Key fixes resolved boot-time GPIO issues, servo initialization, and ESP-NOW pairing — the project demonstrated full cross-discipline mechatronic integration.",

    bullets: [
      "Designed 3D-printed tendon-driven hands with grouped finger actuation using two DC motors per hand",
      "Developed a grooved single-spool design to prevent nylon string entanglement during actuation",
      "Implemented passive elastic-band finger return, eliminating the need for return actuators",
      "Built a master-slave ESP32 communication layer using ESP-NOW with sequence-numbered packet validation",
      "Implemented a three-case probabilistic game-theory strategy algorithm based on opponent gesture input",
      "Created a servo-driven cover mechanism for the 'minus one' gesture withdrawal",
      "Iteratively calibrated motor timing constants and spool dimensions through bench testing",
      "Diagnosed and resolved boot-time motor drift, servo misalignment, and ESP-NOW peer-pairing failures",
    ],

    challenges: [
      "Open-loop timing-based control produced gesture inconsistencies requiring extensive iterative calibration",
      "Managing four DC motors and two servos across two ESP32s within power distribution constraints",
      "Wire entanglement in early dual-tendon spool designs required multiple geometric iterations to resolve",
      "Sensor-free finger positioning made the system sensitive to friction and tendon tension variation",
      "Maintaining ESP-NOW communication reliability across rapid consecutive game rounds",
    ],

    learnings: [
      "Mechanical and software subsystems have to be developed in parallel — even small CAD changes directly affect motor timing constants",
      "Open-loop tendon actuation is highly repeatable once calibrated, but that calibration process takes more iteration than expected",
      "Sequence-numbered packet validation is essential for peer-to-peer communication in real embedded systems — without it, desync is inevitable",
      "Prototyping one hand before two caught failure modes early and saved significant material and time",
      "Game-theory decision logic is straightforward to implement once the input space is properly constrained",
    ],

    videos: [
      "/projects/rps1-hand/demo.mov",
    ],
  },
];
