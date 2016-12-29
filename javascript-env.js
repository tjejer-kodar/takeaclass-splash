const path = require("path")

const local = subPath => path.resolve(__dirname, subPath)

module.exports = {
  compile: {
    entry: local("src"),
    output: {
      path: local("public/assets")
    },
    includes: [
      local("src"),
      "node_modules"
    ],
    alias: {
      react: local("node_modules/react")
    }
  },
  lint: {
    files: local("src/**/*.js")
  },
  test: {
    files: local("src/**/*test.js")
  }
}
