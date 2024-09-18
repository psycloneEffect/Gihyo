import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react/*";
import CheckBox from "./index";
import Box from "../../layout/Box";

export default {
    title: 'Molecules/CheckBox',
    argTypes: {
        label: {
            control: { type: 'text'},
            description: 'ラベル',
            table: {
                type: { summary: 'text' }
            },
        },
        checked: {
            control: { type: 'boolean'},
            description: 'チェック',
            table: {
                type: { summary: 'number' }
            },
        },
        onChange: {
            description: '値が変化した時のイベントハンドラ',
            table: {
                type: { summary: 'function' }
            },
        },
    }
} as Meta<typeof CheckBox>

const Template: StoryFn<typeof CheckBox> = (args) => (
    <CheckBox {...args} />
)

export const WithLabel = Template.bind({})
WithLabel.args = { label: 'Label' }