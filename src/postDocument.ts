import { CreateDocumentRequest } from "./types/document";
import { PostDocumentResponse } from "./types/postPartyResponse";

export const postDocument = async (apiKey: string, document: CreateDocumentRequest, baseUrl: string = "https://docsign.se/api/"): Promise<PostDocumentResponse> => {
    const requestBody = {
        api_key: apiKey,
        ...document,
    }
    const response = await fetch(`${baseUrl}documents`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(requestBody)
    });
    return (await response.json()) as PostDocumentResponse;
}   