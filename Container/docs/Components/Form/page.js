import React from "react";
import Select from "@Develop/Components/Form/select.html";
import Input from "@Develop/Components/Form/input.html";
import Radio from "@Develop/Components/Form/radio.html";
import Checkbox from "@Develop/Components/Form/checkbox.html";
import Button from "@Develop/Components/Button/button.html";
import Icon from "@Develop/Components/Icon/icon.html";

const SelectDefault = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select>
            <option>Open this select menu</option>
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
        </Select>
    </div>
);

const SelectSr = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select c_labelClassName="sr-only">
            <option defaultValue="1">first option</option>
            <option defaultValue="2">second option</option>
            <option defaultValue="3">third option</option>
        </Select>
    </div>
);

const SelectHiddenOption = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select>
            <option hidden>first and hidden option in list</option>
            <option defaultValue="2">second option</option>
            <option defaultValue="3">third option</option>
        </Select>
    </div>
);

const SelectDisablesOption = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select>
            <option defaultValue="1">first option</option>
            <option defaultValue="2" disabled>second and disabled option</option>
            <option defaultValue="3">third option</option>
        </Select>
    </div>
);

const SelectPreselected = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select>
            <option defaultValue="1">first option</option>
            <option defaultValue="2" selected>second and selected option</option>
            <option defaultValue="3">third option</option>
        </Select>
    </div>
);

const SelectLabelSubed = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select c_labelSub="(optional)">
            <option defaultValue="1">first option</option>
            <option defaultValue="2">second option</option>
        </Select>
    </div>
);

const SelectDisabled = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select disabled>
            <option defaultValue="1">first option</option>
            <option defaultValue="2">second option</option>
        </Select>
    </div>
);

const SelectError = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select className="is-invalid">
            <option defaultValue="1">first option</option>
            <option defaultValue="2">second option</option>
        </Select>
    </div>
);

const SelectSuccess = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Select className="is-valid">
            <option defaultValue="1">first option</option>
            <option defaultValue="2">second option</option>
        </Select>
    </div>
);

const InputText = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input placeholder="Default Input" />
    </div>
);

const InputLabelSubed = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input c_labelSub="(optional)" />
    </div>
);

const InputIcon = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input className="input-group-input-icon">
            <span className="input-group-inside inputfield-icon">
                <Icon name="placeholder" title="Placeholder" />
            </span>
        </Input>
    </div>
);

const InputDisabled = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input disabled defaultValue="I'm disabled" />
    </div>
);

const InputDisabledWithIcon = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input disabled defaultValue="I'm disabled" className="input-group-input-icon">
            <span className="input-group-inside inputfield-icon">
                <Icon name="placeholder" title="Placeholder" />
            </span>
        </Input>
    </div>
);

const InputInvalid = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input defaultValue="Error state" className="is-invalid" />
    </div>
);

const InputValid = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input defaultValue="Success state" className="is-valid" />
    </div>
);

const InputPasswordToggle = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Input type="password" data-controller="inputfield/password" className="input-group-input-icon">
            <Button className="btn btn-link p-0 inputfield-icon input-group-inside d-none" data-controller="inputfield/password/toggle" aria-pressed="false">
                <Icon name="eye-close" title="Show password" className="inputfield-icon-password-invisible" />
                <Icon name="eye-open" title="Hide password" className="inputfield-icon-password-visible" />
            </Button>
        </Input>
    </div>
);

const RadioDefault = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Radio c_labelText="Check this custom radio" name="radio-default" />
        <Radio c_labelText="Check this custom radio" name="radio-default" />
        <Radio disabled c_labelText="Check this custom radio disabled" name="radio-default" />
    </div>
);

const RadioDisabledChecked = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Radio disabled defaultChecked c_labelText="Check this custom radio disabled checked" name="radio-disabled-checked"></Radio>
    </div>
);

const RadioError = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <div className="form-group">
            <Radio className="is-invalid" c_labelText="Check this custom radio error" name="radio-error">
                <div className="invalid-feedback">Example invalid feedback text</div>
            </Radio>
        </div>
    </div>
);

const RadioRequiredValidated = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <div className="form-group was-validated">
            <Radio c_labelText="Check this custom radio required validated" name="radio-required-validated" required>
                <div className="invalid-feedback">Example invalid feedback text</div>
            </Radio>
        </div>
    </div>
);

const CheckboxDefault = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Checkbox c_labelText="Check this custom checkbox" />
        <Checkbox c_labelText="Check this custom checkbox" />
        <Checkbox c_labelText="Check this custom checkbox disabled" disabled />
    </div>
);

const CheckboxDisabledChecked = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <Checkbox c_labelText="Check this custom checkbox disabled checked" disabled defaultChecked />
    </div>
);

const CheckboxError = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <div className="form-group">
            <Checkbox className="is-invalid" c_labelText="Check this custom checkbox error">
                <div className="invalid-feedback">Example invalid feedback text</div>
            </Checkbox>
        </div>
    </div>
);

const CheckoutRequiredValidated = () => (
    <div className="cake-example-cutted-focus-and-border-fix" id="showbox">
        <div className="form-group was-validated">
            <Checkbox c_labelText="Check this custom checkbox required validated" required>
                <div className="invalid-feedback">Example invalid feedback text</div>
            </Checkbox>
        </div>
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
