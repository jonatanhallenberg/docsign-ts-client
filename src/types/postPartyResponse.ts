type BaseResponse = {
    success: boolean;
    message: string;
}

export type PostPartyResponse = BaseResponse & {
    "party_id": number;
}
export type PostDocumentResponse = BaseResponse & {
    "document_id": number;
}