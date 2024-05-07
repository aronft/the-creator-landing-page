import { Card } from '@/components/ui/atoms/card/card'
import { Icon } from '@/components/ui/atoms/icon/icon'
import { Partner } from '@/constants/data'
import { cn } from '@/utils/class-names'

interface PartnerCardProps extends Omit<Partner, 'id'> {
    className?: string
}

export const PartnerCard = ({
    description,
    icon,
    className,
    iconClassName,
    yearInit,
    yearEnd,
    title,
}: PartnerCardProps) => {
    return (
        <Card
            tag="article"
            className={cn('p-6 flex flex-col gap-3', className)}
        >
            <div className="flex items-center justify-between ">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full">
                    <Icon icon={icon} className={cn(iconClassName)} />
                </div>
                <span className="text-xl font-medium">
                    {yearInit} - <span className="uppercase">{yearEnd}</span>
                </span>
            </div>
            <p className="text-base">{description}</p>
        </Card>
    )
}
