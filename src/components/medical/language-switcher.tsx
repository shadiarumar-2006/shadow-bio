"use client";

import { Languages, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/lib/i18n";
import { useLangStore, useLangHydrated } from "@/lib/lang-store";

export function LanguageSwitcher() {
  const hydrated = useLangHydrated();
  const { lang: storedLang, setLang } = useLangStore();
  // Use default "ar" before hydration to match SSR
  const lang = hydrated ? storedLang : "ar";
  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 rounded-full border-primary/30 bg-card/80 backdrop-blur hover:bg-accent/50"
          aria-label="Select language"
        >
          <Languages className="h-4 w-4 text-primary" />
          <span className="text-xs font-semibold">{current.nativeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 rounded-xl">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Language / اللغة / زمان
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LANGUAGES.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLang(l.code)}
            className="flex items-center justify-between cursor-pointer rounded-lg"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">{l.flag}</span>
              <span className="font-medium">{l.nativeName}</span>
            </span>
            {l.code === lang && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
