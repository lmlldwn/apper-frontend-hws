class Node { 
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(value) {
        let node = new Node(value)

        if(!this.first) {
            this.first = node
            this.last = node
        } else {
            let temp = this.first
            this.first = node
            this.first.next = temp
        }

        this.size++

        return this.size
    }

    pop(){
        if (!this.first)
            return null

        let temp = this.first

        if (this.first == this.last) {
           this.last = null
        }

        this.first = this.first.next

        this.size--

        return temp.value
    }

    check() {
        let checkNodes = this.first
        do {
            console.log(checkNodes.value)
            checkNodes = checkNodes.next
        }while (checkNodes)
    }

    peek(){
        return this.first.value
    }
}

let stack = new Stack()
stack.push("Lemuel")
stack.push("Aldwin")
stack.push("Garcia")
stack.check()
console.log(`Top of the stack: ${stack.peek()}`)
stack.pop()
stack.check()
console.log(`Top of the stack: ${stack.peek()}`)