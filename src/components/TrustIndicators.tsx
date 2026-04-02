import { Shield, Zap, Award } from "lucide-react";

const indicators = [
  { icon: Shield, label: "Secure & Private" },
  { icon: Zap, label: "Instant Qualification" },
  { icon: Award, label: "Guaranteed Reward" },
];

const TrustIndicators = () => {
  return (
    <section className="px-4 pb-10">
      <div className="flex justify-center gap-6 sm:gap-10">
        {indicators.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Icon className={`w-5 h-5 ${
  label === "Secure & Private"
    ? "text-green-500"
    : label === "Instant Qualification"
    ? "text-blue-500"
    : "text-purple-500"
}`} />
            </div>
            <span className="text-xs text-muted-foreground font-medium leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIndicators;
