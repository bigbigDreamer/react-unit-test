# React Unit Test Point North

`Describe:`本仓库为`React Unit Test Point North`附录。

<!-- TOC depthFrom:2 orderedList:true -->

<details open>
<summary>
<a>第一章. 单元测试概述</a>
</summary>

- [1.1 单元测试简介](./docs/unit-1/1-1.md)
- [1.2 单元测试的方法](./docs/unit-1/1-2.md)
- [1.3 单元测试的意义]()
- [1.4 集成测试简介]()
- [1.5 总结]()
    
</details>

<details>
<summary>
<a>第二章. 常规测试</a>
</summary>

- [2.1 怎么开始测试]()
- [2.2 state测试--class组件]()
- [2.3 state测试--function组件]()
- [2.4 props测试]()
- [2.5 context测试]()
- [2.6 hooks测试]()
- [2.7 redux测试]()
    
</details>

<details>
<summary>
<a>第三章. 场景测试</a>
</summary>

- [3.1 Module模块模拟测试]()
- [3.2 Fetch请求模拟]()
- [3.3 setTimeout模拟与加快执行]()
- [3.4 node&dom env环境切换]()
    
</details>

<details>
<summary>
<a>第四章. 这样测试会更好点</a>
</summary>

- [4.1 你的测试遇到瓶颈了吗]()
- [4.2 怎么去组织测试模块会比较好点]()
    
</details>

<!-- /TOC -->

## `Valuable Thinking`

> Q1: 怎么才能写出好的测试用例，测试用例的支撑点应该是未来可重构，还是维持当前的核心代码全部被coverage到。
      如果是后者，那么我通过白盒方案，去过度的依据现有的数据结构，借助enzyme获取class 组件的实例，去编写测试用例。那么未来当某一个迭代，后端变更数据结构，就代表着，与这个数据结构相关的测试用例全部 dead。
      然后就陷入了苦恼中，我该更加侧重哪个层面去写测试。（现在写出的测试用例依然不够好，不够坚固）。同时也会给之后运行测试的人制造苦恼，到底是测试用例挂了还是源代码逻辑挂了。