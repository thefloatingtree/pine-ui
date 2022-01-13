import React from 'react';
import "../../index.css";
import Select from './Select';
import SelectContent from './SelectContent';
import SelectItem from './SelectItem';

export default {
    title: "Select",
    component: Select,
    argTypes: { onSelect: { action: 'item selected', table: { disable: true } } }
}

const Template = (args) => {
    return <Select {...args}>
        <SelectContent>
            <SelectItem>Testing 1</SelectItem>
            <SelectItem>Testing 2</SelectItem>
            <SelectItem>Testing 3</SelectItem>
        </SelectContent>
    </Select>
}

export const Default = Template.bind({})
Default.args = {
    placeholder: "Select",
    isFullWidth: false,
    closeOnSelect: true
}