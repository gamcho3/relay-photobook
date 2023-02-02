import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Next
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Prev
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Prev = styled.div`
  position: absolute;
  left: 10px;
  z-index: 99;
`;

const Next = styled.div`
  position: absolute;
  right: 10px;
  z-index: 99;
`;
export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <StyledSlider {...settings}>
        <img
          alt="hamster"
          src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx78&auto=format&fit=crop&w=1176&q=80"
        />
        <img
          alt="cheetah"
          src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <img
          alt="raccoon"
          src="https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <img
          alt="polarbear"
          src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </StyledSlider>
    );
  }
}

const StyledSlider = styled(Slider)`
  position: relative;
`;
