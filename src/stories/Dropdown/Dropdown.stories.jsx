import React from 'react';
import Dropdown from './Dropdown';
import DropdownContent from './DropdownContent';
import DropdownItem from './DropdownItem';
import "../../index.css";

export default {
    title: "Dropdown",
    component: Dropdown
}

const Template = (args) => {
    return <Dropdown {...args}>
        <DropdownContent>
            <DropdownItem>Testing 1</DropdownItem>
            <DropdownItem>Testing 2</DropdownItem>
            <DropdownItem>Testing 3</DropdownItem>
        </DropdownContent>
    </Dropdown>
}

export const Default = Template.bind({})
Default.args = {
    label: "Hello",
    isFullWidth: false
}