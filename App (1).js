import React, { useState } from 'react';
import BpkText from 'bpk-component-text';
import BpkButton from 'bpk-component-button';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from 'bpk-component-calendar';
import format from 'date-fns/format';

import './App.scss';

const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleDateSelect = selectedDate => {
    setDate(selectedDate);
  };

  return (
    <div className="App">
      <BpkText tagName="h1" textStyle="xxl">
        Flight Schedule
      </BpkText>

      <div style={{ marginTop: '20px' }}>
        <BpkCalendar
          id="calendar"
          onDateSelect={handleDateSelect}
          formatMonth={date => format(date, 'MMMM yyyy')}
          formatWeekDay={date => format(date, 'EEEEE')}
          selectionType={CALENDAR_SELECTION_TYPE.single}
          date={date}
        />
      </div>

      <BpkText tagName="p" textStyle="lg" style={{ marginTop: '15px' }}>
        Selected Date: {formatDateFull(date)}
      </BpkText>

      <div style={{ marginTop: '20px' }}>
        <BpkButton onClick={() => alert('Continuing...')}>
          Continue
        </BpkButton>
      </div>
    </div>
  );
};

export default App;
