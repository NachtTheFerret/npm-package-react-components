const typescript = require('rollup-plugin-typescript2');
const pkg = require('./package.json');
const dts = require('rollup-plugin-dts');
const resolve = require('@rollup/plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const external = require('rollup-plugin-peer-deps-external');
const postcss = require('rollup-plugin-postcss');

module.exports = [
  {
    input: 'src/index.tsx',

    output: [
      { file: pkg.main, format: 'cjs', exports: 'named', sourcemap: true },
      { file: pkg.module, format: 'esm', exports: 'named', sourcemap: true },
    ],

    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      }),
      external(),
      resolve(),
      typescript({ exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'] }),
      postcss({ modules: true }),
    ],
  },
  {
    input: 'dist/esm/index.d.ts',
    output: { file: 'dist/index.d.ts', format: 'esm' },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
