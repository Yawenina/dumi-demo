// Product: 电脑
class Computer {
  private type: string = '';
  private cpu: string = '';
  private memory: number = 0;
  private storage: number = 0;

  setType(type: string) {
    this.type = type;
  }
  setCPU(cpu: string) {
    this.cpu = cpu;
  }
  setMemory(memory: number) {
    this.memory = memory;
  }
  setStorage(storage: number) {
    this.storage = storage;
  }
  display() {
    return `Computer type: ${this.type}, CPU: ${this.cpu}, Memory: ${this.memory}GB, Storage: ${this.storage}GB`;
  }
}

// Builder interface: 电脑建造者接口
export interface ComputerBuilder {
  buildType(): void;
  buildCPU(): void;
  buildMemory(): void;
  buildStorage(): void;
  getComputer(): Computer;
}

// Concrete Builder: 台式机建造者
export class DesktopBuilder implements ComputerBuilder {
  private computer: Computer = new Computer();

  buildType() {
    this.computer.setType('Desktop');
  }
  buildCPU() {
    this.computer.setCPU('16');
  }
  buildMemory() {
    this.computer.setMemory(16);
  }
  buildStorage() {
    this.computer.setStorage(512);
  }
  getComputer() {
    return this.computer;
  }
}

// Concrete Builder: 笔记本电脑建造者
export class LaptopBuilder implements ComputerBuilder {
  private computer: Computer = new Computer();

  buildType() {
    this.computer.setType('Laptop');
  }
  buildCPU() {
    this.computer.setCPU('Intel Core i5');
  }
  buildMemory() {
    this.computer.setMemory(8);
  }
  buildStorage() {
    this.computer.setStorage(256);
  }
  getComputer() {
    return this.computer;
  }
}

// Director: 指挥者，负责指导建造过程
export class ComputerDirector {
  construct(builder: ComputerBuilder) {
    builder.buildType();
    builder.buildCPU();
    builder.buildMemory();
    builder.buildStorage();
  }
}
