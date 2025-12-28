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
    <section className="w-full bg-white py-20">
      <div className="w-[80%] mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Frequently Asked Questions
          </h2>

          {/* Red underline */}
          <div className="w-20 h-1 bg-red-500 mx-auto mt-3 rounded"></div>

          <p className="mt-4 text-gray-600 mx-auto text-sm md:text-base">
            Find answers to your most pressing questions about our services and how we can help.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-[#EAF4FF] rounded-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`px-8 py-6 2xl:pl-15 ${
                index !== faqs.length - 1 ? "border-b border-white" : ""
              }`}
            >
              <h3 className="font-semibold text-black text-base mb-2 text-left">
                {faq.question}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed text-left">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
