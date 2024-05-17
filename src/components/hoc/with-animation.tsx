'use client'

import useOnEscreen from '@/hooks/use-on-escreen'
import { cn } from '@/utils/class-names'
import React, { forwardRef } from 'react'

export function withAnimation(
    Component: React.ComponentType<{}>,
    className: string
) {
    return function WithAnimation(props: any) {
        const { ref, isIntersecting } = useOnEscreen({ threshold: 0.5 })
        return (
            <Component
                {...props}
                ref={ref}
                className={cn(
                    'opacity-0',
                    {
                        'animation-left-line opacity-100 ': isIntersecting,
                    },
                    className
                )}
            />
        )
    }
}
