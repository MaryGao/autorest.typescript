// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import createAnomalyDetectorRestClient, {
  DetectChangePointParameters
} from "@msinternal/anomaly-detector-rest";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Evaluate change point score of every series point
 *
 * @summary Evaluate change point score of every series point
 * x-ms-original-file: specification/cognitiveservices/data-plane/AnomalyDetector/stable/v1.1/examples/ChangePointDetect.json
 */
async function detectChangePointExample() {
  const Endpoint = "{Endpoint}";
  const ApiVersion = "v1.1";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorRestClient(
    Endpoint,
    ApiVersion,
    credential
  );
  const options: DetectChangePointParameters = {
    body: {
      customInterval: 5,
      granularity: "minutely",
      period: 0,
      series: [
        { timestamp: new Date("2017-01-01T06:45:00Z"), value: 1639196 },
        { timestamp: new Date("2017-01-01T06:50:00Z"), value: 1639290 },
        { timestamp: new Date("2017-01-01T06:55:00Z"), value: 1667293 },
        { timestamp: new Date("2017-01-01T07:00:00Z"), value: 1703130 },
        { timestamp: new Date("2017-01-01T07:05:00Z"), value: 1650912 },
        { timestamp: new Date("2017-01-01T07:10:00Z"), value: 1653596 },
        { timestamp: new Date("2017-01-01T07:15:00Z"), value: 1653793 },
        { timestamp: new Date("2017-01-01T07:20:00Z"), value: 1653795 },
        { timestamp: new Date("2017-01-01T07:25:00Z"), value: 1663471 },
        { timestamp: new Date("2017-01-01T07:30:00Z"), value: 1662358 },
        { timestamp: new Date("2017-01-01T07:35:00Z"), value: 1664320 },
        { timestamp: new Date("2017-01-01T07:40:00Z"), value: 1664942 },
        { timestamp: new Date("2017-01-01T07:45:00Z"), value: 1664966 },
        { timestamp: new Date("2017-01-01T07:50:00Z"), value: 1724271 },
        { timestamp: new Date("2017-01-01T07:55:00Z"), value: 1678720 },
        { timestamp: new Date("2017-01-01T08:00:00Z"), value: 1672536 },
        { timestamp: new Date("2017-01-01T08:05:00Z"), value: 1672544 },
        { timestamp: new Date("2017-01-01T08:10:00Z"), value: 1672364 },
        { timestamp: new Date("2017-01-01T08:15:00Z"), value: 1672912 },
        { timestamp: new Date("2017-01-01T08:20:00Z"), value: 1672736 },
        { timestamp: new Date("2017-01-01T08:25:00Z"), value: 1672725 },
        { timestamp: new Date("2017-01-01T08:30:00Z"), value: 1673247 },
        { timestamp: new Date("2017-01-01T08:35:00Z"), value: 1673109 },
        { timestamp: new Date("2017-01-01T08:40:00Z"), value: 1690088 },
        { timestamp: new Date("2017-01-01T08:45:00Z"), value: 1703865 },
        { timestamp: new Date("2017-01-01T08:50:00Z"), value: 1703865 },
        { timestamp: new Date("2017-01-01T08:55:00Z"), value: 1786581 },
        { timestamp: new Date("2017-01-01T09:00:00Z"), value: 1800945 },
        { timestamp: new Date("2017-01-01T09:05:00Z"), value: 1800957 },
        { timestamp: new Date("2017-01-01T09:10:00Z"), value: 1801191 },
        { timestamp: new Date("2017-01-01T09:15:00Z"), value: 1801412 },
        { timestamp: new Date("2017-01-01T09:20:00Z"), value: 1801621 },
        { timestamp: new Date("2017-01-01T09:25:00Z"), value: 1801621 },
        { timestamp: new Date("2017-01-01T09:30:00Z"), value: 1801654 },
        { timestamp: new Date("2017-01-01T09:35:00Z"), value: 1802105 },
        { timestamp: new Date("2017-01-01T09:40:00Z"), value: 1801800 },
        { timestamp: new Date("2017-01-01T09:45:00Z"), value: 1803040 },
        { timestamp: new Date("2017-01-01T09:50:00Z"), value: 1803672 },
        { timestamp: new Date("2017-01-01T09:55:00Z"), value: 1803535 },
        { timestamp: new Date("2017-01-01T10:00:00Z"), value: 1803541 },
        { timestamp: new Date("2017-01-01T10:05:00Z"), value: 1803545 },
        { timestamp: new Date("2017-01-01T10:10:00Z"), value: 1803599 },
        { timestamp: new Date("2017-01-01T10:15:00Z"), value: 1803616 },
        { timestamp: new Date("2017-01-01T10:20:00Z"), value: 1803619 },
        { timestamp: new Date("2017-01-01T10:25:00Z"), value: 1809942 },
        { timestamp: new Date("2017-01-01T10:30:00Z"), value: 1802720 },
        { timestamp: new Date("2017-01-01T10:35:00Z"), value: 1802720 },
        { timestamp: new Date("2017-01-01T10:40:00Z"), value: 1802888 },
        { timestamp: new Date("2017-01-01T10:45:00Z"), value: 1809574 },
        { timestamp: new Date("2017-01-01T10:50:00Z"), value: 1803896 },
        { timestamp: new Date("2017-01-01T10:55:00Z"), value: 1803850 },
        { timestamp: new Date("2017-01-01T11:00:00Z"), value: 1803854 },
        { timestamp: new Date("2017-01-01T11:05:00Z"), value: 1803854 },
        { timestamp: new Date("2017-01-01T11:10:00Z"), value: 1803797 },
        { timestamp: new Date("2017-01-01T11:15:00Z"), value: 1803921 },
        { timestamp: new Date("2017-01-01T11:20:00Z"), value: 1803933 },
        { timestamp: new Date("2017-01-01T11:25:00Z"), value: 1804040 },
        { timestamp: new Date("2017-01-01T11:30:00Z"), value: 1804044 },
        { timestamp: new Date("2017-01-01T11:35:00Z"), value: 1804070 },
        { timestamp: new Date("2017-01-01T11:40:00Z"), value: 1804070 },
        { timestamp: new Date("2017-01-01T11:45:00Z"), value: 1804068 },
        { timestamp: new Date("2017-01-01T11:50:00Z"), value: 1804073 },
        { timestamp: new Date("2017-01-01T11:55:00Z"), value: 1804101 },
        { timestamp: new Date("2017-01-01T12:00:00Z"), value: 1804674 },
        { timestamp: new Date("2017-01-01T12:05:00Z"), value: 1804714 },
        { timestamp: new Date("2017-01-01T12:10:00Z"), value: 1804730 },
        { timestamp: new Date("2017-01-01T12:15:00Z"), value: 1804816 },
        { timestamp: new Date("2017-01-01T12:20:00Z"), value: 1803996 },
        { timestamp: new Date("2017-01-01T12:25:00Z"), value: 1803998 },
        { timestamp: new Date("2017-01-01T12:30:00Z"), value: 1804015 },
        { timestamp: new Date("2017-01-01T12:35:00Z"), value: 1804047 },
        { timestamp: new Date("2017-01-01T12:40:00Z"), value: 1804050 },
        { timestamp: new Date("2017-01-01T12:45:00Z"), value: 1804218 },
        { timestamp: new Date("2017-01-01T12:50:00Z"), value: 1804217 },
        { timestamp: new Date("2017-01-01T12:55:00Z"), value: 1804217 },
        { timestamp: new Date("2017-01-01T13:00:00Z"), value: 1804205 },
        { timestamp: new Date("2017-01-01T13:05:00Z"), value: 1804728 },
        { timestamp: new Date("2017-01-01T13:10:00Z"), value: 1804748 },
        { timestamp: new Date("2017-01-01T13:15:00Z"), value: 1805232 },
        { timestamp: new Date("2017-01-01T13:20:00Z"), value: 1814121 },
        { timestamp: new Date("2017-01-01T13:25:00Z"), value: 1806789 },
        { timestamp: new Date("2017-01-01T13:30:00Z"), value: 1806119 },
        { timestamp: new Date("2017-01-01T13:35:00Z"), value: 1806329 },
        { timestamp: new Date("2017-01-01T13:40:00Z"), value: 1806454 },
        { timestamp: new Date("2017-01-01T13:45:00Z"), value: 1806852 },
        { timestamp: new Date("2017-01-01T13:50:00Z"), value: 1807347 },
        { timestamp: new Date("2017-01-01T13:55:00Z"), value: 1812144 },
        { timestamp: new Date("2017-01-01T14:00:00Z"), value: 1807418 },
        { timestamp: new Date("2017-01-01T14:05:00Z"), value: 1807418 },
        { timestamp: new Date("2017-01-01T14:10:00Z"), value: 1807432 },
        { timestamp: new Date("2017-01-01T14:15:00Z"), value: 1808540 },
        { timestamp: new Date("2017-01-01T14:20:00Z"), value: 1808541 },
        { timestamp: new Date("2017-01-01T14:25:00Z"), value: 1807831 },
        { timestamp: new Date("2017-01-01T14:30:00Z"), value: 1807852 },
        { timestamp: new Date("2017-01-01T14:35:00Z"), value: 1807811 },
        { timestamp: new Date("2017-01-01T14:40:00Z"), value: 2214285 },
        { timestamp: new Date("2017-01-01T14:45:00Z"), value: 2215019 },
        { timestamp: new Date("2017-01-01T14:50:00Z"), value: 2215329 },
        { timestamp: new Date("2017-01-01T14:55:00Z"), value: 2215097 },
        { timestamp: new Date("2017-01-01T15:00:00Z"), value: 2215129 },
        { timestamp: new Date("2017-01-01T15:05:00Z"), value: 2215120 },
        { timestamp: new Date("2017-01-01T15:10:00Z"), value: 2217056 },
        { timestamp: new Date("2017-01-01T15:15:00Z"), value: 2217056 },
        { timestamp: new Date("2017-01-01T15:20:00Z"), value: 2222126 },
        { timestamp: new Date("2017-01-01T15:25:00Z"), value: 2226472 },
        { timestamp: new Date("2017-01-01T15:30:00Z"), value: 2226722 },
        { timestamp: new Date("2017-01-01T15:35:00Z"), value: 2226729 },
        { timestamp: new Date("2017-01-01T15:40:00Z"), value: 2226735 },
        { timestamp: new Date("2017-01-01T15:45:00Z"), value: 2226735 },
        { timestamp: new Date("2017-01-01T15:50:00Z"), value: 2226735 },
        { timestamp: new Date("2017-01-01T15:55:00Z"), value: 2226952 },
        { timestamp: new Date("2017-01-01T16:00:00Z"), value: 2226962 },
        { timestamp: new Date("2017-01-01T16:05:00Z"), value: 2649337 },
        { timestamp: new Date("2017-01-01T16:10:00Z"), value: 2092796 },
        { timestamp: new Date("2017-01-01T16:15:00Z"), value: 2092839 },
        { timestamp: new Date("2017-01-01T16:20:00Z"), value: 2092940 },
        { timestamp: new Date("2017-01-01T16:25:00Z"), value: 2092940 },
        { timestamp: new Date("2017-01-01T16:30:00Z"), value: 2092965 },
        { timestamp: new Date("2017-01-01T16:35:00Z"), value: 2092979 },
        { timestamp: new Date("2017-01-01T16:40:00Z"), value: 2095588 },
        { timestamp: new Date("2017-01-01T16:45:00Z"), value: 2099586 },
        { timestamp: new Date("2017-01-01T16:50:00Z"), value: 2102981 },
        { timestamp: new Date("2017-01-01T16:55:00Z"), value: 2108053 },
        { timestamp: new Date("2017-01-01T17:00:00Z"), value: 2107907 },
        { timestamp: new Date("2017-01-01T17:05:00Z"), value: 2108241 },
        { timestamp: new Date("2017-01-01T17:10:00Z"), value: 2100321 },
        { timestamp: new Date("2017-01-01T17:15:00Z"), value: 2100448 },
        { timestamp: new Date("2017-01-01T17:20:00Z"), value: 2100483 },
        { timestamp: new Date("2017-01-01T17:25:00Z"), value: 2103042 },
        { timestamp: new Date("2017-01-01T17:30:00Z"), value: 2103037 },
        { timestamp: new Date("2017-01-01T17:35:00Z"), value: 2103040 },
        { timestamp: new Date("2017-01-01T17:40:00Z"), value: 2103054 },
        { timestamp: new Date("2017-01-01T17:45:00Z"), value: 2103058 },
        { timestamp: new Date("2017-01-01T17:50:00Z"), value: 1830757 },
        { timestamp: new Date("2017-01-01T17:55:00Z"), value: 1830855 },
        { timestamp: new Date("2017-01-01T18:00:00Z"), value: 1831495 },
        { timestamp: new Date("2017-01-01T18:05:00Z"), value: 1831463 },
        { timestamp: new Date("2017-01-01T18:10:00Z"), value: 1831963 },
        { timestamp: new Date("2017-01-01T18:15:00Z"), value: 1832046 },
        { timestamp: new Date("2017-01-01T18:20:00Z"), value: 1832070 },
        { timestamp: new Date("2017-01-01T18:25:00Z"), value: 1835511 },
        { timestamp: new Date("2017-01-01T18:30:00Z"), value: 1835265 },
        { timestamp: new Date("2017-01-01T18:35:00Z"), value: 1835481 },
        { timestamp: new Date("2017-01-01T18:40:00Z"), value: 1835578 },
        { timestamp: new Date("2017-01-01T18:45:00Z"), value: 1835611 },
        { timestamp: new Date("2017-01-01T18:50:00Z"), value: 1836314 },
        { timestamp: new Date("2017-01-01T18:55:00Z"), value: 1836369 },
        { timestamp: new Date("2017-01-01T19:00:00Z"), value: 1837280 },
        { timestamp: new Date("2017-01-01T19:05:00Z"), value: 1842939 },
        { timestamp: new Date("2017-01-01T19:10:00Z"), value: 1843126 },
        { timestamp: new Date("2017-01-01T19:15:00Z"), value: 1845840 },
        { timestamp: new Date("2017-01-01T19:20:00Z"), value: 1842444 },
        { timestamp: new Date("2017-01-01T19:25:00Z"), value: 1839891 },
        { timestamp: new Date("2017-01-01T19:30:00Z"), value: 1839875 },
        { timestamp: new Date("2017-01-01T19:35:00Z"), value: 1839870 },
        { timestamp: new Date("2017-01-01T19:40:00Z"), value: 1840090 },
        { timestamp: new Date("2017-01-01T19:45:00Z"), value: 1840479 },
        { timestamp: new Date("2017-01-01T19:50:00Z"), value: 1840479 },
        { timestamp: new Date("2017-01-01T19:55:00Z"), value: 1840482 },
        { timestamp: new Date("2017-01-01T20:00:00Z"), value: 1841522 },
        { timestamp: new Date("2017-01-01T20:05:00Z"), value: 1841836 },
        { timestamp: new Date("2017-01-01T20:10:00Z"), value: 1842377 },
        { timestamp: new Date("2017-01-01T20:15:00Z"), value: 1842388 },
        { timestamp: new Date("2017-01-01T20:20:00Z"), value: 1842489 },
        { timestamp: new Date("2017-01-01T20:25:00Z"), value: 1842489 },
        { timestamp: new Date("2017-01-01T20:30:00Z"), value: 1842489 },
        { timestamp: new Date("2017-01-01T20:35:00Z"), value: 1842496 },
        { timestamp: new Date("2017-01-01T20:40:00Z"), value: 1842689 },
        { timestamp: new Date("2017-01-01T20:45:00Z"), value: 1843117 },
        { timestamp: new Date("2017-01-01T20:50:00Z"), value: 1843116 },
        { timestamp: new Date("2017-01-01T20:55:00Z"), value: 1843227 },
        { timestamp: new Date("2017-01-01T21:00:00Z"), value: 1843138 },
        { timestamp: new Date("2017-01-01T21:05:00Z"), value: 1843141 },
        { timestamp: new Date("2017-01-01T21:10:00Z"), value: 1843310 },
        { timestamp: new Date("2017-01-01T21:15:00Z"), value: 1843310 },
        { timestamp: new Date("2017-01-01T21:20:00Z"), value: 1843507 },
        { timestamp: new Date("2017-01-01T21:25:00Z"), value: 1843953 },
        { timestamp: new Date("2017-01-01T21:30:00Z"), value: 1844778 },
        { timestamp: new Date("2017-01-01T21:35:00Z"), value: 1843918 },
        { timestamp: new Date("2017-01-01T21:40:00Z"), value: 1882692 },
        { timestamp: new Date("2017-01-01T21:45:00Z"), value: 1974888 },
        { timestamp: new Date("2017-01-01T21:50:00Z"), value: 2157136 },
        { timestamp: new Date("2017-01-01T21:55:00Z"), value: 2154987 },
        { timestamp: new Date("2017-01-01T22:00:00Z"), value: 2155664 },
        { timestamp: new Date("2017-01-01T22:05:00Z"), value: 2155660 },
        { timestamp: new Date("2017-01-01T22:10:00Z"), value: 2155824 },
        { timestamp: new Date("2017-01-01T22:15:00Z"), value: 2155824 },
        { timestamp: new Date("2017-01-01T22:20:00Z"), value: 2156329 },
        { timestamp: new Date("2017-01-01T22:25:00Z"), value: 2156479 },
        { timestamp: new Date("2017-01-01T22:30:00Z"), value: 2165269 },
        { timestamp: new Date("2017-01-01T22:35:00Z"), value: 2165433 },
        { timestamp: new Date("2017-01-01T22:40:00Z"), value: 2165739 },
        { timestamp: new Date("2017-01-01T22:45:00Z"), value: 2165931 },
        { timestamp: new Date("2017-01-01T22:50:00Z"), value: 2165928 },
        { timestamp: new Date("2017-01-01T22:55:00Z"), value: 2165989 },
        { timestamp: new Date("2017-01-01T23:00:00Z"), value: 2228961 },
        { timestamp: new Date("2017-01-01T23:05:00Z"), value: 2228961 },
        { timestamp: new Date("2017-01-01T23:10:00Z"), value: 2228961 },
        { timestamp: new Date("2017-01-01T23:15:00Z"), value: 2485802 },
        { timestamp: new Date("2017-01-01T23:20:00Z"), value: 2485802 },
        { timestamp: new Date("2017-01-01T23:25:00Z"), value: 2486021 },
        { timestamp: new Date("2017-01-01T23:30:00Z"), value: 2485293 },
        { timestamp: new Date("2017-01-01T23:35:00Z"), value: 2485293 },
        { timestamp: new Date("2017-01-01T23:40:00Z"), value: 2485324 },
        { timestamp: new Date("2017-01-01T23:45:00Z"), value: 2489142 },
        { timestamp: new Date("2017-01-01T23:50:00Z"), value: 2526312 },
        { timestamp: new Date("2017-01-01T23:55:00Z"), value: 2526313 },
        { timestamp: new Date("2017-01-02T00:00:00Z"), value: 2526314 },
        { timestamp: new Date("2017-01-02T00:05:00Z"), value: 2526324 },
        { timestamp: new Date("2017-01-02T00:10:00Z"), value: 2526325 },
        { timestamp: new Date("2017-01-02T00:15:00Z"), value: 2526205 },
        { timestamp: new Date("2017-01-02T00:20:00Z"), value: 2526226 },
        { timestamp: new Date("2017-01-02T00:25:00Z"), value: 2526475 },
        { timestamp: new Date("2017-01-02T00:30:00Z"), value: 2526471 },
        { timestamp: new Date("2017-01-02T00:35:00Z"), value: 2526471 },
        { timestamp: new Date("2017-01-02T00:40:00Z"), value: 2526534 },
        { timestamp: new Date("2017-01-02T00:45:00Z"), value: 2526646 },
        { timestamp: new Date("2017-01-02T00:50:00Z"), value: 2526646 },
        { timestamp: new Date("2017-01-02T00:55:00Z"), value: 2526648 },
        { timestamp: new Date("2017-01-02T01:00:00Z"), value: 2526658 },
        { timestamp: new Date("2017-01-02T01:05:00Z"), value: 2526771 },
        { timestamp: new Date("2017-01-02T01:10:00Z"), value: 2526773 },
        { timestamp: new Date("2017-01-02T01:15:00Z"), value: 2526793 },
        { timestamp: new Date("2017-01-02T01:20:00Z"), value: 2527010 },
        { timestamp: new Date("2017-01-02T01:25:00Z"), value: 2527031 },
        { timestamp: new Date("2017-01-02T01:30:00Z"), value: 3178096 },
        { timestamp: new Date("2017-01-02T01:35:00Z"), value: 3196305 },
        { timestamp: new Date("2017-01-02T01:40:00Z"), value: 3196202 },
        { timestamp: new Date("2017-01-02T01:45:00Z"), value: 3196202 },
        { timestamp: new Date("2017-01-02T01:50:00Z"), value: 3196205 },
        { timestamp: new Date("2017-01-02T01:55:00Z"), value: 3229232 },
        { timestamp: new Date("2017-01-02T02:00:00Z"), value: 3230463 },
        { timestamp: new Date("2017-01-02T02:05:00Z"), value: 3230468 },
        { timestamp: new Date("2017-01-02T02:10:00Z"), value: 3230468 },
        { timestamp: new Date("2017-01-02T02:15:00Z"), value: 3230468 },
        { timestamp: new Date("2017-01-02T02:20:00Z"), value: 3230470 },
        { timestamp: new Date("2017-01-02T02:25:00Z"), value: 3230467 },
        { timestamp: new Date("2017-01-02T02:30:00Z"), value: 3230506 },
        { timestamp: new Date("2017-01-02T02:35:00Z"), value: 3231536 },
        { timestamp: new Date("2017-01-02T02:40:00Z"), value: 3230723 },
        { timestamp: new Date("2017-01-02T02:45:00Z"), value: 3230727 },
        { timestamp: new Date("2017-01-02T02:50:00Z"), value: 3230727 },
        { timestamp: new Date("2017-01-02T02:55:00Z"), value: 3230727 },
        { timestamp: new Date("2017-01-02T03:00:00Z"), value: 3231880 },
        { timestamp: new Date("2017-01-02T03:05:00Z"), value: 3232283 },
        { timestamp: new Date("2017-01-02T03:10:00Z"), value: 3232283 },
        { timestamp: new Date("2017-01-02T03:15:00Z"), value: 3232283 },
        { timestamp: new Date("2017-01-02T03:20:00Z"), value: 3232325 },
        { timestamp: new Date("2017-01-02T03:25:00Z"), value: 3232323 },
        { timestamp: new Date("2017-01-02T03:30:00Z"), value: 3232327 },
        { timestamp: new Date("2017-01-02T03:35:00Z"), value: 3232340 },
        { timestamp: new Date("2017-01-02T03:40:00Z"), value: 3232713 },
        { timestamp: new Date("2017-01-02T03:45:00Z"), value: 3232729 },
        { timestamp: new Date("2017-01-02T03:50:00Z"), value: 3232756 },
        { timestamp: new Date("2017-01-02T03:55:00Z"), value: 3233500 },
        { timestamp: new Date("2017-01-02T04:00:00Z"), value: 3233500 },
        { timestamp: new Date("2017-01-02T04:05:00Z"), value: 3233500 }
      ],
      stableTrendWindow: 10,
      threshold: 0.99
    },
    headers: { "Content-Type": "application/json" }
  };
  const result = await client
    .path("/timeseries/changepoint/detect")
    .post(options);
  console.log(result);
}

detectChangePointExample().catch(console.error);
