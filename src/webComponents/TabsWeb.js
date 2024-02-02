import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {useEffect, useState} from "react";
import {TabsCore} from "../components/Tabs/TabsCore";

const TabsWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(TabsCore.propTypes, htmlProps)
    const [tabActive, onTabClick] = useState(0)

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('useEffect_tabActive', { detail: { tabActive: tabActive, identifier: htmlProps.identifier  } }));
    },[tabActive])

    return (
        <TabsCore {...reactProps}
              tabActive={tabActive}
              onTabClick={onTabClick}>
            {reactProps.children}
        </TabsCore>
    )
}

TabsWeb.propTypes = {
    ...convertPropsToHtmlProps(TabsCore.propTypes)
};

customElements.define("r-tabs", reactToWebComponent(TabsWeb, React, ReactDOM));
