import type { Meta, StoryObj } from '@storybook/vue3';
import { within, userEvent } from '@storybook/testing-library';
import Nav from "@/components/Nav/Nav.vue";

const meta = {
    title: 'Navigation',
    component: Nav,
    // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
    tags: ['autodocs'],
} satisfies Meta<typeof Nav>;

export default meta;
