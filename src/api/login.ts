//api->login.ts
import http from '@/http/http';
export function loginApi(params) {
    return http({
        url: '/user/login',
        method: 'get',
        data: params
    })
}