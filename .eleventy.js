const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const anchors_plugin = require('@orchidjs/eleventy-plugin-ids');
const Image = require("@11ty/eleventy-img")

const markdownIt = require('markdown-it')
const markdownItContainer = require("markdown-it-container");

const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const shortcodes = require('./utils/shortcodes.js')


async function shareImageShortcode(src) {
    // src might be small.png - taken from frontmatter
    let metadata = await Image(src, {
      widths: [600],
      formats: ["jpeg"],
      urlPath: "/assets/",
      outputDir: "./assets/",
    })
  
    const data = metadata.jpeg[0]
    // data.url might be /blog/hello-world/xfO_genLg4-600.jpeg
    // note the filename is a content hash-width combination
    return data.url
}

module.exports = function (config) {
    // Plugins
    config.addPlugin(pluginRss)
    config.addPlugin(pluginNavigation)
	  config.addPlugin(anchors_plugin);

    // Filters
    Object.keys(filters).forEach((filterName) => {
        config.addFilter(filterName, filters[filterName])
    })

    // Transforms
    Object.keys(transforms).forEach((transformName) => {
        config.addTransform(transformName, transforms[transformName])
    })

    // Shortcodes
    Object.keys(shortcodes).forEach((shortcodeName) => {
        config.addShortcode(shortcodeName, shortcodes[shortcodeName])
        config.addPairedShortcode("asciiart", function(content) {
          return content
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
        })
    })

    config.addNunjucksAsyncShortcode("shareImageUri", shareImageShortcode)

    // Asset Watch Targets
    config.addWatchTarget('./src/assets')

    // Markdown
    const md = markdownIt({
        html: true,
        breaks: true,
        linkify: true,
        typographer: false
    })
    .use(require('markdown-it-footnote'))
    .use(markdownItContainer, 'wrap', {
        // A "note" div, use it like this:
        // ::: wrap some-class-name
        // Your content here
        // ::: 
        validate: function(params) {
          return params.trim().match(/^wrap\s+(.*)$/);
        },
        render: function(tokens, idx) {
          var m = tokens[idx].info.trim().match(/^wrap\s+(.*)$/);
          if (tokens[idx].nesting === 1) {
            // opening tag
            return '<div class="' + m[1] + '">\n';
          } else {
            // closing tag
            return '</div>\n';
          }
        }
    })
    
    // Customize the footnote renderer
    md.renderer.rules.footnote_block_open = function() {
      return '<hr><h2>Footnotes</h2>\n<section class="footnotes">\n<ol class="footnotes-list">\n';
    };

    config.setLibrary('md', md);

    // Layouts
    config.addLayoutAlias('base', 'base.njk')
    config.addLayoutAlias('post', 'post.njk')

    // Pass-through files
    config.addPassthroughCopy('src/robots.txt')
    config.addPassthroughCopy('src/site.webmanifest')
    config.addPassthroughCopy('src/assets/icons')
    config.addPassthroughCopy('src/assets/fonts')
    config.addPassthroughCopy('src/assets/bitmapfonts')
    config.addPassthroughCopy('src/assets/webcomponents')

    // Deep-Merge
    config.setDataDeepMerge(true)

    // create tagList collection
    config.addCollection('tagsList', (collectionApi) => {
        const tagsSet = new Set()
        collectionApi.getAll().forEach((item) => {
          if (!item.data.tags) return
          item.data.tags.forEach((tag) => tagsSet.add(tag))
        })
        return tagsSet
    })
      
    // Base Config
    return {
        dir: {
            input: 'src',
            output: 'dist',
            includes: 'includes',
            layouts: 'layouts',
            data: 'data'
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk'
    }
}
