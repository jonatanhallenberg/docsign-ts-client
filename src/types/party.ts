export type Party = {
    id: number;
    name: string;
    company: string;
    email: string;
    phone_number: string | null;
    sign_method: "bankid" | "email";
    signed_at: Date | null;
    signed_by_name: string | null;
    signed_by_id: string | null;
    external_id: string | null;
}
