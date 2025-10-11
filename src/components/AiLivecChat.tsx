"use client";
import { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RiChatSmileAiFill } from "react-icons/ri";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    { id: number; text: string; sender: string; timestamp: string }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-greet user on page load
  useEffect(() => {
    const greetTimeout = setTimeout(() => {
      setIsOpen(true); // open chat
      setMessages([
        {
          id: 1,
          text: "👋 Hi there! I'm Guidy, your TYIL Leadership assistant. I can help you learn more about our programs, services, and impact. What would you like to know?",
          sender: "bot",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 2000); // greet after 2 seconds

    return () => clearTimeout(greetTimeout);
  }, []);

  const botResponses: Record<string, string> = {
    hello:
      "Hello! 👋 I'm Guidy, welcome to TYIL Leadership Academy. How can I help you today?",
    hi: "Hi there! I'm Guidy. Thanks for reaching out. What would you like to know about our leadership programs?",

    // Programs & Services
    programs:
      "🎓 We offer transformative leadership programs including Youth Leadership Development, Executive Coaching, Community Impact Initiatives, and Mentorship Programs. Which one interests you?",
    services:
      "💼 TYIL provides Leadership Training, Capacity Building Workshops, Youth Empowerment Programs, and Organizational Development consulting. Would you like to learn more about any specific program?",
    courses:
      "📚 Our courses cover Leadership Fundamentals, Social Innovation, Community Development, Personal Growth, and more. Visit our Programs page to see the full curriculum.",

    // Enrollment & Registration
    enroll:
      "✅ Enrollment is open! You can apply through our online application form on the Programs page, or contact us directly. I'm here to guide you through the process!",
    register:
      "📝 Ready to join? Fill out the registration form on our website or reach out via the contact page. I'll guide you through every step!",
    apply:
      "🚀 To apply, visit our Programs page, select your desired program, and complete the application form. Our team will review and get back to you within 48 hours.",

    // About TYIL
    about:
      "🌟 TYIL (Teens and Youth In Leadership) Academy is dedicated to raising transformational leaders who create lasting impact in their communities. We've empowered over 2500+ young leaders across Nigeria and Africa!",
    mission:
      "🎯 Our mission is to equip emerging leaders with the skills, mindset, and networks to drive positive change in their communities and beyond.",
    vision:
      "✨ We envision a generation of ethical, purpose-driven leaders transforming Africa through innovation, integrity, and impact.",

    // Practical Information
    location:
      "📍 We're based in Lagos, Nigeria, with programs running both in-person and virtually. Our online programs are accessible to participants nationwide!",
    contact:
      "📬 You can reach us via the contact form on our website, email us at info@tyilacademy.org, or call +234 XXX XXX XXXX. We typically respond within 24 hours.",
    fees: "💰 Program fees vary by course. Youth programs start at ₦15,000, while professional development courses range from ₦50,000 - ₦150,000. Scholarships are available!",
    scholarship:
      "🎓 Yes! We offer need-based scholarships and payment plans. Contact our admissions team to discuss available options and eligibility requirements.",
    duration:
      "⏱️ Program duration varies: Short workshops (1-3 days), Certificate courses (4-12 weeks), and Mentorship programs (3-6 months). Check individual program pages for details.",

    // Support & Community
    testimonials:
      "💬 Our alumni have gone on to lead NGOs, start social enterprises, and create community impact projects. Check out their stories on our Testimonials page!",
    partners:
      "🤝 We partner with leading NGOs, corporate organizations, and international development agencies to provide world-class training and opportunities for our participants.",
    volunteer:
      "❤️ Interested in volunteering? We're always looking for passionate individuals to support our programs. Fill out the volunteer form on our Get Involved page!",
    donate:
      "💝 Your donation helps provide scholarships and resources for emerging leaders. Visit our Donate page to contribute to our mission of raising transformational leaders.",

    // FAQ
    online:
      "💻 Yes! We offer both in-person and online programs. Our virtual training uses interactive platforms to ensure an engaging learning experience.",
    certificate:
      "📜 All participants who complete our programs receive a certificate of completion from TYIL Leadership Academy, recognized by our partner organizations.",
    age: "👥 Our programs cater to different age groups: Youth programs (15-25 years), Young professionals (26-35 years), and Executive programs (35+ years).",

    // Call to Action
    started:
      "🚀 Ready to start your leadership journey? Visit our Programs page to explore our courses, or schedule a free consultation call. I'm here to guide you!",
    next: "➡️ Great question! Here's what you can do next: 1) Browse our Programs, 2) Read success stories, 3) Apply for a program, or 4) Contact us for personalized guidance.",

    // Default
    default:
      "🤔 I'm not sure I understand that. You can ask me about our *programs*, *enrollment*, *scholarships*, *testimonials*, *how to apply*, or *contact information*. How can I help you?",
  };

  const generateBotResponse = (userMessage: string) => {
    const lower = userMessage.toLowerCase();

    // Greetings
    if (lower.includes("hello") || lower.includes("hi"))
      return botResponses.hello;

    // Programs & Services
    if (lower.includes("service")) return botResponses.services;
    if (lower.includes("program") || lower.includes("training"))
      return botResponses.programs;
    if (lower.includes("course")) return botResponses.courses;

    // Enrollment
    if (
      lower.includes("enroll") ||
      lower.includes("application") ||
      lower.includes("registration")
    )
      return botResponses.enroll;
    if (lower.includes("register")) return botResponses.register;
    if (lower.includes("apply")) return botResponses.apply;

    // About
    if (lower.includes("about")) return botResponses.about;
    if (lower.includes("mission") || lower.includes("skill"))
      return botResponses.mission;
    if (lower.includes("vision")) return botResponses.vision;

    // Practical Info
    if (lower.includes("location") || lower.includes("venue"))
      return botResponses.location;
    if (lower.includes("contact")) return botResponses.contact;
    if (
      lower.includes("fee") ||
      lower.includes("cost") ||
      lower.includes("price")
    )
      return botResponses.fees;
    if (lower.includes("scholarship")) return botResponses.scholarship;
    if (lower.includes("duration") || lower.includes("long"))
      return botResponses.duration;

    // Community
    if (lower.includes("testimonial") || lower.includes("review"))
      return botResponses.testimonials;
    if (lower.includes("partner")) return botResponses.partners;
    if (lower.includes("volunteer")) return botResponses.volunteer;
    if (lower.includes("donate") || lower.includes("donation"))
      return botResponses.donate;

    // FAQ
    if (lower.includes("online") || lower.includes("virtual"))
      return botResponses.online;
    if (lower.includes("certificate")) return botResponses.certificate;
    if (lower.includes("age")) return botResponses.age;

    // CTA
    if (lower.includes("start") || lower.includes("begin"))
      return botResponses.started;
    if (lower.includes("next")) return botResponses.next;

    return botResponses.default;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages(prev => [...prev, userMsg]);
    setMessage("");

    setTimeout(() => {
      const botMsg = {
        id: messages.length + 2,
        text: generateBotResponse(message),
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  // If closed — only show chat bubble + WhatsApp
  if (!isOpen) {
    return (
      <div className="fixed z-50 flex flex-col items-end space-y-3 bottom-22 right-6">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+2348162012505"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-transform"
          title="chat on WhatsApp"
        >
          <FaWhatsapp className="text-white w-6 h-6" />
        </a>

        {/* Chat Bubble Button */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open chat"
            className="w-12 h-12 cursor-pointer rounded-full shadow-2xl bg-gradient-to-r from-red-500 to-primaryRed hover:scale-110 transition-transform"
          >
            <RiChatSmileAiFill className="text-white w-6 h-6 mx-auto" />
          </button>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  // Chat Window
  return (
    <div className="fixed z-50 bottom-24 right-6">
      <div
        className={`bg-slate-900 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 ${
          isMinimized ? "w-80 h-16" : "w-80 h-96"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-primaryRed">
              <Bot className="w-4 h-4 text-white" />
            </div>

            <div>
              <div className="text-sm font-semibold text-white">Guidy</div>
              <div className="flex items-center text-xs text-green-400">
                <div className="w-2 h-2 mr-1 bg-green-400 rounded-full"></div>
                Online
              </div>
            </div>
          </div>

          {/* Minimize buttons visible */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 cursor-pointer hover:text-white transition"
            >
              {isMinimized ? (
                <Maximize2 className="w-4 h-4" />
              ) : (
                <Minimize2 className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 cursor-pointer hover:text-white transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        {!isMinimized && (
          <>
            <div className="h-64 p-4 space-y-4 overflow-y-auto">
              {messages.map(msg => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      msg.sender === "user" ? "order-2" : "order-1"
                    }`}
                  >
                    <div
                      className={`flex items-center space-x-2 mb-1 ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {msg.sender === "bot" && (
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-red-500 to-primaryRed">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                      )}
                      {msg.sender === "user" && (
                        <div className="flex items-center justify-center w-6 h-6 bg-gray-600 rounded-full">
                          <User className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <span className="text-xs text-gray-400">
                        {msg.timestamp}
                      </span>
                    </div>

                    <div
                      className={`p-3 rounded-lg ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-red-500 to-primaryRed text-white ml-8"
                          : "bg-white/10 text-gray-300 mr-8"
                      }`}
                    >
                      <p className="text-[13px] leading-relaxed">{msg.text}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-sm" ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="px-4 pb-4 pt-2 border-t border-white/10">
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 text-white bg-white/5 border border-white/10 rounded-lg px-3 py-2 placeholder:text-gray-400 placeholder:text-xs focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-primaryRed hover:from-red-400 hover:to-red-500 transition"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChat;
