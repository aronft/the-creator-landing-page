'use client'

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { cn } from '@/utils/class-names'
import { Children } from 'react'
import styles from './swiper-wrap.module.css'

interface SwiperWrapProps extends SwiperProps {
    swiperSlideClassName?: string
}

export const SwiperWrap = ({
    className,
    swiperSlideClassName,
    children,
    ...props
}: SwiperWrapProps) => {
    return (
        <Swiper
            spaceBetween={32}
            slidesPerView={1}
            className={cn('', className)}
            {...props}
        >
            {Children.map(children, (child) => (
                <SwiperSlide
                    className={cn(styles['swiper-slide'], swiperSlideClassName)}
                >
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
