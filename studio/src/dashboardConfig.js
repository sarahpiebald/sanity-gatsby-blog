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
                    "611fb42541d1ff84f8b47231",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-n8fcxpf1",
                  apiId: "0a71173a-6c45-46f3-9129-33d34c0491b8",
                },
                {
                  buildHookId: "611fb42563958a806ec19fce",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ybc6uip9",
                  apiId: "617390eb-1db5-4092-9bcc-869347e30789",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sarahpiebald/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ybc6uip9.netlify.app",
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
