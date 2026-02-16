import { createContext, type ReactNode, useState, useContext } from "react";
import type { Order } from "../types/Types";

interface OrderContextType {
    order: Order;
    setOrder: React.Dispatch<React.SetStateAction<Order>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: ReactNode }) {
    const [order, setOrder] = useState<Order>({ items: [] });

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
}

export function useOrder() {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within OrderProvider');
    }
    return context;
}