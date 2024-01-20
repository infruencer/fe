import { configureStore } from '@reduxjs/toolkit';
import loading from './loading';

const store = configureStore({
  reducer: { loading: loading.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
