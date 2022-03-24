module.exports = {
  presets: [
    "@okta/odyssey-babel-preset",
  ],

  env: {
    test: {
      presets: [
        [
          "@okta/odyssey-babel-preset",
          {
            odyssey: {
              identityObjectProxy: true,
            },
          },
        ],
      ],
    },
    production: {
      comments: false,
    },
  },
};
