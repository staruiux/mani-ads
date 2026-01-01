const faqs = [
  {
    question: "How do I book an ad space?",
    answer:
      "Simply sign in to Mani Ads, browse available ad spaces, select your preferred option, and confirm the booking through our streamlined process.",
  },
  {
    question: "Can I schedule campaigns in advance?",
    answer:
      "With our Flexi Ad feature, you can plan and schedule campaigns for future dates.",
  },
  {
    question: "Can I manage multiple campaigns at the same time?",
    answer:
      "Mani Ads supports multi-campaign management with a dashboard designed for efficiency.",
  },
  {
    question: "What payment methods does Mani Ads accept?",
    answer:
      "We accept all major credit/debit cards, online banking, and digital wallets.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-20 pb-25">
      <div className="w-[80%] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-[45px] font-bold text-black">
            <span className="relative inline-block">
            Frequently Asked Questions
              <span className="absolute left-0 bottom-2 w-[12%] h-[4px] bg-red-500" />
            </span>
          </h2>

          {/* Red underline */}
          

          <p className="mt-4 text-[#000000] mx-auto  text-[21px] ">
            Find answers to your most pressing questions about our services and how we can help.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-[#EAF4FF] rounded-xl overflow-hidden ">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`px-8 py-6 2xl:pl-15 ${
                index !== faqs.length - 1 ? "border-b-4 border-white " : ""
              }`}
            >
              <h3 className="font-semibold text-black text-[23px] mb-2 text-left">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-[19px] leading-relaxed text-left">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
