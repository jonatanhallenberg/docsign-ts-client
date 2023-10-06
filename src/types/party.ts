export type Party = {
    id: number;
    name: string;
    company: string;
    email: string;
    phone_number?: string;
    sign_method: string;
    signed_at: string | null;
    signed_by_name: string | null;
    signed_by_id: string | null;
}
