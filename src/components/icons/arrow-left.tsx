import { SvgProps } from './icon-type'

export const ArrowLeft = ({ ...props }: SvgProps) => {
    return (
        <svg
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M5 9L1 5M1 5L5 1M1 5L19 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
