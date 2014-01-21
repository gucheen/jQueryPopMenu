jQueryPopMenu
=============

simple responsive popup menu, it's a jQuery plugin.

Intro
-----
这是一个基于 jQuery 的弹出菜单插件。有基本的自适应特性。可以设置包括背景色、菜单按钮大小、圆角或者直角等。  
**注**：Demo页面中的所有icon都基于FontAwesome，并非必须。可以自行更改。

Info
----
基于jQuery 2.0.3 构建。
Chrome, Safari, Firefox, Opera 可用。无IE支持。

Usage
-----
使用 `$(' #target ').popmenu();` 调用。
参数包括：
```
{
  'controller': true,       //设定是否使用控制按钮，设置为false，菜单将一直显示
  'width': '300px',         //菜单总宽度
  'background': '#34495e',  //菜单背景色
  'focusColor': '#1abc9c',  //菜单按钮hover时颜色
  'borderRadius': '10px',   //边角弧度，设置为0，为直角
  'top': '50',              //上移距离，向上移动多少就设置为多少
  'left': '0',              //左移距离，设置同上
  'iconSize': '100px'       //菜单按钮大小，目前是正方形设计（宽高相同）
}

//以上参数数值为默认值
//使用时无需受Demo影响，按钮可以是纯文字，内容排版自行安排设计。
```
注：控制按钮对应 `.pop_ctrl` ，即名字为 `pop_ctrl` 的class，使用class是为了方便同时使用多个菜单，各菜单间无影响。
