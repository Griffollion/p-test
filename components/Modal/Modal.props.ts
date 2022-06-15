import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size: 's' | 'm' | 'l',
    active: boolean,
    setActive: (args:boolean) => void
}