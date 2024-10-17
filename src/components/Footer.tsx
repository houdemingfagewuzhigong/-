import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">爬虫通</h3>
            <p className="mt-2">AI驱动的爬虫算法鉴别系统</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="inline-flex space-x-4">
              <li><a href="#" className="hover:text-blue-400 transition duration-300">关于我们</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">使用条款</a></li>
              <li><a href="#" className="hover:text-blue-400 transition duration-300">隐私政策</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="inline-flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition duration-300"><Github /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><Twitter /></a>
              <a href="#" className="hover:text-blue-400 transition duration-300"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 爬虫通. 保留所有权利。</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;