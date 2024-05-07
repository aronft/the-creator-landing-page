'use client'

import { ReviewCard } from './review'
import { DATA } from '@/constants/data'
import { cn } from '@/utils/class-names'
import styles from './reviews.module.css'
import { SwiperWrap } from '@/components/ui/molecules/swiper-wrap'
import { Button } from '@/components/ui/atoms/button/button'
import { Icon } from '@/components/ui/atoms/icon/icon'
import { useRef, useState } from 'react'
import { Swiper as SwiperCore } from 'swiper/types'

export const Reviews = () => {
    const swiperRef = useRef<SwiperCore | undefined>()
    const reviews = DATA.reviews
    const [isPrevEnable, setIsPrevEnable] = useState(false)
    const [isNextEnable, setIsNextEnable] = useState(true)
    const handleIndex = (swiper: SwiperCore) => {
        if (swiper.params.slidesPerView === undefined) {
            return
        }

        const slidesPerView: number =
            typeof swiper.params.slidesPerView === 'string'
                ? 0
                : swiper.params.slidesPerView
        if (slidesPerView === swiper.slides.length) {
            setIsPrevEnable(false)
            setIsNextEnable(false)
            return
        }
        if (slidesPerView + swiper.realIndex >= swiper.slides.length) {
            setIsPrevEnable(true)
            setIsNextEnable(false)
            return
        }

        if (swiper.realIndex < slidesPerView) {
            setIsPrevEnable(false)
            setIsNextEnable(true)
        }
    }
    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-16">
                <p className="text-3xl font-bold max-w-md ">
                    See what our famous clients write about us:
                </p>
                <div className="flex gap-4 ml-auto">
                    <Button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={cn(
                            'h-10 w-10 rounded-full p-2 flex items-center justify-center bg-transparent',
                            { ' bg-primary ': isPrevEnable },
                            { ' border-primary border ': !isPrevEnable }
                        )}
                    >
                        <Icon icon={'arrowLeft'} className="w-6" />
                    </Button>
                    <Button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={cn(
                            'h-10 w-10 rounded-full p-2 flex items-center justify-center bg-transparent',
                            { ' bg-primary ': isNextEnable },
                            { ' border-primary border ': !isNextEnable }
                        )}
                    >
                        <Icon icon={'arrowRight'} className="w-6" />
                    </Button>
                </div>
            </div>
            <SwiperWrap
                onSwiper={(swiper) => {
                    swiperRef.current = swiper
                }}
                className={styles.swiper}
                onActiveIndexChange={handleIndex}
                onInit={(swiper) => {
                    handleIndex(swiper)
                }}
            >
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={review.id}
                        src={review.src}
                        name={review.name}
                        description={review.description}
                        className={cn('', {
                            'bg-primary-alt ': index % 2 === 0,
                        })}
                    />
                ))}
            </SwiperWrap>
        </>
    )
}
