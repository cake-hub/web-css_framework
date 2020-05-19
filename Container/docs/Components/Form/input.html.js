import React from "react";
import shortid from "shortid";

const InputLabelSub = ({labelSub}) => (
    labelSub?
        <span className="font-weight-normal">{` ${labelSub}`}</span>
        : null
);

const Input = ( { id=shortid.generate(),
                    type="text",
                    children,
                    c_labelClassName="",
                    c_labelText="Label for Input",
                    c_labelSub=false,
                    className="",
                    ...props
                } ) => (
    <div>
        <label htmlFor={id} className={"input-label " + c_labelClassName}>
            { c_labelText }
            <InputLabelSub labelSub={c_labelSub}/>
        </label>
        <div className="input-group">
            <input className={ "form-control " + className } id={id} type={type} {...props} />
            { children }
        </div>
    </div>
);

export default Input;
