# vue-cms
用Vue做的WebApp
项目描述
实现 App.vue 组件中的功能
顶部 Header 使用的是 MintUI 中的Header
底部 Topbar 使用的是 Mui 中的 Topbar.html
修改顶部的导航为 router-link
底部图标高亮通过添加路由 linkActiveClass 为 mui-active
实现 HomeContainer.vue 的功能
使用 MintUI 的 Swipe 组件实现轮播图效果
实现 ajax 从服务器获取最新图片的json数据，然后解析渲染
轮播图的图片是一个链接点击可以访问
改造九宫格的样式，取消默认的背景颜色和边线
实现 NewsContainer.vue, NewsDetail.vue 的功能以及 抽象了 Comment 评论组件
NewsContainer 分页从服务器获取数据，然后渲染为一个列表
在点击了新闻的时候通过路由将新闻的id传输给 NewsDetail.vue 这个组件来加载新闻详细以及新闻的评论
存在的 BUG NewsContainer 进入新闻详细的时候 底部的加载更多按钮会宽度变化
添加自己的评论的几楼显示不正确
实现 Photo.vue
使用 mui 的 scroll 组件的时候，添加 js 功能需要在 VUe 的mounted中执行
Chrome 新版会出现警告信息 添加 *{touch-action: pay-y} 可以取消警告消息
使用滑动组件的时候会出现底部Tab无法点击的效果，替换原先的 tab-item class类 复制原先的 style样式可以解决这个问题
使用了vue-photo-preview 实现图片的预览功能
