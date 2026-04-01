import sephoraCard from "@/assets/sephora-card.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center pt-8 pb-10 px-4">
      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
        Limited Offer
      </span>
      <img
        src={sephoraCard}
        alt="$750 Sephora Gift Card"
        width={800}
        height={512}
        className="w-64 sm:w-72 drop-shadow-2xl mb-8"
      />
      <h1 className="text-2xl sm:text-3xl font-bold text-center leading-tight max-w-md">
        Unlock a $750 Sephora gift card in a few simple steps
      </h1>
    </section>
  );
};

export default HeroSection;
