import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  WhatsAppIcon,
  TikTokIcon,
} from "../../components/icons";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "/custom-order", label: "Custom Orders" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/delivery", label: "Delivery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
const whatsappLink = `https://wa.me/${whatsappNumber}`;

export function Footer() {
  return (
    <footer className="bg-surface-secondary border-t border-border">
      <div className="max-w-container mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl text-text mb-4">Stephanie</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">
              Handcrafted cakes, pastries & sweet moments — made for
              celebrations big and small.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body text-sm font-semibold text-text mb-4 uppercase tracking-wide">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold text-text mb-4 uppercase tracking-wide">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <WhatsAppIcon size={16} />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${whatsappNumber}`}
                  className="flex items-center gap-2 font-body text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                >
                  <Phone size={16} strokeWidth={1.5} />+{whatsappNumber}
                </a>
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-text-secondary">
                <Mail size={16} strokeWidth={1.5} />
                hello@stephaniecakes.com
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-text-secondary">
                <MapPin size={16} strokeWidth={1.5} />
                Abuja, Nigeria
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-body text-sm font-semibold text-text mb-4 uppercase tracking-wide">
              Follow
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-pill border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="w-10 h-10 rounded-pill border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <TikTokIcon size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-pill border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-colors duration-200"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-text-muted">
            © {new Date().getFullYear()} Stephanie Cakes & Pastries. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
