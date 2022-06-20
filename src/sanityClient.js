import sanityClient from "@sanity/client"
export default sanityClient({
    projectId: "s5b4sicl",
    dataset: "production",
    useCdn: true
});