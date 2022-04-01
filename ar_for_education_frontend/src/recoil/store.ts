import { atom, selector } from "recoil";

export const saveStageState = atom({
  key: "saveStageState",
  default: "",
});

export const saveStageValue = selector({
  key: "saveStageValue",
  get: ({ get }) => ({
    value: get(saveStageState),
  }),
});
