/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'import-notation': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'import',
          /** tailwindcss v4 */
          'theme',
          'source',
          'utility',
          'variant',
          'custom-variant',
          'reference',
          'plugin',
          /** tailwindcss v3 */
          'tailwind',
          'layer',
          'apply',
          'config',
          /** tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'function-no-unknown': [true, { ignoreFunctions: ['theme', 'screen'] }],
    'alpha-value-notation': null,
    'color-function-notation': null,
    'color-function-alias-notation': 'with-alpha',
    'color-hex-length': 'long',
    'value-keyword-case': [
      'lower',
      { ignoreKeywords: ['optimizeLegibility'] }, // string or regex as string
    ],

    /* ----------------------------------------
       Ordering of groups inside a rule block
    ---------------------------------------- */
    'order/order': [
      'custom-properties', // CSS variables first
      'declarations', // regular CSS declarations next
      'at-rules', // @media, @supports etc. last
    ],

    /* ----------------------------------------
       Ordering of individual properties
       You can expand this list as needed
    ---------------------------------------- */
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'flex',
      'flex-direction',
      'justify-content',
      'align-items',
      'width',
      'height',
      'padding',
      'margin',
      'font-size',
      'font-weight',
      'line-height',
      'color',
      'background',
      'border',
      'border-radius',
    ],
  },
  /** Overriding rules for Module CSS */
  overrides: [
    {
      files: ['**/*.module.css'],
      rules: {
        'selector-class-pattern': [
          '^(?:[a-z][a-zA-Z0-9]*|([a-z][a-z0-9]*)(-[a-z0-9]+)*)$',
          {
            message:
              'Class names in module css should be either in "Lower Camel Case" or "Kebab Case"',
          },
        ],
      },
    },
  ],
};
