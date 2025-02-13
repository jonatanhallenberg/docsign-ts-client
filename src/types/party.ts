export type Party = {
    id?: number;
    name: string;
    company?: string;
    email: string;
    phone_number?: string;
    sign_method: "bankid" | "email";
    signed_at?: Date;
    signed_by_name?: string;
    signed_by_id?: string;
    external_id?: string;
    debug?: boolean;
}
