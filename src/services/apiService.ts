import axios from 'axios';

const API_URL = '/api/analyze';

export const analyzeCode = async (content: string) => {
  try {
    console.log('Sending analysis request:', content);
    const response = await axios.post(API_URL, { content });
    console.log('Received analysis response:', response.data);
    return response.data.analysis;
  } catch (error) {
    console.error('Error in analyzeCode:', error);
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to analyze code. Please try again.');
    } else {
      throw new Error('An unknown error occurred. Please try again.');
    }
  }
};