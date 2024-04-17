import type { Meta, StoryObj } from '@storybook/react';
import NavigationBar from '../components/NavigationBar';
import { fn } from '@storybook/test'

const meta = {
    title: 'Example/NavigationBar',
    component: NavigationBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: '360px' }}  >
                <Story />
            </div>
        ),
    ],
    argTypes: {
        title: {
            control: "text",
            description: "네비게이션 바의 제목",
        },
        showTitle: {
            control: "boolean",
            description: "제목 표시 여부",
            defaultValue: false
        },
        showBackButton: {
            control: "boolean",
            description: "뒤로가기 버튼 표시 여부",
            defaultValue: false
        },
        showCloseButton: {
            control: "boolean",
            description: "닫기 버튼 표시 여부",
            defaultValue: false
        },
        onBackButtonClick: { action: "clicked", description: "뒤로가기 버튼 클릭 이벤트" },
        onCloseButtonCLick: { action: "clicked", description: "닫기 버튼 클릭 이벤트" },
    },
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '타이틀',
        showTitle: true,
        showCloseButton: true,
        showBackButton: true,
        onBackButtonClick: () => { },
        onCloseButtonCLick: () => { }
    },
};