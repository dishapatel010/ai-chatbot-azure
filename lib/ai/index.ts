import { createAzure } from '@ai-sdk/azure';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

// Initialize Azure provider globally
const azureProvider = createAzure({
  resourceName: process.env.AZURE_RESOURCE_NAME!, // Resource name from env variables
  apiKey: process.env.AZURE_API_KEY!,            // API key from env variables
  apiVersion: process.env.AZURE_API_VERSION || '2024-08-01-preview', // API version
});

export const customModel = (deploymentName: string) => {
  return wrapLanguageModel({
    model: azureProvider(deploymentName), // Use the deployment name directly
    middleware: customMiddleware,
  });
};
