const arr1 = []
const n = 1000
for(let i = 0;i<n;i++){
    arr1.push(Math.random()*n)
}
class Heap{
    constructor(comparator){
        this.comparator = comparator
        this.heap = []
        this.size = 0
    }
    add(val){
        this.heap.push(val)
        this.size++
        this.bubbleUP()
    }
    pop(){
        this.swap(0,this.size-1)
        const res = this.heap.pop()
        this.size--
        this.bubbleDown()
        return res
    }
    peek(){
        return this.heap[0]
    }
    bubbleUP(){
        let n = this.size-1
        let parent = Math.floor((n-1)/2)
        while(this.comparator(this.heap[n],this.heap[parent])>0){
            this.swap(n,parent)
            n = parent
            parent = Math.floor((n-1)/2)
        }
    }
    bubbleDown(){
        const n = this.size
        const arr = this.heap
        for(let i = 0,j = 2*i +1;j<n;j = 2*i+1){
            if(j+1<n&&this.comparator(arr[j+1],arr[j])>0) j++
            if(this.comparator(arr[j],arr[i])>0){
                this.swap(i,j)
                i = j
            }
            else break
        }
    }
    swap(a,b){
        [this.heap[a],this.heap[b]] = [this.heap[b],this.heap[a]]
    }
}
Heap.minComparator = (a,b)=>b-a
Heap.maxComparator = (a,b)=>a-b

const maxHeap = new Heap(Heap.maxComparator)
const minHeap = new Heap(Heap.minComparator)
for(let i = 0;i<arr1.length;i++){
    maxHeap.add(arr1[i])
    minHeap.add(arr1[i])
}
maxHeap.pop()
console.log(arr1)
for(let i = 0;i<arr1.length;i++){
    arr1[i] = minHeap.pop()
}
console.log(arr1)
for(let i = 0;i<arr1.length;i++){
    arr1[i] = maxHeap.pop()
}
console.log(arr1)