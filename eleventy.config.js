module.exports = function (eleventyConfig) {
  // Keep the existing portfolio files and URLs intact.
  for (const path of ["*.html", "css", "fonts", "img", "js", "favicon*", "robots.txt"]) {
    eleventyConfig.addPassthroughCopy(path);
  }

  eleventyConfig.addPreprocessor("drafts", "md,njk", (data) => {
    if (data.draft) return false;
  });
  eleventyConfig.addCollection("notes", (collection) =>
    collection.getFilteredByGlob("content/notes/posts/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addFilter("dateISO", (date) => date.toISOString());
  eleventyConfig.addFilter("dateReadable", (date) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric", month: "long", year: "numeric", timeZone: "UTC"
    }).format(date)
  );

  return {
    dir: { input: "content", includes: "_includes", data: "_data", output: "_site" },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk"
  };
};
