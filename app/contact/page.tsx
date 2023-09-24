"use client";
import ContactForm from "@/src/components/ContactForm";
import Container from "@/src/components/Container";

export default function Contact() {
  return (
    <Container title="Contact">
      <article className="text-xl font-light">
        I am always on the lookout for exciting opportunities to create
        something or share what I know. Feel free to reach out if you’re
        interested in having me speak at an event, if you have requests for
        content, or if you have any questions at all 🤠
      </article>
      <ContactForm />
    </Container>
  );
}
