// This service has been disabled for offline functionality.
// No external AI calls will be made.

export const editImageWithGemini = async (
  _base64Image: string,
  _mimeType: string,
  _prompt: string
): Promise<string> => {
  throw new Error("AI services are disabled in offline mode.");
};