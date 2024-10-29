import { LibIconButtonProps } from "@/app/core/interfaces/components/button";
import { declaredIcons } from "../../../icons";

export function IconButton({ onClick, icon, isTransparent, className }: LibIconButtonProps) {
    return <button type="button"
        onClick={onClick}
        className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm 
        font-medium rounded-lg border border-transparent text-white ${isTransparent && 'bg-transparent'} ${className ? className : ''}`}>
        {declaredIcons[icon]}
    </button>
}