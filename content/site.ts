import { withBasePath } from "./site-config";

export type Metric = { value: string; label: string; kind?: "test" | "reported" | "context" };

export type ProjectMedia = {
  src: string;
  alt: string;
  label?: string;
};

export type ProjectSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets?: string[];
  mediaLabel?: string;
  mediaHint?: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  role: string;
  timeline: string;
  location: string;
  teamSize?: string;
  categories: string[];
  tools: string[];
  summary: string;
  overview: {
    year: string;
    category: string;
    highlight: Metric;
  };
  metrics: Metric[];
  media?: ProjectMedia[];
  sections: ProjectSection[];
};

export const profile = {
  name: "Quan Tran",
  university: "University of Cincinnati",
  degree: "B.S. Mechanical Engineering",
  graduation: "May 2030",
  gpa: "3.8",
  location: "Cincinnati, Ohio",
  email: "tranv7@mail.uc.edu",
  phone: "(832) 206-7952",
  phoneHref: "+18322067952",
  linkedin: "https://www.linkedin.com/in/tvmquan",
  profileImage: withBasePath("/profile/quan-tran-headshot.webp") as string | null,
  profileImageSrcSet: `${withBasePath("/profile/quan-tran-headshot-400.webp")} 400w, ${withBasePath("/profile/quan-tran-headshot-800.webp")} 800w`,
  resume: withBasePath("/resume/quan-tran-resume.pdf"),
};

export const projects: Project[] = [
  {
    slug: "smart-delivery-box",
    number: "01",
    title: "Smart Delivery Box",
    shortTitle: "Delivery Box",
    overview: { year: "2026", category: "Mechanical Design", highlight: { value: "600 cycles", label: "Latch cycling tested", kind: "test" } },
    role: "Mechanical Lead",
    timeline: "Feb 2026 — Present",
    location: "Cincinnati, Ohio",
    teamSize: "4 people",
    categories: ["Mechanical Design", "Prototype Development", "Validation"],
    tools: ["Parametric CAD", "DXF", "Laser cutting", "Test logs"],
    summary: "A mechanically validated enclosure designed around repeatable access, parcel fit, and reliable sensor behavior.",
    metrics: [
      { value: "600", label: "Latch cycles tested", kind: "test" },
      { value: "60 N", label: "Retention test load", kind: "test" },
      { value: "1 m", label: "Drop height · 5 kg payload", kind: "test" },
      { value: "<2%", label: "Reported false-trigger rate", kind: "reported" },
    ],
    sections: [
      {
        id: "challenge",
        eyebrow: "01 / Challenge",
        title: "Turn a hackathon concept into a physical system that can be tested.",
        body: "The enclosure needed to accommodate 30 × 30 × 40 cm parcels while supporting a reliable latch and sensor integration. The mechanical work had to move beyond a visual mockup and into measurable performance.",
        mediaLabel: "PROJECT PHOTO",
        mediaHint: "Enclosure overview required",
      },
      {
        id: "design",
        eyebrow: "02 / Design",
        title: "Parametric geometry prepared for fabrication.",
        body: "The enclosure used laser-cut wood and acrylic. Parametric CAD and DXF files were prepared to a ±0.5 mm tolerance so the team could fabricate, assemble, and revise the design efficiently.",
        bullets: ["Laser-cut wood and acrylic enclosure", "Parametric CAD/DXF workflow", "Designed around 30 × 30 × 40 cm parcels"],
        mediaLabel: "CAD RENDER",
        mediaHint: "Parametric enclosure CAD required",
      },
      {
        id: "validation",
        eyebrow: "03 / Validation",
        title: "Repeatable tests exposed what needed to change.",
        body: "Validation included 600 latch cycles, a 60 N retention test, a 1 m drop with a 5 kg load, and 200 insertion trials. Test logs guided design changes that reduced false triggers below 2%.",
        mediaLabel: "TEST SETUP",
        mediaHint: "Cycle or drop-test media required",
      },
    ],
  },
  {
    slug: "nvh-test-rig",
    number: "02",
    title: "NVH Test Rig",
    shortTitle: "NVH Test Rig",
    overview: { year: "2026", category: "Vibration & Data Acquisition", highlight: { value: "3 mount types", label: "Rigid, rubber & isolator comparison", kind: "context" } },
    role: "Personal Project",
    timeline: "Jan 2026 — Present",
    location: "Ohio, United States",
    categories: ["Vibration Testing", "Data Acquisition", "Signal Analysis"],
    tools: ["ESP32", "ADXL345 / I2C", "Hall sensor / RPM", "RMS / peak", "FFT"],
    summary: "A DC motor + ERW test rig comparing mount isolation through synchronized vibration and RPM measurements.",
    metrics: [
      { value: "3", label: "Mount types: rigid, rubber, isolator", kind: "context" },
      { value: "ESP32", label: "Synchronized data acquisition", kind: "context" },
      { value: "RMS / peak", label: "Vibration amplitude metrics", kind: "context" },
      { value: "FFT", label: "Frequency-domain analysis", kind: "context" },
    ],
    sections: [
      { id: "rig-design", eyebrow: "01 / Test rig", title: "Controlled excitation with interchangeable mounts.", body: "Engineered a DC motor + ERW validation rig with rigid, rubber, and isolator mounts to benchmark vibration isolation performance." },
      { id: "data-acquisition", eyebrow: "02 / Data acquisition", title: "Time-aligned vibration and speed measurements.", body: "Integrated synchronized data acquisition on an ESP32 using an ADXL345 accelerometer over I2C and a Hall sensor for RPM measurement. This connects the captured vibration data to motor speed." },
      { id: "signal-analysis", eyebrow: "03 / Signal analysis", title: "Compare vibration across speed and mounting conditions.", body: "Quantified vibration versus speed using RMS and peak metrics, together with FFT analysis, to compare the isolation effectiveness of the interchangeable mounts." },
    ],
  },
  {
    slug: "hybrid-health-supply-network",
    number: "03",
    title: "Hybrid Health Supply Network",
    shortTitle: "Health Supply Network",
    overview: { year: "2025", category: "Product Development", highlight: { value: "7 requirements", label: "Measurable design requirements", kind: "context" } },
    role: "Project Lead, Mechanical Design",
    timeline: "Aug 2025 — Dec 2025",
    location: "Cincinnati, Ohio",
    teamSize: "4 people",
    categories: ["Requirements", "Concept Selection", "Prototype Validation"],
    tools: ["Verification matrix", "Decision matrix", "3D printing"],
    summary: "A drone-enabled medical supply hub concept developed from measurable requirements through prototype validation.",
    metrics: [
      { value: "7", label: "Requirements defined", kind: "context" },
      { value: "4", label: "Team members", kind: "context" },
      { value: "3 ft", label: "Prototype drop-test height", kind: "test" },
      { value: "5 lb", label: "Prototype test load", kind: "test" },
    ],
    sections: [
      {
        id: "requirements",
        eyebrow: "01 / Requirements",
        title: "Start with criteria that can be verified.",
        body: "The team defined seven measurable requirements for a drone-enabled medical supply hub and translated them into a verification matrix covering fit, load, drop, and usability.",
        mediaLabel: "REQUIREMENT TABLE",
        mediaHint: "Verification matrix required",
      },
      {
        id: "selection",
        eyebrow: "02 / Selection",
        title: "Compare concepts against the same priorities.",
        body: "A weighted decision matrix was used to evaluate concepts before committing fabrication effort, keeping the selection tied to agreed engineering criteria.",
        mediaLabel: "CONCEPT STUDY",
        mediaHint: "Decision matrix or sketches required",
      },
      {
        id: "prototype",
        eyebrow: "03 / Prototype",
        title: "Fabricate, test, document, correct.",
        body: "The team fabricated a 3D-printed interface and validated its performance with a 3-ft drop test and a 5-lb load test.",
        mediaLabel: "PROTOTYPE PHOTO",
        mediaHint: "3D-printed interface required",
      },
    ],
  },
  {
    slug: "f-race",
    number: "04",
    title: "F-Race STEM Competition",
    shortTitle: "F-Race",
    overview: { year: "2024", category: "Design & Analysis", highlight: { value: "AutoCAD", label: "Part & assembly drawings", kind: "context" } },
    role: "Mechanical Design Contributor",
    timeline: "Sep 2024 — Oct 2024",
    location: "Ho Chi Minh City, Vietnam",
    categories: ["Technical Drawing", "FEA Support", "Physical Correlation"],
    tools: ["AutoCAD", "SolidWorks Simulation", "Revision control"],
    summary: "Manufacturing drawings and simulation support connected to trial-run observations and structural updates.",
    metrics: [
      { value: "40%", label: "Reported issue reduction*", kind: "reported" },
      { value: "15", label: "Presentation judges", kind: "context" },
      { value: "400+", label: "Presentation audience", kind: "context" },
      { value: "FEA", label: "Structural analysis support", kind: "context" },
    ],
    sections: [
      {
        id: "documentation",
        eyebrow: "01 / Documentation",
        title: "Drawings that support manufacturing clarity.",
        body: "AutoCAD part and assembly drawings were produced and maintained through revision control to make fabrication intent clearer for the team.",
        mediaLabel: "ENGINEERING DRAWING",
        mediaHint: "Approved drawing sheet required",
      },
      {
        id: "correlation",
        eyebrow: "02 / Correlation",
        title: "Support structural analysis with simulation.",
        body: "Supported technical experts with SolidWorks Simulation / FEA for structural analysis and design improvements.",
        mediaLabel: "FEA RESULT",
        mediaHint: "Simulation image required",
      },
      {
        id: "result",
        eyebrow: "03 / Result",
        title: "Turn findings into an updated build.",
        body: "Implemented changes reduced performance issues by 40%. The work was presented to 15 judges and an audience of more than 400 people.",
        mediaLabel: "COMPETITION PHOTO",
        mediaHint: "Presentation or vehicle media required",
      },
    ],
  },
  {
    slug: "bridge-building-competition",
    number: "05",
    title: "Bridge Building Competition",
    shortTitle: "Bridge Building",
    overview: { year: "2023", category: "Structural Design", highlight: { value: "120 kg", label: "Reported supported mass", kind: "reported" } },
    role: "Team Leader",
    timeline: "Mar 2023 — Apr 2023",
    location: "Ho Chi Minh City, Vietnam",
    teamSize: "5 people",
    categories: ["Structural Design", "FEA", "Load Validation"],
    tools: ["SolidWorks", "SolidWorks Simulation", "Iterative load testing"],
    summary: "A first-prize bridge developed through structural simulation, physical load testing, and team-led design iteration.",
    metrics: [
      { value: "120 kg", label: "Reported supported mass*", kind: "reported" },
      { value: "+25%", label: "Reported vs. competition average*", kind: "reported" },
      { value: "1st", label: "Place among 100+ teams", kind: "context" },
      { value: "800+", label: "Presentation audience" },
    ],
    sections: [
      {
        id: "analysis",
        eyebrow: "01 / Analysis",
        title: "Use simulation to turn a bridge concept into a load-bearing structure.",
        body: "The bridge was designed and analyzed in SolidWorks Simulation. Stress results guided the geometry before the team committed to physical load-testing cycles.",
        mediaLabel: "SIMULATION RESULT",
        mediaHint: "Bridge FEA or CAD image required",
      },
      {
        id: "testing",
        eyebrow: "02 / Testing",
        title: "Iterate against measured structural performance.",
        body: "The five-member team repeated build and load-test cycles until the bridge reportedly supported a 120 kg load, 25% above the competition average.",
        bullets: ["Five-person team led from design through validation", "120 kg reported supported mass", "Performance measured through iterative stress and load testing"],
        mediaLabel: "LOAD TEST",
        mediaHint: "Physical bridge test media required",
      },
      {
        id: "result",
        eyebrow: "03 / Result",
        title: "First place among more than 100 teams.",
        body: "The project won First Prize and was presented to an audience of more than 800 people, connecting the technical result with a clear engineering explanation.",
        mediaLabel: "COMPETITION RECORD",
        mediaHint: "Award or presentation photo required",
      },
    ],
  },
  {
    slug: "water-jet-car",
    number: "06",
    title: "Water Jet Car Competition",
    shortTitle: "Water Jet Car",
    overview: { year: "2022", category: "STEM Competition", highlight: { value: "Top 4", label: "Competition result", kind: "context" } },
    role: "STEM Club Competition Team",
    timeline: "2022",
    location: "Ho Chi Minh City, Vietnam",
    categories: ["STEM Competition", "Prototype Build", "Team Collaboration"],
    tools: ["Competition prototyping", "Team collaboration", "Performance testing"],
    summary: "A school STEM competition entry that earned a Top 4 result in 2022.",
    metrics: [
      { value: "TOP 4", label: "Competition result" },
      { value: "2022", label: "Competition year" },
      { value: "STEM", label: "School team" },
    ],
    sections: [
      {
        id: "competition",
        eyebrow: "01 / Competition",
        title: "An early competition build in the engineering portfolio.",
        body: "Represented Nguyen Huu Huan High School through the STEM Club and achieved a Top 4 result in the Water Jet Car competition in 2022. This archival case study is limited to verified résumé evidence while detailed design records and media are being assembled.",
        mediaLabel: "ARCHIVE MEDIA",
        mediaHint: "Water Jet Car photos or design records required",
      },
    ],
  },
  {
    slug: "city-level-water-rocket",
    number: "07",
    title: "City-Level Water Rocket",
    shortTitle: "Water Rocket",
    overview: { year: "2021", category: "STEM Competition", highlight: { value: "Top 8", label: "Competition result", kind: "context" } },
    role: "STEM Club Competition Team",
    timeline: "2021",
    location: "Ho Chi Minh City, Vietnam",
    categories: ["City-Level Competition", "Prototype Build", "STEM Engineering"],
    tools: ["Competition prototyping", "Team collaboration", "Performance testing"],
    summary: "A city-level water-rocket competition entry that placed in the Top 8 in 2021.",
    metrics: [
      { value: "TOP 8", label: "City-level result" },
      { value: "2021", label: "Competition year" },
      { value: "CITY", label: "Competition level" },
    ],
    sections: [
      {
        id: "competition",
        eyebrow: "01 / Competition",
        title: "A city-level result from the start of the engineering journey.",
        body: "Represented Nguyen Huu Huan High School through the STEM Club and earned a Top 8 placement in the City-Level Water Rocket competition in 2021. This archival case study stays within the verified résumé record until detailed build documentation and media are available.",
        mediaLabel: "ARCHIVE MEDIA",
        mediaHint: "Water Rocket photos or design records required",
      },
    ],
  },
];

export const skillGroups = [
  {label:"Design",skills:["SolidWorks / CSWP", "Siemens NX", "AutoCAD", "GD&T", "Tolerance analysis"],links:[["SolidWorks · Bridge design","/projects/bridge-building-competition/#engineering-process"],["AutoCAD · F-Race drawings","/projects/f-race/#engineering-process"]]},
  {label:"Simulation & analysis",skills:["SolidWorks Simulation / FEA", "MATLAB", "Python", "Measurement data analysis"],links:[["FEA · Bridge analysis","/projects/bridge-building-competition/#engineering-process"],["Simulation support · F-Race","/projects/f-race/#my-role"]]},
  {label:"Test & validation",skills:["Mechanical testing", "Electrical testing", "Chamber testing", "Fixture design / setup", "Test-plan interpretation", "Pass/fail reporting", "Failure-mode documentation"],links:[["Connector validation · Bosch","/#experience"],["Mechanical testing · Delivery Box","/projects/smart-delivery-box/#validation"]]},
  {label:"Prototyping & manufacturing",skills:["3D printing", "Laser cutting", "Drilling", "Welding", "Soldering"],links:[["Laser cutting · Delivery Box","/projects/smart-delivery-box/#build"],["3D printing · Health Supply Network","/projects/hybrid-health-supply-network/#build"]]},
  {label:"Embedded & data acquisition",skills:["ESP32", "ADXL345 / I2C", "Hall sensor / RPM", "Data logging", "RMS / peak", "FFT", "LabVIEW", "Microsoft Office / MOS"],links:[["ESP32 & sensors · NVH Test Rig","/projects/nvh-test-rig/#data-acquisition"],["RMS / peak & FFT · NVH analysis","/projects/nvh-test-rig/#signal-analysis"]]},
];

export const boschMetrics: Metric[] = [
  { value: "5+", label: "Validation procedures conducted" },
  { value: "300+", label: "Connector specimens prepared / tested" },
  { value: "6+", label: "Validation programs supported" },
  { value: "40+", label: "Pass / fail reports supported" },
];


// Project numbers follow display order; slugs preserve existing links.
export const featuredProjects = projects.slice(0, 2);
export const supportingProjects = projects.filter(project => ["bridge-building-competition", "f-race"].includes(project.slug));
export const archiveProjects = projects.filter(project => ["water-jet-car", "city-level-water-rocket"].includes(project.slug));
