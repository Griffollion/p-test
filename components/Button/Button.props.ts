import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children: ReactNode,
    appearance: "primary" | "primary-2" | "ghost",
    size: "s" | "m" | "l" | "xl"
    block?: boolean
}