import {
  createApp
} from './main.js';
// 目的 
// 1. 摘取每一个当前路由 index/test -> vue router => 
// 2. components异步的数据 组装成一个页面
// 3. 把后端请求的这套流程的数据交给context.state
export default context => {
  return new Promise((resolve, rejects) => {
    const {
      app,
      router,
      store
    } = createApp();
    // router是前端的路由 context.url后台给你的环境
    router.push(context.url);
    router.onReady(() => {
      const matchComponents = router.getMatchedComponents();
      Promise.all(matchComponents.map((Component) => {
          if (Component.asyncData) {
            return Component.asyncData({
              store
            })
          }
        }))
        .then(() => {
          // 读取完
          context.state = store.state
        })
        .catch(reject)
    })
  })
}