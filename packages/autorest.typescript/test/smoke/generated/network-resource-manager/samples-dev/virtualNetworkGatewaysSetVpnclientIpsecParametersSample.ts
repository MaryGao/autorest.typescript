/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  VpnClientIPsecParameters,
  NetworkManagementClient,
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.
 *
 * @summary The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/VirtualNetworkGatewaySetVpnClientIpsecParameters.json
 */
async function setVirtualNetworkGatewayVpnClientIpsecParameters() {
  const subscriptionId = process.env["SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["RESOURCE_GROUP"] || "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const vpnclientIpsecParams: VpnClientIPsecParameters = {
    dhGroup: "DHGroup2",
    ikeEncryption: "AES256",
    ikeIntegrity: "SHA384",
    ipsecEncryption: "AES256",
    ipsecIntegrity: "SHA256",
    pfsGroup: "PFS2",
    saDataSizeKilobytes: 429497,
    saLifeTimeSeconds: 86473,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.virtualNetworkGateways.beginSetVpnclientIpsecParametersAndWait(
      resourceGroupName,
      virtualNetworkGatewayName,
      vpnclientIpsecParams,
    );
  console.log(result);
}

async function main() {
  setVirtualNetworkGatewayVpnClientIpsecParameters();
}

main().catch(console.error);
