{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number) { // 외부에서 이 함수를 통해 coffeeBeans로 접근하기
            if (beans < 0) {             // 때문에 안전하다.
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        clean() {
            console.log('cleaning the machine...');
        }
        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}shots`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up... 🔥');
        }

        protected abstract extract(shots: number): CoffeeCup { }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }

    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            };
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {

            return {
                shots,
                hasSugar: true,
            };
        }
    }

    const machine: CoffeeMaker[] = [

        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),

        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMaker(16),
    ]
    machine.forEach(machine => {
        console.log('-------------------');
        machine.makeCoffee(1);
    })
}