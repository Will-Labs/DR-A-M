import {
  APPWRITE_DATABASE_ID,
  APPWRITE_PROJECT,
  APPWRITE_ENDPOINT,
} from "./constants";
import { Client, Databases, ID } from "appwrite";

const client = new Client();
// const client =  window.Appwrite();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const databases = new Databases(client);

export const create = async (collectionId, data) => {
  try {
    await databases.createDocument(
      APPWRITE_DATABASE_ID,
      collectionId,
      ID.unique(),
      data
    );
  } catch (error) {
    console.error("lotteries.js create error:", error);
  }
};

//   export const getList = databases.listDocuments(
//     APPWRITE_DATABASE_ID,
//     APPWRITE_FOOD_COLLECTION_ID,
//     [Query.orderDesc("$createdAt")]
//   );

export const getList = (collection_id) => {
  const promise = databases.listDocuments(APPWRITE_DATABASE_ID, collection_id, [
    "createdAt"
  ]);
  return promise.then (function (response) {
    return response; // Success
  }, function (error) {
    console.log(error); // Failure
  });
};

export const deleteList = (database_id, collection_id, data) =>
  databases.deleteDocument(database_id, collection_id, data);
