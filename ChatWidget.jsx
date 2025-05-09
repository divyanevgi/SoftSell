import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import PropTypes from 'prop-types';

const suggestedQuestions = [
  "How do I sell my software license?",
  "What types of licenses do you buy?",
  "How long does the process take?",
  "How do I get a valuation?"
];

const responses = {
  'how do i sell my software license': 'To sell your software license with SoftSell, simply fill out our contact form with details about your license. Our team will provide a valuation within 24 hours.',
  'what types of licenses do you buy': 'We purchase various types of software licenses including Enterprise Software, Cloud Subscriptions, Desktop Applications, and Development Tools.',
  'how long does the process take': 'The process typically takes 3-5 business days from initial contact to payment. We provide valuations within 24 hours of submission.',
  'how do i get a valuation': 'To get a valuation, use our contact form or chat with us directly. Include details about your license type, quantity, and terms for the most accurate estimate.',
};

const Message = ({ role, content, isDark }) => (
  <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] rounded-lg p-3 ${
        role === 'user'
          ? 'bg-blue-600 text-white'
          : isDark
          ? 'bg-gray-800 text-gray-300'
          : 'bg-white text-gray-700'
      } ${
        role === 'assistant' && isDark
          ? 'border border-gray-700'
          : role === 'assistant'
          ? 'border border-gray-200'
          : ''
      }`}
    >
      <p className="text-sm">{content}</p>
    </div>
  </div>
);

Message.propTypes = {
  role: PropTypes.oneOf(['user', 'assistant']).isRequired,
  content: PropTypes.string.isRequired,
  isDark: PropTypes.bool.isRequired,
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const isDark = document.documentElement.classList.contains('dark');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    const userMessage = { role: 'user', content };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const normalizedMessage = content.toLowerCase().trim();
      let response = 'I apologize, but I\'m not sure about that. Could you please rephrase your question or contact our support team for more specific assistance?';

      // Check if the message contains any of our known question keywords
      for (const [key, value] of Object.entries(responses)) {
        if (normalizedMessage.includes(key)) {
          response = value;
          break;
        }
      }

      const assistantMessage = {
        role: 'assistant',
        content: response
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSuggestedQuestion = (question) => {
    handleSendMessage(question);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className={`w-96 h-[500px] rounded-lg shadow-xl flex flex-col ${isDark ? 'bg-gray-800' : 'bg-white'} border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          {/* Header */}
          <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} flex justify-between items-center`}>
            <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Chat with SoftSell</h3>
            <button
              onClick={() => setIsOpen(false)}
              className={`p-1 rounded-full hover:bg-gray-100 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              <X className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            </button>
          </div>

          {/* Messages */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {messages.length === 0 ? (
              <div className="space-y-4">
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Hello! I'm here to help you with any questions about selling your software licenses.
                </p>
                <div className="space-y-2">
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Popular questions:
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestedQuestion(question)}
                        className={`text-left text-sm p-2 rounded-lg border ${
                          isDark 
                            ? 'border-gray-700 hover:bg-gray-800 text-gray-300' 
                            : 'border-gray-200 hover:bg-gray-100 text-gray-600'
                        }`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              messages.map((message, index) => (
                <Message
                  key={index}
                  role={message.role}
                  content={message.content}
                  isDark={isDark}
                />
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                }`}>
                  <Loader2 className={`w-5 h-5 animate-spin ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 px-3 py-2 rounded-lg border ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`p-2 rounded-lg ${
                  isDark
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`p-4 rounded-full shadow-lg ${
            isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;