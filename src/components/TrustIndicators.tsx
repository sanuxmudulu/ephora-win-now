import { Shield, CheckCircle, Award } from "lucide-react";

const indicators = [
  { icon: Shield, label: "Secure & Private" },
  { icon: CheckCircle, label: "Instant Qualification" },
  { icon: Award, label: "Guaranteed Payout" },
];

const TrustIndicators = () => {
  return (
    <section className="px-4 pb-8">
      <div className="flex justify-center gap-6">
        {indicators.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <Icon className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustIndicators;
