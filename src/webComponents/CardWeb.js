import {convertPropsToHtmlProps, mapHtmlPropsToReactProps} from "../utils/webComponentUtil";
import {Card} from "../components/Card";
import reactToWebComponent from "react-to-webcomponent";
import * as React from "react";
import ReactDOM from "react-dom";
import ReactHtmlParser from 'react-html-parser';
import {useEffect, useState} from "react";
import CalendarConst from "../components/Calendar/const";


const CardWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Card.propTypes, htmlProps)

    return (<Card {...reactProps}>
        {reactProps.children}
    </Card>)
}

CardWeb.propTypes = {
    ...convertPropsToHtmlProps(Card.propTypes)
}

customElements.define("r-card", reactToWebComponent(CardWeb, React, ReactDOM));
