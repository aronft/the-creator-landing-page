import { DATA } from '@/constants/data'
import { UiList } from '../../objects/ui-list/ui-list'
import { cn } from '@/utils/class-names'

export const Menu = ({ className }: { className?: string }) => {
    const menu = DATA.menu
    return (
        <UiList className={cn('', className)}>
            {menu.map((item) => (
                <a
                    href={`#${item.url}`}
                    key={item.id}
                    className="font-medium text-secondary"
                >
                    {item.name}
                </a>
            ))}
        </UiList>
    )
}
