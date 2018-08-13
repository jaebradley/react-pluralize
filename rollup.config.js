import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import { terser } from 'rollup-plugin-terser';
import minify from 'rollup-plugin-babel-minify';
import { plugin as analyze } from 'rollup-plugin-analyzer';
import pkg from './package.json';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Pluralize',
      globals: [
        'react',
        'react-dom',
        'pluralize',
        'prop-types',
      ],
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'Pluralize',
      globals: [
        'react',
        'react-dom',
        'pluralize',
        'prop-types',
      ],
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'Pluralize',
      globals: [
        'react',
        'react-dom',
        'pluralize',
        'prop-types',
      ],
    },
  ],
  external: [
    'react',
    'react-dom',
    'pluralize',
    'prop-types',
  ],
  plugins: [
    peerDepsExternal(),
    babel({ exclude: 'node_modules/**' }),
    localResolve(),
    resolve({
      extensions: [
        '.js',
        '.jsx',
      ],
    }),
    commonjs(),
    minify(),
    terser(),
    filesize(),
    analyze(),
  ],
};

export default config;
