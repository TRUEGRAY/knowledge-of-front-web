# **OS I七层模型：**

*由上到下：应用层（HTTP）、表示层(telnet)、会话层(DNS)、传输层(TCP,UDP)、网络层(IP,ICMP)、数据链路层(FDDI)、物理层(IEEE)*

1. ### 应用层：为应用程序提供网络服务

2. ### 表示层：数据格式化，加密，解密

3. #### **会话层：建立、维护、管理会话连接**

   作用：规定应用程序的数据格式，比如ftp，smtp的数据格式

   是对OSI模型中最高三层的合并，直接面向用户

4. #### **传输层：建立维护管理端到端连接**

   4.1 作用 建立端口-端口的连接,由一段段的点-点(主机-主机)通信信道构成

   4.2 端口号

   ​	4.2.1 取值 0 - 65535 其中 0-1023被系统占用，应用程序随机选取，http80；代理服务8080

   ​	4.2.2 指定IP包具体给哪些进程：另外，一个进程可能与多个计算机连接，会有多个端口

   4. 3 socket

      ​	4.3.1 进程间通信 需要双方IP，端口号，通信采用的协议

      ​	4.3.2 格式 无符号整型变量，用来表示一个通信进程

      ​	4.3.3 本质 是编程接口API，对TCP/IP协议的封装

      4.4 UDP/TCP

      ​	4.4.1 作用 在数据包头加上编号

      ​	4.4.2 TCP 复杂，稳定，有包遗失，会重发

      ​	4.4.3 UDP 简单，但不稳定，不能确定对方是否接收成功

5. ### 网络层：IP寻址和路由选择

   5.1 作用：建立主机与主机的连接

   5.2 引入新的地址模式-IP地址/网络地址，可以区分哪些PC是在同一个局域网内

   5.3 IP类型：

   ​	5.3.1 IPV4 32个二进制数，4字节8位，前24位表网络同一子网下，必须相同，后八位表示主机

   ​	5.3.2 IPV6 128个二进制，8字节16位

   5.4 子网掩码：通过and运算判断是否在同一子网下 ip and 255.255.255.0

   5.5 路由：

   ​	5.5.1 作用：通过网络把数据数据从原地址到目标地址，引导分组传送，经过一些目标节点后到达目的地。

   ​	5.5.2 实现方法 定义一条路径，经过网络把包发送到目的地，但不指定完全路径，只定义两个网关之间的路径段。

   ​	5.5.3 路由器 连接两个以上的网络并实现路由功能的机器；可看做配有多个网卡的专用电脑，让网卡接入不同的网络中

   ​	5.5.4 网关 网络层使用的路由器，通常指路由器的IP

   ​	5.5.5 ex A:发送地址 B:接收地址

   ​		1.若在同一个局域网：通过广播方式就可找到

   ​		2.若在在不同局域网：

   ​			a. A现将包根据网关添加路由器\主机地址，通过交换机的广播方式给主机

   ​			b. A的主机将数据包送给B所在的主机，再由主机根据MAC广播给B完成（IP包不断被路由封装和拆开（添加/删除地址））

   ​	5.6 ARP协议

   ​		5.6.1 作用：局域网内IP和MAC地址对应的关系

   ​		5.6.2 作用位置 介于数据链路层和网络层之间

   ​		5.6.3 局限 介于IPV4、IPV6用NDP代替

6. ### 数据链路层：控制网络层和物理层之间的通信

   6.1：作用

   ​	6.11：根据以太网协议将一组电信号组成的数据包，称作"帧"，并控制它的传输（电信号组成的数据包有两个部分：1.标头head:标明数据发送者、接受者、数据类型；2.数据）

   6.2 MAC地址：

   ​	6.2.1 作用：定位数据包的路径，如发送者、接受者

   ​	6.2.2 网卡的地址，每个网卡第一无二的12个16进制数

   ​	2.2.3 前六个表示厂商后六个表示流水号

   6.3 广播方式

   ​	6.3.1 发送者把数据包发送给局域网内的所有PC,让每个PC根据自己的MAC地址进行自动匹配

   ​	6.3.2 发送媒介：分组交换机、网络交换机

   6.4 网络交换机：

   ​	6.4.1 扩展网络的机器

   ​	6.4.2 作用：为子网提供更多的接口，以便于连接更多的PC

7. ### 物理层：比特流传输

   7.1：通过光缆、电缆、无线电波的方式将设备连起来的组网

   7.2：连个不同局域网（移动、电信）通信，需要ISP互联网服务供应商的物理连接

   7.3：作用：传送比特流0和1

###     8. pc连网的设置详解：

​		8.1 四个参数：本机ip,子网掩码，网关ip,DNS的ip

​		8.2 DNS

​			网络域名系统（Domain Name System）

​	数据链路层数据包（以太网数据包）格式，除了应用层没有头部，其他的都有。

![](https://github.com/TRUEGRAY/knowledge-of-front-web/blob/master/others/%E6%95%B0%E6%8D%AE%E5%8C%85.png?raw=true)

封装解装过程

![](https://github.com/TRUEGRAY/knowledge-of-front-web/blob/master/others/%E5%B0%81%E8%A3%85%E8%A7%A3%E8%A3%85.png?raw=true)
