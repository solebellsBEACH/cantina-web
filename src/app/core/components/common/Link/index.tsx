import NextLink from 'next/link'

interface LibLinkProps {
    label: string,
    href: string,
    onClick?: () => void
}

export const Link = ({ href, label, onClick }: LibLinkProps) => {
    return <NextLink className="font-semibold hover:text-lg" onClick={onClick} href={href}>{label}</NextLink>
}