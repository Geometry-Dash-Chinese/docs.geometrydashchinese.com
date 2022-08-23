# 注册账号  

>

#### 接口

| 请求方式 | 路径                              |
|------|---------------------------------|
| POST | /accounts/registerGJAccount.php |

#### 参数

| 名称       | 说明              |
|----------|-----------------|
| userName | 用户名             |
| password | 密码              |
| email    | 邮箱              |
| secret   | **Wmfv3899gc9** |

#### 返回值

| 内容  | 说明          |
|-----|-------------|
| 1   | 注册成功        |
| -1  | 注册失败        |
| -2  | 用户名已被使用     |
| -3  | 邮箱已被使用      |
| -4  | 用户名无效       |
| -5  | 密码无效        |
| -6  | 邮箱无效        | 
| -7  | 密码不匹配       |
| -8  | 密码少于 6 个字符  |
| -9  | 用户名少于 3 个字符 |
| -99 | 邮箱不匹配       |

#### 示例

```
POST /accounts/registerGJAccount.php
Content-Type: application/x-www-form-urlencoded

userName=Homo&password=1145141919810&email=114514@1919810.com&secret=Wmfv3899gc9
```

#### 响应

> 1
