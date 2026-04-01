const testimonials = [
  { quote: "Got my $750 gift card in just a few minutes!", name: "Olivia W." },
  { quote: "So easy, took me like 5 minutes to sign up", name: "Jessica L." },
  { quote: "Didn't expect it to work but it actually did!", name: "Emily R." },
];

const Testimonials = () => {
  // Double the list for seamless loop
  const items = [...testimonials, ...testimonials];

  return (
    <section className="pb-10 overflow-hidden">
      <div className="flex animate-marquee gap-4 w-max">
        {items.map((t, i) => (
          <div
            key={i}
            className="bg-card rounded-xl border border-border p-4 shadow-sm min-w-[260px] max-w-[280px] flex-shrink-0"
          >
            <p className="text-sm text-foreground/85 mb-2">"{t.quote}"</p>
            <p className="text-xs text-foreground font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
