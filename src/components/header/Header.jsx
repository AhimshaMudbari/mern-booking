import React from 'react';
import './header.css';
import Hotel from '@iconscout/react-unicons/icons/uil-bed';
import Flight from '@iconscout/react-unicons/icons/uil-plane-fly';
import Car from '@iconscout/react-unicons/icons/uil-car';
import Taxi from '@iconscout/react-unicons/icons/uil-taxi';
import Building from '@iconscout/react-unicons/icons/uil-building';
import Calender from '@iconscout/react-unicons/icons/uil-calender';
import Man from '@iconscout/react-unicons/icons/uil-star';
import Search from '@iconscout/react-unicons/icons/uil-search';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openDate, setOpendate] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [option, setOption] = useState({ adult: 1, children: 0, room: 1 });
  const handleOption = function (opt, operation) {
    setOption((state) => {
      return {
        ...state,
        [opt]: operation === '-' ? option[opt] - 1 : option[opt] + 1,
      };
    });
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <Hotel size={35} color="orange" />

            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <Flight size={35} color="blue" />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <Car size={30} color="red" />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <Taxi size={30} color="yellow" />
            <span>Taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">Dashain Offer! Book Now</h1>
        <p className="headerDescription">
          Enjoy the services provided by us in the most affordable rate...
        </p>
        <button className="headerButton">Sign In / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <Building size={30} color="brown" />
            <input
              type="text"
              placeholder="Destination"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <Calender size={30} color="brown" />
            <span
              onClick={() => setOpendate(!openDate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
              date[0].endDate,
              'MM/dd/yyyy'
            )}`}</span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(e) => setDate([e.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="headerSearchItem">
            <Man size={30} color="brown" />
            <span
              onClick={() => {
                setOpenOption(!openOption);
              }}
              className="headerSearchText"
            >{`Adult: ${option.adult}, Children: ${option.children}, Room: ${option.room}`}</span>
            {openOption && (
              <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adult</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', '-')}
                      disabled={option.adult < 1}
                    >
                      -
                    </button>
                    <span className="optionCounterText">{option.adult}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('adult', '+')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                      disabled={option.children < 1}
                      className="optionCounterButton"
                      onClick={() => handleOption('children', '-')}
                    >
                      -
                    </button>
                    <span className="optionCounterText">{option.children}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => handleOption('children', '+')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Room</span>
                  <div className="optionCounter">
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption('room', '-');
                      }}
                      disabled={option.room < 1}
                    >
                      -
                    </button>
                    <span className="optionCounterText">{option.room}</span>
                    <button
                      className="optionCounterButton"
                      onClick={() => {
                        handleOption('room', '+');
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="headerSearchItem">
            <button className="headerButton">
              Search{' '}
              <span>
                <Search />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
