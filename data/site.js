// Shop ki details. Jo field khali ("") hai woh site par dikhega hi nahi.

export const site = {
  name: "BakeMyDay",
  // Naam ke neeche dikhne wali line — intro, hero aur PDF teeno me.
  // Khali kar doge to kahin nahi dikhegi.
  byline: "with Kiran",
  tagline: "Freshly baked cakes & special desserts",
  pdf: "/BakeMyDay-Menu.pdf",

  // Country code ke saath likho. Header, hero aur footer teeno me yahi dikhega.
  phone: "+91 83197 68514",

  // Country code ke saath, bina + aur spaces ke. Example: "919876543210"
  // Bharte hi "Order on WhatsApp" button apne aap aa jayega.
  whatsapp: "",
  // Example: "bakemyday.in"  (sirf handle, bina @)
  instagram: "",
  // Example: "Shop 4, Main Road, Anuppur"
  address: "",
};

// tel: link ke liye — spaces aur dashes hata deta hai
export const telHref = site.phone ? `tel:${site.phone.replace(/[^\d+]/g, "")}` : null;

// chhoti jagah ke liye number, bina country code ke
export const phoneShort = site.phone.replace(/^\+\d{1,3}\s*/, "");

export const whatsappLink = (text = "Hi BakeMyDay! I would like to order a cake.") =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
    : null;
