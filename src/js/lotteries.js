// import { sdk } from "../js/appwrite";
// import { ID, Query } from "appwrite";

// export const create = (COLLECTION_ID, data) => sdk.databases.createDocument(
//         sdk.DATABASE_ID,
//         COLLECTION_ID,
//         ID.unique(),
//         data
// );

// export const update = (COLLECTION_ID, document_id, data) => {
//     const res = sdk.databases.updateDocument(
//         sdk.DATABASE_ID,
//         COLLECTION_ID,
//         document_id,
//         data
//     );

//     return res;
// }
// export const get = async (COLLECTION_ID) => {
//     const res = await sdk.databases.listDocuments(
//         sdk.DATABASE_ID,
//         COLLECTION_ID,
//         [
//             Query.orderDesc("$createdAt")
//         ]
//     );

//     return res.documents
// }
import { Client, Databases, ID, Query } from "appwrite";
import {
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT,
  APPWRITE_DATABASE_ID,
  APPWRITE_FOOD_COLLECTION_ID,
} from "../js/constants";

const client = new Client();

const databases = new Databases(client);

client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);

export const create = (collectionId, data) =>
  databases.createDocument(
    APPWRITE_DATABASE_ID,
    collectionId,
    ID.unique(),
    data
  );

// export const getList = databases.listDocuments(
//   APPWRITE_DATABASE_ID,
//   APPWRITE_FOOD_COLLECTION_ID,
//   [Query.orderDesc("$createdAt")]
// );

export const deleteList = (database_id, collection_id, data) =>
  databases.deleteDocument(database_id, collection_id, data);
