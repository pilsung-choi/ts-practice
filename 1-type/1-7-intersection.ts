{
  /**
   *  Intersection Type: & => Union ( || )과 다르게 이것저것 가능
   * 다양한 타입들을 하나로 묶어서 사용 가능
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'ellie',
    score: 1,
    employeeId: 123,
    work: () => {},
  });
}
