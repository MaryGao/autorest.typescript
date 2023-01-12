import { assert } from "chai";
import EnumsFixedClientFactory, {
  EnumsFixedClient
} from "./generated/enums/fixed/src/index.js";
describe("FixedEnums Rest Client", () => {
  let client: EnumsFixedClient;

  beforeEach(() => {
    client = EnumsFixedClientFactory({ allowInsecureConnection: true });
  });

  it("should get known value", async () => {
    try {
      const result = await client.path("/enums/fixed/string/known-value").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should put known value", async () => {
    try {
      const result = await client.path("/enums/fixed/string/known-value").put({
        body: "Monday",
        contentType: "application/json"
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should put unknown value and receives 500", async () => {
    try {
      const result = await client
        .path("/enums/fixed/string/unknown-value")
        .put({
          body: "Weekend" as any,
          contentType: "application/json"
        });
      assert.strictEqual(result.status, "500");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
