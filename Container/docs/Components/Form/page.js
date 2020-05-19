import React from "react";
import Select from "@Develop/Components/Form/select.html";
import Input from "@Develop/Components/Form/input.html";
import Radio from "@Develop/Components/Form/radio.html";
import Checkbox from "@Develop/Components/Form/checkbox.html";
import Button from "@Develop/Components/Button/button.html";
import Icon from "@Develop/Components/Icon/icon.html";

const SelectDefault = () => (
    <Select>
        <option>Open this select menu</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </Select>
);

const SelectSr = () => (
    <Select c_labelClassName="sr-only">
        <option defaultValue="1">first option</option>
        <option defaultValue="2">second option</option>
        <option defaultValue="3">third option</option>
    </Select>
);

const SelectHiddenOption = () => (
    <Select>
        <option hidden>first and hidden option in list</option>
        <option defaultValue="2">second option</option>
        <option defaultValue="3">third option</option>
    </Select>
);

const SelectDisablesOption = () => (
    <Select>
        <option defaultValue="1">first option</option>
        <option defaultValue="2" disabled>second and disabled option</option>
        <option defaultValue="3">third option</option>
    </Select>
);

const SelectPreselected = () => (
    <Select>
        <option defaultValue="1">first option</option>
        <option defaultValue="2" selected>second and selected option</option>
        <option defaultValue="3">third option</option>
    </Select>
);

const SelectLabelSubed = () => (
    <Select c_labelSub="(optional)">
        <option defaultValue="1">first option</option>
        <option defaultValue="2">second option</option>
    </Select>
);

const SelectDisabled = () => (
    <Select disabled>
        <option defaultValue="1">first option</option>
        <option defaultValue="2">second option</option>
    </Select>
);

const SelectError = () => (
    <Select className="is-invalid">
        <option defaultValue="1">first option</option>
        <option defaultValue="2">second option</option>
    </Select>
);

const SelectSuccess = () => (
    <Select className="is-valid">
        <option defaultValue="1">first option</option>
        <option defaultValue="2">second option</option>
    </Select>
);

const InputText = () => (
    <Input placeholder="Default Input" />
);

const InputLabelSubed = () => (
    <Input c_labelSub="(optional)" />
);

const InputIcon = () => (
    <Input className="input-group-input-icon">
        <span className="input-group-inside inputfield-icon">
            <Icon name="placeholder" title="Placeholder" />
        </span>
    </Input>
);

const InputDisabled = () => (
    <Input disabled defaultValue="I'm disabled" />
);

const InputDisabledWithIcon = () => (
    <Input disabled defaultValue="I'm disabled" className="input-group-input-icon">
        <span className="input-group-inside inputfield-icon">
            <Icon name="placeholder" title="Placeholder" />
        </span>
    </Input>
);

const InputInvalid = () => (
    <Input defaultValue="Error state" className="is-invalid" />
);

const InputValid = () => (
    <Input defaultValue="Success state" className="is-valid" />
);

const InputPasswordToggle = () => (
    <Input type="password" data-controller="inputfield/password" className="input-group-input-icon">
        <Button className="btn btn-link p-0 inputfield-icon input-group-inside d-none" data-controller="inputfield/password/toggle" aria-pressed="false">
            <Icon name="eye-close" title="Show password" className="inputfield-icon-password-invisible" />
            <Icon name="eye-open" title="Hide password" className="inputfield-icon-password-visible" />
        </Button>
    </Input>
);

const RadioDefault = () => (
    <React.Fragment>
        <Radio c_labelText="Check this custom radio" name="radio-default" />
        <Radio c_labelText="Check this custom radio" name="radio-default" />
        <Radio disabled c_labelText="Check this custom radio disabled" name="radio-default" />
    </React.Fragment>
);

const RadioDisabledChecked = () => (
    <Radio disabled defaultChecked c_labelText="Check this custom radio disabled checked" name="radio-disabled-checked"></Radio>
);

const RadioError = () => (
    <div className="form-group">
        <Radio className="is-invalid" c_labelText="Check this custom radio error" name="radio-error">
            <div className="invalid-feedback">Example invalid feedback text</div>
        </Radio>
    </div>
);

const RadioRequiredValidated = () => (
    <div className="form-group was-validated">
        <Radio c_labelText="Check this custom radio required validated" name="radio-required-validated" required>
            <div className="invalid-feedback">Example invalid feedback text</div>
        </Radio>
    </div>
);

const CheckboxDefault = () => (
    <React.Fragment>
        <Checkbox c_labelText="Check this custom checkbox" />
        <Checkbox c_labelText="Check this custom checkbox" />
        <Checkbox c_labelText="Check this custom checkbox disabled" disabled />
    </React.Fragment>
);

const CheckboxDisabledChecked = () => (
    <Checkbox c_labelText="Check this custom checkbox disabled checked" disabled defaultChecked />
);

const CheckboxError = () => (
    <div className="form-group">
        <Checkbox className="is-invalid" c_labelText="Check this custom checkbox error">
            <div className="invalid-feedback">Example invalid feedback text</div>
        </Checkbox>
    </div>
);

const CheckoutRequiredValidated = () => (
    <div className="form-group was-validated">
        <Checkbox c_labelText="Check this custom checkbox required validated" required>
            <div className="invalid-feedback">Example invalid feedback text</div>
        </Checkbox>
    </div>
);

export default {
    RadioDefault,
    RadioDisabledChecked,
    RadioError,
    RadioRequiredValidated,
    CheckboxDefault,
    CheckboxDisabledChecked,
    CheckboxError,
    CheckoutRequiredValidated,
    InputText,
    InputLabelSubed,
    InputDisabled,
    InputIcon,
    InputDisabledWithIcon,
    InputInvalid,
    InputValid,
    InputPasswordToggle,
    SelectDefault,
    SelectSr,
    SelectHiddenOption,
    SelectDisablesOption,
    SelectPreselected,
    SelectLabelSubed,
    SelectDisabled,
    SelectError,
    SelectSuccess,
};
