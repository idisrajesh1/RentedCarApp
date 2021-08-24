import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard.tsx";
import { Marginer } from "../../components/marginer";
import {Navbar} from "../../components/navbar"
import { TopSection } from "./topSection";
import {BookingSteps} from "./bookingSteps"
import {AboutUs} from "./aboutUs"
import { TopCars } from "./topCars";
import { Footer } from "../../components/footer";

const HomeContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
         overflow-x-hidden
    `};
`;


export function HomePage(){
    return(
        <HomeContainer>
            <Navbar></Navbar>
            <TopSection></TopSection>
            <Marginer direction="vertical" margin="-15em"/>
            <BookCard/>
            <BookingSteps/>
            <AboutUs/>
            <Marginer direction="vertical" margin="5em"/>
            <TopCars/>
            <Footer/>
        </HomeContainer>
    )
}