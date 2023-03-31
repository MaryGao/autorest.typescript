import SpreadClientFactory, {
  SpreadClient
} from "./generated/spread/src/index.js";
import { assert } from "chai";
describe.only("SpreadClient Rest Client", () => {
  let client: SpreadClient;

  beforeEach(() => {
    client = SpreadClientFactory({ allowInsecureConnection: true });
  });

  it("should post input simple number union", async () => {
    try {
      const result = await client.path("/spread/model/request-body").put({
        body: {
          name: "foo"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post simple number array union", async () => {
    try {
      const result = await client
        .path("/spread/model/request-parameter/{id}", "1")
        .put({
          headers: {
            "x-ms-test-header": "bar"
          },
          body: {
            name: "foo"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model1", async () => {
    try {
      const result = await client.path("/spread/alias/request-body").put({
        body: {
          name: "foo"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model2", async () => {
    try {
      const result = await client
        .path("/spread/alias/request-parameter/{id}", "1")
        .put({
          headers: {
            "x-ms-test-header": "bar"
          },
          body: {
            name: "foo"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model2", async () => {
    try {
      const result = await client
        .path("/spread/alias/nested-spread-parameter/{id}", "1")
        .put({
          headers: {
            "x-ms-test-header": "bar"
          },
          body: {
            name: "foo"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model2", async () => {
    try {
      const result = await client
        .path("/spread/alias/multiple-parameters/{id}", "1")
        .put({
          headers: {
            "x-ms-test-header": "bar"
          },
          body: {
            prop1: "foo1",
            prop2: "foo2",
            prop3: "foo3",
            prop4: "foo4",
            prop5: "foo5",
            prop6: "foo6"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
