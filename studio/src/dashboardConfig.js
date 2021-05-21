export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a823632651e400d369f573",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-h72h88ca",
                  apiId: "efe26bf8-9b5c-419d-af15-77b209d4f5d8",
                },
                {
                  buildHookId: "60a82363d0a97800c22f7170",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-tgpzazox",
                  apiId: "8312ce30-3096-4046-9b5a-b7f328d0a42e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/pramodshenoy7/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-tgpzazox.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
