{
  /**
   * Type Assertions 💩 // 내가 타입을 정말정말 확신할때
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 😱 그냥 확신하는거야

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
}
