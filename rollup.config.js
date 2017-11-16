import json from "rollup-plugin-json";
export default {
  entry: "src/index.js",
  targets: [
    {
      dest: "dist/dio.js",
      format: "umd", // Type of output (amd, cjs, es, iife, umd)
      //   For browsers: iife
      //   For Node : cjs
      //   For both browsers and Node.js:
      //  rollup main.js --o bundle.js -f umd --name "myBundle"
      name: "dioLibrary"
    }
  ],
  plugins: [json()]
};
