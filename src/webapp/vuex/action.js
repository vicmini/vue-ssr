import request from 'axios';
request.defaults.baseURL = 'http://localhost:8081';
export const getTopics =({commit,state})=>{
  return request.get('index/getdata').then((res)=>{
    if(res.statusTest === 'ok'){
      commit('TOPICS_LIST',res.data);
    }
  })
}
export const increment = ({commit})=>commit('Increment');
export const decrement = ({commit})=>commit('Decrement');