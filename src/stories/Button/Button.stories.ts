import type {Meta, StoryObj} from '@storybook/vue3';

import Button from '../../components/Button/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
    title: 'Button',
    component: Button,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {primary: false, disabled: false}, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const PrimaryDisabled: Story = {
    args: {
        primary: true,
        label: 'Button',
        disabled: true,
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Button',
    },
};

export const SecondaryDisabled: Story = {
    args: {
        primary: false,
        label: 'Button',
        disabled: true
    },
};
