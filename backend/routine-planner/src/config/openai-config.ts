import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    basePath: "https://api.x.ai/v1",
  });
  return config;
};
