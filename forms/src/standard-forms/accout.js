import React,{ useState } from 'react'

export default function Accout() {
    const [card, setcard] = useState('');
    const [year, setyear] = useState('');
    const [month, setmonth] = useState('');
    const [pin, setpin] = useState('');
  
    const [cardError, setcarderror] = useState("");
    const [yearError, setyearerror] = useState("");
    const [monthError, setmonthError] = useState("");
    const [pinError, setpinerror] = useState("");
  
    const numberRegex = /^[0-9]+$/;
  const cardBlurData = () => {
    if (card === '') {
        setcarderror("card is a required field");
        return;
    } else {
        if (numberRegex.test(card)) {
            if (card.length === 16) {
                setcarderror('')
                return;
            } else {
                setcarderror("Enter a valid card number");
            }
        } else {
        setcarderror("Must be only digits");
        }
    }
  };

    const yearBlurData = () => {
    if (year === '') {
        setyearerror("year is a required field");
        return;
    } else {
        if (numberRegex.test(year)) {
            if (year.length === 4) {
                setyearerror('')
                return;
            } else {
                setyearerror("Enter a valid year");
            }
        } else {
        setyearerror("Must be only digits");
        }
    }
  };
    
    const monthRegex = /^[0-9]{1,2}$/;
    const validatemonth = () => {
        if (month === '') {
            setmonthError("month is a required field");
            return;
        } else {
          let mon = parseInt(month)
            if (monthRegex.test(month) && mon>0 && mon<13) {
                setmonthError('')
                return;
            } else {
            setmonthError("Enter a valid month");
            }
      }
  };
    
    const validatepin = () => {
        if (pin === '') {
            setpinerror("pin is a required field");
            return;
        } else {
            if (numberRegex.test(pin)) {
               if (pin.length === 3) {
                setpinerror('')
                return;
            } else {
                setpinerror("Enter a valid pin");
            }
        } else {
        setpinerror("Must be only digits");
        }
      }
    };

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify({
      "card": event.target.card.value, 
      "year": event.target.year.value,
      "month": event.target.month.value,
      "password": event.target.pin.value,
    }))
  }

  return (
      <form onSubmit={handleSubmit}>
      <label>Card Number</label>
        <input
          onBlur={() => cardBlurData()}
        type="text"
        placeholder="Enter your credit card number"
          name="card"
          value={card}
          onChange={e => setcard(e.target.value)}
        />
            {cardError !== '' ? <div className="input-feedback">{cardError}</div> : null}
      
    <label>Month</label>          
    <input
          type="number"
        name="month"
        placeholder="Enter month"
        value={month}
        onBlur={validatemonth}
        onChange={e => setmonth(e.target.value)}
      />
        {monthError !== '' ? <div className="input-feedback">{monthError}</div> : null}
      
    <label>Year</label>
        <input
          onBlur={() => yearBlurData()}
          type="text"
        name="year"
        placeholder="Enter year"
          value={year}
          onChange={e => setyear(e.target.value)}
        />
            {yearError !== '' ? <div className="input-feedback">{yearError}</div> : null}

   <label>Pin</label>          
    <input
          type="text"
        name="pin"
        placeholder="Enter your pin"
        value={pin}
        onBlur={validatepin}
        onChange={e => setpin(e.target.value)}
      />
        {pinError !== '' ? <div className="input-feedback">{pinError}</div> : null}
        <br />
        
        <button type="submit">
          Submit
        </button>
      </form>
  );
}
