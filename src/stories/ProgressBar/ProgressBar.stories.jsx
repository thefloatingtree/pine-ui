import React, {useState, Fragment} from "react";
import ProgressBar from "./ProgressBar";
import '../../index.css';
import ClickThrough from "./clickThrough";

export default {
    title: "Progress Bar",
    component: ProgressBar
}

const Template = (args) => <ProgressBar {...args}></ProgressBar>

export const Default = Template.bind({})
Default.args = {
    color: "#3362fe",
    backgroundColor: "#f5f5f5",
    startFill: "25%",
    endFill: "50%",
    duration: "1s"
}


const clickThroughTemplate = (args) => <ClickThrough {...args} />
export const clickThrough = clickThroughTemplate.bind({})
clickThrough.args = {
    color: "rgb(49, 49, 187)"
}

