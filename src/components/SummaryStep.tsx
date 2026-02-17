import { useOrder } from "../context/OrderContext";

export default function SummaryStep() {
    const { order } = useOrder();

    return (
        <div className="summary-step">
            <h2 className="text-2xl font-bold mb-4">Összesítés</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">Termékek:</h3>
            <ul className="list-disc pl-5">
                {order.items.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}</strong>
                    </li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mt-4 mb-2">Rendelő Információ:</h3>
            <p>Név: {order.orderer.name}</p>
            <p>Email: {order.orderer.email}</p>
            <p>Telefonszám: {order.orderer.mobile}</p>
            {order.isPickup ? (
                <>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Felvételi pont:</h3>
                    <p>Név: {order.pickupData.store.name}</p>
                    <p>Cím: {order.pickupData.store.address}</p>
                </>
            ) : (
                <>
                    <h3 className="text-xl font-semibold mt-4 mb-2">Szállítási adatok:</h3>
                    <p>Cím: {order.deliveryData.address}</p>
                </>
            )}
        </div>
    );
}