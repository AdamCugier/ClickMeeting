import type {Meta, StoryObj} from '@storybook/vue3';

import Button from '@/components/Buttons/Button/Button.vue';

const meta = {
    title: 'Buttons',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {action: 'clicked'},
    },
    args: {primary: false, disabled: false, size: 'md'}, // default value
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySmall: Story = {
    args: {
        primary: true,
        label: 'Buttons',
        size: 'sm',
    },
};

export const Primary: Story = {
    args: {
        primary: true,
        label: 'Buttons',
    },
};

export const PrimaryLarge: Story = {
    args: {
        primary: true,
        label: 'Buttons',
        size: 'lg',
    },
};

export const PrimarySmallDisabled: Story = {
    args: {
        primary: true,
        label: 'Buttons',
        disabled: true,
        size: 'sm',
    },
};
export const PrimaryDisabled: Story = {
    args: {
        primary: true,
        label: 'Buttons',
        disabled: true,
    },
};
export const PrimaryLargeDisabled: Story = {
    args: {
        primary: true,
        label: 'Buttons',
        disabled: true,
        size: 'lg',
    },
};
export const SecondarySmall: Story = {
    args: {
        primary: false,
        label: 'Buttons',
        size: 'sm'
    },
};
export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Buttons',
    },
};
export const SecondaryLarge: Story = {
    args: {
        primary: false,
        label: 'Buttons',
        size: 'lg'
    },
};
export const SecondarySmallDisabled: Story = {
    args: {
        primary: false,
        label: 'Buttons',
        disabled: true,
        size: 'sm'
    },
};
export const SecondaryDisabled: Story = {
    args: {
        primary: false,
        label: 'Buttons',
        disabled: true
    },
};
export const SecondaryLargeDisabled: Story = {
    args: {
        primary: false,
        label: 'Buttons',
        disabled: true,
        size: 'lg'
    },
};