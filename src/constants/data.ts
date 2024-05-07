import characteristicImage1 from '@/assets/how-we-work-section/girl-1.png'
import characteristicImage2 from '@/assets/how-we-work-section/girl-2.png'
import characteristicImage3 from '@/assets/how-we-work-section/girl-3.png'
import reviewAvatar1 from '@/assets/review-section/avatar-0.png'
import reviewAvatar2 from '@/assets/review-section/avatar-1.png'
import reviewAvatar3 from '@/assets/review-section/avatar-2.png'
import { IconTypes } from '@/components/ui/atoms/icon/icon'

interface Characteristic {
    src: string
    title: string
    description: string
}

interface Review {
    id: string
    src: string
    description: string
    name: string
}

export interface Partner {
    id: string
    title: string
    icon: IconTypes
    iconClassName?: string
    description: string
    yearInit: string
    yearEnd: string
}

interface Data {
    characteristics: Characteristic[]
    reviews: Review[]
    partners: Partner[]
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
    reviews: [
        {
            id: crypto.randomUUID(),
            src: reviewAvatar1.src,
            name: 'John Li',
            description:
                'The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.',
        },
        {
            id: crypto.randomUUID(),
            src: reviewAvatar1.src,
            name: 'John Li',
            description:
                'The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.',
        },
        {
            id: crypto.randomUUID(),
            src: reviewAvatar2.src,
            name: 'Amanda Steen',
            description:
                'The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.',
        },
        {
            id: crypto.randomUUID(),
            src: reviewAvatar3.src,
            name: 'Nicholas Love',
            description:
                'The Creator innovative ideas, strategic approach, and outstanding results have left a lasting impression on me as a blogger, making them a standout in the creative industry.',
        },
    ],
    partners: [
        {
            id: crypto.randomUUID(),
            title: 'twitter',
            description:
                'Provides communication between the agency and brands. Collects customer feedback and encourages discussion about the product, which helps improve it.',
            icon: 'twitter',
            yearInit: '2008',
            yearEnd: 'today',
            iconClassName: 'pt-0.5',
        },
        {
            id: crypto.randomUUID(),
            title: 'pinterest',
            description:
                'Provide unlimited access to artist and designer boards. Provides communication with them and creative partnership. Provides participation in creative conferences',
            icon: 'pinterest',
            yearInit: '2012',
            yearEnd: 'today',
            iconClassName: 'w-full h-full',
        },
    ],
}
