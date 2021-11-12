import ReactDOM from "react-dom";
import * as React from "react";
import {
    convertPropsToHtmlProps, mapHtmlPropsToReactProps,
} from "../utils/webComponentUtil";
import reactToWebComponent from "react-to-webcomponent";
import {Calendar} from "../components/Calendar/Calendar";
import CalendarConst from "../components/Calendar/const";
import {useEffect, useState} from "react";

const CalendarWeb = htmlProps => {
    const reactProps = mapHtmlPropsToReactProps(Calendar.propTypes, htmlProps)

    const [selectedDates, setSelectedDates] = useState({
        state: CalendarConst.STATES.SELECTED,
        firstClickDate: null,
        startDate: '01/09/2020',
        endDate: '01/22/2020',
    })

    useEffect(() => {
        window.dispatchEvent(new CustomEvent('useEffect_selectedDates', { detail: { selectedDates } }));

        /*
            Usar seguinte código no JSP para ouvir a mudança de State
            window.addEventListener("useEffect_selectedDates",
                ({detail})=> {
                    console.log(detail.selectedDates.startDate + ' a ' + detail.selectedDates.endDate)
                })
        */
    },[selectedDates])

    return (
        <Calendar {...reactProps}
                  selectedDates={selectedDates}
                  setSelectedDates={setSelectedDates}>
            {reactProps.children}
        </Calendar>
    )
}

CalendarWeb.propTypes = {
    ...convertPropsToHtmlProps(Calendar.propTypes)
};

customElements.define("r-calendar", reactToWebComponent(CalendarWeb, React, ReactDOM));
