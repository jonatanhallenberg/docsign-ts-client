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

#### Returns

A promise that resolves to an array of documents.
