'use client'

import { SwiperWrap } from '@/components/ui/molecules/swiper-wrap'
import { PartnerCard } from './partner-card'
import { cn } from '@/utils/class-names'
import { DATA } from '@/constants/data'
import styles from './partners.module.css'

export const Partners = ({ className }: { className?: string }) => {
    const partners = DATA.partners
    return (
        <SwiperWrap
            swiperSlideClassName={styles['swiper-slide']}
            className={cn('', className, styles['swiper'])}
            slidesPerView={'auto'}
            spaceBetween={32}
        >
            {partners.map((partner, index) => (
                <PartnerCard
                    key={partner.id}
                    className={cn(
                        `${index % 2 === 0 ? 'bg-primary' : 'bg-primary-alt'}`
                    )}
                    icon={partner.icon}
                    description={partner.description}
                    iconClassName={partner.iconClassName}
                    title={partner.title}
                    yearInit={partner.yearInit}
                    yearEnd={partner.yearEnd}
                />
            ))}
        </SwiperWrap>
    )
}
