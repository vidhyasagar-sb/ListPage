import React, { createRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// components
import ProfileCard from "../ProfileCard";

// style
// import '../SplideComponents/splide.css';
import "./ProfileSplideComponents.css";
import PreviousButton from "../../assets/icon/PreviousButton";
import NextButton from "../../assets/icon/NextButton";
import LayoutCard from "../LayoutCard";

import { Button } from "@vidhyasagar-r/sb-library";

import Note from "../Note";
import BottomModal from "../BottomModal";

const ProfileSplideComponents = () => {
  const splideRef = createRef();
  const [showModal, setShowModal] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);

  const profile = [
    { name: "Ashishlal", verified: true },
    { name: "Naveen", verified: true },
    { name: "vidhyasagar", verified: true },
    { name: "Kumar", verified: true },
    { name: "Arvindh", verified: true },
    { name: "Jack bark", verified: true },
    { name: "Raghavan", verified: true },
    { name: "Anbuchelvan", verified: true },
  ];

  const options = {
    pagination: false,
    perPage: 4,
  };

  return (
    <>
      <LayoutCard heading="MEMBERS">
        <div className="profileSplideCompnents">
          <div className="profileContainer">
            <p className="profileTitle">Your shield members</p>
            <span className="profileLength">{profile?.length}</span>
          </div>
          <div className="memberSplideContainer">
            <Splide
              onMove={({ index }) => setActiveSlide(index)}
              options={options}
              aria-label="profiles"
              ref={splideRef}
            >
              <div className="splide__arrows">
                <button
                  style={{ display: "none" }}
                  className="splide__arrow splide__arrow--prev"
                >
                  Prev
                </button>
                <button
                  style={{ display: "none" }}
                  className="splide__arrow splide__arrow--next"
                >
                  Next
                </button>
              </div>
              {profile.map((item, index) => (
                <SplideSlide key={`image-${index}`}>
                  <ProfileCard
                    name={item?.name}
                    verified={item?.verified}
                    showName={true}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>

          <div style={{ textAlign: "center" }}>
            <Button
              btnTheme="filled"
              className="leading-sm radius-sm"
              onClick={() => setShowModal(true)}
            >
              Download E-Card
            </Button>
          </div>

          {profile?.length > 1 && (
            <div className="splideButton">
              <PreviousButton
                style={{
                  stroke: activeSlide === 0 ? "#CBD5E1" : "#94A3B8",
                }}
                onClick={() => splideRef?.current?.splide?.go(activeSlide - 1)}
              />

              <NextButton
                style={{
                  stroke:
                    activeSlide === profile?.length - 4 ? "#CBD5E1" : "#94A3B8",
                }}
                onClick={() => splideRef?.current?.splide.go(activeSlide + 1)}
              />
            </div>
          )}
        </div>
        <Note text="Want to update member details?" />
      </LayoutCard>

      <BottomModal
        isVisible={showModal}
        toggleBottomModal={() => setShowModal(false)}
      >
        <div>
          <div>Download E-card</div>
          <p>Select a member to download single e-card </p>
          <div>Member</div>
          <label htmlFor="">
            Download all e-Cards <input type="checkbox" />
          </label>
        </div>
      </BottomModal>
    </>
  );
};

export default ProfileSplideComponents;
