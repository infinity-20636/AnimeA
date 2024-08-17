import { ICardProps } from '@/components/Card/Anime'; 
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimeState {
  currentAnime: ICardProps | null;
}

const initialState: AnimeState = {
  currentAnime: null,
};

const animeSlice = createSlice({
  name: 'anime',
  initialState,
  reducers: {
    setCurrentAnime(state, action: PayloadAction<ICardProps | null>) {
      state.currentAnime = action.payload;
    },
  },
});

export const { setCurrentAnime } = animeSlice.actions;
export default animeSlice.reducer;