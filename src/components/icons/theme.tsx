import { SvgProps } from './icon-type'

export const ThemeIcon = ({ ...props }: SvgProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}>
            <path
                fill="currentColor"
                d="M10 3.5a6.5 6.5 0 1 1 0 13zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16"
            />
        </svg>
    )
}
