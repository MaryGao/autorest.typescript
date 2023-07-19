import { assert } from "chai";
import ClientRequestIdClientFactory, {
  ClientRequestIdClient
} from "./generated/headers/clientRequestId/src/index.js";
describe.only("ClientRequestIdClient", () => {
  let client: ClientRequestIdClient;

  beforeEach(() => {
    client = ClientRequestIdClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should set client-request-id headers correctly", async () => {
    try {
      const result = await client
        .path("/special-headers/client-request-id")
        .get();
      assert.isNotNull(result.request.headers.get("client-request-id"));
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should override client-request-id headers correctly", async () => {
    try {
      const overrideReqId = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
      const result = await client
        .path("/special-headers/client-request-id")
        .get({
          headers: {
            "client-request-id": overrideReqId
          }
        });
      assert.strictEqual(
        result.request.headers.get("client-request-id"),
        overrideReqId
      );
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
