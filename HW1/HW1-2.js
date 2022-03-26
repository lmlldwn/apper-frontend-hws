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
        if ( typeof(value) !== "string" ) {
          console.log("The stack only accepts string values.")
          return
        }
      
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
        if (this.isStackEmpty())
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
        if (this.isStackEmpty()) 
            return null
        
        let checkNodes = this.first
        do {
            console.log(checkNodes.value)
            checkNodes = checkNodes.next
        }while (checkNodes)
    }

    peek() {
        if (this.isStackEmpty()) 
            return null

        return this.first.value
    }
    isStackEmpty() {
        if (!this.first) {
            console.log("Stack is empty. Nothing to do.")
            return true
        }
        return false
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