# LayerFrame 弹层框架

### 基础用法

::: demo
```html
<layer-right></layer-right>
<div>
  <w-alert type="success" show-icon>成功提示的文案</w-alert>
  <w-alert type="info" show-icon>消息提示的文案</w-alert>
  <w-alert type="warning" show-icon>警告提示的文案</w-alert>
  <w-alert type="error" show-icon>错误提示的文案</w-alert>
</div>

```
:::

### Attributes
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|title      |	标题，必选参数。也可通过默认 slot 传入 |	string   |	—           |	—       |
|type	      | 主题                                |	string    |	success/warning/info/error|	info |
|description |	辅助性文字                         |	string    |	—             |	—      |
|closable   |	是否可关闭                           |	boolean   |	—	            | true   |
|center     |	文字是否居中                         |	boolean  |	—            |	true  |
|close-text	| 关闭按钮自定义文本                    |	string   |	—            |	—     |
|show-icon  |	是否显示图标                         |	boolean  	| —             |	false  |
