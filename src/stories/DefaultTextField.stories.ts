import type { Meta, StoryObj } from '@storybook/react';
import DefaultTextField from '../components/DefaultTextField';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/DefaultTextField',
  component: DefaultTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: "text",
      description: "DefaultTextField의 id",
      defaultValue: 'text-field',
    },
    errorMessage: {
      control: "text",
      description: "DefaultTextField의 에러메세지",
      defaultValue: 'error',
    },
    isError: {
      control: "boolean",
      description: "에러 상태여부",
      defaultValue: 'false',
    },
    placeholder: {
      control: "text",
      description: "DefaultTextField의 placeholder",
      defaultValue: 'input here',
    },
    value: {
      control: "text",
      description: "DefaultTextField의 내용",
      defaultValue: '',
    },
    onChange: {
      action: 'changed',
      description: "텍스트 필드의 에러메세지"
    },
    onClick: {
      action: 'clicked',
      description: "닫기버튼 클릭"
    }
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'text-field',
    isError: false,
    errorMessage: "텍스트를 확인해주세요",
    placeholder: "텍스트를 입력해주세요",
    value: "",
    onClick: fn(),
    onChange: fn(),
  },
};