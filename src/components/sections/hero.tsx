"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { customOrderWhatsappLink } from "../../lib/whatsapp";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero({ heroImageUrl }: { heroImageUrl?: string }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.p
              variants={itemVariants}
              className="font-body text-sm tracking-widest uppercase text-accent mb-4"
            >
              Handcrafted for your moments
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl md:text-6xl leading-[1.05] text-text mb-6"
            >
              Crafted with love,
              <br />
              made to celeberate life's <br />
              <span className="font-accent text-accent">sweetest </span>{" "}
              moments.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-base md:text-lg text-text-secondary max-w-md mb-8 leading-relaxed"
            >
              Custom cakes, pastries and dessert experiences crafted for
              celebrations big and small — made with care in Abuja.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/menu"
                className="bg-accent text-white rounded-pill px-8 h-12 flex items-center justify-center font-body text-sm font-semibold hover:bg-primary-hover transition-colors duration-200"
              >
                Explore the Menu
              </Link>
              <a
                href={customOrderWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white rounded-pill px-8 h-12 flex items-center justify-center font-body text-sm font-semibold hover:bg-accent-hover transition-colors duration-200"
              >
                Custom Order
              </a>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg-light dark:shadow-lg-dark">
              <Image
                src={heroImageUrl || "/hero-placeholder.jpg"}
                alt="Signature celebration cake by Stephanie Cakes & Pastries"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Floating info badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-md px-6 py-4 shadow-md-light dark:shadow-md-dark hidden sm:block"
            >
              <p className="font-body text-xs text-text-muted uppercase tracking-wide mb-1">
                Custom Orders
              </p>
              <p className="font-display text-xl text-text">48hr+ notice</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
