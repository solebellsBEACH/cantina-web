import { declaredIcons } from "../../components/icons";

export type DeclaredIconsType = keyof typeof declaredIcons;

interface IButtonSharedProps {
    onClick: () => void,
    isTransparent?: boolean,
    className?: string
}

export interface LibIconButtonProps extends IButtonSharedProps {
    icon: DeclaredIconsType
}

export interface LibButtonProps extends IButtonSharedProps {
    label: string,
    icon?: DeclaredIconsType
}
