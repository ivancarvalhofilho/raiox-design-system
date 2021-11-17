import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {InputToken} from "../components/InputToken";
import {useEffect, useState} from "react";
import {Tokens} from "../index";

const InputTokenWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(InputToken.propTypes, htmlProps)
    const [tokenTyped, setTokenTyped] = useState('')

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('useEffect_input_token', {detail: {tokenTyped: tokenTyped, identifier: htmlProps.identifier}}));
    }, [tokenTyped])

    return (
        <InputToken {...reactProps}
                  onUpdateValue={setTokenTyped}
                  customColors={Tokens.coreColors}>
            {reactProps.children}
        </InputToken>
    )
}

InputTokenWeb.propTypes = {
    ...convertPropsToHtmlProps(InputToken.propTypes)
};

customElements.define("r-input-token", reactToWebComponent(InputTokenWeb, React, ReactDOM));
