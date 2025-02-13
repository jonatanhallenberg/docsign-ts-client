type BaseResponse = {
    success: boolean;
    message: string;
}

export type PostPartyResponse = BaseResponse & {
    "party_id": string;
}
export type PostDocumentResponse = BaseResponse & {
    "document_id": string;
}