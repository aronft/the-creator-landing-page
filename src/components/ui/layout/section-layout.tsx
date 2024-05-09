import { cn } from '@/utils/class-names'

export interface SectionLayoutProps
    extends React.ComponentPropsWithRef<'section'> {}

export const SectionLayout = ({
    className,
    children,
    ...props
}: SectionLayoutProps) => {
    return (
        <section className={cn('py-16', className)} {...props}>
            {children}
        </section>
    )
}
