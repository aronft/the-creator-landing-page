import { Characteristics } from './characteristics'
import { HowWeWorkStrategy } from './how-we-work-strategy'
import { HowWeWorkTop } from './how-we-work-top'

export const HowWeWork = () => {
    return (
        <section aria-label="How we work">
            <HowWeWorkTop />
            <HowWeWorkStrategy />
            <Characteristics />
        </section>
    )
}
