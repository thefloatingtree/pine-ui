import React from 'react';
import SearchBar from './SearchBar'

export default {
    title: "SearchBar",
    component: SearchBar
}

const Template = (args) => <SearchBar {...args}>{args.label}</SearchBar>

export const Default = Template.bind({})
Default.args = {
    label: "SearchBar"
}