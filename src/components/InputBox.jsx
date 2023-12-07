import React, { useId, useState } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const [input, setInput] = useState('');
  const amountInputId = useId();

  const filteredCurrencies = currencyOptions.filter((currency) =>
    currency.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"  
          placeholder="Amount"
          
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <div>
          <label>Search Bar</label>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className=" border-2 border-black focus:outline-none focus:border-blue-300"
          />
        </div>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {filteredCurrencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
