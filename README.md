# inleed-docsign-ts-client
This is a TypeScript client for the Inleed Docsign API.

Example:
```typescript
import { getDocuments } from 'inleed-docsign-ts-client';

const documents = await getDocuments(process.env.INLEED_API_KEY, 'pending')
```

## Documentation

### getDocuments(apiKey: string, status: string, limit?: number, offset?: number): Promise<Document[]>

Get documents with a specific status.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| apiKey | string | The API key to use for authentication. |
| status | "pending", "completed" | The status of the documents to get. |
| baseUrl | string | The base URL of the API. Defaults to https://docsign.se/api/ |

#### Returns

A promise that resolves to an array of documents.

### getParties(apiKey: string, baseUrl: string = "https://docsign.se/api/"): Promise<Party[]>

Get parties

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| apiKey | string | The API key to use for authentication. |
| baseUrl | string | The base URL of the API. Defaults to https://docsign.se/api/ |

#### Returns

A promise that resolves to an array of parties.

### postParty(apiKey: string, baseUrl: string = "https://docsign.se/api/", party: Party): Promise<PostPartyResponse>

Creates a party

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| apiKey | string | The API key to use for authentication. |
| baseUrl | string | The base URL of the API. Defaults to https://docsign.se/api/ |

#### Returns

A promise that resolves to the created response status (PostPartyResponse)


