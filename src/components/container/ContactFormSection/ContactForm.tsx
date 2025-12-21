import { useState } from "react";
import HeaderText from "../../ui/HeaderText/HeaderText";
import SubHeaderText from "../../ui/SubHeaderText/SubHeaderText";
import FormLabel from "../../ui/Input/FormLabel";
import CheckboxInput from "../Form/CheckboxInput";
import TextareaInput from "../../ui/Input/TextareaInput";
import TextInput from "../../ui/Input/TextInput";
import Modal from "../Popup";
import Button from "../../ui/Button";

type Service =
  | "Web Development"
  | "Cloud Solutions"
  | "Mobile App Development"
  | "Software Development"
  | "UI/UX Design"
  | "Other";

const services: Service[] = [
  "Web Development",
  "Cloud Solutions",
  "Mobile App Development",
  "Software Development",
  "UI/UX Design",
  "Other",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    services: ["Web Development"] as Service[],
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      setResult(isSuccess ? "success" : "error");
      setLoading(false);
    }, 1500);
  };

  const toggleService = (service: Service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  return (
    <>
      <section className="px-4 w-full mx-auto lg:w-[720px] lg:h-[796px] py-[24px]">
        <div className="text-center">
          <HeaderText>Ready to Start? Let’s Talk.</HeaderText>
          <SubHeaderText>
            Tell us what you need, and we’ll get back to you soon.
          </SubHeaderText>
        </div>
        <div className="w-full max-w-2xl mx-auto p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* NAME */}
            <div>
              <FormLabel htmlFor="name">Name</FormLabel>
              <TextInput
                id="name"
                value={form.name}
                placeholder="Enter your name"
                onChange={(value) => setForm({ ...form, name: value })}
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextInput
                id="email"
                type="email"
                value={form.email}
                placeholder="your@email.com"
                onChange={(value) => setForm({ ...form, email: value })}
                required
              />
            </div>

            {/* MESSAGE */}
            <div>
              <FormLabel htmlFor="message">Message</FormLabel>
              <TextareaInput
                id="message"
                value={form.message}
                placeholder="Enter your message"
                onChange={(value) => setForm({ ...form, message: value })}
                required
              />
            </div>

            {/* SERVICES */}
            <div>
              <FormLabel htmlFor="service">Service</FormLabel>
              <div id="service" className="grid grid-cols-1 md:grid-cols-2">
                {services.map((service) => (
                  <CheckboxInput
                    key={service}
                    label={service}
                    checked={form.services.includes(service)}
                    onChange={() => toggleService(service)}
                  />
                ))}
              </div>
            </div>

            {/* SUBMIT */}
            <Button className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </section>
      {result && (
        <Modal
          status={result}
          loading={loading}
          onRetry={() => setResult(null)}
          onClose={() => setResult(null)}
        />
      )}
    </>
  );
};

export default ContactForm;
