import type {Meta, StoryObj} from '@storybook/vue3';

import Button from '../../components/Button/Button.vue';

const meta = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {primary: false, disabled: false}, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

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
