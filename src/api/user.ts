//user.ts
import { defineComponent } from "vue";
import loginInfo from "@/mock/json/login-mock";
//console.log(loginInfo)
export default defineComponent({
    //模拟用户登录
    login: config => {
        let data = JSON.parse(config.body);
        let userList = {}
        var bel = loginInfo.data.map(res => {
            console.log('user.ts' + data)
            //匹配用户
            if (data.name === res.username && data.password === res.password) {
                userList = res.userList
                return true
            } else {
                return false
            }
        })
        if (bel.includes(true)) {

        } else {
            return {
                code: -1,
                data: {
                    msg: '用户名或密码错误',
                    status: 'fail'
                }
            }
        }
        return {
            code: 200,
            data: {
                userList: userList
            }
        }
    }
})