import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    tag: "div" | "section",
    paddings: "s" | "m" | "l" | "xl",
    indentTop?: boolean,
    indentBottom?: boolean,
    children: ReactNode,
    background: "bg-white" | "bg-blue" | "bg-gradient-1" | "bg-light-pink" | "bg-transparent"
}