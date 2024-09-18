// ComponentMeta, ComponentStory廃止
import { Meta, StoryFn } from "@storybook/react/*";

import Button from "./index";

export default {
    title: 'Atoms/Button',
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio'},
            defaultValue: 'primary',
            description: 'ボタンバリアント',
            table: {
                type: { summary: 'primary | secondary' },
                defaultValue: { summary: 'primary'},
            },
        },
        children: {
            control: { type: 'text'},
            defaultValue: 'Button',
            description: 'ボタンテキスト',
            table: {
                type: { summary: 'string'},
            },
        },
        disabled: {
            control:{ type: 'boolean'},
            defaultValue: false,
            description: 'Disabledフラグ',
            table: {
                type: {summary: 'boolean'},
            }
        },
        width: {
            control: {type: 'number'},
            description: '横幅',
            table: {
                type: {summary: 'number'},
            }
        },
        height: {
            control: {type: 'number'},
            description: '縦幅',
            table: {
                type: {summary: 'number'},
            }
        },
        onClick: {
            description: 'onClickイベントハンドラ',
            table:{
                type: {summary: 'function'},
            },
        },
    },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

// プライマリボタン
export const Primary = Template.bind({})
Primary.args = { variant: 'primary', children: 'Primary Button'}

// セカンダリボタン
export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', children: 'Secondary Button'}

// 無効化ボタン
export const Disabled = Template.bind({})
Disabled.args = { disabled: true, children: 'Disabled Button'}