import { Party } from "./types/party";
import { PostPartyResponse } from "./types/postPartyResponse";

export const postParty = async (apiKey: string, party: Party, baseUrl: string = "https://docsign.se/api/",): Promise<PostPartyResponse> => {
    const requestBody = {
        api_key: apiKey,
        ...party
    }
    const response = await fetch(`${baseUrl}parties`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(requestBody)
    });
    return (await response.json()) as PostPartyResponse;
}