import { GraphQLClient } from "graphql-request";

// const instance = axios.create({
// 	baseURL: process.env.BLOG_API_URL,
// });

const instance = new GraphQLClient(process.env.BLOG_API_URL ?? "");

// Add a request interceptor
// instance.interceptors.request.use(function (config) {
//     config.headers.Authorization = `Bearer ${process.env.BLOG_API_TOKEN}`;
//     return config;
// });

export default instance;
