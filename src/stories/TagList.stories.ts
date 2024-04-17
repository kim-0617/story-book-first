import type { Meta, StoryObj } from '@storybook/react';
import TagList from '../components/TagList';
import { fn } from '@storybook/test'

const meta = {
    title: 'Example/TagList',
    component: TagList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        tagList: {
            control: "array",
            description: "태그 리스트",
            defaultValue: ["1~2명", "3~5명", "5~7명", "8~9명"],
        },
        onTagClick: { action: "clicked", description: "태그 클릭" },
    },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tagList: ["1~2명", "3~5명", "5~7명", "8~9명"],
        onTagClick: fn(),
    },
};