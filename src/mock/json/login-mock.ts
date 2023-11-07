//login-mock.ts
const login_info = {
    'status': '200',
    'message': 'success',
    'data': [{
        'username': 'play',
        'password': 'abcd@1234',
        'userList': {
            'token': 'youke_token',
            'name': '游客',
            'type': 'person'
        }
    }, {
        'username': 'admin',
        'password': 'gdut@20902',
        'userList': {
            'token': 'admin_token',
            'name': '管理员',
            'type': 't_person'
        }
    }, {
        'username': 'editor',
        'password': 'gdut@20902',
        'userList': {
            'token': 'editor_token',
            'name': '管理员',
            'type': 't_person'
        }
    }]
}

export default login_info