{
  // 자료구조에 대한 이해
  // 배열: 연결리스트 -> 아이템마다 노드가 있다
  // 노드는 감싸준다 데이터를 ,  헤드가 노드를 연결시켜준다
  // 연결 리스트에는 헤드가 있고 처음에는 아무것도 가르키지 않는다
  // 헤드가 새로들어온 노드를 가리키고 새로운 노드는 전 노드를 가르킨다

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type Node = {
    readonly value: string;
    readonly next?: Node;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: Node;

    get size() {
      return this._size;
    }
    push(value: string): void {
      const node: Node = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push("eli");
  stack.push("bob");
  stack.push("choi");
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
