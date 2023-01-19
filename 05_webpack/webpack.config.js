//引入一个包
const path =require('path');

//webpack中的所有的配置信息都应该写在module.exports中
module.exports={
    //指定入口文件
    entry:"./src/index.ts",

    //指定打包文件所在的目录
    output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //打包后文件的名称
        filename:"bundle.js"
    },

    //指定webpack打包时使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test指定规则生效的文件
                test:/\.ts$/,
                //要使用的loader
                use:'ts-loader',
                exclude:/node-modules/,
            }
        ]
    },

    mode:"production"


}