class CopyRightWebpackPlugins {
    constructor(props){
        // 在webpack new插件的时候会传入入参的值，是通过props获取的
        // super(props)
        console.log(props)
    }
    // 当使用插件是，这个apply会自动执行
    apply(compiler){
        // compiler 是整个打包的整体配置，里面有很多钩子函数，但是compiletion是当前打包文件的状态，tapAsync是异步的过程
        // 所以必须传入回调函数，饭后必须执行它
        compiler.hooks.emit.tapAsync("CopyRightWebpackPlugins",(compiletion,cb)=>{
            debugger
            console.log(compiletion)
            // assets 是一个打包文件的数组，添加文件必须给soucre 和size
           compiletion.assets["copyright.txt"] = {
               source:function(){
                   return "i heate you"
               },
               size:function(){
                   return 100000
               }
           }
            cb()
        })
        compiler.hooks.shouldEmit.tap("CopyRightWebpackPlugins",(compilation)=>{
            compilation.hooks.buildModule.tap('SourceMapDevToolModuleOptionsPlugin',
                module => {
                        module.useSourceMap = true;
                    }
            )
        })
    }
}
module.exports = CopyRightWebpackPlugins