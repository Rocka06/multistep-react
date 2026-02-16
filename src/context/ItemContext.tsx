import { createContext, type ReactNode, useState, useContext, useEffect } from "react";
import type { Item } from "../types/Types";

interface ItemContextType {
    items: Item[] | undefined;
}

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export function ItemProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<Item[]>();

    useEffect(() => {
        setItems([
            {name: "Tej", description: ""},
            {name: "Só", description: ""},
            {name: "Chips", description: ""},
            {name: "Billentyűzet", description: ""},
            {name: "Víz", description: ""},
            {name: "Tea", description: ""}
        ]);
    }, []);

    return (
        <ItemContext.Provider value={{ items }}>
            {children}
        </ItemContext.Provider>
    );
}

export function useItem() {
    const context = useContext(ItemContext);
    if (!context) {
        throw new Error('useItem must be used within ItemProvider');
    }
    return context;
}