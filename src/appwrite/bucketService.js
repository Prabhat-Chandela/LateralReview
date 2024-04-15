import config from "../config/config";
import { Client, Storage } from "appwrite";

export class BucketService {
    client = new Client;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.bucket = new Storage(this.client);
    }

    async getMagazineFile(magazineFile) {
        try {
            return await this.bucket.getFileView(config.appwriteMagazineBucketId, magazineFile);
        } catch (error) {
            console.log("Appwrite::getMagazineFile::error::", error)
        }
    }

getMagazineCover(magazineCover) {
        try {
            return this.bucket.getFileView(config.appwriteMagazineBucketId, magazineCover);
        } catch (error) {
            console.log("Appwrite::getMagazineCover::error::", error)
        }
    }

    async getBlogFile(blogFile) {
        try {
            return await this.bucket.getFileView(config.appwriteBlogBucketId, blogFile);
        } catch (error) {
            console.log("Appwrite::getBlogFile::error::", error)
        }
    }

    async getBlogFeaturedimage(blogFeaturedimage) {
        try {
            return await this.bucket.getFileView(config.appwriteBlogBucketId, blogFeaturedimage);
        } catch (error) {
            console.log("Appwrite::getBlogFeaturedimage::error::", error)
        }
    }


}

const bucketService = new BucketService;
export default bucketService;