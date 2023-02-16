import { useContext, useEffect, useState, createContext } from "react";
import { rootStore } from "../stores/root.store";
import persist from "mst-persist";

const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const { children } = props;

    const [isLoading, setIsLoading] = useState(true);

    const initStore = async () => {
        persist('all', rootStore, {
            storage: localStorage
        }).then(() => {
            console.log('done')
            setIsLoading(false);
        }).catch((err) => {
            console.error(err)
            setIsLoading(false);
        })
    }

    useEffect(() => {
        initStore();
    }, []);

    return isLoading ? <p>Chargement ...</p> : <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext);