import characteristicImage1 from '@/assets/how-we-work-section/girl-1.png'
import characteristicImage2 from '@/assets/how-we-work-section/girl-2.png'
import characteristicImage3 from '@/assets/how-we-work-section/girl-3.png'

interface Characteristic {
    src: string
    title: string
    description: string
}

interface Data {
    characteristics: Characteristic[]
}

export const DATA: Data = {
    characteristics: [
        {
            title: '1# Research & Analysis',
            description: `Our agency's research-driven approach involves gathering insights into our clients' industries, competitors, and target audiences to develop tailored strategies that deliver exceptional results. This deep understanding allows us to create innovative and effective campaigns that resonate with our clients' audiences.`,
            src: characteristicImage1.src,
        },
        {
            title: '2# Concept development:',
            description: `Based on the brief and research, the agency's creative team generates ideas for the campaign. These concepts are presented to the client for feedback and refinement.`,
            src: characteristicImage2.src,
        },
        {
            title: '3# Design and execution:',
            description: `Once the concept is approved, the agency's designers and developers bring it to life. This includes creating visual assets, writing copy, and developing multimedia content.`,
            src: characteristicImage3.src,
        },
    ],
}
