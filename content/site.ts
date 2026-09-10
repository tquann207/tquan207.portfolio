import { withBasePath } from "./site-config";

export type Metric = { value: string; label: string };

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
  resume: withBasePath("/resume/quan-tran-resume.pdf"),
};

export const projects: Project[] = [
  {
    slug: "smart-delivery-box",
    number: "01",
    title: "Smart Delivery Box",
    shortTitle: "Delivery Box",
    role: "Mechanical Lead",
    timeline: "Feb 2026 — Present",
    location: "Cincinnati, Ohio",
    teamSize: "4 people",
    categories: ["Mechanical Design", "Prototype Development", "Validation"],
    tools: ["Parametric CAD", "DXF", "Laser cutting", "Test logs"],
    summary: "A mechanically validated enclosure designed around repeatable access, parcel fit, and reliable sensor behavior.",
    metrics: [
      { value: "600", label: "Latch cycles" },
      { value: "60 N", label: "Retention" },
      { value: "1 m", label: "Drop / 5 kg" },
      { value: "<2%", label: "False triggers" },
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
    slug: "hybrid-health-supply-network",
    number: "02",
    title: "Hybrid Health Supply Network",
    shortTitle: "Health Supply Network",
    role: "Project Lead, Mechanical Design",
    timeline: "Aug 2025 — Dec 2025",
    location: "Cincinnati, Ohio",
    teamSize: "4 people",
    categories: ["Requirements", "Concept Selection", "Prototype Validation"],
    tools: ["Verification matrix", "Decision matrix", "3D printing"],
    summary: "A drone-enabled medical supply hub concept developed from measurable requirements through prototype validation.",
    metrics: [
      { value: "7", label: "Requirements" },
      { value: "4", label: "Team members" },
      { value: "3 ft", label: "Drop test" },
      { value: "5 lb", label: "Load test" },
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
    number: "03",
    title: "F-Race STEM Competition",
    shortTitle: "F-Race",
    role: "Mechanical Design Contributor",
    timeline: "Sep 2024 — Oct 2024",
    location: "Ho Chi Minh City, Vietnam",
    categories: ["Technical Drawing", "FEA Support", "Physical Correlation"],
    tools: ["AutoCAD", "SolidWorks Simulation", "Revision control"],
    summary: "Manufacturing drawings and simulation support connected to trial-run observations and structural updates.",
    metrics: [
      { value: "40%", label: "Fewer performance issues" },
      { value: "15", label: "Judges" },
      { value: "400+", label: "Audience" },
      { value: "FEA", label: "Simulation support" },
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
    number: "04",
    title: "Bridge Building Competition",
    shortTitle: "Bridge Building",
    role: "Team Leader",
    timeline: "Mar 2023 — Apr 2023",
    location: "Ho Chi Minh City, Vietnam",
    teamSize: "5 people",
    categories: ["Structural Design", "FEA", "Load Validation"],
    tools: ["SolidWorks", "SolidWorks Simulation", "Iterative load testing"],
    summary: "A first-prize bridge developed through structural simulation, physical load testing, and team-led design iteration.",
    metrics: [
      { value: "120 kg", label: "Load capacity" },
      { value: "+25%", label: "Above average" },
      { value: "1st", label: "Among 100+ teams" },
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
        body: "The five-member team repeated build and load-test cycles until the bridge reached a verified 120 kg capacity, 25% above the competition average.",
        bullets: ["Five-person team led from design through validation", "120 kg verified load capacity", "Performance measured through iterative stress and load testing"],
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
    number: "05",
    title: "Water Jet Car Competition",
    shortTitle: "Water Jet Car",
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
    number: "06",
    title: "City-Level Water Rocket",
    shortTitle: "Water Rocket",
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
  { label: "Design", skills: ["SolidWorks / CSWP", "Siemens NX", "AutoCAD", "GD&T", "Tolerance analysis"] },
  { label: "Simulation & Analysis", skills: ["SolidWorks Simulation / FEA", "MATLAB", "Python", "Measurement data analysis"] },
  { label: "Validation", skills: ["Automotive connector validation", "Mechanical / electrical testing", "Chamber testing", "Fixture setup", "Test plan interpretation", "Pass / fail reporting", "Failure mode documentation"] },
  { label: "Fabrication", skills: ["3D printing", "Laser cutting", "Welding", "Soldering", "Drilling"] },
  { label: "Programming & Data", skills: ["Python", "MATLAB", "LabVIEW", "ESP32 data logging", "Microsoft Office / MOS"] },
];

export const boschMetrics: Metric[] = [
  { value: "5+", label: "Validation procedures" },
  { value: "300+", label: "Connector samples" },
  { value: "6+", label: "Validation programs" },
  { value: "15+", label: "Pass / fail reports" },
];

