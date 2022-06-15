import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    align ?: "left" | "center" | "right",
    weight?: 400 | 500 | 700,
    children: ReactNode,
    color?: "white" | "gray" | "inherit"
    fontSize?: string
}