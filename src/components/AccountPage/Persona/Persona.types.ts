import { StaticImageData } from "next/image";

export type TRolesList = {
    isSelected: boolean;
    id: number;
    title: string;
    description: string;
    prompt: string;
    image: StaticImageData;
}

export type TPersonaList = {
    listRoles: TRolesList[];
    selectRoles: (id: number) => void;
}