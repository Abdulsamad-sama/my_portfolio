import ContactContent from "./ContactContent";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdulsamad Hamzat for project inquiries, collaborations, or freelance opportunities. Reach out via the contact form, email, or social media.",
  openGraph: {
    title: "Contact Abdulsamad Hamzat",
    description:
      "Have a project in mind? Reach out to discuss collaborations, freelance work, or opportunities.",
    url: "https://abdulsamad.com/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
