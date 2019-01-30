const join = require("path").join;
const tailwindJS = join(__dirname, "tailwind.js");
const purgecss = require("postcss-purgecss");

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
    }
}

const plugins = [require("tailwindcss")(tailwindJS), require("autoprefixer")];

if (process.env.NODE_ENV === "production") {
    plugins.push(
        purgecss({
            content: [
                "./client/layouts/**/*.vue",
                "./client/components/**/*.vue",
                "./client/pages/**/*.vue"
            ],
            whitelist: ["html", "body"],
            whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
            extractors: [
                {
                    extractor: TailwindExtractor,
                    extensions: ["html", "vue"]
                }
            ]
        })
    );
}

module.exports = {
    plugins
};
