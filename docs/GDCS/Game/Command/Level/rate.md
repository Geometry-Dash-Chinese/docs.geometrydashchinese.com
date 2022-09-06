# !rate

用于关卡评分, 需要权限 ```rate-level```

#### 参数

| 名称           | 类型  | 说明                          |
|--------------|-----|-----------------------------|
| stars        | 数字  | 必须在 1 到 10 之间               |
| feature      | 布尔  | 将 ```featured_score``` 设为 1 |
| feature_score | 数字  | 单独设置, 优先级比 ```feature``` 高  |
| epic         | 布尔  | 懒得解释（                       |
| silver_coin  | 布尔  | 懒得解释（                       |
| face | 字符串 | 看 [这里](#face)               |

#### face

| 名称                   | 说明      |
|----------------------|---------|
| auto                 | 是个人都能过（ |
| easy                 | 容易      |
| normal               | 普通      |
| hard                 | 难       |
| harder               | 比难更难    |
| insane               | 困难      |
| demon                | 恶魔      |
| easy_demon           | 简单恶魔    |
| medium_demon         | 中级恶魔    |
| hard_demon           | 高级恶魔    |
| insane_demon         | 困难恶魔    |
| extreme_demon        | 极限恶魔    |
