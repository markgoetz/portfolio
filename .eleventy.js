const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addNunjucksAsyncShortcode('inlineSvg', async (src, alt, sizes) => {
        const metadata = await Image(src, {
            formats: ['svg'],
            dryRun: true,
        });
        
        return metadata.svg[0].buffer.toString();
    });

    return {
        markdownTemplateEngine: "njk"
    };
};
