import { Document } from "./types/document";

export const getDocument = async (apiKey: string, state: "pending", baseUrl: string = "https://docsign.se/api/"): Promise<Document[]> => {
    const response = await fetch(`${baseUrl}documents?api_key=${apiKey}&state=${state}`);
    return (await response.json()) as Document[];
}