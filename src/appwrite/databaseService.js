import config from "../config/config";
import { Client, Databases, ID, Query} from "appwrite";

export class DatabaseService {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client);
    }

    async createSubscription( email ) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteSubscriptionsCollectionId, ID.unique(),email);

        } catch (error) {
            console.log("Appwrite::createSubscription::error::", error)
        }
    }

    async createQuery({ userEmail, userQuery }) {
        try {
            return await this.databases.createDocument(config.appwriteDatabaseId, config.appwriteQueriesCollectionId, ID.unique(),
                {
                    userEmail,
                    userQuery
                });

        } catch (error) {
            console.log("Appwrite::createQuery::error::", error)
        }
    }

    async getBlogs(){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteBlogsCollectionId,
            [Query.orderDesc("$createdAt")]
            );
        } catch (error) {
            console.log("Appwrite::getBlogs::error::", error)
        }
    }

    async getMagazines(){
        try {
            return await this.databases.listDocuments(config.appwriteDatabaseId, config.appwriteMagazinesCollectionId,
                [Query.orderDesc("$createdAt")]
            );
        } catch (error) {
            console.log("Appwrite::getMagazines::error::", error)
        }
    }

    async getBlog(blogId){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteBlogsCollectionId, blogId);
        } catch (error) {
            console.log("Appwrite::getBlog::error::", error)
        }
    }

    async getMagazine(magazineId){
        try {
            return await this.databases.getDocument(config.appwriteDatabaseId, config.appwriteMagazinesCollectionId, magazineId);
        } catch (error) {
            console.log("Appwrite::getMagazine::error::", error)
        }
    }

}


const databaseService = new DatabaseService();
export default databaseService;