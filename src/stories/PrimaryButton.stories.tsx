import type { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/PrimaryButton';
import { fn } from '@storybook/test'

const meta = {
    title: 'Example/PrimaryButton',
    component: PrimaryButton,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}  >
                <Story />
            </div>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: {
                type: "select",
                options: ["dark", 'light', 'social', 'text',]
            },
            description: "버튼 테마",
            defaultValue: 'dark',
        },
        isDisabled: {
            control: "boolean",
            description: "버튼 disabled 여부",
            defaultValue: true,
        },
        children: {
            control: "text",
            description: "버튼 텍스트",
        },
        onClick: { action: "clicked", description: "버튼 클릭" },
    },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        theme: 'dark',
        children: 'Button',
        isDisabled: false,
        onClick: fn(),
    },
};

export const Light: Story = {
    args: {
        theme: 'light',
        children: 'Button',
        isDisabled: false,
        onClick: fn(),
    },
};

export const Social: Story = {
    args: {
        theme: 'social',
        children: 'Button',
        isDisabled: false,
        onClick: fn(),
    },
};

export const Text: Story = {
    args: {
        theme: 'text',
        children: 'Button',
        isDisabled: false,
        onClick: fn(),
    },
};

export const Disabled: Story = {
    args: {
        theme: 'dark',
        children: 'Button',
        isDisabled: true,
        onClick: fn(),
    },
};