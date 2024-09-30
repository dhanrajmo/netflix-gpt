import OpenAI from 'openai';
// import { OPEN_AI_KEY } from './constants';

export const client = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

// async function main() {
  
// }

// main();