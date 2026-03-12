把我们开发过程中的文件集中起来，构建成浏览器可以识别的：html、js、css

模块的绑定，代码的转换

打包阶段：

1. 图片的压缩
2. 字体的处理
3. 性能优化:
   - Tree Shaking
   - 根据路由代码分割
   - 懒加载
   - 文件的压缩
4. 得到一个dist目录

自动化部署：

把dist目录的东西传到 CI/CD 里，

1. 触发自动化脚本 CI

   - 安装依赖
   - 单元测试
   - 执行构建

2. CD 自动部署

   - 放到服务器
   - CDN
   - 托管平台

线上

- 加载优化 cdn 游览器缓存 、gzip 多路复用
- 第三方[Sentry日志监控平台](https://rmondjone.github.io/posts/devops/sentry/)

   



Tree Shaking 必须 使用 ESMN 语法

- dead code 删除死代码，分析模块之间的依赖关系，把没用到的模块删除 
- 