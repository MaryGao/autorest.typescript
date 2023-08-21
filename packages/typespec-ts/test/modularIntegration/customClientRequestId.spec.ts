import { RequestIdClient } from "./generated/headers/client-request-id/src/index.js";
import { assert } from "chai";
describe("RequestIdClient Classical Client", () => {
  let client: RequestIdClient;

  beforeEach(() => {
    client = new RequestIdClient({
      allowInsecureConnection: true
    });
  });

  it("should add client-request-id in header transparently", async () => {
    try {
      const result = await client.get();
      assert.isUndefined(result);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });
});
