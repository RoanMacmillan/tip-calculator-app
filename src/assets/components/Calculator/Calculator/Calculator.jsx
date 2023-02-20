import React, { useState } from 'react';
import InputField from '../InputField/InputField'
import TipButton from '../TipButton/TipButton'
import ResetBtn from '../ResetBtn/ResetBtn';
import Icon from '../../Icons/Icons';
const Calculator = () => {

  const defaultBillAmount = 0;
  const defaultNumPeople = 1;
  const defaultTipPercentage = 0;
  const [activeButton, setActiveButton] = useState(null);
  const [billAmount, setBillAmount] = useState(defaultBillAmount);
  const [numPeople, setNumPeople] = useState(defaultNumPeople);
  const [tipPercentage, setTipPercentage] = useState(defaultTipPercentage);
  const [isBillAmountValid, setIsBillAmountValid] = useState(true);
  const [isPplAmountValid, setIsPplAmountValid] = useState(true);
  const [isTipPercentageValid, setIsTipPercentageValid] = useState(true);

  // reusable function to check if value is a number or greater than 0
  const isValidNumber = (value) => !isNaN(value) && value !== '' && parseFloat(value) >= 0;

  // Handles changes to the bill amount input field
  const handleBillAmountChange = (e) => {
    const newBillAmount = e.target.value;
    setBillAmount(newBillAmount);
    setIsBillAmountValid(isValidNumber(newBillAmount));
    
  };

  //  Handles changes to the number of people input field
  const handleNumPeopleChange = (e) => {
    const newPplAmount = e.target.value;
    setNumPeople(newPplAmount);
    setIsPplAmountValid(isValidNumber(newPplAmount) && parseFloat(newPplAmount) >= 1);
  };

  // Handles clicking on a tip percentage button
  const handleTipClick = (percentage) => {

    setTipPercentage(percentage);
    setActiveButton(percentage);
  };

  const handleTipPercentageChange = (e) => {
    const newTipPercentage = e.target.value;
    setTipPercentage(newTipPercentage);
    setIsTipPercentageValid(isValidNumber(newTipPercentage) && parseFloat(newTipPercentage) >= 0 && parseFloat(newTipPercentage) <= 100);
    setActiveButton(newTipPercentage);
  };

  const calculateTipAmountPerPerson = () => {
    const tipAmount = (billAmount * (tipPercentage / 100)) / numPeople;
    return tipAmount >= 0 ? tipAmount.toFixed(2) : '0.00';  }

  const calculateTotalPerPerson = () => {
    const totalAmount = (Number(billAmount) + (billAmount * (tipPercentage / 100))) / numPeople;
return totalAmount >= 0 ? totalAmount.toFixed(2) : '0.00'  }

  // Resets form on button click
  const handleResetClick = (e) => {
    e.preventDefault();
    // resets values to default
    setBillAmount(defaultBillAmount);
    setNumPeople(defaultNumPeople);
    setTipPercentage(defaultTipPercentage);
    setActiveButton(null); // reset the active button
    setIsBillAmountValid(true); // resets bill amount validation
    setIsPplAmountValid(true); // resets no of ppl validation
    setIsTipPercentageValid(true); // resets custom tip % validation
  };



  const tipAmountPerPerson = calculateTipAmountPerPerson();
  const totalPerPerson = calculateTotalPerPerson();

  const isFormDefault = billAmount === defaultBillAmount &&
    numPeople === defaultNumPeople &&
    tipPercentage === defaultTipPercentage;

  return (


    <main>
      <Icon name='logo' className='Logo' />

      <div className='CalculatorContainer'>
        <form>

          <div className='InputContainer'>

            <div className='BillContainer'>
              {!isBillAmountValid && (
                <p className="error-message">Invalid Amount</p>
              )}
              <Icon name='dollar' className='Dollar' />
              <InputField
                label="Bill"
                value={billAmount}
                onChange={handleBillAmountChange}
                className={`BillInput ${isBillAmountValid ? '' : 'invalid'}`}
                maxLength={5}

              />
            </div>
            <div className='TipContainer'>
              <span id='tip'>Select Tip %</span>
              <div className='CalcBtnsContainer'>

                <TipButton percentage={5} handleTipClick={handleTipClick} isSelected={activeButton === 5} />
                <TipButton percentage={10} handleTipClick={handleTipClick} isSelected={activeButton === 10} />
                <TipButton percentage={15} handleTipClick={handleTipClick} isSelected={activeButton === 15} />
                <TipButton percentage={25} handleTipClick={handleTipClick} isSelected={activeButton === 25} />
                <TipButton percentage={50} handleTipClick={handleTipClick} isSelected={activeButton === 50} />
                <InputField
                  label=''
                  value={tipPercentage}
                  onChange={handleTipPercentageChange}
                  className={`TipInput ${isTipPercentageValid ? '' : 'invalid'}`}
                  maxLength={3}
                  placeholder="Custom"
                />

              </div>
            </div>

            <div className='PplContainer'>
              {!isPplAmountValid && (
                <p className="error-message">Invalid Amount</p>
              )}
              <Icon name='person' className='Person' />

              <InputField
                label="No. Of People"
                value={numPeople}
                onChange={handleNumPeopleChange}
                className={`PplInput ${isPplAmountValid ? '' : 'invalid'}`}

                maxLength={4}
              />



            </div>

          </div>

          <div className='ResultsContainer'>

            <div className='AmountContainer'>
              <div className='AmountChild'>
                <span>Tip Amount</span>
                <span>/ person</span>
              </div>
              <span className='TipPersonAmt'>${tipAmountPerPerson}</span>

            </div>

            <div className='AmountContainer'>
              <div className='AmountChild'>
                <span>Total</span>
                <span>/ person</span>
              </div>
              <span className='TotalPersonAmt'>${totalPerPerson}</span>
            </div>

            <ResetBtn onClick={handleResetClick} disabled={isFormDefault} />

          </div>



        </form>

      </div>

    </main>
  )
}

export default Calculator
