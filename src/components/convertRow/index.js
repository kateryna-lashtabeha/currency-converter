import React from 'react';
import './style.scss';

export default function ConvertRow({ label, currency, setSelectedCurrency, onChangeCurrencyFn, onChangeAmount, amount }) {
  return (
    <div className="convert__row">
      {label && (<p className="convert__label">{label}</p>)}
      <input className="convert__input" type="number" value={amount} onChange={onChangeAmount} />
      <select className="convert__select" value={setSelectedCurrency || ''} onChange={onChangeCurrencyFn}>
        {currency?.map((el, i) => {
          return <option key={el.code} value={el.code}>{el.description ? el.description : el.code}</option>
        })}
      </select>
    </div>
  )
}
