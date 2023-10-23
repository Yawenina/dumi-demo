---
nav:
  title: Design Patterns
  order: 1
---
# Factory
## 创建对象的设计模式

创建型设计模式是一类专注于对象的创建和实例化的设计模式。以下是一些常见的创建型设计模式：

### 1. 工厂方法模式（Factory Method Pattern）
- 描述：定义一个**接口**，让子类决定实例化哪个类，把类的实例化延迟到其子类。
- 应用场景：**当一个类无法预知他必须要创建的对象的类时**，或者它希望由子类指定创建对象时使用。
- 代码实现：
```jsx
import { Button, Space, message } from 'antd';
import { DogFactory, CatFactory } from './factory-method';

export default function Factory() {
	const speak = (type) => {
		let Factory = type === 'dog' ? DogFactory : CatFactory;
		message.success(new Factory().createAnimal().speak());
	}

  return (<Space>
		<Button onClick={() => speak('dog')}>🐶 My Dog</Button>
		<Button onClick={() => speak('cat')}>🐱 My Cat</Button>
	</Space>)
}

```