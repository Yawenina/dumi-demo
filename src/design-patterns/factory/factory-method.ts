import { message } from 'antd';
// 定义一个接口，表示要创建的对象类型
interface Animal {
	speak(): string;
}

// 实现具体的类
class Cat implements Animal {
	speak() {
		return 'miao miao miao';
	}
}

class Dog implements Animal {
	speak() {
		return 'wang wang wang';
	}
}

// 定义工厂接口，用于创建对象
interface AnimalFactory {
	createAnimal(): Animal;
}

// 实现具体的工厂类
export class CatFactory implements AnimalFactory {
	createAnimal(): Animal {
		return new Cat();
	}
}

export class DogFactory implements AnimalFactory {
	createAnimal(): Animal {
		return new Dog();
	}
}

// 使用工厂模式
// const dogFactory: AnimalFactory = new DogFactory();
// const catFactory: AnimalFactory = new CatFactory();

// const myDog: Animal = dogFactory.createAnimal();
// const myCat: Animal = catFactory.createAnimal();

// myDog.speak();
// myCat.speak();

