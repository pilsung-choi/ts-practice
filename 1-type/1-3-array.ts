{
  //Array
  const fruits: string[] = ["π", "π"]; // μ νΈ
  const score: Array<number> = [1, 3, 4];
  function printArray(fruit: readonly string[]) {}

  // Tuple -> interface, type alias, classλ‘ λμ²΄νλ€. // μλ‘λ€λ₯Έ νμμ κ°μ μ μλ λ°°μ΄ = κΆμ₯νμ§μμ
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;

  // λ¦¬μ‘νΈλ₯Ό μ¬μ©νμΌλ©΄ useState λ₯Ό ννλ‘ μ¬μ©
}
