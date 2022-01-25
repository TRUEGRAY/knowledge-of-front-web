## Heap应用：

### 题目描述

n个数取第k个小的数


#### 样例

```
3 2
1 3 2
输出2
```

------

##### (桶排序)  $O(nlogn)$

```javascript
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let n = 0,k = 0,arr = [],res = 0
rl.on('line',(line)=>{
    if(n === 0){
        const line1Arr = line.split(' ')
        n = line1Arr[0]
        k = line1Arr[1]
    }else{
        arr = line.split(' ')
        kth()
    }
})
function kth(){
    const minHeap = new Heap((a,b)=>b-a)
    for(let i = 0;i<n;i++){
        minHeap.add(parseInt(arr[i]))
    }
    for(let i = 0;i<k;i++){
        res = minHeap.poll()
    }
    console.log(res)
}
class Heap{
    constructor(comparator){
        this.comparator = comparator
        this.value = []
        this.size = 0
    }
    add(val){
        this.size++
        this.value.push(val)
        this.bubbleUp()
    }
    poll(){
        this.swap(0,this.size-1)
        const res = this.value.pop()
        this.size--
        this.bubbleDown()
        return res
    }
    swap(a,b){
        [this.value[a],this.value[b]] = [this.value[b],this.value[a]]
    }
    bubbleUp(){
        let i = this.size-1
        let parent = Math.floor((i-1)/2)
        while(parent>=0&&this.comparator(this.value[i],this.value[parent])>0){
            this.swap(i,parent)
            i = parent
            parent = Math.floor((i-1)/2)
        }
    }
    bubbleDown(){
        const n = this.size
        let i = 0
        f:
        for(let j = 2*i+1;j<n;j = 2*i+1){
            if(j+1<n&&this.comparator(this.value[j],this.value[j+1])<0) j++
            if(this.comparator(this.value[i],this.value[j])<0){
                this.swap(i,j)
                i = j
            }
            else{
                break f
            }
        }
    }
}
```