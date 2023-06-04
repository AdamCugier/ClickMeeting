import type {Meta, StoryObj} from '@storybook/vue3';

import NavItem from "@/components/Nav/NavItem/NavItem.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'NavItem',
    component: NavItem,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    args: {icon: 'fa-house-chimney-window', linkTo: '/'}, // default value
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;
// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/vue/api/csf
//  * to learn how to use render functions.
//  */
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
//
// export const Secondary: Story = {
//     args: {
//         primary: false,
//         label: 'Button',
//     },
// };
//
// export const SecondaryDisabled: Story = {
//     args: {
//         primary: false,
//         label: 'Button',
//         disabled: true
//     },
// };
