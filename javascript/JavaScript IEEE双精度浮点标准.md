# JavaScript IEEE双精度浮点标准

------

 	很多使用JavaScript编程语言的小伙伴可能会遇到0.1 + 0.2 !== 0.3的情况，原因是JavaScript的浮点数双精度标准的问题。如同十进制有无限循环小数，二进制也有并且有些十进制不是无限循环的情况下转成二进制变无限循环，比如0.1，下面会详细介绍。这种情况下计算机不可能将无限循环的数存下来，然后将这转换成十进制，它有一个标准就是将这无限循环小数取一个精度然后计算。

[这里：](https://www.cnblogs.com/fsjohnhuang/p/5115672.html)

------

1.**首先我们知道计算机用二进制来表示和存储数据：**

- 对于一个整数而言：比如36 二进制就是0010 0100 2^2 + 2^5 = 36
- 对于一个小数而言：比如0.375二进制就是 0.011 2^-2+2^-3 = 0.875

2.**下面根据0.1解释精度问题：**

这里按照最基础的除法进行模拟：

对于0.375

- ​	第一步：对于0.375，2^-2 = 0.25是不比它大的最大数，二进制数（0.01）
- ​	第二步：0.1 - 1/4 = 0.125，很明显这是我求下来的余数
- ​	第三步：在对余数进行以上操作：0.125，2^-3 = 0.125是不比它大的最大数，二进制（0.001）
- ​	第四步：此时二进制数0.01+0.001 = 0.011 余数：0

对于0.1

- ​	第一步：对于0.1，2^-4 = 0.0625是不比它大的最大数，二进制数（0.0001）
- ​	第二步：此时二进制数0.0001 余数：0.1 - 1/16 = 0.0375
- ​	第三步：在对余数进行以上操作：0.0375，2^-5 = 0.03125是不比它大的最大数，二进制（0.00001）
- ​	第四步：此时二进制数0.0001+0.00001 = 0.00011 余数：0.0375 - 2^-5 = 0.00625
- ​    第五步：在对余数进行以上操作：0.00625，2^-8 = 0.00390625是不比它大的最大数，二进制（0.00000001）
- ​	第六步：此时二进制数0.0001+0.00001+0.00000001 = 0.00011001 余数：0.00625 - 2^-8 = 0.00234375
- ​    第七步： 在对余数进行以上操作：0.00234375，2^-9= 0.001953125是不比它大的最大数，二进制（0.000000001）

这种方式除不净它是一个无限循环的二进制0.0 0011 0011 ......

上面为了解释方便，一般用这种方式计算：
$$
0.1转化成二进制的算法：
0.1*2=0.2取出整数部分0;
0.2*2=0.4取出整数部分0;
0.4*2=0.8取出整数部分0;
0.8*2=1.6取出整数部分1;
0.6*2=1.2取出整数部分1;
0.2*2=0.4取出整数部分0;
0.4*2=0.8取出整数部分0;
0.8*2=1.6取出整数部分1;
0.6*2=1.2取出整数部分1;
接下来会无限循环
0.2*2=0.4取出整数部分0;
0.4*2=0.8取出整数部分0;
0.8*2=1.6取出整数部分1;
0.6*2=1.2取出整数部分1;
所以0.1转化成二进制是：0.0 0011 0011 ......
$$
就如同十进制有无限循环小数，二进制也有并且有些十进制不是无限循环的情况下转成二进制变无限循环，这也就是我们遇到的一些精度上的问题了。

**3.解决**

尽量避免直接写成 0.1 + 0.2这种情况：可以用(1+2)/10、(1+2)/100等。

