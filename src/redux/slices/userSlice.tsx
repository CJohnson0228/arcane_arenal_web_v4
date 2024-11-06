import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { CharacterType } from "../../types/CharacterType";

interface UserState {
  primaryArtisanIndex: number
  user?: {
    displayName: string,
    initials: string | null,
    photoURL: string | null,
    email: string | null,
    uid: string
  }
  characters?: CharacterType[]
}

const initialState: UserState = {
  primaryArtisanIndex: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPrimaryArtisan: (state, action: PayloadAction<number>) => { state.primaryArtisanIndex = action.payload },
    setUser: (state, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload
    },
    logout: () => initialState,
    addCharacter: (state, action: PayloadAction<CharacterType>) => {
      state.characters?.push(action.payload)
    },
    clearCharacters: (state) => {
      state.characters = undefined
    },
  }
})

export const { setPrimaryArtisan, addCharacter, clearCharacters, logout, setUser } = userSlice.actions

export default userSlice.reducer