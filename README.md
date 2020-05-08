# 基本类型
1. any 任意类型
2. string 字符串类型
3. boolean 布尔类型
4. number[] ; Array<number>  数组类型
5. [string, number]   元组
6. enum Color {Red, Green, Blue};  c:Color = Color.Blue
7. :void  方法没有返回值
8. null 对象值缺失
9. undefined  初始化未定义的值
10. never  其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
--- | 或类型


# 接口
1. interface 
- interface Person { aga: number, say: ()=> string}     
-- var min:Person= {age: 21, say: ()=> "hello"}

- interface nameList { [index:number]: string }

2. 继承 extends
- interface IParent1 { v1:number } 
- interface IParent2 { v2:number } 
- interface Child extends IParent1, IParent2 { } 

# class 类
1. static 静态方法
2. public 公有,任何地方可访问
3. protected 受保护, 可以被其自身以及其子类和父类访问
4. private  私有，只能被其定义所在的类访问

5. implements 接口实现 
- interface ILoan { interest:number } 
- class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    constructor(interest:number,rebate:number) { 
        this.interest = interest 
        this.rebate = rebate 
    } 
    } 


# 命名空间