import type { Mode } from "@/@types/theme";
import { themeConfig } from "@/configs/theme.config";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SLICE_BASE_NAME } from "./constants";

export type SettingState = {
  theme: Mode;
};

const initialState: SettingState = {
  theme: themeConfig.mode,
};

export const settingSlice = createSlice({
  name: SLICE_BASE_NAME,
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ theme: Mode }>) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { setTheme } = settingSlice.actions;

export default settingSlice.reducer;
