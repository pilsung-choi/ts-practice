interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImpl<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  push(value: T) {
    this._size++;
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
  }

  pop(): T {
    // null == undefined
    if (this.head == null) {
      throw new Error("stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
