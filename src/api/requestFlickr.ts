import axios from 'axios';
// import qs from 'qs';

// 創建axios實例
const service = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/', // api的base_url
    // withCredentials: true, // 跨域請求時是否發送cookies
    timeout: 5000 // 請求超時設置
});

// 請求攔截器
axios.interceptors.request.use(
    config => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            // 如果沒有cors的問題則可以都不加
            'Access-Control-Allow-Origin': process.env.API_ROOT,
            'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
            'Access-Control-Max-Age': '86400'
        };
        return config;
    },
    error => Promise.reject(error)
);

// // 響應攔截器
// service.interceptors.response.use(response => {
//     const res = response; // 如果返回的結果是data.data的，嫌麻煩可以用這個，return res
//     return res;
// },
// error => {
//     console.log(`error：${error}`); // 用於調試
//     return Promise.reject(error);
// });

/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
// 異常處理
axios.interceptors.response.use(
    response => response,
    err => {
        if (err && err.response) {
            switch (err.response.status) {
                case 404:
                    console.error('找不到該頁面');
                    break;
                case 500:
                    console.error('伺服器出錯');
                    break;
                case 503:
                    console.error('服務失效');
                    break;
                default:
                    console.error(`連接錯誤${err.response.status}`);
            }
        } else {
            console.error('連接到服務器失敗');
        }
        return Promise.resolve(err.response);
    }
);

export default service;
