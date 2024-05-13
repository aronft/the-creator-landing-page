import { MutableRefObject, useEffect, useRef, useState } from 'react'

export default function useOnEscreen<T extends Element>(
    options: IntersectionObserverInit | undefined
) {
    const [isIntersecting, setIntersecting] = useState(false)
    const ref: MutableRefObject<T | null> = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(entry.isIntersecting)
            }
        }, options)

        if (ref.current) {
            observer.observe(ref.current)
        }
        const currentRef = ref.current

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [options])

    return { ref, isIntersecting }
}
