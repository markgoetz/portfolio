module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets");

    eleventyConfig.addNunjucksAsyncShortcode('svgIcon', async (src, alt, sizes) => {
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
