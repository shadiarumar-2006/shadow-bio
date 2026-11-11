"use client";

import { Moon, Sun, Monitor } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useLangStore, useLangHydrated } from "@/lib/lang-store";

const emptySubscribe = () => () => {};
const clientSnap = () => true;
const serverSnap = () => false;

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const langHydrated = useLangHydrated();
  // mounted=false on server + first client render, then true → no hydration mismatch
  const mounted = useSyncExternalStore(emptySubscribe, clientSnap, serverSnap);
  const { lang: storedLang } = useLangStore();
  const lang = langHydrated ? storedLang : "ar";
  const isDark = resolvedTheme === "dark";

  const labels: Record<string, { light: string; dark: string; system: string }> = {
    en: { light: "Light", dark: "Dark", system: "System" },
    ar: { light: "نهاري", dark: "ليلي", system: "تلقائي" },
    ku: { light: "ڕۆژ", dark: "شەو", system: "سیستەم" },
  };
  const L = labels[lang] || labels.en;
  const currentTheme = isDark ? "dark" : "light";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-primary/30 bg-card/80 backdrop-blur hover:bg-accent/50 relative overflow-hidden"
          aria-label="Toggle theme"
        >
          {mounted ? (
            <>
              <Sun
                className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500"
                aria-hidden
              />
              <Moon
                className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary"
                aria-hidden
              />
            </>
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 rounded-xl">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer rounded-lg gap-2"
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span className="font-medium">{L.light}</span>
          {currentTheme === "light" && <span className="ms-auto text-primary">●</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer rounded-lg gap-2"
        >
          <Moon className="h-4 w-4 text-primary" />
          <span className="font-medium">{L.dark}</span>
          {currentTheme === "dark" && <span className="ms-auto text-primary">●</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer rounded-lg gap-2"
        >
          <Monitor className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{L.system}</span>
          {!mounted && <span className="ms-auto text-primary">●</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
