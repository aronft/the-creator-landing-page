import { SubscriptionButton } from '@/components/common/subscripction-button'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Icon } from '@/components/ui/atoms/icon/icon'
import { Menu } from '@/components/ui/molecules/menu/menu'
import { Container } from '@/components/ui/objects/container/container'

export const Footer = () => {
    return (
        <footer className="py-16">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-2 text-center">
                    <Heading className="" size="big" tag="h2">
                        We are waiting for you to contact us
                    </Heading>
                    <p className="text-xl">
                        You can write to us at any time and get an instant
                        response.
                    </p>
                </div>
                <SubscriptionButton className="max-w-xl w-full mx-auto" />
                <div className="flex items-center flex-col gap-16 lg:flex-row lg:justify-between">
                    <p className="text-xl flex items-center gap-2">
                        <span className="text-3xl">©</span>
                        <span>Copywriting</span>
                    </p>
                    <Menu className="justify-center lg:justify-start text-xl" />

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            aria-label="Enlace a la red social Instagram"
                        >
                            <Icon icon="instagram" className="not-sr-only" />
                        </a>
                        <a
                            aria-label="Enlace a la red social Facebook"
                            target="_blank"
                            href="https://www.facebook.com"
                        >
                            <Icon icon="facebook" className="not-sr-only" />
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            aria-label="Enlace a la red social LinkedIn"
                        >
                            <Icon icon="linkedin" className="not-sr-only" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4">
                    <p>
                        Layout by{' '}
                        <a
                            href="https://github.com/aronft"
                            className="underline"
                            aria-label='link to github profile "aronft"'
                            target="_blank"
                        >
                            @aronft
                        </a>
                    </p>
                    <p className="">
                        Designed by{' '}
                        <a
                            href="https://www.figma.com/community/file/1325928372652466207"
                            className="underline"
                            aria-label='Link to figma profile "Casey Spirid"'
                            target="_blank"
                        >
                            Casey Spirid
                        </a>
                    </p>
                </div>
            </Container>
        </footer>
    )
}
