// @import "styles/variables.scss";
import styled from "styled-components";

export const LayoutStyles = styled.div`
  .parentAuthRoutes {
    width: 100%;
    height: calc(100vh - 67px);
    &Header {
      position: relative;
      height: 64px;
    }
  }

  .authRoutes {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    &Children {
      width: 100%;
      height: 100%;
      padding: 24px 26px 0 26px;
      // background-color: $color-white-6;
    }

    &-sidebar {
      position: relative;
      transition: all 0.5s ease;
    }
    .sidebarCollapsed {
      min-width: 60px;
    }
    .sidebarExpanded {
      min-width: 204px;
    }
  }

  @media (max-width: 1150px) {
    .authRoutes {
      .sidebarCollapsed {
        min-width: 0;
      }
      .sidebarExpanded {
        min-width: 0;
      }
      .sidebarCollapsedPhn {
        .sidebar {
          left: -100%;
          transition: all 0.2s ease;
          &Menu {
            width: 204px !important;
          }
        }
      }
    }
  }
`;
