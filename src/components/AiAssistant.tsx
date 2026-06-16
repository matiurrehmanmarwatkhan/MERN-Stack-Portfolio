import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Cpu, ShieldAlert, Sparkles } from "lucide-react";
import { ChatMessage } from "../types";

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const listEndRef = useRef<HTMLDivElement>(null);

  // Predefined quick recruitment questions to trigger instant responses
  const suggestionChips = [
    "What is Mati's main tech stack?",
    "Is he open to remote full-time jobs?",
    "Tell me about his Saylani Diploma",
    "Where is Mati located?"
  ];

  // 1. Seed initial greeting
  useEffect(() => {
    setMessages([
      {
        id: "init-1",
        role: "assistant",
        content: "Salam! 👋 I am Mati's Professional AI Assistant. I can tell you all about his full-stack MERN projects, education milestones at Saylani mass training center, direct contact coordinates, or availability for recruiting and freelance. What would you like to know?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
    ]);

    // Show a pulsing action hint on load to increase engagement
    const timer = setTimeout(() => {
      setHasNewMessage(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Auto scroll message thread
  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Gather dialogue context to send to server
      const chatHistory = [...messages, userMsg].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const res = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: data.reply || "I didn't capture a structured reply. Please rephrase your question or drop Mati an email!",
            timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      } else {
        throw new Error(data.error || "Failed to trigger AI response.");
      }
    } catch (err: any) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Apologies! I encountered a slight connection hitch. Please verify that your system backend server is running, or ask Mati directly by submitting a note in the Contact Form below!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Activation Bubble bottom right */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="ai-bot-trigger"
          onClick={() => {
            setIsOpen(!isOpen);
            setHasNewMessage(false);
          }}
          className={`relative p-4 rounded-full shadow-2xl transition-all duration-300 transform scale-95 hover:scale-105 active:scale-95 group focus:outline-none flex items-center justify-center cursor-pointer ${
            isOpen
              ? "bg-rose-500 text-white hover:bg-rose-600 rotate-90"
              : "bg-sky-500 text-black dark:bg-sky-400 dark:text-black"
          }`}
          aria-label="Toggle Career AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              {/* Pulsing glow highlights */}
              {hasNewMessage && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] text-white font-mono font-bold items-center justify-center">1</span>
                </span>
              )}
              <MessageSquare className="w-6 h-6" />
            </>
          )}
          {/* Hover visual label overlay for desktop */}
          {!isOpen && (
            <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[10.5px] font-semibold text-white tracking-wide opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-md whitespace-nowrap">
              Chat with Mati's AI Assistant
            </span>
          )}
        </button>
      </div>

      {/* Floating sliding dialog panel drawer */}
      {isOpen && (
        <div
          id="ai-bot-drawer"
          className="fixed bottom-24 right-4 sm:right-6 w-[340px] sm:w-[400px] h-[520px] max-h-[calc(100vh-120px)] bg-white dark:bg-[#09090b] rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-805 z-40 overflow-hidden flex flex-col animate-slide-in"
        >
          
          {/* Header section with cosmic accents */}
          <div className="p-4 bg-zinc-100 dark:bg-[#111115] border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-sky-500/10 rounded-xl border border-sky-400/20 text-sky-500 dark:text-sky-400 animate-pulse">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold tracking-tight flex items-center space-x-1">
                  <span>Mati's Career Assistant</span>
                  <Sparkles className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500 animate-pulse" />
                </h4>
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-mono tracking-wide">
                  Powered by Gemini 2.5 Flash
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-805 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Dialogue exchange log area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#fafafa] dark:bg-[#0c0c0e]">
            {messages.map((msg) => {
              const isAi = msg.role === "assistant";
              return (
                <div
                  key={msg.id}
                  className={`flex items-end space-x-2 ${!isAi ? "justify-end" : ""}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-3xl text-xs sm:text-sm shadow-sm leading-relaxed ${
                      isAi
                        ? "bg-zinc-50 dark:bg-zinc-905 text-zinc-800 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-bl-none"
                        : "bg-sky-500 text-black dark:bg-sky-400 dark:text-black rounded-br-none font-bold"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                    <span
                      className={`block text-[8px] mt-1 text-right ${
                        isAi ? "text-zinc-400" : "text-black/60 dark:text-zinc-700"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Typing spinner loader */}
            {isLoading && (
              <div className="flex items-center space-x-2 animate-pulse">
                <div className="px-4 py-3 rounded-3xl bg-zinc-50 dark:bg-zinc-905 text-zinc-400 text-xs sm:text-sm rounded-bl-none border border-zinc-200 dark:border-zinc-800 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-sky-505 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-sky-505 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-sky-505 rounded-full animate-bounce" />
                  <span className="text-[10.5px] font-mono text-zinc-400 pl-1">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={listEndRef} />
          </div>

          {/* Quick-action chips for easy recruiter communication */}
          {messages.length < 5 && suggestionChips.length > 0 && (
            <div className="p-3 bg-white dark:bg-[#09090b] border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-1.5">
              {suggestionChips.map((chip) => (
                <button
                   key={chip}
                   disabled={isLoading}
                   onClick={() => handleSend(chip)}
                   className="px-3 py-1.5 rounded-full text-[10px] font-medium bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-650 dark:text-zinc-350 hover:text-sky-500 dark:hover:text-sky-400 border border-zinc-200 dark:border-zinc-800/80 transition-all duration-300 text-left cursor-pointer"
                >
                  {chip}
                </button>
              ))}
            </div>
          )}

          {/* Form input field dock */}
          <div className="p-3 bg-white dark:bg-[#09090b] border-t border-zinc-200 dark:border-zinc-805/80">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask: Does Mati have Node experience?"
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-zinc-250 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/60 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 text-zinc-800 dark:text-zinc-100 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 dark:bg-sky-400 dark:text-white dark:hover:bg-sky-305 text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                aria-label="Send query"
              >
                <Send className="w-4 h-4 text-black" />
              </button>
            </form>
          </div>
          
        </div>
      )}
    </>
  );
};
