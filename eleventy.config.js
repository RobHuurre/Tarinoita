module.exports = function(eleventyConfig) {
  // Kopioidaan tyylitiedosto suoraan build-kansioon
  eleventyConfig.addPassthroughCopy("src/tyylit.css");

  // Yksinkertainen date-filtteri (muuttaa 2026-10-15 muotoon "15.10.2026")
  eleventyConfig.addFilter("date", function(date) {
    if (!date) return "";
    const d = new Date(date);
    return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
