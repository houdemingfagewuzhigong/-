import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ChatInterface from './components/ChatInterface';
import TechNews from './components/TechNews';
import Footer from './components/Footer';
import Documentation from './components/Documentation';
import { MessageType } from './types';
import { motion } from 'framer-motion';
import { analyzeCode } from './services/apiService';

function App() {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'chat' | 'docs'>('chat');

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('/api/messages');
      setMessages(response.data.reverse());
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to fetch messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  const sendMessage = async (message: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log('Sending message:', message);
      const userMessage = { text: message, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      const analysis = await analyzeCode(message);
      console.log('Received analysis:', analysis);
      
      const aiResponse = { text: analysis, sender: 'ai' };
      setMessages((prevMessages) => [...prevMessages, aiResponse]);

      // Save messages to the database
      await axios.post('/api/messages', userMessage);
      await axios.post('/api/messages', aiResponse);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <Navbar onPageChange={setCurrentPage} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">爬虫通 - AI爬虫算法鉴别系统</h1>
        {currentPage === 'chat' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <ChatInterface messages={messages} onSendMessage={sendMessage} loading={loading} />
            </div>
            <div>
              <TechNews />
            </div>
          </div>
        ) : (
          <Documentation />
        )}
      </motion.div>
      <Footer />
    </div>
  );
}

export default App;