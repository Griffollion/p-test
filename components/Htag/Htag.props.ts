import {ReactNode} from "react";

export interface HtagProps {
    tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    align ?: "left" | "center" | "right",
    children: ReactNode,
    color?: "white" | "inherit"
}