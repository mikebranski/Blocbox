module.exports = {
  "use": [
    "postcss-cssnext",
    // This has to be loaded before postcss-simple-vars and postcss-nested.
    "postcss-mixins",
    "postcss-nesting",
    "postcss-normalize",
    // This isn't smart enough to skip things like borders, at least not without
    // additional configuration. Requires further investigation.
    // "postcss-px-to-em"
  ],
  "input": "css/styles.css",
  "dir": "build",
  "watch": true,
  // "postcss-px-to-em": {
  //   base: 16
  // }
};
