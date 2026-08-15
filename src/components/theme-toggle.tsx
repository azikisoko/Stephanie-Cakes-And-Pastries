"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options: {
    value: "light" | "system" | "dark";
    icon: React.ReactNode;
    label: string;
  }[] = [
    {
      value: "light",
      icon: <Sun size={16} strokeWidth={1.5} />,
      label: "Light",
    },
    {
      value: "system",
      icon: <Monitor size={16} strokeWidth={1.5} />,
      label: "System",
    },
    {
      value: "dark",
      icon: <Moon size={16} strokeWidth={1.5} />,
      label: "Dark",
    },
  ];

  return (
    <div className="flex items-center gap-1 bg-surface-secondary rounded-pill p-1 border border-border">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setTheme(opt.value)}
          aria-label={opt.label}
          className={`
            flex items-center justify-center w-8 h-8 rounded-pill transition-colors duration-200
            ${
              theme === opt.value
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text"
            }
          `}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
