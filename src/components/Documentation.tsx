import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, BarChart2 } from 'lucide-react';

interface Dataset {
  id: string;
  name: string;
  description: string;
  size: string;
  lastUpdated: string;
  downloadUrl: string;
  previewUrl: string;
}

const datasets: Dataset[] = [
  {
    id: '1',
    name: 'E-commerce Product Catalog',
    description: 'A comprehensive dataset of product information from various e-commerce websites.',
    size: '2.3 GB',
    lastUpdated: '2023-05-20',
    downloadUrl: '#',
    previewUrl: '#',
  },
  {
    id: '2',
    name: 'News Article Archive',
    description: 'A collection of news articles from major news outlets, including metadata and content.',
    size: '1.8 GB',
    lastUpdated: '2023-05-18',
    downloadUrl: '#',
    previewUrl: '#',
  },
  {
    id: '3',
    name: 'Social Media Trends',
    description: 'Dataset containing trending topics and associated metrics from popular social media platforms.',
    size: '3.5 GB',
    lastUpdated: '2023-05-22',
    downloadUrl: '#',
    previewUrl: '#',
  },
  {
    id: '4',
    name: 'Job Listings Compilation',
    description: 'A comprehensive collection of job listings from various job boards and company websites.',
    size: '1.2 GB',
    lastUpdated: '2023-05-19',
    downloadUrl: '#',
    previewUrl: '#',
  },
];

const Documentation: React.FC = () => {
  const [selectedDataset, setSelectedDataset] = useState<Dataset | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">爬虫数据集文档</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {datasets.map((dataset) => (
          <motion.div
            key={dataset.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedDataset(dataset)}
          >
            <h2 className="text-xl font-semibold mb-2">{dataset.name}</h2>
            <p className="text-gray-600 mb-4">{dataset.description}</p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>大小: {dataset.size}</span>
              <span>最后更新: {dataset.lastUpdated}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedDataset && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">{selectedDataset.name}</h2>
          <p className="text-gray-600 mb-6">{selectedDataset.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">数据集详情</h3>
              <ul className="space-y-2">
                <li><strong>大小:</strong> {selectedDataset.size}</li>
                <li><strong>最后更新:</strong> {selectedDataset.lastUpdated}</li>
                <li><strong>格式:</strong> CSV, JSON</li>
                <li><strong>许可:</strong> CC BY-NC-SA 4.0</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">操作</h3>
              <div className="space-y-4">
                <button className="flex items-center text-blue-600 hover:text-blue-800">
                  <Download className="mr-2" /> 下载数据集
                </button>
                <button className="flex items-center text-green-600 hover:text-green-800">
                  <Eye className="mr-2" /> 预览数据
                </button>
                <button className="flex items-center text-purple-600 hover:text-purple-800">
                  <BarChart2 className="mr-2" /> 查看可视化
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">数据可视化</h3>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">数据可视化图表将在此处显示</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Documentation;