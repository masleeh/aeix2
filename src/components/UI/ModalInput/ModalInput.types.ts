export type TModalInput = {
    title: string;
    placeholder: string;
    value: string;
    handleChangeValue: (event: any) => void;
    type: "text" | "phone";
    onKeyEnter?: any;
}