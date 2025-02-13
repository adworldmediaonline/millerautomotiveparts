import { Metadata } from 'next';
import {
  Microscope,
  Ruler,
  Search,
  Weight,
  Activity,
  Shield,
  Wrench,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quality Control - Miller Automotive Parts',
  description:
    'Learn about our comprehensive quality control measures ensuring vehicle safety, performance, and durability.',
};

const qualityControlSections = [
  {
    id: 'material-inspection',
    title: 'Material Inspection',
    icon: Microscope,
    items: [
      'Raw Material Testing: Verify the quality of metals, alloys, and rubber compounds used in parts.',
      'Chemical Composition Analysis: Use spectrometry and other techniques to confirm material properties match specifications.',
    ],
  },
  {
    id: 'dimensional-accuracy',
    title: 'Dimensional Accuracy & Tolerance Checks',
    icon: Ruler,
    items: [
      'Precision Measurements: Use calipers, micrometers, and coordinate measuring machines (CMM) to check tolerances.',
      'Computer-Aided Design (CAD) Comparison: Ensure manufactured parts match the original design.',
    ],
  },
  {
    id: 'ndt',
    title: 'Non-Destructive Testing (NDT)',
    icon: Search,
    items: [
      'Ultrasonic Testing: Detect internal flaws or cracks.',
      'Magnetic Particle Inspection: Identify surface defects in ferrous materials.',
      'Dye Penetrant Testing: Highlight cracks or defects in non-porous materials.',
    ],
  },
  {
    id: 'strength-testing',
    title: 'Strength & Durability Testing',
    icon: Weight,
    items: [
      'Fatigue Testing: Simulate real-world stress conditions over extended cycles.',
      'Load Testing: Apply forces to ensure the part can handle expected stress without failure.',
      'Torsion and Bending Tests: Check resistance to twisting and bending forces.',
    ],
  },
  {
    id: 'performance-testing',
    title: 'Functional & Performance Testing',
    icon: Activity,
    items: [
      'Steering Effort Tests: Measure and analyze force.',
      'Suspension Compliance Tests: Ensure proper movement and flexibility under load.',
      'Vibration & Impact Testing: Simulate road conditions to evaluate performance.',
    ],
  },
  {
    id: 'surface-treatment',
    title: 'Surface Treatment & Corrosion Resistance',
    icon: Shield,
    items: [
      'Coating Thickness Testing: Ensure protective layers (e.g., zinc, powder coating) meet requirements.',
      'Salt Spray Testing: Check corrosion resistance for components exposed to harsh environments.',
    ],
  },
  {
    id: 'assembly',
    title: 'Assembly & Fitment Verification',
    icon: Wrench,
    items: [
      'Pre-Assembly Checks: Ensure all components fit together correctly.',
      'Torque Testing: Confirm bolts, fasteners, and joints are tightened to correct specifications.',
    ],
  },
  {
    id: 'final-inspection',
    title: 'Final Inspection & Quality Assurance',
    icon: CheckCircle,
    items: [
      '100% Visual Inspection: Check for defects like cracks, deformations, or improper finishes.',
      'Statistical Process Control (SPC): Monitor production data to detect trends and prevent defects.',
      'ISO/TS Certification Compliance: Ensure adherence to automotive quality standards (ISO 9001, IATF 16949).',
    ],
  },
];

export default function QualityControlPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-miller-navy mb-4">
            Quality Control
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quality control is critical to ensuring vehicle safety, performance,
            and durability. Here&apos;s a breakdown of key quality control
            measures we take:
          </p>
        </div>

        {/* Quality Control Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {qualityControlSections.map(section => (
            <div
              key={section.id}
              className="group bg-white rounded-2xl shadow-lg border border-accent/20 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-miller-red/10 via-miller-red/5 to-transparent group-hover:from-miller-red/20 transition-all duration-300">
                  <section.icon className="w-6 h-6 text-miller-red" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-miller-navy">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-miller-red/60 group-hover:bg-miller-red transition-colors duration-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-accent/20 p-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-miller-navy mb-6">
              Material Quality Assurance
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We only use 4340 Chromoly Steel for all Forgings like Tie Rod
                Ends, Joints, Ball Joints, Inner C, Pitman Arms etc.
              </p>
              <p className="text-muted-foreground">
                We can supply matullergy test reports along with machine reports
                for all components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
