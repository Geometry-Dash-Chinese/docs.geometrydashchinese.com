# 登录账号

>

#### 接口

| 请求方式 | 路径                           |
|------|------------------------------|
| POST | /accounts/loginGJAccount.php |

#### 参数

| 名称       | 说明              |
|----------|-----------------|
| userName | 用户名             |
| password | 密码              |
| ?sID     | steamID         |
| udid     | 唯一设备 ID         |
| secret   | **Wmfv3899gc9** |

#### 返回值

> 格式: {账号ID},{玩家ID} (用逗号分隔)

| 内容  | 说明                                 |
|-----|------------------------------------|
| -8  | 密码少于 6 个字符                         |
| -9  | 用户名少于 3 个字符                        |
| -10 | 已经登录了一个账号 (只会在 Refresh Login 页面出现) |
| -11 | 登录失败                               |
| -12 | 账号被封禁                              |
| 13  | 已经登录到了一个 steam 账号 (弃用)             |

#### 示例

```
POST /accounts/loginGJAccount.php
Content-Type: application/x-www-form-urlencoded

userName=WOSHIZHAZHA120&password={这一定是渣渣的密码}&udid=fb0f0c61-bc15-4bf6-b183-50932cc58e23&secret=Wmfv3899gc9
```

#### 响应

> 1889402,10086790
