// @import "styles/variables.scss";

import styled from "styled-components";

export const HeaderStyle = styled.div`
  .header {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 32px 12px 17px;
    background: $color-white-0;
    box-shadow: 0px 4px 8px -2px #0f172a1a;
    width: 100%;
    z-index: 9;

    &Logo {
      .hamburger {
        display: none;
      }
      .companyLogo {
        width: 123px;
        height: 36px;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    &Profile {
      display: flex;
      align-items: flex-start;
      gap: 20px;

      .bell {
        cursor: pointer;
        padding: 8px;
      }

      &Details {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        cursor: pointer;
        position: relative;

        &Menu {
          position: absolute;
          display: flex;
          align-items: flex-start;
          align-items: flex-start;
          flex-direction: column;
          gap: 10px;
          padding: 16px 0;
          top: 50px;
          background-color: $color-white-0;
          box-shadow: 0px 0px 3.847px 0px $color-black-9;
          border-radius: 5px;
          z-index: 999;
          right: 0;

          span {
            padding: 0 20px 8px 20px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: $color-black-5;
            @include font-semi-bold($fs: 1.4rem);
            white-space: nowrap;
          }
        }

        .dpImgContainer {
          height: 32px;
          width: 32px;
          border-radius: 100px;
          overflow: hidden;

          img {
            height: 100%;
            width: 100%;
            object-fit: fill;
          }
        }
      }

      &Name {
        display: flex;
        flex-direction: column;
        gap: 2px;
        span {
          color: $color-black-10;
          @include font-semi-bold($fs: 1.4rem);
          line-height: 130%;
        }
        p {
          color: $color-grey-4;
          @include font-semi-bold($fs: 1.2rem);
          line-height: 120%;
        }
      }
    }
  }

  .headerActionContainer {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .headerActionContainer button {
    border-radius: 4px;
    background: linear-gradient(254deg, #66a9f6 -15.78%, #01247e 102.21%);
    border: none;
    color: #fff;
    font-family: Inter;
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
  }

  .headerNameContainer {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

// media query
// @media (max-width: 1150px) {
//   .header {
//     padding: 16px;
//     &Logo {
//       @include d-flex($jc: space-between);
//       flex-direction: row-reverse;
//       .companyLogo {
//         display: none;
//       }
//       .logoPhn {
//         display: block;
//       }
//       .hamburger {
//         display: block;
//         width: 32px;
//         height: 32px;
//       }
//     }

//     &Profile {
//       gap: 12px;
//       &Details {
//         .headerProfileName {
//           display: none;
//         }
//         .downArrow {
//           display: none;
//         }
//       }
//     }

//     &ProfileDetailsMenu {
//       // left: -75px;
//       width: 116px;
//       span {
//         gap: 6px;
//       }
//     }
//   }
// }
