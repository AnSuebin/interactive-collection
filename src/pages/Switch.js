import React from 'react';
import styled from './Switch.module.css';

const Switch = () => {
  return (
    <div className={styled.buttonContainer}>
      <div>
        <input
          className={styled.reactSwitchCheckbox}
          id={`react-switch-new`}
          type="checkbox"
        />
        <label className={styled.reactSwitchLabel} htmlFor={`react-switch-new`}>
          <span className={styled.reactSwitchButton} />
        </label>
      </div>
    </div>
  );
};

export default Switch;
