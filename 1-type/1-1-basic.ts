{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, undefined, null
   * Object: function, array.....
   */

  // number
  const num: number = -6;

  //string
  const str: string = 'hello';

  //boolean
  const boal: boolean = false;

  //undefined 비워있는지 비워있지 않은지 아직 모른다
  let name: undefined; // 이렇게 안씀💩
  let age: number | undefined; //이렇게 많이 씀
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null 이미 비워져있다고 생각
  let person: null; // 이렇게 안씀💩
  let person2: string | null;

  // unknown 💩
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any💩
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    // void 생략가능
    console.log('hello');
    return;
  }
  let unusable: void = undefined; //💩 이렇게 사용하지 않음

  // never
  function throwError(message: string): never {
    // message -> server (log)
    /*throw new Error(message)*/
    while (true) {}
  }
  let neverEnding: never; //💩

  // object
  let obj: object; //💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ neme: 'ellie' });
  acceptSomeObject({ animal: 'dog' });
}
