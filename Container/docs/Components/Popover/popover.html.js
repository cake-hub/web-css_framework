const Popover = (configuration) => {
    let dataAttrs = {};

    for (let dataAttr in configuration) {
        dataAttrs ["data-tippy-" + dataAttr] = configuration [dataAttr];
    }

    dataAttrs ["aria-haspopup"] = true;
    dataAttrs ["aria-expanded"] = false;

    return dataAttrs;
};

export default Popover;
