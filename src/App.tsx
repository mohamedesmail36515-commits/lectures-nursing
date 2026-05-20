import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Baby,
  Brain,
  FileSpreadsheet,
  GraduationCap,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  RefreshCw,
  Search,
  Send,
  Sparkles,
  Award,
  AlertCircle,
  BookMarked,
  Languages,
  ArrowUpRight,
  Sparkle,
  Share2,
  Copy,
  Check,
  Smartphone,
  Download,
  Info
} from "lucide-react";
import { subjects } from "./data";
import { Subject, Lecture, Slide, QuizQuestion, ChatMessage } from "./types";

export default function App() {
  // Navigation & Data State
  const [selectedSubject, setSelectedSubject] = useState<Subject>(subjects[0]);
  const [selectedLecture, setSelectedLecture] = useState<Lecture>(subjects[0].lectures[0]);
  const [activeTab, setActiveTab] = useState<"slides" | "explanations" | "quiz">("slides");
  
  // Slide Carousel State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Quiz State
  const [userAnswers, setUserAnswers] = useState<{ [questionId: string]: number }>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Font Sizing State (focusing on thin fonts per 'يكون الخط رفيع ليس عريض' guideline)
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  // Share portal copied status state
  const [copied, setCopied] = useState(false);

  // PWA/Install App State
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallGuide, setShowInstallGuide] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  // AI Tutor State
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [conversation, setConversation] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Reset conversation welcome when switching lectures
  useEffect(() => {
    setConversation([
      {
        role: "model",
        text: `أهلاً بك! أنا معلمك التمريضي الافتراضي المساعد لمادة ${selectedSubject.titleAr}. سأشرح لك تفاصيل محاضرة "${selectedLecture.title}" وكافة المصطلحات المعقدة بالعربية والإنجليزية بدقة. اختر أي شريحة واسألني عما تود فهمه!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [selectedLecture]);

  // Sync selected lecture when subject changes
  useEffect(() => {
    if (selectedSubject.lectures.length > 0) {
      setSelectedLecture(selectedSubject.lectures[0]);
      setCurrentSlideIndex(0);
      setUserAnswers({});
      setQuizSubmitted(false);
    }
  }, [selectedSubject]);

  // Reset slide index & quizzes when changing lectures
  useEffect(() => {
    setCurrentSlideIndex(0);
    setUserAnswers({});
    setQuizSubmitted(false);
  }, [selectedLecture]);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, isTyping]);

  // Resolve Lucide icons dynamically
  const renderIcon = (iconName: string) => {
    const props = { className: "w-4 h-4" };
    switch (iconName) {
      case "Baby": return <Baby {...props} />;
      case "Brain": return <Brain {...props} />;
      case "FileSpreadsheet": return <FileSpreadsheet {...props} />;
      case "GraduationCap": return <GraduationCap {...props} />;
      default: return <BookOpen {...props} />;
    }
  };

  // Font Size Classes resolver - using extreme thin weights ('font-light' -> 300 / 'font-extralight' -> 200)
  const getFontSizeClass = (part: "title" | "body" | "explanation") => {
    if (part === "title") {
      switch (fontSize) {
        case "sm": return "text-base font-light tracking-tight text-neutral-800";
        case "md": return "text-lg font-light tracking-tight text-neutral-800";
        case "lg": return "text-xl font-light tracking-tight text-neutral-800";
        case "xl": return "text-2xl font-light tracking-tight text-neutral-800";
      }
    } else if (part === "explanation") {
      switch (fontSize) {
        case "sm": return "text-[11px] font-light leading-relaxed text-neutral-500 font-sans";
        case "md": return "text-xs font-light leading-relaxed text-neutral-600 font-sans";
        case "lg": return "text-sm font-light leading-relaxed text-neutral-700 font-sans";
        case "xl": return "text-base font-light leading-relaxed text-neutral-800 font-sans";
      }
    } else { // body
      switch (fontSize) {
        case "sm": return "text-xs font-light leading-relaxed text-neutral-600";
        case "md": return "text-sm font-light leading-relaxed text-neutral-700";
        case "lg": return "text-base font-light leading-relaxed text-neutral-800";
        case "xl": return "text-lg font-light leading-relaxed text-neutral-900";
      }
    }
  };

  // Filtered lectures based on search query
  const filteredLectures = selectedSubject.lectures.filter(
    (lec) =>
      lec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lec.titleAr && lec.titleAr.includes(searchQuery))
  );

  // Submit Chat Message to Gemini Proxy
  const handleSendMessage = async (textToSend?: string) => {
    const messageText = textToSend || chatInput;
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConversation(prev => [...prev, userMessage]);
    if (!textToSend) setChatInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          history: conversation,
          message: `${messageText} (CONTEXT SLIDE: "${selectedLecture.slides[currentSlideIndex]?.title || ''} - ${selectedLecture.slides[currentSlideIndex]?.content.join('; ') || ''}" in Lecture: "${selectedLecture.title}")`
        })
      });

      const data = await response.json();
      const modelMessage: ChatMessage = {
        role: "model",
        text: data.text || "لم أتمكن من استرجاع استجابة. يرجى المحاولة لاحقاً.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setConversation(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      setConversation(prev => [
        ...prev,
        {
          role: "model",
          text: "واجهت مشكلة فنية في الاتصال بالخادم الذكي. يرجى إعادة محاولة صياغة سؤالك.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle Quick Explainer suggestions
  const triggerQuickExplain = async (type: "explain" | "translate" | "example") => {
    const currentSlide = selectedLecture.slides[currentSlideIndex];
    if (!currentSlide) return;

    let prompt = "";
    if (type === "explain") {
      prompt = `Provide a detailed academic nursing explanation for: "${currentSlide.title}" with slide content "${currentSlide.content.join(', ')}"`;
    } else if (type === "translate") {
      prompt = `Translate the clinical concepts of this slide into Arabic and explain them simply in Arabic with medical terminology translations: "${currentSlide.title}: ${currentSlide.content.join(', ')}"`;
    } else {
      prompt = `Provide 2 clinical scenarios inside the pediatric hospital ward related to: "${currentSlide.title}" and explain what the nurse should prioritize.`;
    }
    
    await handleSendMessage(prompt);
  };

  // Render active tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "slides":
        const slide: Slide = selectedLecture.slides[currentSlideIndex] || {
          id: "empty",
          slideNumber: 1,
          title: "End of Lecture",
          content: ["No further slide content is recorded for this lecture."],
          explanation: "All slide documents are summarized inside our explanatory notes tab."
        };

        return (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch h-full">
            {/* Elegant Sand/Cream Clinical Slide Document Area */}
            <div className="lg:col-span-8 flex flex-col justify-between bg-gradient-to-br from-[#fbf8f3] to-[#f6f0e5] text-amber-950 rounded-2xl p-6 md:p-8 shadow-sm border border-[#e8dfcf] min-h-[460px] relative overflow-hidden">
              {/* Subtle Medical Blueprint layout grid effect */}
              <div className="absolute inset-0 bg-[#e3d7c5] opacity-[0.15] pointer-events-none" style={{ backgroundImage: "radial-gradient(#d3c6b2 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              
              {/* Slide Header */}
              <div className="flex justify-between items-center mb-6 relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#a3947c] uppercase font-semibold">
                  {selectedSubject.titleAr} • Slide {slide.slideNumber} of {selectedLecture.slides.length}
                </span>
                <span className="bg-[#efe7da] text-[#7e6e55] text-[10px] font-mono px-3 py-1 rounded-full border border-[#dfd6c6]">
                  Slide {slide.slideNumber}
                </span>
              </div>

              {/* Slide Body */}
              <div className="my-auto relative z-10">
                <h2 className={`${getFontSizeClass("title")} font-bold text-[#5a4c38] mb-6 leading-relaxed border-b border-[#e9e0d1] pb-3 font-sans`}>
                  {slide.title}
                </h2>
                <ul className="space-y-4">
                  {slide.content.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c25e2e] mt-2 flex-shrink-0" />
                      <span className={`${getFontSizeClass("body")} text-[#6a5b46] font-medium leading-relaxed`}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Controls Footer */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-[#e8dfcf] relative z-10">
                <button
                  onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                  disabled={currentSlideIndex === 0}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#8e806a] hover:text-[#5a4c38] disabled:opacity-30 disabled:hover:text-[#8e806a] transition-all py-1.5 px-3 rounded-lg hover:bg-[#efe7da]"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <div className="hidden sm:flex gap-1.5">
                  {selectedLecture.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        idx === currentSlideIndex ? "w-5 bg-[#c25e2e]" : "w-1.5 bg-[#e3d7c5] hover:bg-[#d8ccb8]"
                      }`}
                      aria-label={`Jump to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <div className="sm:hidden text-xs text-[#8e806a] font-mono">
                  {currentSlideIndex + 1} / {selectedLecture.slides.length}
                </div>
                <button
                  onClick={() => setCurrentSlideIndex(prev => Math.min(selectedLecture.slides.length - 1, prev + 1))}
                  disabled={currentSlideIndex === selectedLecture.slides.length - 1}
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#8e806a] hover:text-[#5a4c38] disabled:opacity-30 disabled:hover:text-[#8e806a] transition-all py-1.5 px-3 rounded-lg hover:bg-[#efe7da]"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Pristine Modern Explanation sidebar */}
            <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-br from-orange-50/90 to-amber-50/50 text-neutral-800 rounded-2xl p-6 border border-orange-200/60 shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-orange-100">
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-3.5 h-3.5 text-orange-600/80" />
                    <h3 className="text-xs font-bold uppercase tracking-wider text-orange-850">العربية والشرح</h3>
                  </div>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => triggerQuickExplain("translate")}
                      className="text-[9px] font-semibold bg-orange-100 hover:bg-orange-200 text-orange-800 border border-orange-300 px-2 py-0.5 rounded transition-all"
                    >
                      ترجمة
                    </button>
                    <button
                      onClick={() => triggerQuickExplain("example")}
                      className="text-[9px] font-semibold bg-amber-100 hover:bg-amber-200 text-amber-850 border border-amber-300 px-2 py-0.5 rounded transition-all"
                    >
                      سيناريو
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-orange-750 uppercase block mb-1 font-bold">
                      Translation & Explanation
                    </span>
                    <p className={`${getFontSizeClass("explanation")} leading-relaxed text-right font-medium text-orange-950 rtl`} style={{ direction: "rtl" }}>
                      {slide.explanation}
                    </p>
                  </div>

                  {/* General Lecture Meta Info */}
                  <div className="bg-white/80 rounded-xl p-3.5 border border-orange-150 space-y-2 text-xs font-light">
                    <div className="flex justify-between items-center text-orange-900/80">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">الأستاذ</span>
                      <span className="text-orange-950 font-normal">{selectedLecture.professor || "أعضاء هيئة التدريس"}</span>
                    </div>
                    <div className="flex justify-between items-center text-orange-900/80">
                      <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">التاريخ</span>
                      <span className="text-orange-950 font-normal">{selectedLecture.date || "Syllabus Plan"}</span>
                    </div>
                    {selectedLecture.program && (
                      <div className="flex justify-between items-center text-orange-900/80">
                        <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">البرنامج</span>
                        <span className="text-orange-950 font-normal">{selectedLecture.program}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Dynamic Action Trigger to AI sidebar */}
              <button
                onClick={() => {
                  setShowAiTutor(true);
                  triggerQuickExplain("explain");
                }}
                className="mt-6 flex items-center justify-between w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white rounded-xl py-2.5 px-4 shadow-sm transition-all text-xs font-semibold"
              >
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Ask AI Tutor to compile study notes
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        );

      case "explanations":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-250 pb-4">
              <div>
                <h3 className="text-base font-bold text-neutral-800">Complete Explanatory Course Syllabus</h3>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  Detailed semantic translations and step-by-step memory guides. No slide detail omitted.
                </p>
              </div>
              <button
                onClick={() => {
                  setShowAiTutor(true);
                  handleSendMessage(`Compile a complete study guide and list definitions from this lecture: ${selectedLecture.title}`);
                }}
                className="flex items-center gap-1.5 text-xs text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-xl px-3 py-2 transition-all font-semibold"
              >
                <Sparkles className="w-3" /> Outline Study Guide
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedLecture.slides.map((s, idx) => {
                const colors = [
                  "bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border-blue-150 text-indigo-950",
                  "bg-gradient-to-br from-violet-50/80 to-purple-50/50 border-violet-150 text-purple-950",
                  "bg-gradient-to-br from-orange-50/80 to-amber-50/50 border-orange-150 text-amber-950",
                  "bg-gradient-to-br from-teal-50/80 to-emerald-50/50 border-teal-150 text-teal-950"
                ];
                const cardStyle = colors[idx % colors.length];
                return (
                  <div key={idx} className={`${cardStyle} rounded-2xl p-5 border shadow-xs hover:scale-[1.01] hover:shadow-xs transition-all flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[9px] font-mono opacity-80 bg-white/70 px-2.5 py-1 rounded-full border border-black/5 font-bold">
                          Slide {s.slideNumber}
                        </span>
                        <span className="text-[9px] opacity-65 font-mono">
                          #{s.id}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold mb-2">{s.title}</h4>
                      <p className={`${getFontSizeClass("explanation")} leading-relaxed mb-4 text-[#4a3425] font-semibold text-right rtl`} style={{ direction: "rtl" }}>
                        {s.explanation}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-dashed border-black/10 flex items-center justify-between">
                      <span className="text-[10px] opacity-75 truncate max-w-[200px] font-medium">
                        {s.content[0]}
                      </span>
                      <button
                        onClick={() => {
                          setShowAiTutor(true);
                          setCurrentSlideIndex(idx);
                          handleSendMessage(`Explain this term in a real clinical scenario: "${s.title}"`);
                        }}
                        className="text-[10px] font-bold text-indigo-950 hover:text-indigo-800 bg-white/60 hover:bg-white/90 border border-black/5 rounded-lg py-1 px-2.5 inline-flex items-center gap-0.5"
                      >
                        Bilingual Study Notes <ArrowUpRight className="w-2.5 h-2.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case "quiz":
        if (selectedLecture.quiz.length === 0) {
          return (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50/60 rounded-2xl p-12 text-center border border-amber-200/50 shadow-sm">
              <HelpCircle className="w-10 h-10 text-orange-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-sm font-bold text-orange-950">Practice questions are currently being generated</h3>
              <p className="text-xs text-orange-800/80 font-medium mt-1 max-w-sm mx-auto">
                No quiz was initially stored for this lecture. You can request our server-side AI Tutor to instantly formulate a custom test page for this material.
              </p>
              <button
                onClick={() => {
                  setShowAiTutor(true);
                  handleSendMessage(`Formulate a 4-question multiple-choice clinical nursing quiz with options A, B, C, D and explanations for: "${selectedLecture.title}"`);
                }}
                className="mt-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold text-xs rounded-xl py-2.5 px-4 shadow-sm transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" /> Assemble AI Quiz
              </button>
            </div>
          );
        }

        return (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-indigo-200 pb-4">
              <div>
                <h3 className="text-base font-bold text-neutral-800">Syllabus Active Revision Test</h3>
                <p className="text-xs text-neutral-500 font-medium mt-0.5">
                  Confirm your diagnostic and conceptual retention. Instant rationale provided upon submission.
                </p>
              </div>
              {quizSubmitted ? (
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="flex items-center gap-1.5 text-xs text-neutral-600 bg-white hover:bg-neutral-50 border border-neutral-250 rounded-xl px-3 py-1.5 transition-all font-semibold"
                >
                  <RefreshCw className="w-3" /> Reset Practice Quiz
                </button>
              ) : null}
            </div>

            <div className="space-y-6">
              {selectedLecture.quiz.map((q, qIdx) => {
                const isSelected = (oIdx: number) => userAnswers[q.id] === oIdx;
                const isCorrect = (oIdx: number) => q.correctAnswer === oIdx;

                return (
                  <div key={q.id} className="bg-gradient-to-br from-indigo-50/80 to-blue-50/50 rounded-2xl p-6 border border-indigo-150 shadow-xs space-y-4">
                    <h4 className="text-sm font-semibold text-indigo-950 flex gap-2">
                      <span className="text-indigo-600 font-mono">Q{qIdx + 1}.</span>
                      {q.question}
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {q.options.map((opt, oIdx) => {
                        let btnClass = "border-indigo-100 bg-white/70 hover:bg-white text-indigo-950/80";
                        if (!quizSubmitted && isSelected(oIdx)) {
                          btnClass = "border-indigo-500 bg-indigo-600 text-white font-semibold";
                        } else if (quizSubmitted) {
                          if (isCorrect(oIdx)) {
                            btnClass = "border-emerald-500 bg-emerald-100 text-emerald-950 font-semibold";
                          } else if (isSelected(oIdx)) {
                            btnClass = "border-rose-500 bg-rose-100 text-rose-950 font-semibold";
                          } else {
                            btnClass = "border-indigo-100/50 bg-white/30 text-indigo-400 cursor-not-allowed";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => {
                              if (quizSubmitted) return;
                              setUserAnswers(prev => ({ ...prev, [q.id]: oIdx }));
                            }}
                            disabled={quizSubmitted}
                            className={`flex items-center justify-between w-full border text-xs font-semibold text-left rounded-xl p-4 transition-all ${btnClass}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && isCorrect(oIdx) && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-650 flex-shrink-0" />}
                            {quizSubmitted && isSelected(oIdx) && !isCorrect(oIdx) && <XCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0" />}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanatory Rationale */}
                    {quizSubmitted && (
                      <div className="bg-white/80 rounded-xl p-4 border border-indigo-100 space-y-1">
                        <span className="text-[9px] font-mono font-bold text-indigo-600 uppercase tracking-widest block">
                          Clinical Rationale
                        </span>
                        <p className="text-xs text-indigo-900 font-medium leading-relaxed">
                          {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(userAnswers).length < selectedLecture.quiz.length}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl py-3 px-6 shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Grade Practice Quiz
                </button>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-neutral-700 font-sans antialiased flex flex-col justify-between">
      
      {/* Premium Dark Medical Header Area */}
      <header className="sticky top-0 bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 text-white/90 backdrop-blur-md border-b border-indigo-900 z-30 py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Logo Brand / Website name requested: Lectures nursing .com */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 to-yellow-500 text-indigo-950 rounded-xl flex items-center justify-center font-normal shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-light tracking-tight text-white flex items-center gap-1.5">
                <span className="font-bold text-amber-400">Lectures</span>
                <span className="text-slate-300 font-light">nursing .com</span>
              </h1>
              <p className="text-[9px] text-amber-300/80 font-light tracking-wider font-mono uppercase mt-0.5">
                King Salman International University • Comprehensive Revision Hub
              </p>
            </div>
          </div>

          {/* Sizing Engine & AI Switcher */}
          <div className="flex flex-wrap items-center gap-4 self-stretch md:self-auto justify-between md:justify-end">
            
            {/* Font Controller Box - supporting the "يكون الخط رفيع ليس عريض" (thin lines) preference */}
            <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
              <span className="text-[9px] uppercase font-mono font-medium text-slate-400 px-2">Font</span>
              {(["sm", "md", "lg", "xl"] as const).map(size => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`text-[9px] font-mono px-2 py-1 rounded-lg transition-all uppercase ${
                    fontSize === size
                      ? "bg-amber-400 text-indigo-950 shadow-xs font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* AI Floating Toggle */}
            <button
              onClick={() => setShowAiTutor(!showAiTutor)}
              className={`flex items-center gap-1.5 text-xs rounded-xl py-2 px-3.5 border transition-all font-light ${
                showAiTutor
                  ? "bg-amber-400/20 border-amber-400 text-amber-300"
                  : "bg-slate-800/80 border-slate-700 hover:border-slate-600 text-slate-300"
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${showAiTutor ? "animate-pulse text-amber-400" : ""}`} />
              <span>AI Tutor Sidebar</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Educational Dashboard */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Course subjects Selection Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          
          <div className="bg-gradient-to-br from-indigo-100/80 via-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-200/55 shadow-xs space-y-1.5">
            <span className="text-[9px] font-mono tracking-widest text-[#5d55ab] px-2 block uppercase mb-2 font-bold">
              Syllabus Subjects
            </span>
            {subjects.map(sub => {
              const isActive = selectedSubject.id === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => setSelectedSubject(sub)}
                  className={`flex flex-col text-left w-full p-2.5 rounded-xl transition-all ${
                    isActive
                      ? "bg-indigo-600 text-white border border-indigo-700 shadow-sm"
                      : "border border-transparent hover:bg-white/85 text-indigo-950/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`${isActive ? "text-white" : "text-indigo-500"}`}>
                      {renderIcon(sub.iconName)}
                    </div>
                    <span className="text-xs font-semibold">
                      {sub.title}
                    </span>
                  </div>
                  <span className={`text-[10px] font-light mt-1 pl-6 ${isActive ? "text-indigo-100" : "text-indigo-600/70"}`}>
                    {sub.titleAr}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Subject's Lecture Selectors and Search Box */}
          <div className="bg-gradient-to-br from-teal-100/90 via-teal-50 to-[#ecfbf7] rounded-2xl p-4 border border-teal-200/60 shadow-xs space-y-3">
            <div className="space-y-1.5">
              <span className="text-[9px] font-mono tracking-widest text-teal-700 px-2 block uppercase font-bold">
                Lectures Index
              </span>
              {/* Search Bar */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-teal-500" />
                <input
                  type="text"
                  placeholder="بحث عن محاضرة..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs font-light bg-white border border-teal-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all text-teal-950 placeholder-teal-600/50"
                />
              </div>
            </div>

            <div className="space-y-1 max-h-[380px] overflow-y-auto pr-1">
              {filteredLectures.length === 0 ? (
                <div className="text-[10px] text-teal-700 font-light p-2 text-center">
                  لا توجد نتائج مطابقة لطلب البحث
                </div>
              ) : (
                filteredLectures.map((lec) => {
                  const isLecActive = selectedLecture.id === lec.id;
                  return (
                    <button
                      key={lec.id}
                      onClick={() => setSelectedLecture(lec)}
                      className={`flex items-start justify-between w-full text-left p-2.5 rounded-xl transition-all text-xs font-light ${
                        isLecActive
                          ? "bg-teal-600 text-white font-medium border border-teal-700 shadow-sm"
                          : "text-teal-950 hover:bg-white/80"
                      }`}
                    >
                      <div className="space-y-0.5 truncate pr-2">
                        <div className={`truncate ${isLecActive ? "text-white" : "text-teal-900 font-medium"}`}>{lec.title}</div>
                        {lec.titleAr && (
                          <div className={`text-[9px] truncate ${isLecActive ? "text-[#dfedf9]" : "text-teal-600"}`}>{lec.titleAr}</div>
                        )}
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isLecActive ? "text-white" : "text-teal-400"}`} />
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Revised Content Board Area */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Lecture Metadata Billboard */}
          <div className="bg-gradient-to-r from-violet-100/90 via-indigo-50/80 to-purple-50 rounded-2xl p-5 border border-violet-200/60 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-[9px] uppercase font-mono tracking-widest text-violet-700 font-bold flex items-center gap-1.5">
                <Sparkle className="w-3 h-3 text-violet-500 animate-spin" /> ACTIVE LESSON
              </span>
              <h2 className="text-base font-bold text-violet-950 mt-0.5">
                {selectedLecture.title}
              </h2>
              {selectedLecture.titleAr && (
                <p className="text-xs text-violet-800/80 font-normal mt-0.5 font-sans">
                  {selectedLecture.titleAr}
                </p>
              )}
            </div>

            {/* Segmented Controller Tabs */}
            <div className="flex bg-violet-250/25 p-1 rounded-xl self-stretch md:self-auto border border-violet-200/40">
              {(["slides", "explanations", "quiz"] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 md:flex-none text-xs px-4 py-1.5 rounded-lg transition-all capitalize font-semibold transition-all ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white shadow-sm font-semibold"
                      : "text-indigo-950/70 hover:text-indigo-950"
                  }`}
                >
                  {tab === "slides" ? "Slides" : tab === "explanations" ? "Syllabus Notes" : "Practice Quiz"}
                </button>
              ))}
            </div>
          </div>

          {/* Render Tab Workspace */}
          <div className="min-h-[460px]">
            {renderTabContent()}
          </div>
        </div>
      </main>

      {/* Floating Full-featured AI Clinical Tutor Modal Sidebar */}
      <AnimatePresence>
        {showAiTutor && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/10 backdrop-blur-[2px]">
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={() => setShowAiTutor(false)} />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-neutral-200/60 relative z-10"
            >
              {/* AI Header */}
              <div className="p-4 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100/50">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold tracking-tight text-neutral-800">
                      AI Clinical Nursing Tutor
                    </h3>
                    <p className="text-[9px] text-neutral-400 font-light">
                      Real-time bilingual support
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowAiTutor(false)}
                  className="text-neutral-400 hover:text-neutral-800 p-1.5 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Canvas */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-neutral-50/30">
                {conversation.map((msg, idx) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={idx}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl p-4 text-xs font-light leading-relaxed shadow-[0_2px_12px_rgba(0,0,0,0.01)] ${
                          isUser
                            ? "bg-slate-800 text-white rounded-tr-none"
                            : "bg-white text-neutral-700 border border-neutral-200/50 rounded-tl-none rtl-friendly"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-neutral-400 font-mono mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex flex-col items-start">
                    <div className="bg-white border border-neutral-200/50 rounded-2xl rounded-tl-none p-4 text-xs text-neutral-400 font-light flex items-center gap-2 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                      <span className="font-mono text-[10px]">Comparing scientific records...</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Suggestions Panel */}
              <div className="p-2 bg-white border-t border-neutral-100 flex gap-1.5 overflow-x-auto">
                <button
                  onClick={() => triggerQuickExplain("explain")}
                  className="text-[9px] font-light bg-neutral-50 hover:bg-neutral-100 text-neutral-600 border border-neutral-200 px-2.5 py-1 rounded-full flex-shrink-0 flex items-center gap-1"
                >
                  <BookOpen className="w-2.5 h-2.5 text-neutral-400" /> Explain Concept
                </button>
                <button
                  onClick={() => triggerQuickExplain("translate")}
                  className="text-[9px] font-light bg-blue-50/80 hover:bg-blue-100/80 text-blue-600 border border-blue-50 px-2.5 py-1 rounded-full flex-shrink-0 flex items-center gap-1"
                >
                  <Languages className="w-2.5 h-2.5 text-blue-400" /> Translate slide
                </button>
                <button
                  onClick={() => triggerQuickExplain("example")}
                  className="text-[9px] font-light bg-indigo-50/80 hover:bg-indigo-100/80 text-indigo-600 border border-indigo-50 px-2.5 py-1 rounded-full flex-shrink-0 flex items-center gap-1"
                >
                  <Award className="w-2.5 h-2.5 text-indigo-400" /> Case Scenario
                </button>
              </div>

              {/* Chat Input Console */}
              <div className="p-4 border-t border-neutral-100 bg-white">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask Professor about clinical cases or terminology..."
                    className="flex-grow border border-neutral-200 rounded-xl px-4 py-2 text-xs font-light focus:outline-none focus:ring-1 focus:ring-blue-500 bg-neutral-50/50 focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-2 shadow-xs transition-colors flex items-center justify-center flex-shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer Branding Area with Lectures nursing .com */}
      <footer className="bg-white border-t border-neutral-100 py-6 px-6 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>King Salman International University Nursing Portal • Lectures nursing .com</span>
          </div>
          <div>
            <span>&copy; {new Date().getFullYear()} • Interactive Curricular Companion</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
