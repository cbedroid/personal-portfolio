const projectListResponse = {
  count: 2,
  next: null,
  previous: null,
  page: 1,
  page_size: 15,
  num_pages: 1,
  results: [
    {
      id: 1,
      technology: [
        {
          id: 1,
          name: "tech one",
          image: "http://some-image.png",
          link: "http://test-one-link.html/",
        },
        {
          id: 2,
          name: "tech two",
          image: "http://some-image.png",
          link: "http://test-two-link.html/",
        },
      ],
      name: "Project One",
      description: "project description",
      video: "http://project-one-video.webm",
      link: "http://project-one-link.html",
    },
    {
      id: 1,
      technology: [
        {
          id: 1,
          name: "tech one",
          image: "http://some-image.png",
          link: "http://test-one-link.html/",
        },
        {
          id: 2,
          name: "tech two",
          image: "http://some-image.png",
          link: "http://test-two-link.html/",
        },
      ],
      name: "Project Two",
      description: "project two description",
      video: "http://project-two-video.webm",
      link: null,
    },
  ],
};

export { projectListResponse };
