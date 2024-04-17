import type { Meta, StoryObj } from '@storybook/react';
import TagButton from '../components/TagButton';
import { fn } from '@storybook/test'

const meta = {
    title: 'Example/TagButton',
    component: TagButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        isChecked: {
            control: "boolean",
            description: "버튼 선택여부",
            defaultValue: false,
        },
        children: {
            control: "text",
            description: "버튼의 텍스트",
            defaultValue: 'Button',
        },
        onClick: { action: "clicked", description: "버튼 클릭" },
    },
} satisfies Meta<typeof TagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isChecked: false,
        children: 'Button',
        onClick: fn(),
    },
};