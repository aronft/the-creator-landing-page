'use client'
import { Button } from '@/components/atoms/button/button'
import { Icon } from '@/components/atoms/icon/icon'
import { Logo } from '@/components/atoms/logo/logo'
import { UiList } from '@/components/objects/ui-list/ui-list'
import { cn } from '@/utils/class-names'
import React, { useState } from 'react'

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header
            className={cn(
                'flex relative justify-between items-center py-8',
                className
            )}
            {...props}
        >
            <Logo className="z-10" />
            <div
                className={cn(
                    'absolute top-0 left-0 right-0 w-dvw h-dvh lg:static lg:w-auto lg:h-auto lg:flex'
                )}
            >
                <div
                    className={cn(
                        'absolute w-full h-full bg-tertiary hidden lg:hidden',
                        { block: isOpen }
                    )}
                ></div>
                <UiList
                    className={cn(
                        'lg:flex-row lg:mt-0 lg:mb-0 hidden lg:flex',
                        {
                            'relative flex-col mt-28 mb-8 block': isOpen,
                        }
                    )}
                >
                    <a href="#" className="font-medium text-secondary">
                        Partners
                    </a>
                    <a href="#" className="font-medium text-secondary">
                        How we Work
                    </a>
                    <a href="#" className="font-medium text-secondary">
                        Review
                    </a>
                    <a href="#" className="font-medium text-secondary">
                        Charity
                    </a>
                </UiList>
                <Button
                    className={cn(
                        'capitalize relative w-full hidden lg:hidden',
                        { block: isOpen }
                    )}
                >
                    Join the creator
                </Button>
            </div>
            <Button className="capitalize relative hidden lg:block">
                Join the creator
            </Button>
            <Icon
                icon={isOpen ? 'x' : 'list'}
                className="lg:hidden z-10"
                onClick={() => setIsOpen(!isOpen)}
            />
        </header>
    )
}
