import OpenAI from 'openai';
import { OPENAI_KEY } from '../utils/constants';

export const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

// async function main() {
  
// }

// main();