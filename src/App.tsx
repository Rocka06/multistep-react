import { useState } from "react";
import ItemStep from "./components/ItemStep";
import ReceiptStep from "./components/ReceiptStep";
import DeliveryStep from "./components/DeliveryStep";
import SummaryStep from "./components/SummaryStep";
import StepProgress from "./components/StepProgress";
import { useOrder } from "./context/OrderContext";

const steps = [
	{ name: "Termékek" },
	{ name: "Adatok" },
	{ name: "Szállítás" },
	{ name: "Összegzés" }
];

export default function App() {
	const [step, setStep] = useState<number>(0);
	const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
	const { order } = useOrder();

	const prevStep = () => {
		if (step > 0)
			setStep(step - 1);
	}

	const nextStep = () => {
		if (step < 3)
			setStep(step + 1);
	}

	const handleConfirm = () => {
		setIsConfirmed(true);
		console.log(order);
	}

	if (isConfirmed) {
		return (
			<div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
				<div className="card w-full max-w-3xl bg-base-100 shadow-2xl">
					<div className="card-body">
						<h1 className="card-title text-2xl">Rendelés megerősítve!</h1>
						<p>Az adatok a konzolban találhatók.</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-base-300 flex items-center justify-center p-4">
			<div className="card w-full max-w-3xl bg-base-100 shadow-2xl">
				<div className="card-body">
					<h1 className="card-title text-2xl">Rendelés</h1>

					<StepProgress steps={steps} step={step} />

					{step === 0 && (
						<ItemStep />
					)}

					{step === 1 && (
						<ReceiptStep />
					)}

					{step === 2 && (
						<DeliveryStep />
					)}

					{step === 3 && (
						<SummaryStep />
					)}

					<div className="card-actions justify-between mt-6">
						{step > 0 ? (
							<button type="button" className="btn btn-outline" onClick={prevStep}>
								Vissza
							</button>
						) : (
							<div />
						)}

						{step < 3 ? (
							<button type="button" className="btn btn-primary" onClick={nextStep}>
								Tovább
							</button>
						) : (
							<button
								type="button"
								className="btn btn-success"
								onClick={handleConfirm}
							>
								Rendelés véglegesítése
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}