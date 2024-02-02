import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {BigRadio} from "../components/BigRadio";
import {useEffect, useState} from "react";
import {Tokens} from "../index";
import coreColors from "../tokens/coreColors";

const BigRadioWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(BigRadio.propTypes, htmlProps)
    const [active, setActive] = useState(false)

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('useEffect_big_radio_active', {detail: {active: active, identifier: htmlProps.identifier}}));

        /*
            Usar seguinte código no JSP para ouvir a mudança de State
            window.addEventListener("useEffect_big_radio_active",
                ({detail})=> {
                    console.log(detail)
                })
        */
    }, [active])

    return (
        <BigRadio {...reactProps}
                  setActive={() => setActive(!active)}
                  customColors={Tokens.coreColors}>
            {reactProps.children}
        </BigRadio>
    )
}

BigRadioWeb.propTypes = {
    ...convertPropsToHtmlProps(BigRadio.propTypes)
};

customElements.define("r-big-radio", reactToWebComponent(BigRadioWeb, React, ReactDOM));
