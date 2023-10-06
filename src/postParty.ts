import { Party } from "./types/party";
import { PostPartyResponse } from "./types/postPartyResponse";

export const postParty = async (apiKey: string, baseUrl: string = "https://docsign.se/api/", party: Party): Promise<PostPartyResponse> => {
    const response = await fetch(`${baseUrl}parties?api_key=${apiKey}`, { method: "POST", body: JSON.stringify(party) });
    return (await response.json()) as PostPartyResponse;
}