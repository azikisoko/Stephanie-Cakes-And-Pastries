"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const close = () => router.back();

  return (
    <div className="fixed inset-0 z-[60] flex items-start md:items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={close}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative bg-bg w-full h-full md:h-auto md:max-h-[90vh] md:w-full md:max-w-4xl md:rounded-lg overflow-y-auto"
      >
        <button
          onClick={close}
          className="sticky top-4 left-full mr-4 w-10 h-10 rounded-pill bg-surface border border-border flex items-center justify-center text-text z-10"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.5} />
        </button>
        <div className="p-5 md:p-10 -mt-10 md:mt-0">{children}</div>
      </motion.div>
    </div>
  );
}
