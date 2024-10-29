interface LibButtonProps {
    label: string,
    onClick: () => void
}

export function Button({ label, onClick }: LibButtonProps) {
    return <button type="button"
        onClick={onClick}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm 
        font-medium rounded-lg border border-transparent text-white">
        {label}
    </button>
}