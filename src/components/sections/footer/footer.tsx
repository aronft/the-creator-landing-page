import { SubscriptionButton } from '@/components/common/subscripction-button'
import { Heading } from '@/components/ui/atoms/heading/heading'
import { Icon } from '@/components/ui/atoms/icon/icon'
import { Container } from '@/components/ui/objects/container/container'
import { UiList } from '@/components/ui/objects/ui-list/ui-list'

export const Footer = () => {
    return (
        <footer className="py-16">
            <Container className="flex flex-col gap-16">
                <div className="flex flex-col gap-2 text-center">
                    <Heading className="" size="big">
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
                    <UiList className="justify-center lg:justify-start text-xl">
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

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#"
                            aria-label="Enlace a la red social Instagram"
                        >
                            <Icon icon="instagram" className="not-sr-only" />
                        </a>
                        <a aria-label="Enlace a la red social Facebook">
                            <Icon
                                aria-label=""
                                icon="facebook"
                                className="not-sr-only"
                            />
                        </a>
                        <a
                            href="#"
                            aria-label="Enlace a la red social LinkedIn"
                        >
                            <Icon icon="linkedin" className="not-sr-only" />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
