import React, {useState} from 'react'
import {SimpleToast} from "../src";
import {Tokens} from "../src/tokens";
import {appearencesList} from "../src/components/Icon";

export default {
    title: 'Components/SimpleToast',
    component: SimpleToast,
}

const Template = args => {
    const [visible, setVisible] = useState(false)

    return (<>
        <p>
            <button onClick={() => setVisible(true)}>Click aqui para disparar o toast</button>
            <br/>
        </p>

        <SimpleToast {...args}
                     isVisible={visible}
                     setInvisible={setVisible}
                     type={args.toastType || 'success'}/>
        <p></p>
        <SimpleToast {...args}
                     isVisible={true}
                     type={args.toastType || 'info'}/>
        <p></p>

        <SimpleToast {...args}
                     isVisible={true}
                     type={args.toastType || 'error'}/>
        <p></p>

        <SimpleToast {...args}
                     isVisible={true}
                     type={args.toastType || 'warning'}/>
    </>)
}

export const Default = Template.bind({})
Default.args = {
    toastType: false,
    disabled: false,
    text: "Sample Text",
    lifetime: 5000,
}
Default.argTypes = {
    toastType: {
        control: {
            type: 'select',
            options: [
                'success', 'warning', 'error'
            ],
        },
    },
}