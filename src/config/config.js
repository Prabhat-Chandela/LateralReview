const config = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteQueriesCollectionId: String(import.meta.env.VITE_APPWRITE_QUERIES_COLLECTION_ID),
    appwriteSubscriptionsCollectionId: String(import.meta.env.VITE_APPWRITE_SUBSCRIPTIONS_COLLECTION_ID),
    appwriteMagazinesCollectionId: String(import.meta.env.VITE_APPWRITE_MAGAZINES_COLLECTION_ID),
    appwriteBlogsCollectionId: String(import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID),
    appwriteMagazineBucketId: String(import.meta.env.VITE_APPWRITE_MAGAZINE_BUCKET_ID),
    appwriteBlogBucketId: String(import.meta.env.VITE_APPWRITE_BLOG_BUCKET_ID),

}

export default config;