import type { Project } from "./site";

export type Requirement = { check: string; specification: string; basis: string };
export type CaseDetails = {
  problem: string;
  requirements: Requirement[];
  ownership: string;
  decisions: string;
  build: string;
  validation: string;
  iteration: string;
  takeaway: string;
  evidence: string[];
  resultNote: string;
};

// Editorial restructuring of the existing public portfolio and its downloadable resume, not new test evidence.
// Missing task ownership, test protocols, and artifacts are identified explicitly.
const details: Record<string, CaseDetails> = {
  "smart-delivery-box": {
    problem: "The enclosure needed to accommodate 30 × 30 × 40 cm parcels while supporting a reliable latch and sensor integration. The mechanical work had to move beyond a visual mockup and into measurable performance.",
    requirements: [
      { check: "Parcel fit", specification: "30 × 30 × 40 cm", basis: "Parcel envelope in the project brief" },
      { check: "Fabrication", specification: "±0.5 mm", basis: "Stated CAD/DXF tolerance; inspection record not supplied" },
      { check: "Latch cycling", specification: "600 cycles", basis: "Reported test extent; acceptance criterion not supplied" },
      { check: "Retention", specification: "60 N", basis: "Test load; hold duration and pass criterion not supplied" },
      { check: "Drop", specification: "1 m / 5 kg payload", basis: "Test condition; orientation and damage criterion not supplied" },
      { check: "Insertion", specification: "200 trials", basis: "Reported trial count; raw false-trigger log not supplied" },
    ],
    ownership: "I led a four-person team through mechanical enclosure development and delivery of parametric CAD/DXF files. I executed the latch, retention, drop, and insertion tests, then used test logs to drive design iterations. The enclosure and integrated system were team deliverables; individual electronics responsibilities are not specified in the current record.",
    decisions: "The documented design uses laser-cut wood and acrylic with a parametric CAD/DXF workflow. The record does not yet explain why these materials and the latch geometry were selected over alternatives.",
    build: "Laser-cut wood and acrylic enclosure with an integrated latch and sensors. Parametric geometry was exported as DXF for fabrication. Detailed drawings, joint construction, and the bill of materials are not yet published.",
    validation: "Reported testing covers 600 latch cycles, a 60 N retention test, a 1 m drop with a 5 kg payload, and 200 insertion trials. These describe test conditions and scope; they do not establish that every test passed.",
    iteration: "The existing project record says test logs guided changes that reduced false triggers below 2%. The original failure mechanism, exact modification, before/after counts, and retest conditions are still needed to explain that improvement.",
    takeaway: "The case connects parcel-fit requirements, fabrication tolerances, and mechanical tests with sensor behavior. A documented change followed by a repeat test would complete the engineering argument.",
    evidence: ["Enclosure photo with latch and sensor locations annotated", "CAD/DXF drawing with the stated fit and tolerance", "Cycle, retention, and drop-test setup photos", "Insertion log and one before/after design revision"],
    resultNote: "The <2% false-trigger rate is reported in the existing portfolio. The raw log and denominator for that rate have not been provided; do not assume the 200 insertion trials are its denominator.",
  },
  "hybrid-health-supply-network": {
    problem: "Develop a testable interface for a drone-enabled medical supply hub concept, with fit, load, drop, and usability translated into measurable requirements. The current record does not describe the intended deployment setting or user research.",
    requirements: [
      { check: "Requirement definition", specification: "7 measurable requirements", basis: "Full verification matrix not yet published" },
      { check: "Verification coverage", specification: "Fit / load / drop / usability", basis: "Categories documented in the project record" },
      { check: "Drop", specification: "3 ft", basis: "Prototype test height; acceptance criterion not supplied" },
      { check: "Load", specification: "5 lb", basis: "Prototype test load; duration and pass criterion not supplied" },
    ],
    ownership: "I directed the four-member team in defining seven measurable requirements. I built the verification matrix, used a weighted decision matrix to select concepts, and fabricated and tested the 3D-printed interface. The broader supply-hub concept was a team project; the current record does not assign every subsystem to an individual.",
    decisions: "A weighted decision matrix supported concept selection. The alternatives, criteria, weights, and scores are not yet public, so the preferred concept cannot be independently traced to the matrix.",
    build: "A 3D-printed interface for a drone-enabled medical supply hub concept. This is a concept and interface prototype; the record does not establish a deployed delivery network or a flight-validated drone system.",
    validation: "The team reports a 3-ft drop test and a 5-lb load test on the interface prototype. Test setup, material, sample count, acceptance thresholds, and result sheets have not yet been published.",
    iteration: "A specific failure, design revision, and retest are not described in the available project record.",
    takeaway: "The engineering value is the connection between requirements, concept selection, and prototype verification. Publishing the actual matrices would make that decision process inspectable.",
    evidence: ["Seven-row verification matrix with criteria and result status", "Weighted decision matrix with alternatives and rationale", "Interface CAD and 3D-printed prototype photo", "Drop/load setup and test record"],
    resultNote: "Seven requirements and four team members describe project scope. The 3-ft drop and 5-lb load describe test conditions; pass/fail results are not yet documented here.",
  },
  "f-race": {
    problem: "Provide part and assembly drawings that communicate fabrication intent, and support structural design updates using simulation and trial-run observations. Detailed competition constraints and a quantitative performance target are not yet documented.",
    requirements: [
      { check: "Fabrication documentation", specification: "Part and assembly drawings", basis: "AutoCAD and revision control documented" },
      { check: "Structural analysis", specification: "SolidWorks Simulation / FEA", basis: "Analysis support; load cases and boundaries not supplied" },
      { check: "Performance criterion", specification: "To document", basis: "Issue definition and test protocol not supplied" },
    ],
    ownership: "I produced AutoCAD part and assembly drawings, maintained drawing revisions, supported technical experts with SolidWorks Simulation, and implemented design updates. The structural analysis and complete vehicle were collaborative work; my role was drawing production and analysis support.",
    decisions: "Drawings and simulation supported structural updates. The specific geometry change, competing options, and analysis assumptions have not yet been documented.",
    build: "Part and assembly drawings supported team fabrication. Materials, manufacturing processes, and the complete hardware specification are not available in the current record.",
    validation: "The existing summary references trial-run observations and physical correlation. Quantitative test conditions and simulation-to-test comparisons are still needed.",
    iteration: "The portfolio reports that implemented changes reduced performance issues by 40%. The failure categories, baseline count, revised count, and number of trials are not yet provided.",
    takeaway: "This case can show how controlled drawing revisions and analysis support inform physical design updates. The strongest next evidence is one traceable revision tied to a test observation.",
    evidence: ["Part/assembly drawing with revision history", "FEA plot with units, loads, restraints, mesh, and interpretation", "Original and revised geometry", "Trial-run log defining the reported 40% reduction"],
    resultNote: "*40% is an existing reported claim, not independently verified in this audit. Its calculation and baseline are missing. Judges and audience counts are presentation context, not engineering performance.",
  },
  "bridge-building-competition": {
    problem: "Develop a load-bearing bridge model and evaluate its geometry through structural simulation and physical load testing. The original span, material, mass, and competition constraints are not yet documented.",
    requirements: [
      { check: "Structural objective", specification: "Load-bearing bridge model", basis: "Span, mass, materials, and competition limits not supplied" },
      { check: "Analysis", specification: "SolidWorks Simulation", basis: "Stress-guided geometry; model assumptions not supplied" },
      { check: "Physical load", specification: "120 kg reported supported mass", basis: "Result in current portfolio; test record not supplied" },
    ],
    ownership: "Team leader of a five-person team from design through validation. The public record does not yet separate personal CAD, simulation, fabrication, and test responsibilities from teammates’ work.",
    decisions: "Simulation stress results reportedly guided geometry before load testing. The load path, member sizing, material selection, and alternatives are not yet explained.",
    build: "A physical bridge model developed through repeated build/load-test cycles. Member dimensions, material, joint design, and manufacturing details still need documentation.",
    validation: "The project reports iterative load tests and a supported mass of 120 kg. Fixture supports, load application, deflection, failure criterion, and the relationship to the simulation are not yet published. Kilograms here describe mass, not force.",
    iteration: "Repeated build and load-test cycles are documented, but the number of revisions, observed failure locations, and specific geometry changes are not.",
    takeaway: "The engineering story is strongest when the simulated load path can be compared with a measured deflection or observed failure location. The competition result supports the story but cannot replace that comparison.",
    evidence: ["Bridge overview with support and loading positions", "CAD/FEA with material, restraints, loads, and units", "Load-test record supporting the 120 kg claim", "Before/after member or joint revision and competition record"],
    resultNote: "*120 kg and +25% are reported in the existing portfolio. The load-test record and competition-average calculation are not supplied. First place and presentation audience are competition context.",
  },
};

export function getCaseDetails(project: Project): CaseDetails | undefined {
  return details[project.slug];
}
