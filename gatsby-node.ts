exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();

  const jsRuleIndex = config.module.rules.findIndex(rule =>
    String(rule.test).includes('jsx'),
  );
  const tsRuleIndex = config.module.rules.findIndex(rule =>
    String(rule.test).includes('tsx'),
  );

  const jsRule = config.module.rules[jsRuleIndex];
  const tsRule = config.module.rules[tsRuleIndex];

  config.module.rules = [
    ...config.module.rules.filter(
      (_rule, index) => index !== jsRuleIndex && index !== tsRuleIndex,
    ),
    {
      ...jsRule,
      test: /\.jsx?$/,
    },
    {
      ...tsRule,
      use: (...args) => [
        ...jsRule.use(...args),
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    },
  ];

  actions.replaceWebpackConfig(config);
};
