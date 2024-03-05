import React, { createRef, useState } from "react";
import LayoutCard from "../../LayoutCard";
import ChipCard from "../../ChipCard";
import Note from "../../Note";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./policies.css";

const Policies = () => {
  const splideRef = createRef();
  const [activeSlide, setActiveSlide] = useState(0);

  const tags = [
    { tagName: "Floater", tagType: "info" },
    {
      tagName: "Active",
      tagType: "success",
    },
  ];

  const data = [
    {
      insuranceName: "ICICI Lombard General Insurance Co Ltd.",
      policy_num: "#123445523432423",
      duration: "01 Jan 2023 - 01 Jan 2024",
      area: "India",
      tags,
    },
    {
      insuranceName: "HDFC Life Insurance Co. Ltd.",
      policy_num: "#456445523432423",
      duration: "10 Jan 2023 - 10 Jan 2024",
      area: "India",
      tags,
    },
    {
      insuranceName: "New India Assurance Insurance Co. Ltd.",
      policy_num: "#567644552343242",
      duration: "14 Dec 2023 - 14 Dec 2024",
      area: "India",
      tags,
    },
  ];

  const footer = <div className="homeCardFooter">Explore Area of Coverage</div>;

  const options = {
    omitEnd: true,
    focus: 0,
    gap: "1rem",
    pagination: false,
    perPage: 2,
    perMove: 1,
    autoWidth: true,
    drag: true,
  };

  return (
    <LayoutCard heading="POLICIES" count={3} slider={true}>
      <div className="policySliderContainer">
        <Splide
          onMove={({ index }) => setActiveSlide(index)}
          options={options}
          aria-label="My Favorite Images"
          ref={splideRef}
        >
          <div className="splide__arrows">
            <button
              //   style={{ display: 'none' }}
              className="splide__arrow splide__arrow--prev"
            >
              Prev
            </button>
            <button
              //   style={{ display: 'none' }}
              className="splide__arrow splide__arrow--next"
              onClick={() => setActiveSlide(activeSlide + 1)}
            >
              Next
            </button>
          </div>
          {data.map((item, index) => {
            return (
              <SplideSlide key={`image-${index}`}>
                <ChipCard tags={item.tags} footer={footer}>
                  <div className="homePolicyName">{item.insuranceName}</div>
                  <div className="homePolicyNumber">{item.policy_num}</div>
                  <div className="homePolicyCoverage">
                    <div className="homePolicyDate">
                      <h4>Coverage duration</h4>
                      <p>{item.duration}</p>
                    </div>
                    <div className="homePolicyArea">
                      <h4>Area of coverage</h4>
                      <p>{item.area}</p>
                    </div>
                  </div>
                </ChipCard>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
      <Note type="secondary" text="Want to link another policy?" />
    </LayoutCard>
  );
};

export default Policies;
