const steps = [
  "Register with Email & basic info",
  "Complete at least 3-5 Deals",
  "Check your email for the code",
  "Must be 18 years or older",
];

const HowItWorks = () => {
  return (
    <section className="px-4 pb-8">
      <div className="bg-card rounded-2xl border border-border p-6 max-w-md mx-auto">
        <h2 className="text-lg font-bold text-center mb-6">How It Works</h2>
        <ol className="space-y-4">
          {steps.map((step, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-foreground flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </span>
              <span className="text-sm text-foreground/90">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
