import {ReactNode} from "react";

export interface ContainerProps {
    size: "s" | "m" | "l" | "xl",
    children: ReactNode
}