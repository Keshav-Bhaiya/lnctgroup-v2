import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const AIChatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm NIA, your AI assistant for LNCT Group. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sample responses - you can replace this with actual AI integration
  const getBotResponse = (userMessage) => {
    const responses = {
      'admission': "For admissions, please visit https://admissions.lnct.ac.in/ or contact our admission office at +91-755-2740395.",
      'courses': "LNCT Group offers 100+ programs across Engineering, Management, Pharmacy, Architecture, and more. Which specific field interests you?",
      'fee': "Fee structure varies by course and campus. Please contact our admission office for detailed fee information or visit our official website.",
      'campus': "LNCT Group has 10+ campuses across India. Our main campus is in Bhopal, Madhya Pradesh. Would you like information about a specific campus?",
      'placement': "LNCT has excellent placement records with top companies like TCS, Infosys, Wipro, and many more visiting our campus regularly.",
      'contact': "You can reach us at:\nPhone: +91-755-2740395\nEmail: info@lnct.ac.in\nAddress: Raisen Road, Bhopal, MP",
      'default': "I'm here to help with information about LNCT Group - admissions, courses, campuses, placements, and more. What would you like to know?"
    };

    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('admission') || lowerMessage.includes('apply')) {
      return responses.admission;
    } else if (lowerMessage.includes('course') || lowerMessage.includes('program') || lowerMessage.includes('study')) {
      return responses.courses;
    } else if (lowerMessage.includes('fee') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
      return responses.fee;
    } else if (lowerMessage.includes('campus') || lowerMessage.includes('location')) {
      return responses.campus;
    } else if (lowerMessage.includes('placement') || lowerMessage.includes('job') || lowerMessage.includes('career')) {
      return responses.placement;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return responses.contact;
    } else {
      return responses.default;
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newUserMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Help Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <div
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-2 sm:px-5 sm:py-3 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm font-semibold transform hover:scale-105 cursor-pointer"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          <MessageCircle size={16} className="sm:w-[18px] sm:h-[18px]" />
          
          <span className="xs:hidden">NIA AI-Help</span>
        </div>
      </div>

      {/* Chatbox Modal */}
      {isOpen && (
        <>
          {/* Mobile Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Chatbox */}
          <div className="fixed inset-4 md:bottom-6 md:right-6 md:top-auto md:left-auto z-50 md:w-96 md:h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 md:p-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} className="md:w-5 md:h-5" />
                </div>
                <div className=''>
                  <h4 className="font-semibold text-lg md:text-xl">NIA</h4>
                  <p className="text-xs md:text-sm opacity-90">LNCT AI Assistant</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X size={18} className="md:w-5 md:h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] sm:max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                    <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      message.isBot 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {message.isBot ? <Bot size={12} className="md:w-3.5 md:h-3.5" /> : <User size={12} className="md:w-3.5 md:h-3.5" />}
                    </div>
                    <div className={`px-3 py-2 md:px-4 md:py-3 rounded-2xl text-sm md:text-base leading-relaxed ${
                      message.isBot 
                        ? 'bg-white text-gray-800 shadow-sm' 
                        : 'bg-blue-600 text-white'
                    }`}>
                      <div className="whitespace-pre-line break-words">{message.text}</div>
                      <div className={`text-xs mt-1 opacity-70 ${
                        message.isBot ? 'text-gray-500' : 'text-blue-100'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2 max-w-[80%]">
                    <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-600 rounded-full flex items-center justify-center text-xs text-white shrink-0">
                      <Bot size={12} className="md:w-3.5 md:h-3.5" />
                    </div>
                    <div className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 border-t border-gray-200 bg-white shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about LNCT..."
                  className="flex-1 px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base text-gray-900"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputMessage.trim() === ''}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 md:p-3 rounded-full transition-colors duration-200 shrink-0"
                >
                  <Send size={16} className="md:w-5 md:h-5" />
                </button>
              </div>
              <div className="text-xs md:text-sm text-gray-500 mt-2 text-center">
                Powered by LNCT AI Assistant
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AIChatbox;