{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 7; // class level 변하지 않는 정보이다. instance에 있지 않아도 되는 정보이다.
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //생성자 함수 없이 객체를 만들고 싶을때
      return new CoffeeMaker(coffeeBeans); // ex) Math.abs
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(32);
  console.log(maker2);
}
