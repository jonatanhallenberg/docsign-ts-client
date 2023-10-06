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
