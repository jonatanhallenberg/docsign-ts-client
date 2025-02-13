import { Party } from "./party";

export type Document = {
    id: number;
    name: string;
    state: string;
    comment: string | null;
    created_at: Date;
    original_pdf_url: string;
    signed_pdf_url: string;
    parties: Party[];
}
export type DocumentAttachment = {
    name: string;
    url?: string;
    base64_content?: string;
}
export type CreateDocumentRequest = {
    name: string;
    send_reminders?: boolean;
    comment?: string;
    send_receipt?: boolean;
    send_notifications?: boolean;
    callback_url?: string;
    callback_sign_url?: string;
    parties: string[]; // party_id
    debug?: boolean;
    attachments?: DocumentAttachment[];
}
