import { useState } from "react";
import { Users, Star, Plus, Minus } from "lucide-react";

const CTA_URL = "https://giftclick.org/aff_c?offer_id=1185&aff_id=150406";

const faqs = [
	{ question: "How long does it take?", answer: "Blank" },
	{ question: "What are 'deals'?", answer: "Blank" },
	{ question: "Do I have to pay anything?", answer: "Blank" },
	{ question: "Why do I need to enter my email?", answer: "Blank" },
	{ question: "When do I get the Sephora gift card?", answer: "Blank" },
];

const HeroSection = () => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	return (
		<div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#111217] to-[#0a0a0f] flex flex-col items-center px-4 py-4">
			<style>{`
				@keyframes subtlePulse {
					0%, 100% { transform: scale(1); }
					50% { transform: scale(1.025); }
				}

				@keyframes sparkleFloat {
					0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
					50% { transform: translateY(-3px) rotate(8deg) scale(1.06); }
				}

				.cta-subtle-pulse {
					animation: subtlePulse 2.2s ease-in-out infinite;
				}

				.sparkle-float {
					animation: sparkleFloat 1.8s ease-in-out infinite;
				}
			`}</style>

			<div className="w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-white rounded-full flex items-center justify-center mb-3 relative shadow-lg">
				<span className="text-[1.75rem] sm:text-[2.2rem] font-bold text-black leading-none">$</span>
				<div className="absolute -top-2 -right-2 sparkle-float">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none">
						<path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="#ff4fb3" />
						<path d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z" fill="#ff83c9" />
					</svg>
				</div>
			</div>

			<h1 className="text-[2.2rem] sm:text-4xl font-bold text-center mb-2 text-[#ff5bbd] leading-[1.08] tracking-[-0.035em] drop-shadow-[0_0_8px_rgba(255,91,189,0.22)]">
				Claim Your Gift Card Now!
			</h1>

			<p className="text-center mb-5 text-white text-base sm:text-lg">
				Higher value deals = faster rewards!
			</p>

			<a
				href={CTA_URL}
				className="w-full max-w-md bg-[#eb4aa0] hover:bg-[#df3e94] text-white font-medium py-3 px-4 rounded-full mb-6 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(235,74,160,0.28)] transition cta-subtle-pulse"
			>
				<div className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0">
					<span className="text-[#eb4aa0] font-bold text-xs">S</span>
				</div>
				<div className="text-left leading-tight">
					<div className="font-bold text-sm sm:text-base">$750 Sephora Gift Card</div>
					<div className="text-xs sm:text-sm opacity-95">(Enter Email & Complete Deals)</div>
				</div>
			</a>

			<div className="w-full max-w-lg bg-[#09142f] rounded-[22px] p-5 sm:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)] mb-6">
				<div className="space-y-6">
					<div className="flex items-start gap-4">
						<div className="w-11 h-11 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
							1
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
								Click The Button Above 👆
							</h3>
							<p className="text-[#a7b1c8] text-sm">
								Start your gift card claim process
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-11 h-11 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
							2
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
								Enter Your Email & Basic Info
							</h3>
							<p className="text-[#a7b1c8] text-sm">
								We need this to send your gift card
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-11 h-11 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
							3
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
								Complete 4-6 Deals
							</h3>
							<p className="text-[#a7b1c8] text-sm">
								Higher value deals = faster rewards!
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-11 h-11 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
							4
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-base sm:text-lg">
								Claim Your Gift Card!
							</h3>
							<p className="text-[#a7b1c8] text-sm">
								Your reward is waiting for you!
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full max-w-5xl mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-[#ff5bbd] leading-tight">
					Sephora Top Claims
					<br />
					of the Week
				</h2>

				<p className="text-center text-white text-sm sm:text-base mb-4">
					Real results from real people! 💕
				</p>

				<div className="flex items-center justify-center mb-4">
					<div className="flex items-center gap-2 text-xs sm:text-sm text-[#c0c7d8]">
						<div className="w-3 h-3 rounded-full bg-[#eb4aa0]"></div>
						<span>Swipe to see more</span>
					</div>
				</div>

				<div className="overflow-x-auto scrollbar-hide">
					<div className="flex gap-3 min-w-max px-1">
						<img
							src="/images/proof1.jpg"
							alt="Proof 1"
							className="w-[170px] sm:w-[220px] rounded-[16px] shadow-lg object-cover"
						/>
						<img
							src="/images/proof2.jpg"
							alt="Proof 2"
							className="w-[170px] sm:w-[220px] rounded-[16px] shadow-lg object-cover"
						/>
						<img
							src="/images/proof3.jpg"
							alt="Proof 3"
							className="w-[170px] sm:w-[220px] rounded-[16px] shadow-lg object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-3 sm:gap-5 text-[#c0c7d8] flex-wrap mb-6">
				<div className="flex items-center gap-2">
					<Users size={14} className="text-[#eb4aa0]" />
					<span className="text-xs sm:text-sm">25,000+ Vouchers Claimed</span>
				</div>

				<div className="w-1 h-1 bg-[#7d8597] rounded-full hidden sm:block" />

				<div className="flex items-center gap-2">
					<Star size={14} className="text-[#eb4aa0] fill-[#eb4aa0]" />
					<span className="text-xs sm:text-sm">4.8★ average rating</span>
				</div>
			</div>

			<div className="w-full max-w-lg bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-5 sm:p-7 mb-6">
				<h2 className="text-2xl sm:text-3xl font-bold text-center mb-5 text-[#ff5bbd]">
					Common Questions
				</h2>

				<div className="space-y-3">
					{faqs.map((faq, index) => {
						const isOpen = openFaq === index;

						return (
							<div
								key={faq.question}
								className="rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0b0b0f] overflow-hidden"
							>
								<button
									type="button"
									onClick={() => setOpenFaq(isOpen ? null : index)}
									className="w-full flex items-center justify-between px-4 py-4 text-left"
								>
									<span className="text-white font-semibold text-sm sm:text-base">
										{faq.question}
									</span>
									{isOpen ? (
										<Minus className="w-4 h-4 text-white flex-shrink-0" />
									) : (
										<Plus className="w-4 h-4 text-white flex-shrink-0" />
									)}
								</button>

								{isOpen && (
									<div className="px-4 pb-4 text-[#b4bdd1] text-xs sm:text-sm">
										{faq.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>

			<p className="text-[11px] sm:text-xs text-[#6f7b97] max-w-3xl mx-auto text-center leading-tight pb-4">
				This is a promotional experience and is not affiliated with or endorsed by Sephora.
				By proceeding, you agree to receive relevant communications about this reward.
			</p>
		</div>
	);
};

export default HeroSection;
