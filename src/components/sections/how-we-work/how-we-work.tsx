import { cn } from '@/utils/class-names'
import { Characteristics } from './characteristics'
import { HowWeWorkStrategy } from './how-we-work-strategy'
import { HowWeWorkTop } from './how-we-worpk-top/how-we-work-top'
import {
    SectionLayout,
    SectionLayoutProps,
} from '@/components/ui/layout/section-layout'

export const HowWeWork = ({ ...props }: SectionLayoutProps) => {
    return (
        <SectionLayout
            aria-label="How we work"
            className={cn('isolate')}
            {...props}
        >
            <HowWeWorkTop className="pb-16" />
            <HowWeWorkStrategy className="py-16" />
            <Characteristics className="pt-16" />
        </SectionLayout>
    )
}
