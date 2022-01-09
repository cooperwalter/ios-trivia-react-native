export default [
  {
    id: "1",
    prompt: "The first question prompt",
    answers: [
      { text: "Incorrect0" },
      { text: "I'm Correct!1" },
      { text: "Incorrect2" },
    ],
    correctIndex: 1,
    details: {
      description: "This is a sample description details thingy",
      source: "http://sourceURL.com",
    },
  },
  {
    id: "2",
    prompt: "The second question prompt",
    answers: [{ text: "Whammo" }, { text: "Kablow" }, { text: "Kazooey" }],
    correctIndex: 1,
    details: {
      description: "This is a sample description details thingy",
      source: "http://sourceURL.com",
    },
  },
];
