const { VirtualAlexa } = require("virtual-alexa");
const { facts } = require("../facts");

const alexa = VirtualAlexa.Builder()
  .handler("index.handler")
  .interactionModelFile("../../models/en-US.json")
  .create();

const getResponse = payload =>
  payload.response.outputSpeech.ssml
    .replace("<speak>", "")
    .replace("</speak>", "");

describe("handler", () => {
  let payload;

  describe("when launched for the first time", () => {
    beforeEach(async () => (payload = await alexa.launch()));

    it("should tell us a fact", () => {
      expect(facts).toContain(getResponse(payload));
    });
  });
});
