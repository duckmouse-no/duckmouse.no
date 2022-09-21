import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { getAccessToken, initiatePayment } from "../../utils/vipps";

export const VippsButton = () => (
  <button
    onClick={async () => {
      const accessToken = await getAccessToken();
      await initiatePayment(accessToken);
    }}
  >
    <StaticImage
      className="w-48"
      src="../../images/vipps-button.png"
      alt="Vipps logo"
    />
  </button>
);
