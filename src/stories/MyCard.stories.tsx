import React from 'react'
import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import MyCard, {Props} from "../components/MyCard"
import 'bootstrap/dist/css/bootstrap.css'

const colors = {
  primary: "btn-primary",
  success: "btn-success",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info"
}

// const colors = ["btn-primary", "btn-success", "btn-danger", "btn-warning", "btn-info"]

export default {
  title: 'Example/MyCard',
  component: MyCard,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    btn_color: {
      control: {
        type: 'select',
        options: Object.keys(colors)
      }
    },
    btn_onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story<Props> = ({btn_color, ...args}) => (
  <MyCard btn_color={(colors as any)[btn_color]} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Card titles",
  description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  showButton: true,
  btn_url: "/",
  btn_color: "btn-primary",
  btn_text: "Go somewhere",
  btn_onClick: action("button-click")
}