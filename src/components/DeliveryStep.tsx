import { type ChangeEvent } from "react";
import { useOrder } from "../context/OrderContext";
import type { Store } from "../types/Types";
import { useStore } from "../context/StoreContext";

export default function DeliveryStep() {
    const { order, setOrder } = useOrder();
    const { stores } = useStore();

    const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked } = e.target;

        setOrder({
            ...order,
            isPickup: checked
        });
    };

    const handlePickupChange = (name: string) => {
        const filtered = stores?.find(x => x.name === name);
        const store: Store = filtered ? filtered : { name: "", address: "" }

        setOrder({
            ...order,
            pickupData: { store }
        });
    };

    const handleDeliveryChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        setOrder({
            ...order,
            deliveryData: { ...order.deliveryData, address: value }
        });
    };

    return (
        <div className="space-y-4">
            <label className="toggle toggle-xl text-base-content">
                <input type="checkbox" checked={order.isPickup} onChange={handleTypeChange} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
            </label>

            <br />

            {
                order.isPickup ?
                    <div className="form-control">
                        <label htmlFor="my_modal_6" className="btn btn-primary">Felvételi pont kiválasztása</label>

                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal" role="dialog">
                            <div className="modal-box">
                                <h3 className="text-lg font-bold">Felvételi pont kiválasztása</h3>
                                <p className="py-4">
                                    <select
                                        className="w-full select"
                                        value={order.pickupData.store.name}
                                        onChange={(e) => handlePickupChange(e.target.value)}>
                                        {
                                            stores?.map((x, i) =>
                                                <option key={i} value={x.name}>{x.name}</option>
                                            )
                                        }
                                    </select>
                                    <p className="text-lg mt-5">Név: {order.pickupData?.store.name}</p>
                                    <p className="text-lg">Cím: {order.pickupData?.store.address}</p>
                                </p>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close</label>
                                </div>
                            </div>
                        </div>


                    </div>
                    :
                    <>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Cím</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={order.deliveryData.address}
                                onChange={handleDeliveryChange}
                                className="input input-bordered w-full"
                            />
                        </div>
                    </>
            }


        </div>
    );
}