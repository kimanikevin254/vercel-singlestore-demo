const SingleStoreClient = require("@singlestore/http-client");
const instance = SingleStoreClient.ApiClient.instance;

const BasicAuth = instance.authentications["BasicAuth"];
BasicAuth.username = process.env.SINGLESTORE_WORKSPACE_USERNAME;
BasicAuth.password = process.env.SINGLESTORE_WORKSPACE_PASSWORD;

instance.basePath = "https://" + process.env.SINGLESTORE_WORKSPACE_HOST;

// Get the API handle.
const api = new SingleStoreClient.HttpApi();

export { api };