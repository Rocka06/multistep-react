import { createContext, type ReactNode, useState, useContext, useEffect } from "react";
import type { Store } from "../types/Types";

interface StoreContextType {
    stores: Store[] | undefined;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
    const [stores, setStores] = useState<Store[]>();

    useEffect(() => {
        setStores([
            { name: "GSM", address: "Budapest" },
            { name: "Üzlet", address: "Budapest" },
            { name: "Pláza", address: "Budapest" }
        ]);
    }, []);

    return (
        <StoreContext.Provider value={{ stores }}>
            {children}
        </StoreContext.Provider>
    );
}

export function useStore() {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within StoreProvider');
    }
    return context;
}