import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type TFeatureCard = {
    title: string;
    description: string;
    icon: StaticImport;
}