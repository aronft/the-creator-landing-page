'use client'

import { HowWeWorkLineLeft } from '@/components/vectors/how-we-work-line-left'
import useOnEscreen from '@/hooks/use-on-escreen'
import { cn } from '@/utils/class-names'

export const HowWeWorkLineLeftWrap = () => {
    const { ref, isIntersecting } = useOnEscreen<SVGSVGElement>({
        threshold: 0.5,
    })
    return (
        <HowWeWorkLineLeft
            className={cn(
                'h-full scale-110 translate-y-4 ml-14 overflow-visible opacity-0',
                { 'animation-left-line lg:opacity-100 ': isIntersecting }
            )}
            ref={ref}
        />
    )
}
