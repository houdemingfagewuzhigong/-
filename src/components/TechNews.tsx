import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

const TechNews: React.FC = () => {
  const news = [
    { title: '最新爬虫技术趋势：2023年版', date: '2023-05-15' },
    { title: '如何构建合规的网络爬虫', date: '2023-05-10' },
    { title: 'AI在网络爬虫中的应用', date: '2023-05-05' },
    { title: '爬虫与数据隐私：平衡效率与道德', date: '2023-04-30' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Newspaper className="mr-2" />
        技术资讯
      </h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="border-b pb-2"
          >
            <a href="#" className="text-blue-600 hover:text-blue-800 transition duration-300">
              {item.title}
            </a>
            <p className="text-sm text-gray-500">{item.date}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TechNews;