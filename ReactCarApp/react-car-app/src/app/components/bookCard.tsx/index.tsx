import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { SCREENS } from "../responsive";
const CardContainer = styled.div`
    box-shadow:0 1.3px 12px -3px rgba(0,0,0,0.4);
    ${tw`
        flex
        justify-center
        items-center
        rounded-md
        bg-white
        pt-1
        pb-2
        pr-2
        pl-2
        md:pt-2
        md:pb-2
        md:pr-6
        md:pl-6

    `};
`;

const ItemContainer = styled.div`
    position: relative;
    ${tw`
        flex
    `};
`
const Icon = styled.div`
    ${tw`
        text-red-500
        fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
    `}
`
const SmallIcon = styled.span`
    margin-top: -0.15em;
    ${tw`
         text-gray-700
        fill-current
      text-xs
      md:text-base
      ml-1
      md:mr-3
    `}
`
const Name = styled.span`
  ${tw`
    text-gray-500
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

const LineSeparator = styled.span`
    width: 2px;
    height: 45%;
    ${tw`
        bg-gray-300
        mr-2
        ml-2
        md:mr-5
        md:ml-5
    `};
`

const DateCalander = styled(Calendar)`
    position: absolute;
    max-width: none;
    top: 2em;
    left: 0em;
    user-select: none;
    ${({ offset }: any) =>
    offset &&
    `
      left: -6.5em;
    `};
     @media (min-width: ${SCREENS.md}) {
        top: 3.5em;
        left: -2em;
    }

`as any

export function BookCard(){
    const [startDate,setStartDate] = useState(new Date());
    const [isStartCalendarOpen,setStartCalendarOpen] = useState(false);
    const [returnDate,setReturnDate] = useState(new Date());
    const [isReturnCalendarOpen,setReturnCalendarOpen] = useState(false);

    console.log("startDate:",startDate);
    const openStartDateCalendar = ()=>{
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen){
            setReturnCalendarOpen(false);
        }
    }

    const openReturnDateCalendar = ()=>{
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen) {
            setStartCalendarOpen(false);
        }
    }

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </Icon>
            <Name onClick={openStartDateCalendar}>Pick up Date</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
            </SmallIcon>
            {isStartCalendarOpen && <DateCalander value={startDate} onChange={setStartDate}/>}
        </ItemContainer>
        <LineSeparator/>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
            </Icon>
            <Name onClick={openReturnDateCalendar}>Return Name</Name>
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/>
            </SmallIcon>
            {isReturnCalendarOpen && (
            <DateCalander
            offset
            value={returnDate}
            onChange={setReturnDate as any}
          />
        )}
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em" ></Marginer>
        <Button text="Book Your Ride" />
    </CardContainer>
}