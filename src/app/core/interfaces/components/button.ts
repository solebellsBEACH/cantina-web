import { declaredIcons } from "../../components/icons";

export interface LibButtonProps {
    label: string,
    onClick: () => void
}

export type DeclaredIconsType = keyof typeof declaredIcons;

export interface LibIconButtonProps {
    onClick: () => void,
    icon: DeclaredIconsType
}
