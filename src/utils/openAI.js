import OpenAI from 'openai';
import { openAIKey } from './constants';

export const openai = new OpenAI({
  apiKey: openAIKey,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

// async function main() {
  
// }

// main();