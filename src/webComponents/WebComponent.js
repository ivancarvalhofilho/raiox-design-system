import * as React from 'react';
import {unmountComponentAtNode} from 'react-dom';

export class ReactElement extends HTMLElement {
    constructor() {
        super();
        this.observer = new MutationObserver(() => this.update());
        this.observer.observe(this, {attributes: true});
    }

    connectedCallback() {
        this._innerHTML = this.innerHTML;
        this.mount();
    }

    disconnectedCallback() {
        this.unmount();
        this.observer.disconnect();
    }

    update() {
        this.unmount();
        this.mount();
    }


    unmount() {
        unmountComponentAtNode(this);
    }

    parseHtmlToReact(html) {
        return html;
    }

    getProps(attributes) {
        return [...attributes]
            .filter(attr => attr.name !== 'style')
            .map(attr => this.convert(attr.name, attr.value))
            .reduce((props, prop) =>
                ({...props, [prop.name]: prop.value}), {});
    }

    getEvents() {
        return Object.values(this.attributes)
            .filter(key => /on([a-z].*)/.exec(key.name))
            .reduce((events, ev) => ({
                ...events,
                [ev.name]: args =>
                    this.dispatchEvent(new CustomEvent(ev.name, {...args}))
            }), {});
    }

    convert(attrName, attrValue) {
        let value = attrValue;
        if (attrValue === 'true' || attrValue === 'false')
            value = attrValue === 'true';
        else if (!isNaN(attrValue) && attrValue !== '')
            value = +attrValue;
        else if (/^{.*}/.exec(attrValue))
            value = JSON.parse(attrValue);
        return {
            name: attrName,
            value: value
        };
    }
}

export const getEvents = () => {
    return Object.values(props)
        .filter(key => /on([a-z].*)/.exec(key.name))
        .reduce((events, ev) => ({
            ...events,
            [ev.name]: args =>
                this.dispatchEvent(new CustomEvent(ev.name, {...args}))
        }), {});
}

export const convert = (attrName, attrValue) => {
    let value = attrValue.replace(/(\B[A-Z])/gm, "-$1").toLowerCase();
    if (attrValue === 'true' || attrValue === 'false')
        value = attrValue === 'true';
    else if (!isNaN(attrValue) && attrValue !== '')
        value = +attrValue;
    else if (/^{.*}/.exec(attrValue))
        value = JSON.parse(attrValue);
    return {
        name: attrName,
        value: value
    };
}

const parseHtmlValue = (attrValue) => {
    let value = attrValue
    try {
        if(typeof eval(attrValue) === 'function')
            value = () => eval(attrValue).call()
    } catch {
        if (attrValue === 'true' || attrValue === 'false')
            value = attrValue === 'true';
        else if (!isNaN(attrValue) && attrValue !== '')
            value = +attrValue;
        else if (/^{.*}/.exec(attrValue))
            value = JSON.parse(attrValue);
    }
    return value
}

export const getProps = (attributes) => {
    if (attributes !== null)
        return [...attributes]
            .filter(attr => attr.name !== 'style')
            .map(attr => convert(attr.name, attr.value))
            .reduce((props, prop) =>
                ({...props, [prop.name]: prop.value}), {});
}

export const convertPropsToHtmlProps = (attributes) => {
    const aux = {}

    Object.keys(attributes).map(k => ({
        [k.replace(/(\B[A-Z])/gm, "-$1").toLowerCase()]: attributes[k]
    })).forEach(attribute => {
        aux[Object.keys(attribute)] = attribute[Object.keys(attribute)]
    })

    return aux
}

export const remapHtmlPropsToHtmlProps = (originalProps, propValues) => {
    return Object.keys(originalProps).reduce((result,original) => {
        const htmlProp = original.replace(/(\B[A-Z])/gm, "-$1").toLowerCase()
        return {
            ...result,
            [original]: parseHtmlValue(propValues[htmlProp]),
        }
    },{})
}


export const update = () => {
    unmount();
}

export const unmount = () => {
    unmountComponentAtNode(this);
}

export const parseHtmlToReact = (html) => {
    return html;
}
