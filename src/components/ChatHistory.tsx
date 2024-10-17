import React from 'react';
import { MessageType } from '../types';
import { History } from 'lucide-react';

interface ChatHistoryProps {
  messages: MessageType[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <History className="mr-2" /> Chat History
      </h2>
      <div className="space-y-2 max-h-[300px] overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className="text-sm">
            <span className={`font-semibold ${message.sender === 'user' ? 'text-blue-500' : 'text-green-500'}`}>
              {message.sender === 'user' ? 'You' : 'AI'}:
            </span>{' '}
            {message.text.length > 50 ? `${message.text.substring(0, 50)}...` : message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;