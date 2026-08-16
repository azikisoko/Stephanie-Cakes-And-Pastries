const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const customOrderMessage =
  "Hi Stephanie! I'd like to place a custom order. Could you help me with the details?";

export const customOrderWhatsappLink = getWhatsAppLink(customOrderMessage);
