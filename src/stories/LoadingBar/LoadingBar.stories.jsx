import React from "react";
import LoadingBar from "./LoadingBar";
import '../../index.css';

export default {
    title: "Loading Bar",
    component: LoadingBar
}

const Template = (args) => <LoadingBar {...args}></LoadingBar>

export const Default = Template.bind({})
Default.args = {
    color: "#3362fe",
    backgroundColor: "#f5f5f5",
    duration: '5s'
}