const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pt-8 pb-8 px-4">
      {/* Placeholder for Sephora card image */}
      <div className="w-56 h-36 bg-secondary border border-border rounded-xl flex items-center justify-center mb-6">
        <span className="text-muted-foreground text-sm font-medium">Sephora Card Image</span>
      </div>
      <span className="inline-block bg-primary text-primary-foreground text-[11px] font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-5">
        Limited Offer
      </span>
      <h1 className="text-[26px] sm:text-[32px] font-bold text-center leading-[1.2] max-w-md">
        Get a $750 Sephora Gift Card by giving feedback on their products.
      </h1>
    </section>
  );
};

export default HeroSection;
