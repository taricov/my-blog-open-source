"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function AppProvider({children}:any){
    return(
        <Provider store={store}>
        {children}
        </Provider>
    )
}