import { Party } from "./types/party";

export const getParties = async (apiKey: string, baseUrl: string = "https://docsign.se/api/"): Promise<Party[]> => {
    const response = await fetch(`${baseUrl}parties?api_key=${apiKey}`);
    return (await response.json()) as Party[];
}