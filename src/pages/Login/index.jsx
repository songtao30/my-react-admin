import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import logo from '../../static/logo.png'
import "./login.less"
import axios from "axios";
export default function Login() {
    const onFinish = (values) => {
        const { username, password } = values
        console.log('Received values of form: ', values);
        axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: {
                username,
                password
            }
        }).then(res => { console.log(res) }).catch(err => { console.log(err); })
    };
    return (
        <div className='page-login'>
            <header>
                <img src={logo} alt="logo" />
                <h1>React项目: 后台管理系统</h1>
            </header>
            <section>
                <h2>用户登录</h2>
                <Form
                    scrollToFirstError
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, message: '请输入用户名' },
                            { max: 6, type: 'string', message: "长度不能超过6位" }
                        ]}
                    >
                        <Input hasFeedback prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { required: true, message: '请输入密码' },
                            { max: 6, type: 'string', message: "长度不能超过6位" },
                            { pattern: /^[A-Za-z][\w]{4}/, message: '必须以字母开头长度至少5位' }
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </section>
        </div>
    )
}
