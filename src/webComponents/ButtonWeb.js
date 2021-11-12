import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {Button} from "../components/Button";
import {Tokens} from "../tokens";

const ButtonWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Button.propTypes, htmlProps)
    return (
        <Button {...reactProps} customColors={Tokens.coreColors}>
            {reactProps.children}
        </Button>
    )
}

ButtonWeb.propTypes = {
    ...convertPropsToHtmlProps(Button.propTypes)
};

customElements.define("r-button", reactToWebComponent(ButtonWeb, React, ReactDOM));
