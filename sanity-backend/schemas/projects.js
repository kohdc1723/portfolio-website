export default {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "stack",
            title: "Stack",
            type: "array",
            of: [{type: "string"}]
        },
        {
            name: "projectLink",
            title: "Project Link",
            type: "string"
        },
        {
            name: "gitLink",
            title: "Git Link",
            type: "string"
        },
        {
            name: "thumbnail",
            title: "Thumbnail",
            type: "image",
            options: {
                hotspot: true
            }
        }
    ]
}