import { SvgProps } from '../icons/icon-type'

export const ArrowRight = ({ ...props }: SvgProps) => {
    return (
        <svg
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15 1L19 5M19 5L15 9M19 5L1 5"
                stroke="#1F392C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
