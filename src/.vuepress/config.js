module.exports = {
  base: "/",
  dest: "docs",
  markdown: {
    toc: { includeLevel: [2, 3, 4, 5, 6] }
  },
  themeConfig: {
    lastUpdated: "上次更新",
    repo: "dousybox/front-end-knowledge-structure",
    docsDir: "src",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页"
  }
};
