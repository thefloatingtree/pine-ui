import React from "react";
import Checkbox from "./Checkbox";

export default {
    title: "Checkbox",
    component: Checkbox
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})

Default.args = {
    label: "radish",
    id: "radish",
    name: "checkbox-group",
    color: '#eca2e8'
}

const CheckboxGroupTemplate = (args) => {
    return (
        <div>
            <Checkbox label="carrot" name="radio-group" id="carrot" color={args.color}/>
            <Checkbox label="radish" name="radio-group" id="radish" color={args.color}/>
            <Checkbox label="beet" name="radio-group" id="beet" color={args.color}/>
            <Checkbox label="turnip" name="radio-group" id="turnip" color={args.color}/>
        </div>
    )
}

export const CheckboxGroup = CheckboxGroupTemplate.bind({})

CheckboxGroup.args = {
    color: '#eca2e8'
}