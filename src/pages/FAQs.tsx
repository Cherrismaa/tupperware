import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const FAQs = () => {
  const faqs = [
    {
      question: "Are Tupperware products safe for food storage?",
      answer:
        "Yes, absolutely! All Tupperware products are made from food-grade plastic that is BPA-free and completely safe for storing food. Our materials meet or exceed all international safety standards.",
    },
    {
      question: "Can I use Tupperware in the microwave?",
      answer:
        "Many Tupperware products are microwave-safe. Look for the microwave-safe symbol on the bottom of the container. Always remove the seal before microwaving and follow the heating instructions provided with each product.",
    },
    {
      question: "How do I clean my Tupperware products?",
      answer:
        "Most Tupperware products are dishwasher-safe (top rack recommended). You can also hand wash them with warm, soapy water. For stubborn stains, make a paste of baking soda and water and let it sit for a few hours before washing.",
    },
    {
      question: "Does Tupperware come with a warranty?",
      answer:
        "Yes! Tupperware products come with a lifetime warranty against chipping, cracking, breaking, or peeling under normal non-commercial use. If your product doesn't perform as expected, we'll replace it.",
    },
    {
      question: "Are Tupperware products freezer-safe?",
      answer:
        "Yes, Tupperware products are designed to be freezer-safe. They're perfect for storing leftovers, meal prep, and keeping food fresh for extended periods. Just make sure to leave some space at the top for expansion.",
    },
    {
      question: "How do I remove odors from my containers?",
      answer:
        "To remove odors, fill the container with warm water and add 1-2 tablespoons of baking soda. Let it soak overnight, then wash normally. For stubborn odors, try placing the container in direct sunlight for a few hours.",
    },
    {
      question: "What sizes are available?",
      answer:
        "Tupperware products come in a wide range of sizes, from small 200ml containers perfect for snacks to large 10kg containers ideal for bulk storage. Visit our Products page to see the full range of sizes available for each product line.",
    },
    {
      question: "Can I buy replacement seals?",
      answer:
        "Yes, replacement seals are available for most Tupperware products. Contact us at our Hyderabad store or reach out via WhatsApp, and we'll help you find the right replacement parts for your products.",
    },
    {
      question: "Are the products recyclable?",
      answer:
        "Yes! Tupperware products are 100% recyclable. We're committed to sustainability and encourage you to recycle your Tupperware products at the end of their long life. Check with your local recycling facility for specific guidelines.",
    },
    {
      question: "Do you offer home delivery in Hyderabad?",
      answer:
        "Yes, we offer delivery services in Hyderabad. Please contact us via phone or WhatsApp to discuss delivery options and availability for your area.",
    },
    {
      question: "What colors are available?",
      answer:
        "Tupperware products come in various colors including our signature pink, classic white, elegant black, and seasonal colors. Color availability varies by product line. Check individual products on our Products page for specific color options.",
    },
    {
      question: "How long do Tupperware products last?",
      answer:
        "With proper care, Tupperware products can last for decades. Many customers have Tupperware items that have been in their families for generations. The durability and longevity of our products are what make them a great investment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQs | Tupperware Store Hyderabad</title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about Tupperware products, warranties, care, and usage. Learn more before making your purchase."
        />
        <link rel="canonical" href="https://tupperwarestore.co.in/faqs" />
      </Helmet>

      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-pink">Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, care
              instructions, and warranties
            </p>
          </div>

          {/* FAQs Accordion */}
          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 shadow-soft hover:shadow-medium transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center p-8 bg-muted/30 rounded-lg animate-fade-in">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help! Reach out to us and we'll get back to you as
              soon as possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918919357003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-smooth font-medium"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-lg transition-smooth font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;
