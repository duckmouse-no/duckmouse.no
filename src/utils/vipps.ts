const ACCESS_TOKEN_URL = "https://apitest.vipps.no/accesstoken/get";
const INITIATE_PAYMENT_URL = "https://apitest.vipps.no/ecomm/v2/payments/";
const TRANSACTION_TEXT = "Håper du får en fin dag! 🌸";
const PRICE = 30000;

const requestHeaders = new Headers();
requestHeaders.append("Content-Type", "application/json");
requestHeaders.append(
  "client_id",
  process.env.VIPPS_CLIENT_ID ? process.env.VIPPS_CLIENT_ID : ""
);
requestHeaders.append(
  "client_secret",
  process.env.VIPPS_CLIENT_SECRET ? process.env.VIPPS_CLIENT_SECRET : ""
);
requestHeaders.append(
  "Ocp-Apim-Subscription-Key",
  process.env.VIPPS_SUBSCRIPTION_KEY ? process.env.VIPPS_SUBSCRIPTION_KEY : ""
);
requestHeaders.append(
  "vipps_system_name",
  process.env.VIPPS_SYSTEM_NAME ? process.env.VIPPS_SYSTEM_NAME : ""
);
requestHeaders.append(
  "vipps_system_version",
  process.env.VIPPS_SYSTEM_VERSION ? process.env.VIPPS_SYSTEM_VERSION : ""
);
requestHeaders.append(
  "vipps_plugin_name",
  process.env.VIPPS_PLUGIN_NAME ? process.env.VIPPS_PLUGIN_NAME : ""
);
requestHeaders.append(
  "vipps_system_plugin_version",
  process.env.VIPPS_SYSTEM_PLUGIN_VERSION
    ? process.env.VIPPS_SYSTEM_PLUGIN_VERSION
    : ""
);
requestHeaders.append(
  "merchantSerialNumber",
  process.env.VIPPS_MERCHANT_SERIAL_NUMBER
    ? process.env.VIPPS_MERCHANT_SERIAL_NUMBER
    : ""
);
requestHeaders.append(
  "fallback",
  process.env.VIPPS_FALLBACK ? process.env.VIPPS_FALLBACK : ""
);

export const getAccessToken = async () => {
  const response = await fetch(ACCESS_TOKEN_URL, {
    method: "POST",
    headers: requestHeaders,
  });
  const { access_token } = await response.json();
  return access_token;
};

export const initiatePayment = async (accessToken) => {
  requestHeaders.append("Authorization", `Bearer ${accessToken}`);
  const response = await fetch(INITIATE_PAYMENT_URL, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify({
      merchantInfo: {
        authToken: accessToken,
        callbackPrefix: process.env.VIPPS_CALLBACK_PREFIX,
        consentRemovalPrefix: process.env.VIPPS_CONSENT_REMOVAL_PREFIX,
        fallBack: process.env.VIPPS_FALLBACK,
        isApp: false,
        merchantSerialNumber: process.env.VIPPS_MERCHANT_SERIAL_NUMBER,
        paymentType: "eComm Express Payment",
        shippingDetailsPrefix: "Frakt",
        staticShippingDetails: [
          {
            isDefault: "Y",
            priority: 1,
            shippingCost: 50,
            shippingMethod: "Posten",
            shippingMethodId: "shippingMethod1",
          },
          {
            isDefault: "N",
            priority: 2,
            shippingCost: 0,
            shippingMethod: "Hent i Trondheim",
            shippingMethodId: "shippingMethod2",
          },
        ],
      },
      customerInfo: {
        mobileNumber: "96333911",
      },
      transaction: {
        amount: PRICE,
        orderId: new Date().getTime().toString(),
        transactionText: TRANSACTION_TEXT,
      },
    }),
  });
  const { url } = await response.json();

  if (url) {
    window.location.replace(url);
  }
};