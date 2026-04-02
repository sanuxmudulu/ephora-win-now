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
			<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 relative shadow-lg">
				<span className="text-2xl font-bold text-black">$</span>
				<div className="absolute -top-2 -right-2">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="#ff4fb3" />
						<path d="M5 3L6 6L9 7L6 8L5 11L4 8L1 7L4 6L5 3Z" fill="#ff83c9" />
					</svg>
				</div>
			</div>

			<h1 className="text-[2.15rem] sm:text-5xl font-bold text-center mb-3 text-[#ff5bbd] leading-tight">
				Claim Your Gift Card Now!
			</h1>

			<p className="text-center mb-6 text-white text-lg">
				Higher value deals = faster rewards!
			</p>

			<a
				href={CTA_URL}
				className="w-full max-w-md bg-[#eb4aa0] hover:bg-[#df3e94] text-white font-medium py-4 px-5 rounded-full mb-7 flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(235,74,160,0.28)] transition"
			>
				<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
					<span className="text-[#eb4aa0] font-bold text-sm">S</span>
				</div>
				<div className="text-left leading-tight">
					<div className="font-bold text-base">$750 Sephora Gift Card</div>
					<div className="text-sm opacity-95">(Enter Email & Complete Deals)</div>
				</div>
			</a>

			<div className="w-full max-w-2xl bg-[#09142f] rounded-[24px] p-6 sm:p-7 shadow-[0_14px_40px_rgba(0,0,0,0.35)] mb-8">
				<div className="space-y-7">
					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
							1
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-[1.1rem]">
								Click The Button Above 👆
							</h3>
							<p className="text-[#a7b1c8] text-lg">
								Start your gift card claim process
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
							2
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-[1.1rem]">
								Enter Your Email & Basic Info
							</h3>
							<p className="text-[#a7b1c8] text-lg">
								We need this to send your gift card
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
							3
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-[1.1rem]">
								Complete 4-6 Deals
							</h3>
							<p className="text-[#a7b1c8] text-lg">
								Simple tasks: app downloads and surveys
							</p>
						</div>
					</div>

					<div className="flex items-start gap-4">
						<div className="w-12 h-12 bg-[#eb4aa0] text-white rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0">
							4
						</div>
						<div>
							<h3 className="font-semibold text-white mb-1 text-[1.1rem]">
								Claim Your Gift Card!
							</h3>
							<p className="text-[#a7b1c8] text-lg">
								Your reward is waiting for you!
							</p>
						</div>
					</div>
				</div>

				<p className="text-xs text-[#7180a0] text-center mt-8">
					* Terms and conditions apply. Gift card values may vary based on completed offers.
				</p>
			</div>

			<div className="w-full max-w-5xl mb-8">
				<h2 className="text-2xl sm:text-4xl font-bold text-center mb-2 text-[#ff5bbd]">
					Sephora Top Claims of the Week
				</h2>

				<p className="text-center text-white text-lg mb-4">
					Real results from real people! 💕
				</p>

				<div className="flex items-center justify-center mb-5">
					<div className="flex items-center gap-2 text-sm text-[#c0c7d8]">
						<div className="w-4 h-4 rounded-full bg-[#eb4aa0]"></div>
						<span>Swipe to see more</span>
					</div>
				</div>

				<div className="overflow-x-auto scrollbar-hide">
					<div className="flex gap-4 min-w-max px-1">
						<img
							src="/images/proof1.jpg"
							alt="Proof 1"
							className="w-[220px] sm:w-[260px] rounded-[18px] shadow-lg object-cover"
						/>
						<img
							src="/images/proof2.jpg"
							alt="Proof 2"
							className="w-[220px] sm:w-[260px] rounded-[18px] shadow-lg object-cover"
						/>
						<img
							src="/images/proof3.jpg"
							alt="Proof 3"
							className="w-[220px] sm:w-[260px] rounded-[18px] shadow-lg object-cover"
						/>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center gap-4 sm:gap-6 text-sm mt-2 text-[#c0c7d8] flex-wrap mb-5">
				<div className="flex items-center gap-2">
					<Users size={16} className="text-[#eb4aa0]" />
					<span className="text-sm sm:text-base">25,000+ Vouchers Claimed</span>
				</div>

				<div className="w-1 h-1 bg-[#7d8597] rounded-full hidden sm:block" />

				<div className="flex items-center gap-2">
					<Star size={16} className="text-[#eb4aa0] fill-[#eb4aa0]" />
					<span className="text-sm sm:text-base">4.8★ average rating</span>
				</div>
			</div>

			<div className="w-full max-w-2xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-[28px] p-6 sm:p-8 mb-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#ff5bbd]">
					Common Questions
				</h2>

				<div className="space-y-4">
					{faqs.map((faq, index) => {
						const isOpen = openFaq === index;

						return (
							<div
								key={faq.question}
								className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[#0b0b0f] overflow-hidden"
							>
								<button
									type="button"
									onClick={() => setOpenFaq(isOpen ? null : index)}
									className="w-full flex items-center justify-between px-5 py-5 text-left"
								>
									<span className="text-white font-semibold text-lg sm:text-xl">
										{faq.question}
									</span>
									{isOpen ? (
										<Minus className="w-5 h-5 text-white flex-shrink-0" />
									) : (
										<Plus className="w-5 h-5 text-white flex-shrink-0" />
									)}
								</button>

								{isOpen && (
									<div className="px-5 pb-5 text-[#b4bdd1] text-base">
										{faq.answer}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>

			<p className="text-xs text-[#6f7b97] max-w-3xl mx-auto text-center leading-tight pb-4">
				This is a promotional experience and is not affiliated with or endorsed by Sephora.
				By proceeding, you agree to receive relevant communications about this reward.
			</p>
		</div>
	);
};

export default HeroSection;
