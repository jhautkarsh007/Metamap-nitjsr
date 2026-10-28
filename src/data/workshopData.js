export const WORKSHOP_DETAILS = {
  acronym: "METAMAP 2027",
  fullTitle: "Metallurgy and Materials: Emerging Trends in Advanced Materials, Microstructural Assessment and Performance",
  shortTitle: "Metallurgy and Materials : Emerging Trends in Advanced Materials, Microstructural Assessment and Performance",
  subtitle: "A 5-Day Workshop on Metallurgy & Materials Engineering",
  tagline: "DESIGN. DECODE. DELIVER.",
  subTagline: "Mapping Microstructure to Performance from Atoms to Applications",
  dates: "8th - 12th January 2027",
  dateShort: "Jan 8 – 12, 2027",
  startDate: "2027-01-08T09:30:00+05:30",
  endDate: "2027-01-12T17:30:00+05:30",
  venue: {
    room: "DJLHC",
    building: "Diamond Jubilee Lecture Hall Complex (DJLHC)",
    institution: "NIT Jamshedpur",
    city: "Jamshedpur - 831014, Jharkhand, India",
    mode: "In-Person & Hybrid Sessions"
  },
  organizer: {
    department: "Department of Metallurgical and Materials Engineering",
    shortDept: "Dept. of MME",
    institute: "National Institute of Technology Jamshedpur",
    inCollaborationWith: "The Indian Institute of Metals (IIM), Jamshedpur Chapter"
  },
  registrationFormUrl: "https://forms.gle/cFHKjGLonNiXDJx2A",
  websiteUrl: "https://metamap-nitjsr.vercel.app/",
  brochurePdfUrl: "/assets/METAMAP_2027_Brochure.pdf",
  brochureImages: [
    {
      page: 1,
      title: "Page 1 - Outside Tri-Fold (Objective, Title, About NIT JSR & Dept)",
      src: "/assets/brochure_page1.png"
    },
    {
      page: 2,
      title: "Page 2 - Inside Tri-Fold (Modules 1-5, Fees, QR Code & Leadership)",
      src: "/assets/brochure_page2.png"
    }
  ],
  logoUrl: "/assets/metamap_logo.png"
};

export const ABOUT_TEXTS = {
  workshop: {
    title: "Objective of the Workshop",
    tagline: "DESIGN. DECODE. DELIVER. — Mapping Microstructure to Performance from Atoms to Applications",
    objectivesList: [
      {
        title: "Core Focus",
        desc: "Explore how advanced metallic materials and their microstructural features determine performance in modern engineering applications."
      },
      {
        title: "Key Learnings",
        desc: "Gain insights into recent advances in alloy design, processing, microstructural characterizations, and mechanical behaviour."
      },
      {
        title: "Industry Impact",
        desc: "Understand the vital importance of structure-property relationships in developing stronger, lighter, more durable materials for energy-efficient and sustainable manufacturing."
      },
      {
        title: "Methodology",
        desc: "Discover how advanced characterization tools and computational approaches are used to assess microstructure and predict performance through expert talks, interactive sessions, and discussions."
      },
      {
        title: "Ultimate Goal",
        desc: "Inspire collaboration and innovation among students, researchers, and industry professionals in metallurgy and materials engineering."
      }
    ]
  },
  institute: {
    title: "About the Institute",
    heading: "National Institute of Technology Jamshedpur",
    description: "Founded on August 15, 1960, as the Regional Institute of Technology (RIT), a joint venture between the Government of India and the Government of Bihar. It is one of the original eight Regional Engineering Colleges (RECs) launched under India's Second Five-Year Plan (1956–1961) and historically the sole REC designated as RIT. It was upgraded and renamed as the National Institute of Technology (NIT) Jamshedpur on December 27, 2002. The Institute comprises 12 academic departments spanning engineering, science, and humanities and operates as a self-contained 340-acre campus housing around 4,000 students, 204 faculty members, and 150 administrative and supporting staff.",
    stats: [
      { label: "Founded", value: "Aug 15, 1960" },
      { label: "Campus Area", value: "340 Acres" },
      { label: "Departments", value: "12" },
      { label: "Faculty Members", value: "204" },
      { label: "Students", value: "4,000+" }
    ]
  },
  department: {
    title: "About the Department",
    heading: "Department of Metallurgical and Materials Engineering",
    description: "Established in 1960 as one of the institute's four foundational branches (originally under RIT), the department evolved its curriculum in 1995 to formally unite traditional metallurgy with materials engineering. Situated in Jamshedpur's mineral-rich industrial hub, it specializes in key areas such as Materials and Foundry Technology, Iron and Steelmaking, Nanotechnology, and Mineral Benefaction. Supported by modern experimental and computational facilities, its research spans physical metallurgy, hydrometallurgy, process metallurgy, and mineral characterization. Leveraging deep ties with major industry leaders like Tata Steel, Vedanta, Hindalco, and JSW, the department consistently delivers strong placement outcomes and top national academic recognitions, including outstanding performers in GATE.",
    specializations: [
      "Materials and Foundry Technology",
      "Iron and Steelmaking",
      "Nanotechnology & Advanced Alloys",
      "Mineral Benefaction & Extractive Metallurgy",
      "Physical & Computational Metallurgy"
    ],
    industryTies: ["Tata Steel", "Vedanta", "Hindalco", "JSW", "CSIR-NML"]
  }
};

export const WHO_AND_WHY = {
  whoShouldAttend: [
    "Industry professionals",
    "Academicians and researchers",
    "Students of all Departments"
  ],
  whyAttend: [
    "Learn from industry experts and lecturers",
    "Gain knowledge with real-world applications",
    "Networking with professionals in the field"
  ]
};

export const KEY_FEATURES = [
  {
    id: 1,
    title: "Expert Talks",
    description: "In-depth keynote and technical lectures by distinguished faculty and industry leaders.",
    icon: "Presentation"
  },
  {
    id: 2,
    title: "Live Demonstrations",
    description: "Hands-on microstructural assessment, characterization tools, and data interpretation.",
    icon: "FlaskConical"
  },
  {
    id: 3,
    title: "Cutting-Edge Research",
    description: "Recent breakthroughs in novel alloy design, high-entropy systems, and metallic glasses.",
    icon: "Cpu"
  },
  {
    id: 4,
    title: "Industry Insights",
    description: "Real-world manufacturing, structural integrity, and failure analysis case studies.",
    icon: "Factory"
  },
  {
    id: 5,
    title: "Networking Opportunities",
    description: "Direct interaction with peers, leading metallurgists, and industrial practitioners.",
    icon: "Users"
  },
  {
    id: 6,
    title: "Real-World Applications",
    description: "Translation of microstructural design to durable, energy-efficient, and green engineering components.",
    icon: "ShieldCheck"
  }
];

export const COURSE_MODULES = [
  {
    id: "01",
    moduleNumber: "MODULE-I",
    title: "DESIGN: ADVANCED ALLOYS",
    topics: [
      "High-Entropy & Complex Concentrated Alloys",
      "Advanced High-Strength & Microalloyed Steels",
      "Metallic Glasses & Amorphous Alloys",
      "Lightweight & Next-Gen Alloy Design"
    ]
  },
  {
    id: "02",
    moduleNumber: "MODULE-II",
    title: "PROCESS: MICROSTRUCTURE BY DESIGN",
    topics: [
      "Thermomechanical Processing & Heat Treatment",
      "Additive Manufacturing of Alloys",
      "Severe Plastic Deformation & Grain Refinement",
      "Process–Structure–Property Relationships"
    ]
  },
  {
    id: "03",
    moduleNumber: "MODULE-III",
    title: "DECODE: MICROSTRUCTURAL ASSESSMENT",
    topics: [
      "Phase Identification & Texture Analysis",
      "Grain Structure, Precipitates & Defects",
      "Characterization of Damaged Materials",
      "Live Demonstrations & Data Interpretation"
    ]
  },
  {
    id: "04",
    moduleNumber: "MODULE-IV",
    title: "DELIVER: PERFORMANCE & FAILURE",
    topics: [
      "Strength–Ductility & Deformation Mechanisms",
      "Fatigue, Creep, Fracture & Hydrogen Embrittlement",
      "Damage & Defect Quantification through NDT&E",
      "Industrial Failure Case Studies"
    ]
  },
  {
    id: "05",
    moduleNumber: "MODULE-V",
    title: "PREDICT: MODELLING & SUSTAINABLE FUTURE",
    topics: [
      "CALPHAD, Phase-Field & Crystal Plasticity Modelling",
      "Machine Learning & Materials Informatics",
      "Simulation for Structural Integrity Assessment",
      "Green Steel, Recycling & Energy Materials"
    ]
  }
];

export const COMMITTEE = {
  chiefPatron: {
    name: "Prof. (Dr.) Goutam Sutradhar",
    role: "Chief Patron",
    designation: "Director",
    affiliation: "NIT Jamshedpur",
    image: "/assets/committee_goutam_sutradhar.png"
  },
  patron: {
    name: "Prof. Ashok Kumar",
    role: "Patron",
    designation: "Dean SW (Dean Student Welfare)",
    affiliation: "NIT Jamshedpur",
    image: "/assets/committee_ashok_kumar.png"
  },
  chairman: {
    name: "Dr. C.S. Chowdhary",
    role: "Chairman",
    designation: "HOD, MME Dept.",
    affiliation: "NIT Jamshedpur",
    image: "/assets/committee_cs_choudhary.png"
  },
  convenors: [
    {
      name: "Dr. Anushree Dutta",
      role: "Convenor",
      designation: "Assistant Professor",
      department: "Dept. of Metallurgical and Materials Engineering",
      institution: "NIT Jamshedpur",
      phone: "+91 80172 65397",
      email: "anushreedutta.met@nitjsr.ac.in",
      image: "/assets/speaker_anushree_dutta.png"
    },
    {
      name: "Dr. Amit Patel",
      role: "Convenor",
      designation: "Assistant Professor",
      department: "Dept. of Metallurgical and Materials Engineering",
      institution: "NIT Jamshedpur",
      phone: "+91 83050 26990",
      email: "amitpatel.met@nitjsr.ac.in",
      image: "/assets/speaker_amit_patel.png"
    }
  ],
  coordinators: [
    {
      name: "Dr. Prakash Sarkar",
      role: "Coordinator",
      designation: "Assistant Professor",
      department: "Dept. of Metallurgical and Materials Engineering",
      institution: "NIT Jamshedpur",
      phone: "+91 88284 95001",
      email: "prakash.met@nitjsr.ac.in",
      image: "/assets/committee_prakash_sarkar.png"
    },
    {
      name: "Dr. Jichil Majhi",
      role: "Coordinator",
      designation: "Assistant Professor",
      department: "Dept. of Metallurgical and Materials Engineering",
      institution: "NIT Jamshedpur",
      phone: "+91 96580 72304",
      email: "jichilmajhi.met@nitjsr.ac.in",
      image: "/assets/committee_jichil_majhi.png"
    }
  ],
  organisingMembers: [
    "Dr. Rina Sahu",
    "Dr. S K Vajpai",
    "Dr. Aravind Gali",
    "Dr. Poulami Maji",
    "Dr. Renu Kumari",
    "Dr. Ram Krishna",
    "Dr. Partha Duley",
    "Dr. Monalisa Mandal",
    "Dr. Binay Kumar",
    "Dr. Ashwinee Kumar"
  ]
};

export const REGISTRATION_FEES = [
  {
    category: "External academia (B.Tech.)",
    fee: "₹295 (GST included)",
    feeAmount: 295,
    highlighted: false,
    badge: "B.Tech.",
    description: "Undergraduate students from external academic institutions."
  },
  {
    category: "External academia (M.Tech./Ph.D.)",
    fee: "₹354 (GST included)",
    feeAmount: 354,
    highlighted: false,
    badge: "M.Tech. / Ph.D.",
    description: "Postgraduates and doctoral research scholars from external institutes."
  },
  {
    category: "External academia (Faculties from institutes)",
    fee: "INR 590 (GST included)",
    feeAmount: 590,
    highlighted: false,
    badge: "Faculty",
    description: "Faculty members from external engineering and technological institutions."
  },
  {
    category: "Industry / Laboratory",
    fee: "₹1,180 (GST included)",
    feeAmount: 1180,
    highlighted: false,
    badge: "Industry / Lab",
    description: "Engineers, scientists, and professionals from industry & R&D laboratories."
  },
  {
    category: "Internal academia (B.Tech./M.Tech./Ph.D./Faculty)",
    fee: "Fees waived",
    feeAmount: 0,
    highlighted: true,
    badge: "100% Free / Waived",
    description: "Students, research scholars, and faculty of NIT Jamshedpur."
  }
];

export const PAYMENT_DETAILS = {
  accountNumber: "38246478714",
  ifscCode: "SBIN0001882",
  accountName: "RESEARCH AND CONSULTANCY NIT JAMSHEDPUR",
  bankName: "State Bank of India (SBI)",
  branch: "SBI NIT Jamshedpur"
};

export const BANK_DETAILS = PAYMENT_DETAILS;

export const CERTIFICATION_NOTE = "Participants who complete the course receive a Certificate of Participation.";

export const SPEAKERS = [
  {
    name: "Dr. Soumitra Tarafder",
    designation: "Professor of Practice",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Structure-Property Relationships & Structural Integrity Assessment",
    image: "/assets/speaker_soumitra_tarafder.png"
  },
  {
    name: "Dr. Indranil Chattoraj",
    designation: "Former Director",
    institution: "CSIR-NML, Jamshedpur",
    category: "R&D Institute",
    topic: "Surface Degradation Mechanisms, High-Temperature Oxidation & Corrosion",
    image: "/assets/speaker_indranil_chattoraj.png"
  },
  {
    name: "Dr. Manish Roy",
    designation: "Professor of Practice",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Advanced Surface Engineering, Tribology & Wear Resistance",
    image: "/assets/speaker_manish_roy.png"
  },
  {
    name: "Dr. Amritendu Mukhopadhyay",
    designation: "Senior Scientist",
    institution: "DMRL, Hyderabad",
    category: "Defense R&D",
    topic: "Novel Metallic Alloys and Superalloys for Defense & Strategic Systems",
    image: "/assets/speaker_amritendu_mukhopadhyay.png"
  },
  {
    name: "Dr. Anushree Dutta",
    designation: "Assistant Professor & Convenor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Advanced Microstructural Characterization & Quantitative Phase Analysis",
    image: "/assets/speaker_anushree_dutta.png"
  },
  {
    name: "Dr. Amit Patel",
    designation: "Assistant Professor & Convenor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Computational Metallurgy, Microstructural Simulation & FEM Modeling",
    image: "/assets/speaker_amit_patel.png"
  },
  {
    name: "Dr. Amitava Mitra",
    designation: "Former Chief Scientist",
    institution: "CSIR-NML, Jamshedpur",
    category: "R&D Institute",
    topic: "Electromagnetic & Advanced NDT&E Protocols for Defect Quantification",
    image: "/assets/speaker_amitava_mitra.png"
  },
  {
    name: "Mr. S. Balamurugan",
    designation: "Head, NDTSR Group",
    institution: "Tata Steel, Jamshedpur",
    category: "Industry Leader",
    topic: "Industrial Failure Analysis & In-service Inspection in Steel Manufacturing",
    image: "/assets/speaker_s_balamurugan.png"
  },
  {
    name: "Prof. Ashok Kumar",
    designation: "Professor & Dean Student Welfare",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Material Damage Mechanisms and Quantification of Fracture Resistance",
    image: "/assets/committee_ashok_kumar.png"
  },
  {
    name: "Dr. Sanjay K. Vajpai",
    designation: "Assistant Professor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Severe Plastic Deformation and Ultrafine-Grained Materials",
    image: "/assets/speaker_sanjay_k_vajpai.png"
  },
  {
    name: "Dr. Poulami Maji",
    designation: "Assistant Professor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Electron Microscopy & Characterization of Damaged Metallic Microstructures",
    image: "/assets/speaker_poulomi_maji.png"
  },
  {
    name: "Dr. Ram Krishna",
    designation: "Assistant Professor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "Machine Learning and IoT in Microstructural Assessment & Performance",
    image: "/assets/committee_ram_krishna.png"
  },
  {
    name: "Dr. Aravind Gali",
    designation: "Assistant Professor",
    institution: "DMME, NIT Jamshedpur",
    category: "Academic / NIT",
    topic: "High-Entropy Alloys: Microstructural Design and Mechanical Behavior",
    image: "/assets/committee_aravind_gali.png"
  },
  {
    name: "Dr. S. Sivaprasad",
    designation: "Scientist-G, Mat. Engg. Div.",
    institution: "CSIR-NML, Jamshedpur",
    category: "R&D Institute",
    topic: "Fatigue, Fracture Mechanics & Life Prediction under Cyclic Loads",
    image: "/assets/speaker_s_sivaprasad.png"
  }
];

export const SCHEDULE = [
  {
    day: "Day 1",
    date: "January 8, 2027",
    dayName: "Friday",
    theme: "MODULE-I: DESIGN: ADVANCED ALLOYS",
    sessions: [
      {
        time: "09:30 AM - 10:30 AM",
        topic: "Participant Registration & Welcome Kit Distribution",
        speaker: "Organizing Team",
        type: "registration"
      },
      {
        time: "10:30 AM - 11:30 AM",
        topic: "Inaugural Ceremony & Address by Chief Patron Prof. (Dr.) Goutam Sutradhar",
        speaker: "Dignitaries on Dais",
        type: "ceremony"
      },
      {
        time: "11:30 AM - 12:00 PM",
        topic: "High Tea & Networking Interaction",
        speaker: null,
        type: "break"
      },
      {
        time: "12:00 PM - 01:15 PM",
        topic: "High-Entropy & Complex Concentrated Alloys: Principles and Design Strategies",
        speaker: "Dr. Aravind Gali",
        type: "lecture"
      },
      {
        time: "01:15 PM - 02:30 PM",
        topic: "Lunch Break",
        speaker: null,
        type: "break"
      },
      {
        time: "02:30 PM - 03:45 PM",
        topic: "Advanced High-Strength & Microalloyed Steels for Structural Excellence",
        speaker: "Dr. Soumitra Tarafder",
        type: "lecture"
      },
      {
        time: "03:45 PM - 04:00 PM",
        topic: "Evening Tea Break",
        speaker: null,
        type: "break"
      },
      {
        time: "04:00 PM - 05:15 PM",
        topic: "Metallic Glasses & Amorphous Alloys: Next-Gen Lightweight Frontiers",
        speaker: "Prof. Ashok Kumar",
        type: "lecture"
      }
    ]
  },
  {
    day: "Day 2",
    date: "January 9, 2027",
    dayName: "Saturday",
    theme: "MODULE-II: PROCESS: MICROSTRUCTURE BY DESIGN",
    sessions: [
      {
        time: "09:30 AM - 10:45 AM",
        topic: "Thermomechanical Processing & Controlled Heat Treatment Regimes",
        speaker: "Dr. Indranil Chattoraj",
        type: "lecture"
      },
      {
        time: "10:45 AM - 11:15 AM",
        topic: "Tea Break",
        speaker: null,
        type: "break"
      },
      {
        time: "11:15 AM - 12:30 PM",
        topic: "Additive Manufacturing of Metallic Alloys: Microstructural Evolution & Challenges",
        speaker: "Dr. Amritendu Mukhopadhyay",
        type: "lecture"
      },
      {
        time: "12:30 PM - 01:30 PM",
        topic: "Severe Plastic Deformation & Grain Refinement in Ultrafine Metallic Systems",
        speaker: "Dr. Sanjay K. Vajpai",
        type: "lecture"
      },
      {
        time: "01:30 PM - 02:45 PM",
        topic: "Networking Lunch",
        speaker: null,
        type: "break"
      },
      {
        time: "02:45 PM - 05:00 PM",
        topic: "Process–Structure–Property Relationships & Industrial Case Analysis",
        speaker: "Dr. Manish Roy",
        type: "lecture"
      }
    ]
  },
  {
    day: "Day 3",
    date: "January 10, 2027",
    dayName: "Sunday",
    theme: "MODULE-III: DECODE: MICROSTRUCTURAL ASSESSMENT",
    sessions: [
      {
        time: "09:30 AM - 10:45 AM",
        topic: "Phase Identification & Quantitative Texture Analysis (EBSD & XRD)",
        speaker: "Dr. Anushree Dutta",
        type: "lecture"
      },
      {
        time: "10:45 AM - 11:15 AM",
        topic: "Tea Break",
        speaker: null,
        type: "break"
      },
      {
        time: "11:15 AM - 12:30 PM",
        topic: "Grain Structure, Precipitates & Nano-scale Defect Characterization",
        speaker: "Dr. Poulami Maji",
        type: "lecture"
      },
      {
        time: "12:30 PM - 01:30 PM",
        topic: "Microstructural Characterization of Damaged & Degraded Engineering Materials",
        speaker: "Dr. Amitava Mitra",
        type: "lecture"
      },
      {
        time: "01:30 PM - 02:45 PM",
        topic: "Lunch Break",
        speaker: null,
        type: "break"
      },
      {
        time: "02:45 PM - 05:30 PM",
        topic: "Live Demonstrations & Data Interpretation: FE-SEM, XRD & Optical Image Analysis",
        speaker: "Technical Team & Lab Coordinators",
        type: "demo"
      }
    ]
  },
  {
    day: "Day 4",
    date: "January 11, 2027",
    dayName: "Monday",
    theme: "MODULE-IV: DELIVER: PERFORMANCE & FAILURE",
    sessions: [
      {
        time: "09:30 AM - 10:45 AM",
        topic: "Strength–Ductility Trade-off & High-Strain Deformation Mechanisms",
        speaker: "Dr. S. Sivaprasad",
        type: "lecture"
      },
      {
        time: "10:45 AM - 11:15 AM",
        topic: "Tea Break",
        speaker: null,
        type: "break"
      },
      {
        time: "11:15 AM - 12:30 PM",
        topic: "Fatigue, High-Temperature Creep, Fracture & Hydrogen Embrittlement",
        speaker: "Dr. Soumitra Tarafder",
        type: "lecture"
      },
      {
        time: "12:30 PM - 01:30 PM",
        topic: "Damage & Defect Quantification through Advanced NDT&E Protocols",
        speaker: "Mr. S. Balamurugan",
        type: "lecture"
      },
      {
        time: "01:30 PM - 02:45 PM",
        topic: "Lunch Break",
        speaker: null,
        type: "break"
      },
      {
        time: "02:45 PM - 05:15 PM",
        topic: "Industrial Failure Case Studies: Root Cause Analysis from Power & Steel Plants",
        speaker: "Tata Steel & CSIR-NML Specialists",
        type: "demo"
      }
    ]
  },
  {
    day: "Day 5",
    date: "January 12, 2027",
    dayName: "Tuesday",
    theme: "MODULE-V: PREDICT: MODELLING & SUSTAINABLE FUTURE",
    sessions: [
      {
        time: "09:30 AM - 10:45 AM",
        topic: "CALPHAD, Phase-Field & Crystal Plasticity Modelling for Microstructure Prediction",
        speaker: "Dr. Amit Patel",
        type: "lecture"
      },
      {
        time: "10:45 AM - 11:15 AM",
        topic: "Tea Break",
        speaker: null,
        type: "break"
      },
      {
        time: "11:15 AM - 12:30 PM",
        topic: "Machine Learning & Materials Informatics for Accelerated Alloy Discovery",
        speaker: "Dr. Ram Krishna",
        type: "lecture"
      },
      {
        time: "12:30 PM - 01:30 PM",
        topic: "Green Steel, Circular Metallurgy, Recycling & Energy Materials",
        speaker: "Invited Sustainability Expert",
        type: "panel"
      },
      {
        time: "01:30 PM - 02:45 PM",
        topic: "Lunch Break",
        speaker: null,
        type: "break"
      },
      {
        time: "03:00 PM - 04:30 PM",
        topic: "Valedictory Ceremony, Feedback Session & Distribution of Certificates",
        speaker: "Director, Deans, HOD MME, Convenors & Coordinators",
        type: "ceremony"
      },
      {
        time: "04:30 PM onwards",
        topic: "High Tea & Farewell Networking",
        speaker: null,
        type: "break"
      }
    ]
  }
];

export const HOW_TO_REACH = [
  {
    mode: "By Air",
    icon: "Plane",
    route: "Nearest Airports: Birsa Munda Airport Ranchi (IXR) ~130 km, Netaji Subhash Chandra Bose International Airport Kolkata (CCU) ~250 km.",
    instructions: "Convenient expressway taxis and express trains run from Ranchi to Jamshedpur (Tatanagar) in approximately 2.5 to 3 hours."
  },
  {
    mode: "By Train",
    icon: "Train",
    route: "Tatanagar Junction (TATA) ~7 km from NIT Jamshedpur campus.",
    instructions: "Tatanagar is a major railway junction on the Howrah-Mumbai line, well connected by direct express and Vande Bharat trains across India. Autos and taxis are readily available."
  },
  {
    mode: "By Road",
    icon: "Car",
    route: "Well connected via National Highway NH-33 (Ranchi-Jamshedpur-Kharagpur).",
    instructions: "Regular luxury and state-run AC buses connect Jamshedpur to Ranchi, Patna, Kolkata, and Bhubaneswar. Campus is located in Adityapur along the Tata-Kandra main road."
  }
];
