import { cn } from '@/utils/class-names'
import { Characteristics } from './characteristics'
import { HowWeWorkStrategy } from './how-we-work-strategy'
import { HowWeWorkTop } from './how-we-work-top'

export const HowWeWork = ({ className }: { className?: string }) => {
    return (
        <section aria-label="How we work" className={cn('isolate', className)}>
            <HowWeWorkTop />
            <HowWeWorkStrategy />
            <Characteristics />
        </section>
    )
}
