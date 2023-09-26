import type {Meta, StoryObj} from '@storybook/react'

import Div from '../components/div/Div'

const meta: Meta<typeof Div> = {
title: "MyFirstComponent/Div",
component: Div
}
export default meta;

type Primary = StoryObj<typeof meta>;
export const Default: Primary = {
    args: {
    label: "Detta är en div"
    }
}
type Secondary = StoryObj<typeof meta>;
export const Secondary: Primary = {
    args: {
    label: "Detta är en röd div",
    color: "red"
    }
}
type Blue = StoryObj<typeof meta>;
export const Blue: Primary = {
    args: {
    label: "Detta är en blå div",
    color: "blue"
    }
}
