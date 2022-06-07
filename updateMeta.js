//https://testnets-api.opensea.io/api/v1/asset/0x375df763cd7b87e3ffb8efad812aae088553664c/1/?force_update=true
import fetch from "node-fetch";

const url =
  "https://api.opensea.io/api/v1/asset/0x9712228ceeda1e2ddde52cd5100b88986d1cb49c/";
let startTokenID = 1;
const endTokenID = 5000;

setInterval(async () => {
  if (startTokenID > endTokenID) return;
  try {
    await fetch(url + startTokenID + "/?force_update=true", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie:
          "amplitude_id_ddd6ece4d5ddebbf244a249703c9d662opensea.io=eyJkZXZpY2VJZCI6IjhiNDFhNmI0LTY3NDUtNDVhMS1iMTdhLTI4MzNmYmFhZmRhNlIiLCJ1c2VySWQiOm51bGwsIm9wdE91dCI6ZmFsc2UsInNlc3Npb25JZCI6MTY0MTk5MTk2ODE1NywibGFzdEV2ZW50VGltZSI6MTY0MTk5MzQ3MzkxOCwiZXZlbnRJZCI6MywiaWRlbnRpZnlJZCI6MSwic2VxdWVuY2VOdW1iZXIiOjR9; _gcl_au=1.1.1980046299.1649638918; _gid=GA1.2.1142869459.1654303903; _ga_QN8V4MT4GF=GS1.1.1654529155.5.1.1654529268.0; amp_d28823=2nhnQ-uPMMkEybOx2lSKAR.MHg3MjhhYWE0NjgxNWI4MTA2YjcyZWRkNmU3M2ZlZGYyMjMzZDNlMjlj..1g4spppcu.1g4sq37rn.ql.nj.1i8; __os_session=eyJpZCI6IjRlYzhlM2Y1LTU1ZWYtNGM2OC1hNGMxLTE5N2YyOTZkZDIyZiJ9; __os_session.sig=cGk-kIrcIZWcsqKZxlDXo2_7pHD5saW-EbgeL7GgVr0; ajs_user_id=0xeac458b2f78b8cb37c9471a9a0723b4aa6b4c62d; ajs_anonymous_id=5584d701-de15-48da-bbf3-5d902e0deedd; csrftoken=P7jEAajVMIlNjnSAgleAibNclRzPrGzP63hijSnkwcx1VFrJXp808ULSOM39MNCU; _ga=GA1.2.1868738517.1639312281; _uetsid=cc085520e59411eca6c3232868a24d9d; _uetvid=8032aa30e3a011ecae640fb1dc38d54e; amp_ddd6ec=Ii2WX9uVCIl63JobDA2eTn.MHhlYWM0NThiMmY3OGI4Y2IzN2M5NDcxYTlhMDcyM2I0YWE2YjRjNjJk..1g4tq1sad.1g4tqluej.1fc.19l.2p1; _ga_9VSBF2K4BX=GS1.1.1654562815.150.1.1654563477.0; __cf_bm=BRNExZxiPdwtk2fI_wliLM.VwmBGfsDf4W_y0dIcuyA-1654608316-0-AYb4Rv/CmF6MOuuTkBak0yS8xi1KxqY+RoQRciLqNSyTBjVNyzgbKaseSMfwfkuHmmcWqD8N91mZbgLO4PzSTjI=; sessionid=eyJzZXNzaW9uSWQiOiI0ZWM4ZTNmNS01NWVmLTRjNjgtYTRjMS0xOTdmMjk2ZGQyMmYifQ:1nyZDJ:rgr7zCLDLo1AdGQk71F1T1DY_ye5aAygkletIvlIlQY",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    });
  } catch (error) {
    console.log(error);
    return;
  }

  console.log("Wulfz #" + startTokenID + " complete");
  startTokenID++;
}, 4000);
