'use client'
import { Button } from '@/components/ui/atoms/button/button'
import { Icon } from '@/components/ui/atoms/icon/icon'
import { Logo } from '@/components/ui/atoms/logo/logo'
import { Menu } from '@/components/ui/molecules/menu/menu'
import { Container } from '@/components/ui/objects/container/container'
import { cn } from '@/utils/class-names'
import React, { useState } from 'react'

interface HeaderProps extends React.ComponentPropsWithoutRef<'header'> {}

export const Header = ({ className, ...props }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuVisibilty = (state: boolean) => {
        setIsOpen(state)
    }
    return (
        <header className={cn(' relative py-8', className)} {...props}>
            <Container className="flex justify-between items-center">
                <Logo className="z-10" />
                {/* desktop menu */}
                <div
                    className={cn(
                        `bg-tertiary shadow-lg flex-col gap-10 absolute top-full max-w-7xl px-4 pl-
                        left-0 right-0 w-full pb-14 flex lg:hidden`,
                        { 'hidden ': !isOpen }
                    )}
                >
                    <Menu className={cn('flex flex-col', {})} />
                    <Button className="capitalize max-w-xl mx-auto w-full">
                        Join the creators
                    </Button>
                </div>
                <Menu className="hidden lg:flex" />
                <Button className="capitalize hidden lg:block ">
                    Join the creators
                </Button>

                <Icon
                    aria-label={
                        isOpen ? 'Close menu button' : 'Open menu button'
                    }
                    icon={isOpen ? 'x' : 'list'}
                    className="lg:hidden z-10 hover:cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </Container>
        </header>
    )
}
