const steps = [
  "Click the button below",
  "Register with Email and basic info",
  "Complete at least 3–5 deals",
  "Receive your Sephora gift card via email",
];

const HowItWorks = () => {
  return (
    <section className="px-4 pb-10">
      <div className="bg-card rounded-2xl shadow-lg border border-border p-6 max-w-md mx-auto">
        <h2 className="text-lg font-bold text-center mb-6">How It Works</h2>
        <ol className="space-y-5">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {i + 1}
              </span>
              <span className="text-sm leading-relaxed pt-1 text-foreground/85">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
