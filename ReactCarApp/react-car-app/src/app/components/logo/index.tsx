import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import CarLogoImg from "../../../assets/image/car-logo.png";
import CarLogoDarkImg from "../../../assets/image/car-logo-dark.png";

interface ILogoProps{
  color:"white"|"dark",
  bgColor:"white"|"dark"
}


const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
        m-1
    `};

    ${({color}:any)=>(color == "white" ?tw`text-white`: tw`text-black` )}
`;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

 function Logo(props:ILogoProps){
  const{color,bgColor} = props;
    return(
        <LogoContainer>
            <image>
                <img src={bgColor == "white"? CarLogoImg : CarLogoDarkImg} ></img>
            </image>
            <LogoText color={color || "dark"}>Your Car</LogoText>
        </LogoContainer>
    )
}

Logo.defaultProps = {
  color: "dark",
  bgColor:"white"
};

export {Logo}