import { MouseEventHandler } from "react";

export type TButton = {
    variant?: "contained" | "outlined",
    size?: "medium" | "large",
    color?: "white" | "gray" | "violet",
    children?: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
    className?: string;
    loading?: boolean;
}