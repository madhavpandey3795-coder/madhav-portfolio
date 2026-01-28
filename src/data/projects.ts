import type { Project } from '../types'

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Microbit Smart Robot Car',
    description:
      '2-layer control board featuring motor drivers, sensor interfaces, and Microbit integration. Designed for stable operation with proper power routing and noise isolation.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: 'Microbit Smart Robot Car.png', render3d: '/src/assets/robot-3d.png' }],
  },

  {
    id: 'p2',
    title: 'Audio Amplifier Driver Board',
    description:
      'Power-efficient amplifier driver PCB with optimized grounding, reduced noise coupling, and thermal-aware routing for clear audio output.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: 'audioamp.jpeg', render3d: 'highamplifier.jpeg' }],
  },

  {
    id: 'p3',
    title: 'High-Power Audio Amplifier PCB',
    description:
      '2-layer amplifier board designed for stable high-current operation with careful trace sizing, plane distribution, and EMI-conscious layout.',
    tools: ['Altium Designer'],
    complexity: 'simple',
    images: [{ thumb: 'highamp.jpeg', render3d: '/src/assets/amplifier-3d.png' }],
  },

  {
    id: 'p4',
    title: 'AC & DC Controller Board',
    description:
      'Control PCB for AC/DC applications with isolation-aware routing, power-path optimization, and robust safety spacing for reliable field performance.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: 'acdc.jpeg', render3d: '/src/assets/acdc-3d.png' }],
  },

  {
    id: 'p5',
    title: 'Smart WiFi Bulb Load PCB (MCPCB)',
    description:
      'Thermal-optimized MCPCB board designed for WiFi-enabled bulbs with efficient LED driving and EMI-minimized high-voltage routing.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: 'Pj- Smart WiFi Bulb Load PCB (MCPCB).jpeg', render3d: '' }],
  },

  {
    id: 'p6',
    title: 'DOB LED Panel PCB',
    description:
      'Driver-on-board (DOB) LED panel PCB with precise current paths, isolated sections, and optimized thermal management for long lifetime.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/dob panel.jpeg', render3d: '/src/assets/dob-panel.png' }],
  },

  {
    id: 'p7',
    title: 'Smart WiFi 3CCT & RGB Panel Load (MCPCB)',
    description:
      'MCPCB designed for 3CCT & RGB control with RF-friendly layout, strong thermal performance, and dedicated power paths for LED segments.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: 'smart WIFi 3CCt & RGB Panel.jpeg', render3d: '' }],
  },

  {
    id: 'p8',
    title: 'Smart WiFi Batten PCB',
    description:
      '2-layer batten PCB for smart lighting with load control, EMI-optimized routing, and integrated driver circuitry.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/smartwifibaten.jpeg', render3d: '' }],
  },

  {
    id: 'p9',
    title: 'Smart Bluetooth Bulb PCB',
    description:
      'Bluetooth-based lighting board with RF-aware routing, noise isolation and stable LED driver integration for flicker-free performance.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: 'smartbluetoothbulb.jpeg', render3d: '/src/assets/bt-bulb-3d.png' }],
  },

  {
    id: 'p10',
    title: 'Smart WiFi Bulb Driver Board',
    description:
      'High-voltage LED driver board with DFM-optimized layout, stable current regulation and robust isolation for safety and efficiency.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: 'smartwifibulbdriver.png', render3d: '/src/assets/wifi-driver-3d.png' }],
  },

  {
    id: 'p11',
    title: 'Smart WiFi Plug',
    description:
      'Compact PCB for WiFi-enabled plug with power measurement support, relay drive circuitry, and EMI-conscious routing.',
    tools: ['Altium Designer'],
    complexity: 'intermediate',
    images: [{ thumb: '/wifi-plug.jpg', render3d: '/smart WIFI plug1.jpeg' }],
  },

  {
    id: 'p12',
    title: 'Smart WiFi 3CCT & RGB Panel Controller',
    description:
      '4-layer smart lighting controller optimized for RF performance, power handling and thermal balance for long-term reliability.',
    tools: ['Altium Designer'],
    complexity: 'advanced',
    images: [{ thumb: 'smart WIFi 3CCt & RGB Panel.jpeg', render3d: '/src/assets/rgb-controller-3d.png' }],
  },
]

export default projects
