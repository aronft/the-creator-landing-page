'use client'

import { HowWeWorkLineRight } from '@/components/vectors/how-we-work-line-right'
import useOnEscreen from '@/hooks/use-on-escreen'
import { cn } from '@/utils/class-names'

export const HowWeWorkLineRightWrap = () => {
    const { ref, isIntersecting } = useOnEscreen<SVGSVGElement>({
        threshold: 0.5,
    })
    return (
        <HowWeWorkLineRight
            className={cn(
                'absolute left-[20%] bottom-14 h-[70%] overflow-visible opacity-0',
                { 'animation-left-line opacity-100 ': isIntersecting }
            )}
            ref={ref}
        />
    )
}
