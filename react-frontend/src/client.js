import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: "8cr2chlq",
    dataset: "production",
    apiVersion: "2023-01-18",
    useCdn: true,
    token: "sk5qvxucKrrNqAJWHYfPvKD2J9GYGtgDPUplArzJxgnFAl64fPKrIlWC6SJHNVBTmOUX0rvF34UjxzGtOh8Zz8zAHBevyHA5uFdDQDOq2G4SgnjAoC8hTOMMD6YqPqUEs40oMpIEvh2LVYPY5gO7uTXEGldfq8ni0fDrSUIwLUNfyWuKRZjb"
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);