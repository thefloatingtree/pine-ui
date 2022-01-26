import React from 'react';
import "../../index.css";
import TextArea from './TextArea';


export default {
    title: "TextArea",
    component: TextArea,
    argTypes: {
        onChange: { action: 'value changed', table: { disable: true } },
        resizeDirection: { options: ['both', 'vertical', 'horizontal'], control: { type: 'select' } }
    }
}

const Template = (args) => {
    return <TextArea {...args} />
}

export const Default = Template.bind({})
Default.args = {
    expand: true,
    resize: true,
    resizeDirection: 'both',
    rows: 3,
    placeholder: "",
    maxLength: 3000
}