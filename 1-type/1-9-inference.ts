{
  /**
   * Type Inference(추론) 타입을 명확하게 명시하자
   * 타입추론 이런 예제는 간단해서 예상 가능하지만 왠만하면은 타입을 명시하자!!
   */
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number): number {
    // 함수는 함수안에 들어가는 코드가 많기 때문에 타입추론 ㄴㄴ
    return x + y;
  }
  const result = add(1, 2);
}
