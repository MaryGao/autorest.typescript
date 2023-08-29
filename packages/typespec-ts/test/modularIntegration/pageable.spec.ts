import {
  PageableClient,
  User,
  getContinuationToken
} from "./generated/payload/pageable/src/index.js";
import { assert } from "chai";

describe("PageableClient Classical Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = new PageableClient({
      allowInsecureConnection: true
    });
  });

  it("should throw exceptions if no maxpagesize set", async () => {
    const iter = client.list();
    const items = [];
    try {
      for await (const user of iter) {
        items.push(user);
      }
      assert.fail("Should throw exception");
    } catch (err: any) {
      assert.isNotNull(err);
    }
  });

  it("should list all users if maxpagesize=3", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    const items = [];
    try {
      for await (const user of iter) {
        items.push(user);
      }
      assert.strictEqual(items.length, 4);
    } catch (err: any) {
      assert.fail(err as string);
    }
  });

  it("should list all users byPage", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    const items: User[] = [];
    try {
      for await (const user of iter.byPage()) {
        items.push(...user);
      }
      assert.strictEqual(items.length, 4);
    } catch (err: any) {
      assert.fail(err as string);
    }
  });

  it("should list left users byPage if continuationToken is set", async () => {
    const iter = client.list({
      maxpagesize: 3
    });
    /**
     * two pages:
     *  - 1st page has 3 items
     *  - 2nd page has 1 item
     */
    const firstPage = await iter.byPage().next();
    assert.strictEqual(firstPage.done, false);
    assert.strictEqual(firstPage.value.length, 3);
    // initiate another iterator starting with 2nd page
    const continuationToken = getContinuationToken(firstPage.value);
    const items: User[] = [];
    for await (const pagedUsers of iter.byPage({ continuationToken })) {
      items.push(...pagedUsers);
    }
    assert.strictEqual(items.length, 1);
  });

  it("maxPageSize is not allowed and should throw exceptions", async () => {
    const pagedIter = client.list().byPage({ maxPageSize: 10 });
    try {
      const items: User[] = [];
      for await (const user of pagedIter) {
        items.push(...user);
      }
      assert.fail(
        "`maxPageSize` is not allowed to customize and should throw exceptions"
      );
    } catch (err: any) {
      assert.strictEqual(
        err.message,
        "maxPageSize is not supported by this operation."
      );
    }
  });
});
