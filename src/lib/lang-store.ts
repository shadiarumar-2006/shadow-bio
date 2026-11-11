"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useSyncExternalStore, useEffect } from "react";
import type { Language } from "@/lib/i18n";

type LangState = {
  lang: Language;
  setLang: (lang: Language) => void;
};

export const useLangStore = create<LangState>()(
  persist(
    (set) => ({
      lang: "ar",
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "shadowbio-lang",
      // Skip automatic hydration to avoid SSR/client mismatch.
      // Rehydrate manually once on the client.
      skipHydration: true,
    }
  )
);

// ---- Client-mounted flag via useSyncExternalStore ----
// Returns false on server and during first client render, then true.
// Avoids setState-in-effect pattern.
const emptySubscribe = () => () => {};
const clientSnap = () => true;
const serverSnap = () => false;

// Module-level guard so rehydrate runs exactly once per page lifecycle.
let rehydratedOnce = false;

/**
 * Returns `true` after the component has mounted on the client.
 * Also triggers rehydration of the persisted language store exactly once.
 */
export function useLangHydrated() {
  const mounted = useSyncExternalStore(emptySubscribe, clientSnap, serverSnap);

  // Rehydrate the persisted store once after mount.
  // `rehydrate` updates the store, which will trigger a re-render of
  // subscribing components — but this runs after mount, not during render.
  useEffect(() => {
    if (!rehydratedOnce) {
      rehydratedOnce = true;
      // Defer to next tick to escape the current render cycle.
      const id = window.requestAnimationFrame(() => {
        useLangStore.persist.rehydrate();
      });
      return () => window.cancelAnimationFrame(id);
    }
  }, []);

  return mounted;
}
