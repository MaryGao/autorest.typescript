import ArrayItemTypesClientFactory, { ArrayItemTypesClient } from "./generated/array/itemTypes/src/index.js";
import { assert } from "chai";
import { matrix } from "../util/matrix.js";

interface TypeDetail {
  type: string;
  defaultValue: any;
  convertedToFn?: (_: any) => any;
}

const testedTypes: TypeDetail[] = [
  {
    type: "int32",
    defaultValue: [ 1, 2 ]
  },
  {
    type: "int64",
    defaultValue: [0x7FFFFFFFFFFFFFFF, -0x7FFFFFFFFFFFFFFF]
  },
  {
    type: "boolean",
    defaultValue: [ true, false ]
  },
  {
    type: "string",
    defaultValue: [ 'hello', '' ]
  },
  {
    type: "float32",
    defaultValue: [42.42]
  },
  {
    type: "datetime",
    defaultValue: ["2022-08-26T18:38:00Z"]
  },
  {
    type: "duration",
    defaultValue: ["P123DT22H14M12.011S"]
  },
  {
    type: "unknown",
    defaultValue:  [ 1, 'hello', null ]
  },
  {
    type: "model",
    defaultValue: [{'property': 'hello'}, {'property': 'world'}]
  },
];
describe("Array Item-Types Client", () => {
  let client: ArrayItemTypesClient;

  beforeEach(() => {
    client = ArrayItemTypesClientFactory({
      allowInsecureConnection: true
    });
  });

  matrix([testedTypes], async (params: TypeDetail) => {
    it(`should get a ${params.type} value`, async () => {
      try {
        const result = await client
          .path(`/array/item-types/${params.type}` as any)
          .get();
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body, params.defaultValue);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should put a ${params.type} value`, async () => {
      try {
        let property;
        if (params.convertedToFn) {
          property = params.convertedToFn(params.defaultValue);
        } else {
          property = params.defaultValue;
        }
        const result = await client
          .path(`/array/item-types/${params.type}` as any)
          .put({
            body: property
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});