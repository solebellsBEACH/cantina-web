import NextLink from 'next/link'

interface LibLinkProps {
    label: string,
    href: string
}

export const Link = ({ href, label }: LibLinkProps) => {
    return <NextLink className="font-semibold hover:text-lg" href={href}>{label}</NextLink>
}