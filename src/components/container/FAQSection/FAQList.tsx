import FAQItem from "./FAQItem";

const FAQList = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
      defaultOpen: true,
    },
    {
      question: "How do I know if now is the right time for my business?",
      answer:
        "Book a free consult — we’ll assess your goals and recommend the right approach.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Every project is different. Let’s talk about your needs to get a tailored estimate.",
    },
    {
      question: "How long does it take?",
      answer:
        "Depends on scope — but we always prioritize quality and deadlines.",
    },
    {
      question: "Can I start with a small project first?",
      answer: "Absolutely. We often begin with MVPs or pilot projects.",
    },
  ];

  return (
    <div className="max-w-3xl space-y-4">
      {faqs.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQList;
