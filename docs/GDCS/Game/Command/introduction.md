# 指令语法
---
#### 基本介绍

新的 GDCS 游戏指令系统使用 ```!``` 作为每个命令的开始
> 示例: !test    
> 说明: 测试命令是否有效, 正常会返回 ```worked!```    
> 因为游戏内没法用中文所以只能全用英文表示啦~

#### 参数

可能看起来可能会有些奇怪, 它使用 ```:``` 作为参数的开始, 以 ```=``` 分隔    
```=``` 左边的为 ```参数名```, ```=``` 右边的为 ```参数值```
> 示例: !set :password=114514    
> 说明: 设置关卡密码为 ```114514```

#### 布尔值

可能有些小伙伴还不知道布尔值是什么东西    
你可以把这个理解为一个 ```开关```    
```布尔值``` 使用 ```+``` 和 ```-``` 来表示    
```+``` 代表 ```开```, ```-``` 代表 ```关```
> 示例: !set -copy +unlisted    
> 说明: 不允许关卡被 copy, 并将关卡列为不公开