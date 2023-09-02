import { Dispatch, SetStateAction } from "react";

export type TCTAModal = {
    isCTAFormShow: boolean;
    setIsCTAFormShow: Dispatch<SetStateAction<boolean>>;
}