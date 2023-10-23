interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

// Abstract Products
interface Button {
  paint(): string;
}

interface Checkbox {
  paint(): string;
}
// Concrete Products for Windows
class WinButton implements Button {
  paint(): string {
    return 'win button';
  }
}

class WinCheckbox implements Checkbox {
  paint(): string {
    return 'win checkbox';
  }
}

// Concrete Products for Mac
class MacButton implements Button {
  paint(): string {
    return 'mac button';
  }
}

class MacCheckbox implements Checkbox {
  paint(): string {
    return 'mac checkbox';
  }
}

// Concrete Factory 1
export class WinFactory implements GUIFactory {
  createButton(): Button {
    return new WinButton();
  }
  createCheckbox(): Checkbox {
    return new WinCheckbox();
  }
}

// Concreate Factory 2
export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }
  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}

// Client Code
export function createUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  return {
    button,
    checkbox,
  };
}
