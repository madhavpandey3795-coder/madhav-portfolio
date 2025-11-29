import type { Service } from '../types'


const services: Service[] = [
{
id: 's1',
title: 'Custom PCB Design',
description: 'End-to-end custom PCB design from concept to Gerbers.',
deliverables: ['Schematic', 'PCB Layout', 'Gerber Files', 'BOM']
},
{
id: 's2',
title: 'Schematic Design',
description: 'Schematic capture with design rule validation and review.',
deliverables: ['Schematic PDFs', 'Netlist']
},
{
id: 's3',
title: 'PCB Layout & Routing',
description: 'Placement, plane planning and controlled-impedance routing.',
deliverables: ['Placement files', 'DRC reports', 'Gerbers']
},
{
id: 's4',
title: 'DFM/DFA Review',
description: 'Manufacturability review reducing cost and improving yields.',
deliverables: ['DFM report', 'Recommendations']
}
]


export default services