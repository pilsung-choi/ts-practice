{
  /**
   * Type Assertions π© // λ΄κ° νμμ μ λ§μ λ§ νμ ν λ
   */

  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // π± κ·Έλ₯ νμ νλκ±°μΌ

  const button = document.querySelector("class")!;
  if (button) {
    button.nodeValue;
  }
}
