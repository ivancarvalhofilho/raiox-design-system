import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {Icon} from "../components/Icon";

const IconWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Icon.propTypes, htmlProps)

    return (
        <Icon {...reactProps}>
            {reactProps.children}
        </Icon>
    )
}

IconWeb.propTypes = {
    ...convertPropsToHtmlProps(Icon.propTypes)
};

customElements.define("r-icon", reactToWebComponent(IconWeb, React, ReactDOM));
