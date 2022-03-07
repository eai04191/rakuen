import { SequenceMiddleware } from "./sequence.middleware";

describe("SequenceMiddleware", () => {
    it("should be defined", () => {
        expect(new SequenceMiddleware()).toBeDefined();
    });
});
