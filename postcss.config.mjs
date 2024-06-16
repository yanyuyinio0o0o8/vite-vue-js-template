
export default {
    // vite根据postcss-load-config搜索，无需引入该文件
    plugins: {
        'postcss-preset-env': {
            autoprefixer: true,
        },
        'postcss-pxtorem': {
            rootValue: 16, // 基准字体大小
            unitPrecision: 5, // 转换后的rem保留小数点位数
            propList: ['*', "!border"],// 要转换的属性，默认转换所有属性
            // selectorBlackList: [".el"], // 过滤掉van-开头的class，不进行rem转换
            exclude: "/node_modules", // 忽略包文件转换rem
        },
    },
};

