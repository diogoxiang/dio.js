import json from "rollup-plugin-json";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";
import license from "rollup-plugin-license";
// --
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/dio.js",
      format: "umd", // Type of output (amd, cjs, es, iife, umd)
      //   For browsers: iife
      //   For Node : cjs
      //   For both browsers and Node.js:
      //  rollup main.js --o bundle.js -f umd --name "myBundle"
      name: "dio"
    }
  ],
  watch: {
    include: "src/**",
    exclude: "node_modules/**"
  },
  plugins: [
    json(),
    uglify({}, minify),
    license({
      banner: `Copyright Diogo <%= moment().format('YYYY') %> `
    })
  ]
};
