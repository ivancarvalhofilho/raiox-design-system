import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {SimpleToast} from "../components/SimpleToast";
import {useEffect, useState} from "react";

const SimpleToastWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(SimpleToast.propTypes, htmlProps)
    const [visible, setVisible] = useState(htmlProps.visible)

    return (
        <SimpleToast {...reactProps}
                     isVisible={visible}
                     setInvisible={setVisible}
                     type={reactProps.toastType || 'success'}>
            {reactProps.children}
        </SimpleToast>
    )
}

SimpleToastWeb.propTypes = {
    ...convertPropsToHtmlProps(SimpleToast.propTypes)
};

customElements.define("r-simple-toast", reactToWebComponent(SimpleToastWeb, React, ReactDOM));
