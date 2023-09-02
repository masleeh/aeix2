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

type TUserData = {
    user_name: string;
    paid_till: string;
    phone: string;
    role_id: number;
}

export type TPersona = {
    userData: TUserData,
    auth: string;
    getUserData: any;
}

export type TPersonaItem = {
    title: string;
    image: StaticImageData;
    description: string; 
}