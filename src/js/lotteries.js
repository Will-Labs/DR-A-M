
import  {  sdk  }  from  '../js/appwrite';
import { ID, Query } from 'appwrite';

export const create = (COLLECTION_ID, data) => sdk.databases.createDocument(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        data
);

export const update = (COLLECTION_ID, document_id, data) => {
    const res = sdk.databases.updateDocument(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        document_id,
        data    
    );

    return res;
}
export const get = async (COLLECTION_ID) => {
    const res = await sdk.databases.listDocuments(
        sdk.DATABASE_ID,
        COLLECTION_ID,
        [
            Query.orderDesc("$createdAt")
        ]
    );

    return res.documents
}
