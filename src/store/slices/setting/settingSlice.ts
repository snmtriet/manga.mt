import type { Mode } from '@/@types/theme'
import { themeConfig } from '@/configs/theme.config'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SLICE_BASE_NAME } from './constants'

export type SettingState = {
  theme: Mode
  readMenuOpen: boolean
}

const initialState: SettingState = {
  theme: themeConfig.mode,
  readMenuOpen: false,
}

export const settingSlice = createSlice({
  name: SLICE_BASE_NAME,
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<{ theme: Mode }>) => {
      state.theme = action.payload.theme
    },
    setReadMenuOpen: (state, action: PayloadAction<{ open: boolean }>) => {
      state.readMenuOpen = action.payload.open
    },
  },
})

export const { setTheme, setReadMenuOpen } = settingSlice.actions

export default settingSlice.reducer
