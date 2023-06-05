import type {Meta, StoryObj} from '@storybook/vue3';

import NavItem from "@/components/Nav/NavItem/NavItem.vue";

const meta = {
    title: 'NavItem',
    component: NavItem,
    tags: ['autodocs'],
    args: {icon: 'fa-house-chimney-window', linkTo: '/'}, // default value
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {
    args: {
        icon: 'fa-house-chimney-window'
    },
};
export const Message: Story = {
    args: {
        icon: 'fa-message'
    },
};