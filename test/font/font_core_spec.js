import { decodeFontData, ttx, verifyTtxOutput } from "./fontutils.js";

describe("font1", function () {
  const font1_1 = decodeFontData(
    // eslint-disable-next-line max-len
    "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"
  );

  describe("test harness testing", function () {
    it("returns output", async function () {
      const output = await ttx(font1_1);

      verifyTtxOutput(output);
      expect(/<ttFont /.test(output)).toEqual(true);
      expect(/<\/ttFont>/.test(output)).toEqual(true);
    });
  });
});
