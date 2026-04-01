const CtaSection = () => {
  return (
    <section className="px-4 pb-8 flex flex-col items-center">
      <button className="w-full max-w-sm bg-gradient-to-r from-foreground to-foreground/80 text-primary-foreground font-bold text-lg py-4 rounded-full shadow-xl transition-transform hover:scale-[1.02] active:scale-[0.98]">
        🎁 Claim Now
      </button>
      <div className="mt-4 flex flex-col items-center gap-0.5">
        <p className="text-urgency text-sm font-semibold">Only 47 left today</p>
        <p className="text-muted-foreground text-xs">5 minutes • No purchase required</p>
      </div>
    </section>
  );
};

export default CtaSection;
