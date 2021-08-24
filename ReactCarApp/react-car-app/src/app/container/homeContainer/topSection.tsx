import  React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import {Button} from "../../components/button";

import MaclraneImage from "../../../assets/image/mclaren-orange-big.png"
import BlobImg from "../../../assets/image/blob.svg";
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
    min-height: 350px;
    margin-top: 2em;
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        justify-between
        pl-3
        pr-2
        lg:pl-12
        lg:pr-12
    `};
` ;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col

    `};
`

const RightContainer = styled.div`
    ${tw`
        w-0.5
        flex
        flex-col
        relative
        mt-20       
    `};
`

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-3xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
    text-gray-800
    `}
`



const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 20em;
    right: -5em;
    top: -20em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }

`;

const StandAloneCar = styled.div`
width: auto;
height: 10em;
right: -6em;
top: -5em;
position: absolute;
img {
  width: auto;
  height: 100%;
  max-width: fit-content;
}
@media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 18em;
    right: -6em;
    top: -8em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  margin-top: 0.25em;
`


export function TopSection(){
    return (
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Rent the Best Quality of Car with US</Slogan>
                <Description>
                    Always choose the best car from our local stores or order it remotely
                    at the best price for you and get the best quality cars for as long as
                    you like
                </Description>
                <ButtonContainer>
                  <Button theme="outlined" text="Book Your Ride" />
                  <Button theme="filled" text="Sell Your Car" />
                </ButtonContainer>              
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg}></img>
                </BlobContainer>
                <StandAloneCar>
                    <img src={MaclraneImage}></img>
                </StandAloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}