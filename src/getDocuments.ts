import { Document } from "./types/document";

export const getDocuments = async (apiKey: string, state: "pending" | "completed", baseUrl: string = "https://docsign.se/api/"): Promise<Document[]> => {
    const response = await fetch(`${baseUrl}documents?api_key=${apiKey}&state=${state}`);
    return (await response.json()) as Document[];
}