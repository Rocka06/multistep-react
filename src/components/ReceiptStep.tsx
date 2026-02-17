import type { ChangeEvent } from "react";
import { useOrder } from "../context/OrderContext";

export default function ReceiptStep() {
    const { order, setOrder } = useOrder();

    if (!order.orderer) {
        setOrder({
            ...order,
            orderer: { email: "", mobile: "", name: "" }
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (order.orderer)
            setOrder({
                ...order,
                orderer: { ...order.orderer, [name]: value }
            });
    };

    return (
        <div className="space-y-4">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Név</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={order.orderer?.name}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    value={order.orderer?.email}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text">Telefonszám</span>
                </label>
                <input
                    type="text"
                    name="mobile"
                    value={order.orderer?.mobile}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                />
            </div>
        </div>
    );
}