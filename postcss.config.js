module.exports = {
  "use": [
    "postcss-cssnext",
    "postcss-nesting",
    "postcss-normalize",
    "postcss-px-to-em"
  ],
  "input": "css/styles.css",
  "dir": "build",
  "watch": true,
  "postcss-px-to-em": {
    base: 16
  }
};
