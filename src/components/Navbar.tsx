import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Home, Book, Info, Settings } from 'lucide-react';

interface NavbarProps {
  onPageChange: (page: 'chat' | 'docs') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onPageChange }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Bug className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">爬虫通</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <NavItem icon={<Home />} text="首页" onClick={() => onPageChange('chat')} />
            <NavItem icon={<Book />} text="文档" onClick={() => onPageChange('docs')} />
            <NavItem icon={<Info />} text="关于" />
            <NavItem icon={<Settings />} text="设置" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; text: string; onClick?: () => void }> = ({ icon, text, onClick }) => (
  <motion.a
    href="#"
    className="flex items-center text-gray-600 hover:text-blue-600 transition duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </motion.a>
);

export default Navbar;