import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  // Include country code without +, spaces, or hyphens.
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919629992750";

  const message = `Hi Coach Sindhu Raja! 👋

I came across the She Sweats website and I'm interested in joining your fitness classes.

Could you please share:

🏋️ Class timings
💰 Monthly fee
📍 Studio location
🎁 Trial class availability

Looking forward to your reply.
Thank you!`;

  const encodedMessage = encodeURIComponent(message);

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with She Sweats on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.45)] transition duration-300 hover:scale-110 hover:bg-green-600"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}