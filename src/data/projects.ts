import type { Project } from '../types'


const projects: Project[] = [
{
id: 'p1',
title: 'Low-power IoT Sensor Node',
description: '4-layer IoT node with power gating, BLE radio and power budget optimized for 2+ years.',
tools: ['KiCad', 'LTSpice'],
complexity: 'advanced',
images: [
{ thumb: '/src/assets/project1.png', render3d: '/src/assets/project1-3d.png' }
]
},
{
id: 'p2',
title: 'High-speed DDR Routing Adapter',
description: 'Adapter board implementing controlled impedance traces and length matching for DDR4 interface.',
tools: ['Altium Designer'],
complexity: 'advanced',
images: [ { thumb: '/src/assets/project2.png', render3d: '/src/assets/project2-3d.png' } ]
},
{
id: 'p3',
title: 'RF Front-end Module',
description: '2.4GHz RF front-end with careful grounding and shielding to reduce EMI.',
tools: ['Altium Designer', 'OrCAD'],
complexity: 'intermediate',
images: [ { thumb: '/src/assets/project3.png', render3d: '/src/assets/project3-3d.png' } ]
},
{
id: 'p4',
title: 'USB-C Power Delivery Board',
description: 'Robust PD negotiation and power path routing for fast-charge applications.',
tools: ['Eagle'],
complexity: 'intermediate',
images: [ { thumb: '/src/assets/project4.png', render3d: '/src/assets/project4-3d.png' } ]
},
{
id: 'p5',
title: 'Compact Wearable PCB',
description: 'Miniaturized 6-layer board with flexible sections for ergonomic wearables.',
tools: ['KiCad'],
complexity: 'advanced',
images: [ { thumb: '/src/assets/project5.png', render3d: '/src/assets/project5-3d.png' } ]
},
{
id: 'p6',
title: 'Power Management Module',
description: 'High-efficiency buck converter module with thermal-aware layout and plane splits.',
tools: ['LTSpice', 'Altium Designer'],
complexity: 'simple',
images: [ { thumb: '/src/assets/project6.png', render3d: '/src/assets/project6-3d.png' } ]
}
]


export default projects