import ReactDOM, {render, unmountComponentAtNode} from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps,
    getEvents,
    getProps,
    parseHtmlToReact,
    ReactElement, remapHtmlPropsToHtmlProps,
    remapHtmlPropsToReactProps
} from "./WebComponent";
import reactToWebComponent from "react-to-webcomponent";
import {Button} from "../components/Button";
import PropTypes from "prop-types";
//
// const ButtonWeb = props => {
//     const htmlPureProps = {
//         ...getProps(props),
//         ...getEvents(props),
//     };
//
//     return (
//         <Button disabled={props.disabled} {...htmlPureProps}>
//             {props.children}
//         </Button>
//     )
// }
//
//
// const ButtonWeb = props => {
//     return (
//         <Button disabled={props.disabled} onclick={props.onClick}>
//             {props.children}
//         </Button>
//     )
// }
//
// ButtonWeb.propType = {
//     disabled: PropTypes.bool,
//     onclick: PropTypes.func,
// }

const htmlProps = convertPropsToHtmlProps(Button.propTypes)

const ButtonWeb = props => {
    const htmlProps = remapHtmlPropsToHtmlProps(Button.propTypes, props)
    return (
        <Button {...htmlProps}>
            {props.children}
        </Button>
    )
}

ButtonWeb.propTypes = {
    ...htmlProps
};
customElements.define("r-button", reactToWebComponent(ButtonWeb, React, ReactDOM));

// const WebGreeting = reactToWebComponent(ButtonWeb, React, ReactDOM);
// customElements.define("web-greeting2", WebGreeting);