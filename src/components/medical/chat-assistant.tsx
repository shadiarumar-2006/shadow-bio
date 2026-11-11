"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, Trash2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { useLangStore, useLangHydrated } from "@/lib/lang-store";
import { getTranslation } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Msg = { role: "user" | "assistant"; content: string };

export function ChatAssistant() {
  const hydrated = useLangHydrated();
  const { lang: storedLang } = useLangStore();
  const lang = hydrated ? storedLang : "ar";
  const t = getTranslation(lang);
  const dir = lang !== "en" ? "rtl" : "ltr";

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Reset messages when language changes (so welcome message matches language)
  useEffect(() => {
    setMessages([{ role: "assistant", content: t.chat.welcome }]);
    setError(null);
  }, [lang, t.chat.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendQuestion = async (text?: string) => {
    const question = (text ?? input).trim();
    if (!question || loading) return;

    setError(null);
    setInput("");

    const userMsg: Msg = { role: "user", content: question };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${res.status}`);
      }
      const data = await res.json();
      const reply = (data?.reply || "").trim();
      if (!reply) throw new Error(t.chat.error);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : t.chat.error;
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendQuestion();
    }
  };

  const clearChat = () => {
    setMessages([{ role: "assistant", content: t.chat.welcome }]);
    setError(null);
  };

  return (
    <div
      dir={dir}
      className="flex flex-col rounded-3xl border border-primary/20 bg-card/95 shadow-xl shadow-primary/10 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 sm:gap-3 border-b border-primary/15 bg-gradient-to-r from-primary/10 via-accent/30 to-primary/10 px-3 py-2.5 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="relative shrink-0">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl sm:rounded-2xl bg-primary text-primary-foreground shadow-md">
              <Bot className="h-4 sm:h-5 w-4 sm:w-5" />
            </div>
            <span className="absolute -bottom-0.5 -end-0.5 h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full bg-emerald-400 border-2 border-card bio-pulse" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm sm:text-base font-bold leading-tight truncate">{t.chat.title}</h3>
            <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1 truncate">
              <Sparkles className="h-2.5 sm:h-3 w-2.5 sm:w-3 text-primary shrink-0" />
              <span className="truncate">{t.chat.subtitle}</span>
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearChat}
          className="text-muted-foreground hover:text-destructive gap-1.5 shrink-0 h-9 w-9 p-0"
        >
          <Trash2 className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
        </Button>
      </div>

      {/* Messages */}
      <ScrollArea className="h-[360px] sm:h-[460px] w-full px-2 sm:px-4 py-3">
        <div ref={scrollRef} className="flex flex-col gap-2.5 sm:gap-3">
          {messages.map((m, i) => (
            <MessageBubble key={i} msg={m} roleLabel={t.chat.role} />
          ))}
          {loading && (
            <div className="flex items-start gap-2 sm:gap-2.5 self-start">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-primary text-primary-foreground">
                <Bot className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
              </div>
              <div className="rounded-xl sm:rounded-2xl rounded-tl-sm bg-muted px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                  <span className="ms-2 text-[10px] sm:text-xs">{t.chat.thinking}</span>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="rounded-lg sm:rounded-xl border border-destructive/30 bg-destructive/10 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-destructive flex items-start gap-2">
              <AlertTriangle className="h-3.5 sm:h-4 w-3.5 sm:w-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Suggestions */}
      {messages.length <= 1 && !loading && (
        <div className="px-2 sm:px-5 pb-2 flex flex-wrap gap-1.5 sm:gap-2">
          {t.chat.suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => sendQuestion(s)}
              className="rounded-full border border-primary/30 bg-accent/40 px-2.5 sm:px-3 py-1.5 text-[10px] sm:text-xs text-foreground hover:bg-accent/70 hover:border-primary/50 transition text-start"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-primary/15 bg-card p-2.5 sm:p-4">
        <div className="flex items-end gap-2">
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder={t.chat.placeholder}
            disabled={loading}
            className="min-h-[44px] sm:min-h-[52px] max-h-[100px] sm:max-h-[120px] resize-none rounded-xl sm:rounded-2xl border-primary/25 bg-background/80 text-xs sm:text-sm focus-visible:ring-primary"
            rows={2}
          />
          <Button
            onClick={() => sendQuestion()}
            disabled={loading || !input.trim()}
            size="icon"
            className="h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] rounded-xl sm:rounded-2xl bg-primary hover:bg-primary/90 shrink-0"
            aria-label={t.chat.send}
          >
            <Send className={cn("h-4 sm:h-5 w-4 sm:w-5", dir === "rtl" && "rotate-180")} />
          </Button>
        </div>
        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] text-muted-foreground flex items-center gap-1.5">
          <AlertTriangle className="h-3 w-3 shrink-0" />
          {t.chat.disclaimer}
        </p>
      </div>
    </div>
  );
}

function MessageBubble({ msg, roleLabel }: { msg: Msg; roleLabel: string }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex items-start gap-2 sm:gap-2.5", isUser ? "self-end flex-row-reverse" : "self-start")}>
      <div
        className={cn(
          "flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg sm:rounded-xl shadow-sm",
          isUser ? "bg-secondary text-secondary-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        {isUser ? <User className="h-3.5 sm:h-4 w-3.5 sm:w-4" /> : <Bot className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
      </div>
      <div
        className={cn(
          "max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm leading-relaxed shadow-sm whitespace-pre-wrap break-words",
          isUser
            ? "rounded-tr-sm bg-secondary text-secondary-foreground"
            : "rounded-tl-sm bg-muted/60 text-foreground border border-primary/10"
        )}
      >
        {!isUser && (
          <Badge variant="outline" className="mb-1 sm:mb-1.5 me-1.5 sm:me-2 inline-flex gap-1 border-primary/30 text-primary text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5">
            <Sparkles className="h-2.5 sm:h-3 w-2.5 sm:w-3" />
            {roleLabel}
          </Badge>
        )}
        {msg.content}
      </div>
    </div>
  );
}
