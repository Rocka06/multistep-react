import { useState } from "react";
import { useItem } from "../context/ItemContext"
import { useOrder } from "../context/OrderContext";

export default function ItemStep() {
    const { items } = useItem();
    const { order, setOrder } = useOrder();

    const [selectedItemName, setSelectedItemName] = useState("");

    if (!items) return null;

    const handleAdd = () => {
        if (!selectedItemName) return;

        const selectedItem = items.find(i => i.name === selectedItemName);
        if (!selectedItem) return;

        setOrder({
            ...order,
            items: [...order.items, selectedItem]
        });

        setSelectedItemName("");
    };

    const handleRemove = (index: number) => {
        console.log(index);

        const updatedItems = order.items.filter((_, i) => i !== index);

        setOrder({
            ...order,
            items: updatedItems
        });
    };


    return (
        <>
            <div className="flex gap-2">
                <select
                    className="select select-bordered"
                    value={selectedItemName}
                    onChange={(e) => setSelectedItemName(e.target.value)}
                >
                    <option value="" disabled>Válassz...</option>
                    {items.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>

                <button
                    className="btn btn-primary"
                    onClick={handleAdd}
                    disabled={!selectedItemName}
                >
                    Hozzáadás
                </button>
            </div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Név</th>
                            <th>Leírás</th>
                            <th>Művelet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.items.map((element, index) =>
                                <tr key={index}>
                                    <th>{element.name}</th>
                                    <th>{element.description}</th>
                                    <th className="text-center">
                                        <button className="btn btn-error" onClick={() => handleRemove(index)}>Törlés</button>
                                    </th>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </>
    );
}