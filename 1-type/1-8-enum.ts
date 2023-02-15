{
  /**
   * Enum => 여러가지의 관련된 상수값을 한 곳에 모아서 정리해주는 타입
   */

  // Javascript  js에서 특정한 고정값을 나타낼 때, 변수를 모두 대문자로 한다.
  const MAX_NUMBER = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednsday";
  enum Days {
    Monday, // 0  // 자동으로 0 부터 but Monday = 1, 로 가능
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10; // 위험 , 다른 데이터를 넣을 수 있다.( 위험 !)
  console.log(day);

  let daysOfWeek: DaysOfWeek = "Monday";
  daysOfWeek = "Wednsday"; // union type안에 있는 데이터만 변수에 다시 넣을 수 있음
  //  enum 보다 union 으로 충분히 대체가능하다. typescript에서 enum은 잘 안씀
}
