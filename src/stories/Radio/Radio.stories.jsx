import React from "react";
import Radio from "./Radio";

export default {
    title: "Radio button",
    component: Radio
}

const Template = (args) => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {
    label: "radish",
    id: "radish",
    name: "radio-group",
    color: '#eca2e8'
}

const RadioGroupTemplate = (args) => {
    return (
        <div>
            <Radio label="carrot" name="radio-group" id="carrot" color={args.color}/>
            <Radio label="radish" name="radio-group" id="radish" color={args.color}/>
            <Radio label="beet" name="radio-group" id="beet" color={args.color}/>
            <Radio label="turnip" name="radio-group" id="turnip" color={args.color}/>
        </div>
    )
}

export const RadioGroup = RadioGroupTemplate.bind({})

RadioGroup.args = {
    color: '#eca2e8'
}