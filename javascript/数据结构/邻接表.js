 const add = (a,b,c)=>{
    //某一条边指向的节点
    e[idx] = b
    //找到下一条边
    ne[idx] = he[a]
    //下一节点的编号
    he[a] = idx
    //边的权重
    w[idx] = c
    idx++
 }
