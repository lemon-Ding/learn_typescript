import { hyRequest2 } from "..";

hyRequest2.request({
    url: "/entire/list",
    params: {
        offset: 0,
        size: 20
    }
}).then(res => {
    console.log(res.data);
})


/* 
res是unknown类型在上面进行任意的操作都是非法的
new Promise<string>((resolve,reject)=>{
    resolve("hahah")
}).then(res=>{
    console.log(res.length);
})
*/
interface IHighScoreData {
    list: any[],
    subtitle: string,
    title: string
    type: string,
    _id: string
}
hyRequest2.request<IHighScoreData>({
    url: "/home/highscore",
    interceptors: {
        requestSuccessFn: (config) => {
            console.log("/home/highscore请求成功的拦截");
            return config
        },
        responseSuccessFn: (res) => {
            console.log("/home/highscore响应成功的拦截");
            return res
        }
    }
}).then(res => {
    console.log(res.list, res.subtitle, res.title);
})


