'use client'

import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { cn } from '@/utils/class-names'
import { Children, useContext, useRef } from 'react'
import styles from './swiper-wrap.module.css'

interface SwiperWrapProps extends SwiperProps {}

export const SwiperWrap = ({
    className,
    children,
    ...props
}: SwiperWrapProps) => {
    const swiperRef = useRef<SwiperCore>()
    return (
        <Swiper
            spaceBetween={32}
            slidesPerView={1}
            className={cn('', className)}
            {...props}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
        >
            {Children.map(children, (child) => (
                <SwiperSlide className={styles['swiper-slide']}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
