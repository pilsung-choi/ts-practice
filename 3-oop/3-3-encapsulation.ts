{
  // 캡슐화 => 어떤 것을 감춰야 할지 어떤것을 노출시킬지 고민
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보를 은닉 할 수 있는 방법
  // public
  // private
  // protected
  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    } // => constructor를 private 함으로서 makeMachine로 인스턴스를 생성해야한다는 것을 알려준다

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      //생성자 함수 없이 객체를 만들고 싶을때
      return new CoffeeMaker(coffeeBeans); // ex) Math.abs
    } // 누군가가 생성자를 통해서 생성하는것을 금지하기 위해서 쓴다

    fillCoffeeBeans(beans: number) {
      // coffeeBeans를 감추고 내부 메서드로 커피콩을 추가함으로서 은닉화 (안정성up)
      if (beans < 0) {
        throw new Error("value for beans shoud be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);

  class User {
    private firstName: string;
    private lastName: string;
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error(" - age");
      }
      this.internalAge = num;
    }

    constructor(firstName: string, lastname: string) {
      this.firstName = firstName;
      this.lastName = lastname;
    }
  }
  // 위 class와 같다 ------------------------------
  // class User {
  //   get fullName(): string {
  //     return `${this.firstName} ${this.lastName}`;
  //   }

  //   constructor(private firstName: string, private lastname: string) {}
  // }

  const user = new User("steve", "jobs");
  console.log(user.fullName);
  user.age = 6;
}
