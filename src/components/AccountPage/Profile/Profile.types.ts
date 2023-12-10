type TUserData = {
    user_name: string;
    paid_till: string;
    phone: string;
    role_id: number;
    status: string;
}

export type TProfile = {
    userData: TUserData;
    auth: string;
    setAuth: any;
}