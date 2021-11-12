import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {Modal} from "../components/Modal";

const ModalWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Modal.propTypes, htmlProps)
    return (
        <Modal {...reactProps}>
            {reactProps.children}
        </Modal>
    )
}

ModalWeb.propTypes = {
    ...convertPropsToHtmlProps(Modal.propTypes)
};

customElements.define("r-modal", reactToWebComponent(ModalWeb, React, ReactDOM));
