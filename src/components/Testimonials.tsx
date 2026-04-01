const testimonials = [
  { quote: "Got my $750 gift card in just a few days!", name: "Sarah M." },
  { quote: "So easy, took me like 5 minutes to sign up", name: "Jessica L." },
  { quote: "Didn't expect it to actually work — but it did!", name: "Emily R." },
];

const Testimonials = () => {
  return (
    <section className="px-4 pb-12">
      <div className="max-w-md mx-auto space-y-3">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-xl border border-border p-4 shadow-sm">
            <p className="text-sm text-foreground/85 italic mb-2">"{t.quote}"</p>
            <p className="text-xs text-muted-foreground font-semibold">– {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
