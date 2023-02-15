{
  /**
   * Type Aliases => 새로운 타입을 내가 정의 할 수 있다. (typescript의 장점!!)
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String literal Types => 정의한 값만 쓸 수 있다.
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name"; // ellieName = "fde" 불가능 오직 "name"만 가능
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
