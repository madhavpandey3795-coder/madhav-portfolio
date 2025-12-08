import type { Service } from '../types'

const services: Service[] = [
  {
    id: 's1',
    title: 'Custom PCB Design (1–4 Layer)',
    description:
      'Complete PCB design for power electronics, IoT hardware, lighting products, chargers, drivers, and consumer electronics.',
    deliverables: [
      'Schematic',
      'PCB Layout',
      'Gerber & Drill Files',
      'BOM & Component Selection',
    ],
  },
  {
    id: 's2',
    title: 'Schematic Design & Library Creation',
    description:
      'Accurate schematic capture with symbol/footprint creation, netlist generation, and design rule validation.',
    deliverables: ['Schematic PDFs', 'Netlist', 'Custom Symbols', 'Custom Footprints'],
  },
  {
    id: 's3',
    title: 'PCB Layout, Routing & Power Optimization',
    description:
      'High-speed routing, RF-aware layout, power path optimization, thermal planning, and mixed-signal separation.',
    deliverables: ['Placement Files', 'DRC Report', 'Gerber Package'],
  },
  {
    id: 's4',
    title: 'DFM / DFA Optimization',
    description:
      'Design review focused on manufacturability, cost reduction, assembly ease, and long-term reliability.',
    deliverables: ['DFM/DFA Report', 'Layout Recommendations'],
  },
  {
    id: 's5',
    title: 'IoT & Smart Lighting PCB Development',
    description:
      'Designing PCBs for WiFi, Bluetooth and MCPCB lighting boards such as smart bulbs, panels, battens, and LED drivers.',
    deliverables: ['MCPCB Layout', 'Driver Board Layout', 'Gerber Files'],
  },
  {
    id: 's6',
    title: 'SMPS, Battery Charger & Power Supply Design',
    description:
      'Development of SMPS circuits, e-rickshaw chargers, constant-current drivers, and AC/DC controller boards.',
    deliverables: ['Power Schematics', 'Thermal-aware PCB Layout', 'Gerber Files'],
  },
  {
    id: 's7',
    title: 'Reverse Engineering (PCB → Schematic)',
    description:
      'Reconstructing schematics from existing boards for redesign, improvement, or replacement.',
    deliverables: ['Recreated Schematic', 'BOM Extraction', 'Clean PCB Files'],
  },
  {
    id: 's8',
    title: 'Prototype Debugging & Hardware Testing',
    description:
      'Troubleshooting PCB issues, validating circuits, SMD/PTH soldering, and performance testing.',
    deliverables: ['Debugging Report', 'Fix Recommendations', 'Updated Design Files'],
  },
]

export default services
