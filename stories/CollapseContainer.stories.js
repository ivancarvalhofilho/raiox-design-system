import React from 'react'

import {CollapseContainer} from '../src'

export default {
    title: 'Components/CollapseContainer',
    component: CollapseContainer,
}

const Template = args => {
    return (<div style={{maxWidth: 400, height: '400px'}}><CollapseContainer {...args} /><CollapseContainer {...args} /><CollapseContainer {...args} /></div>)
}

export const Default = Template.bind({})
Default.args = {
    title: 'O que significa “recebido” e “a receber” (acima do calendário?)',
    children:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
}
