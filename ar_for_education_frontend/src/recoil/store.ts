import { SliderValueLabel } from "@mui/material";
import { atom, selector } from "recoil";
import { getJSDocAugmentsTag } from "typescript";

export const saveStageState = atom({
    key: 'saveStageState',
    default: ''
})

export const saveStageValue = selector({
    key: 'saveStageValue',
    get: ({get}) => ({
        value: get(saveStageState)
    })
})

