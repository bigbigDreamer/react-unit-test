# React Unit Test Point North

`Describe:`本仓库为`React Unit Test Point North`附录。

<!-- TOC depthFrom:2 orderedList:true -->

<details open>
<summary>
<a>第一章. 单元测试概述</a>
</summary>

- [1.1 单元测试简介](./docs/unit-1/1-1.md)
- [1.2 单元测试的方法](./docs/unit-1/1-2.md)
- [1.3 单元测试的意义](./docs/unit-1/1-3.md)
- [1.4 集成测试简介](./docs/unit-1/1-4.md)
- [1.5 总结](./docs/unit-1/1-5.md)
    
</details>

<details>
<summary>
<a>第二章. 常规测试</a>
</summary>

- [2.1 怎么开始测试](./docs/unit-2/2-1.md)
- [2.2 state测试--class组件](./docs/unit-2/2-2.md)
- [2.3 state测试--function组件](./docs/unit-2/2-3.md)
- [2.4 props测试](./docs/unit-2/2-4.md)
- [2.5 context测试](./docs/unit-2/2-5.md)
- [2.6 hooks测试](./docs/unit-2/2-6.md)
- [2.7 redux测试](./docs/unit-2/2-7.md)
    
</details>

<details>
<summary>
<a>第三章. 场景测试</a>
</summary>

- [3.1 Module模块模拟测试](./docs/unit-3/3-1.md)
- [3.2 Fetch请求模拟](./docs/unit-3/3-2.md)
- [3.3 setTimeout模拟与加快执行](./docs/unit-3/3-3.md)
- [3.4 node&dom env环境切换](./docs/unit-3/3-4.md) 
    
</details>

<details>
<summary>
<a>第四章. 这样测试会更好点</a>
</summary>

- [4.1 你的测试遇到瓶颈了吗](./docs/unit-4/4-1.md)
- [4.2 怎么去组织测试模块会比较好点](./docs/unit-4/4-2.md)
    
</details>

<!-- /TOC -->

## `Valuable Thinking`

> Q1: 怎么才能写出好的测试用例，测试用例的支撑点应该是未来可重构，还是维持当前的核心代码全部被`coverage`到。
      如果是后者，那么我通过白盒方案，去过度的依据现有的数据结构，借助`enzyme`获取`class`组件的实例，去编写测试用例。那么未来当某一个迭代，后端变更数据结构，就代表着，与这个数据结构相关的测试用例全部 `dead`。
      然后就陷入了苦恼中，我该更加侧重哪个层面去写测试。同时也会给之后运行测试的人制造苦恼，到底是测试用例挂了还是源代码逻辑挂了。
>
> Answer: 测试用例应该遵循`given-when-then`细则，不要过度的去考虑如何测试组件的实现细节（特别是业务组件），而是应该更多的去考虑这个组件`本能（单独拎出来，它可以干什么？）`。它应该有的表现形式是怎样，具体的业务实现逻辑测试
>可以使用`集成测试`方案，对于小范围功能进行集成测试，通过 `props => UI`去衡量与测试业务代码，可以很有效的去避免，重构过后的测试代码进入`死亡期。`
>

> Q2: 待思考......


## 番外篇 

- [React dnd使用详解](./docs/extra-story/2020-10-26-1.md)