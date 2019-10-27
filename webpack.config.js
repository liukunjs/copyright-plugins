var path   = require('path')
var CopyRightWebpackPlugins = require("./copyright-webpack-plugins.js")
module.exports={
    entry:'./src/index.js',
    plugins:[new CopyRightWebpackPlugins({a:111})],
    output:{path:path.resolve(__dirname,"dist"),}
}