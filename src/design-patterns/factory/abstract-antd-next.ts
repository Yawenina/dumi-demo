import { Button as FusionButton } from '@alifd/next';
import { Button, ButtonProps } from 'antd';
import { CompoundedComponent } from 'antd/es/float-button/interface';
import { RefAttributes } from 'react';

interface LibFactory {
  createButton(): any;
}

export class AntdFactory implements LibFactory {
  createButton() {
    return Button as CompoundedComponent & {
      defaultProps?:
        | Partial<ButtonProps & RefAttributes<HTMLButtonElement>>
        | undefined;
    };
  }
}

export class NextFactory implements LibFactory {
  createButton() {
    return FusionButton;
  }
}

export function createLib(factory: LibFactory) {
  const button = factory.createButton();
  return {
    button,
  };
}
