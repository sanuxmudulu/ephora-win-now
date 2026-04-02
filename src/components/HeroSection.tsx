const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pt-6 pb-8 px-4">
      
      {/* Sephora Logo */}
      <img
        src="/images/logo.png"
        alt="Sephora Logo"
        className="w-32 mb-3"
      />

      {/* Limited Offer */}
      <span className="inline-block bg-black text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
        Limited Offer
      </span>

      {/* Headline */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center leading-tight max-w-md">
        Unlock a $750 Sephora gift card in a few simple steps
      </h1>

    </section>
  );
};

export default HeroSection;
