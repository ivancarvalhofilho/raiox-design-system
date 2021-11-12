import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {Tabs} from "../components/Tabs";
import {useEffect, useState} from "react";
import CalendarConst from "../components/Calendar/const";

const TabsWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Tabs.propTypes, htmlProps)
    const [tabActive, onTabClick] = useState(0)

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('useEffect_tabActive', { detail: { tabActive: tabActive, identifier: htmlProps.identifier  } }));

        /*
            Usar seguinte código no JSP para ouvir a mudança de State
            window.addEventListener("useEffect_selectedDates",
                ({detail})=> {
                    console.log(detail.selectedDates.startDate + ' a ' + detail.selectedDates.endDate)
                })
        */
    },[tabActive])

    return (
        <Tabs {...reactProps}
              tabActive={tabActive}
              onTabClick={onTabClick}>
            {reactProps.children}
        </Tabs>
    )
}

TabsWeb.propTypes = {
    ...convertPropsToHtmlProps(Tabs.propTypes)
};

customElements.define("r-tabs", reactToWebComponent(TabsWeb, React, ReactDOM));
