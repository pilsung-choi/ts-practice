{
  //Array
  const fruits: string[] = ["🍎", "🍌"]; // 선호
  const score: Array<number> = [1, 3, 4];
  function printArray(fruit: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체한다. // 서로다른 타입을 갖을 수 있는 배열 = 권장하지않음
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;

  // 리액트를 사용했으면 useState 를 튜플로 사용
}
