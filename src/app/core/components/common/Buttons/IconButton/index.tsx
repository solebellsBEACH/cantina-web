import { declaredIcons } from "@/app/components/icons";
import { LibIconButtonProps } from "@/app/components/interfaces/components/button";

export function IconButton({ onClick, icon }: LibIconButtonProps) {
    return <button type="button"
        onClick={onClick}
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm 
        font-medium rounded-lg border border-transparent text-white">
        {declaredIcons[icon]}
    </button>
}