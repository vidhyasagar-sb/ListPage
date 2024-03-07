import React, { useState, useEffect } from "react";
import {
  FooterBg,
  NavAccount,
  NavAction,
  NavClaims,
  NavHome,
  NavPolicies,
} from "../../styles/icons/icons.tsx";
import { useLocation } from "react-router-dom";

const FooterNav = (props) => {
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="absolute bottom-[-1px] left-0 right-0 max-w-[650px] m-auto w-full h-[90px]">
        <FooterBg
          style={{ filter: "drop-shadow(0px -4px 3px rgba(15, 23, 42, 0.06))" }}
          className="max-w-[650px] w-full h-[90px] m-auto"
        />
      </div>

      <div className="relative flex items-center justify-between bottom-0 pb-5">
        <button className="flex-grow-0 flex-shrink-0 w-1/5 self-end">
          <div className="flex flex-col items-center gap-1">
            <NavHome className="h-auto" style={{ minWidth: "24px" }} />
            <p
              className={`text-sm text-center mb-0 ${
                pathname === "/"
                  ? "font-bold text-[#1E293B]"
                  : "font-normal text-[#64748B]"
              }`}
            >
              Home
            </p>
          </div>
        </button>

        <button className="flex-grow-0 flex-shrink-0 w-1/5 self-end">
          <div className="flex flex-col items-center gap-1">
            <NavClaims className="h-auto" style={{ minWidth: "24px" }} />
            <p className="text-[#64748B] text-sm text-center font-normal mb-0">
              Claims
            </p>
          </div>
        </button>

        <div>
          <button className="w-full text-center">
            <NavAction
              className="h-auto mb-6 mx-auto"
              style={{ minWidth: "52px" }}
            />
            <p className="text-[#64748B] text-sm text-center font-normal mb-0">
              Actions
            </p>
          </button>
        </div>

        <button className="flex-grow-0 flex-shrink-0 w-1/5 self-end">
          <div className="flex flex-col items-center gap-1">
            <NavPolicies className="h-auto" style={{ minWidth: "24px" }} />
            <p className="text-[#64748B] text-sm text-center font-normal mb-0">
              Policies
            </p>
          </div>
        </button>

        <button className="flex-grow-0 flex-shrink-0 w-1/5 self-end">
          <div className="flex flex-col items-center gap-1">
            <NavAccount className="h-auto" style={{ minWidth: "24px" }} />
            <p className="text-[#64748B] text-sm text-center font-normal mb-0">
              Account
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FooterNav;
