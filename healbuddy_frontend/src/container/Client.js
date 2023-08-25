import { createClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

const config = {
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
        dataset: 'production',
        apiVersion: '25-8-2023',
        useCdn: false,
        token: process.env.REACT_APP_SANITY_TOKEN
};

const Client = createClient(config);

export default Client;

const builder = ImageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);

