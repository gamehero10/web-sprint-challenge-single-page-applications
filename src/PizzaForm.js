import React from "react";

export default function PizzaForm(props) {
  const { values, submit, inputChange, checkboxChange, disabled, errors } =
    props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    checkboxChange(name, valueToUse);
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };

  return (
    <form className="pizza">
      <div id="pizza-form"  onSubmit={onSubmit}>
        <h1>Build Your Own Pizza</h1>

        <div className="errors">
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.special}</div>
        </div>

        <label>
          Name for Order:
          <input
            type="text"
            name="name"
            value={values.name}
            id="name-input"
            onChange={onInputChange}
          />
          <br />
        </label>

        <label>
          Choice of Size:
          <select
            id="size-dropdown"
            onChange={onInputChange}
            value={values.size}
            name="size"
          >
            <option value="">Select</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-tra">X-tra Large</option>
          </select>
        </label>

        <h3>Pick a Sauce</h3>
        <label>
          Original Red
          <input
            type="radio"
            name="sauce"
            value="red"
            checked={values.sauce === "red"}
            onChange={onInputChange}
          />
        </label>

        <label>
          Garlic Ranch
          <input
            type="radio"
            name="sauce"
            value="ranch"
            checked={values.sauce === "ranch"}
            onChange={onInputChange}
          />
        </label>

        <label>
          BBQ Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq"
            checked={values.sauce === "bbq"}
            onChange={onInputChange}
          />
        </label>

        <label>
          Spinach Alfredo
          <input
            type="radio"
            name="sauce"
            value="spinach"
            checked={values.sauce === "spinach"}
            onChange={onInputChange}
          />
        </label>
        <h3>Choose a Topping</h3>
        <label>
          pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.toppings.pepperoni}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          pineapple
          <input
            type="checkbox"
            name="pineapple"
            checked={values.toppings.pineapple}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          ham
          <input
            type="checkbox"
            name="ham"
            checked={values.toppings.ham}
            onChange={onCheckboxChange}
          />
        </label>
        <label>
          olives
          <input
            type="checkbox"
            name="olives"
            checked={values.toppings.olives}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          bacon
          <input
            type="checkbox"
            name="bacon"
            checked={values.toppings.bacon}
            onChange={onCheckboxChange}
          />
        </label>

        <label>
          cheddar
          <input
            type="checkbox"
            name="cheddar"
            checked={values.toppings.cheddar}
            onChange={onCheckboxChange}
          />
          <br />
        </label>

        <label id="special-text">
          Special Intructions:
          <input
            type="text"
            name="special"
            value={values.special}
            onChange={onInputChange}
          />
        </label>
      </div>
      <button id="order-button" type = "submit" disabled={disabled}>
        Add To Order
      </button>
    </form>
  );
}
