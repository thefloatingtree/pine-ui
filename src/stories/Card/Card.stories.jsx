import React from "react";
import Card from "./Card";
import '../../index.css';


export default {
    title: "Card",
    component: Card
}

const Template = (args) => <Card {...args}>{args.children}</Card>

export const Default = Template.bind({})
Default.args = {
    image: "https://loremflickr.com/320/240",
    title: "Title",
    subtitle: "Subtitle",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    actions: [
        {
            text: "Action 1",
            action: () => console.log('editing')
        },
        {
            text: "Action 2",
            action: () => console.log('delete')
        }
    ]
}
