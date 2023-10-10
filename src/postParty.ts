import { Party } from "./types/party";
import { PostPartyResponse } from "./types/postPartyResponse";

export const postParty = async (apiKey: string, party: Party, baseUrl: string = "https://docsign.se/api/",): Promise<PostPartyResponse> => {
    const response = await fetch(`${baseUrl}parties?api_key=${apiKey}`, {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(party)
    });
    return (await response.json()) as PostPartyResponse;
}