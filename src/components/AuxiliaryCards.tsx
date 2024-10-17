import React from 'react';
import { Info, HelpCircle, Settings } from 'lucide-react';

const AuxiliaryCards: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Info className="mr-2" /> Information
        </h3>
        <p className="text-sm">This is an AI chat interface. You can ask questions and receive responses in real-time.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <HelpCircle className="mr-2" /> Help
        </h3>
        <p className="text-sm">If you need assistance, type 'help' in the chat or contact our support team.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 flex items-center">
          <Settings className="mr-2" /> Settings
        </h3>
        <p className="text-sm">Customize your chat experience in the settings panel (coming soon).</p>
      </div>
    </div>
  );
};

export default AuxiliaryCards;