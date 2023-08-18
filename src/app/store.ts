import {configureStore} from '@reduxjs/toolkit'
import {useDispatch} from "react-redux";
import {auth} from "../auth/slice.auth";



// ...
const store = configureStore({
    reducer: {
        auth,
    },
})
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export default store