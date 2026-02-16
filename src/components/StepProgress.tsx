type Step = {
    name: string
}

export default function StepProgress({ steps, step }: { steps: Step[], step: number }) {
    return (
        <ul className="steps w-full my-6">
            {
                steps.map((x, i) =>
                    <li key={i} className={`step ${step >= i && "step-primary"}`}>{x.name}</li>
                )
            }
        </ul>
    );
}