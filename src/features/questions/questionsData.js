const TEMPLATE = {
  id: "",
  prompt: "",
  answers: [{ text: "" }, { text: "" }, { text: "" }, { text: "" }],
  correctIndex: 0,
  details: {
    description: "",
    sources: [],
  },
};

export default [
  {
    id: "cd047938-bb05-4de2-ba29-5167f1ac0a19",
    prompt: "Which version of iOS introduced SharePlay?",
    answers: [
      { text: "iOS 7" },
      { text: "iOS 9" },
      { text: "iOS 12" },
      { text: "iOS 15" },
    ],
    correctIndex: 3, // correct answer is "iOS 15"
    details: {
      description:
        "SharePlay allows users to watch TV shows, movies, and music with synced playback within FaceTime.",
      sources: [
        "https://www.lifewire.com/ios-versions-4147730",
        "https://support.apple.com/guide/iphone/use-shareplay-to-watch-and-listen-together-iphb657eb791/ios",
      ],
    },
  },
  {
    id: "162bdc7f-a0f2-40bd-98f8-049f85ac94f6",
    prompt: "Which version of iOS introduced Live Text?",
    answers: [
      { text: "iOS 7" },
      { text: "iOS 9" },
      { text: "iOS 12" },
      { text: "iOS 15" },
    ],
    correctIndex: 3, // correct answer is "iOS 15"
    details: {
      description:
        "Live Text allows users to copy and paste text present in photos. Users can also call phone numbers and open businesses in Maps.",
      sources: ["https://www.lifewire.com/ios-versions-4147730"],
    },
  },
  //   {
  //     id: "bc561e51-0111-45b9-a9a6-73021f753eee",
  //     prompt: "Which version of iOS introduced homescreen widgets?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 14" },
  //     ],
  //     correctIndex: 3, // correct answer iOS 14
  //     details: {
  //       description: "",
  //       sources: [
  //         "https://www.theverge.com/2011/12/7/2585779/android-10th-anniversary-google-history-pie-oreo-nougat-cupcake",
  //       ],
  //     },
  //   },
  //   {
  //     id: "272aca63-4d7a-4a6a-afd2-6e5b6f23b563",
  //     prompt: "What was the original name for iOS?",
  //     answers: [
  //       { text: "Phone OS" },
  //       { text: "iPhone OS" },
  //       { text: "Cupertino OS" },
  //       { text: "Touch OS" },
  //     ],
  //     correctIndex: 1, // correct answer is "iPhone OS"
  //     details: {
  //       description:
  //         "Released in July 2010, iOS 4 marked a name change for the iPhone's operating system. ",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "04810b89-3a17-43c3-a3c7-8c796543eba9",
  //     prompt: "Which version of iOS introduced iMessage?",
  //     answers: [
  //       { text: "iOS 3" },
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 7" },
  //     ],
  //     correctIndex: 2, // correct answer is "iOS 6"
  //     details: {
  //       description:
  //         "The Maps app replaced Google Maps as the maps app that came pre-installed in iPhones.",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "8829a111-ef35-4395-be90-55669236eaf6",
  //     prompt: "Which version of iOS introduced the Maps app?",
  //     answers: [
  //       { text: "iOS 3" },
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 7" },
  //     ],
  //     correctIndex: 2, // correct answer is "iOS 6"
  //     details: {
  //       description:
  //         "The Maps app replaced Google Maps as the maps app that came pre-installed in iPhones.",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "fd830e32-c539-446d-8fb1-bf56b6600492",
  //     prompt: "Which version of iOS introduced Apple Pay?",
  //     answers: [
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 10" },
  //     ],
  //     correctIndex: 2, // correct answer is iOS 8
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "643372e2-d080-4fdd-b8cc-9e4e3e681773",
  //     prompt: "Which version of iOS introduced Night Shift?",
  //     answers: [
  //       { text: "iOS 5" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 9" },
  //     ],
  //     correctIndex: 3, // correct answer is "iOS 9"
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "7541d979-f25b-45e7-9e2e-c75d883f8be6",
  //     prompt: "Which version of iOS introduced Siri?",
  //     answers: [
  //       { text: "iOS 5" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 9" },
  //     ],
  //     correctIndex: 1, // correct answer is "iOS 6"
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "6296ea7f-ff5b-470f-bb56-ab960ce02117",
  //     prompt: "Which version of iOS introduced Memoji?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 14" },
  //     ],
  //     correctIndex: 2, // correct answer is iOS 12
  //     details: {
  //       description:
  //         "Memoji, a type of personalized, animated emojii, allows users to express themselves in new ways. ",
  //       sources: [
  //         "https://www.lifewire.com/ios-versions-4147730",
  //         "https://www.lifewire.com/animoji-4153078",
  //       ],
  //     },
  //   },
  //   details: {
  //     description: "",
  //     sources: [],
  //   },
  // };

  // export default [
  //   {
  //     id: "cd047938-bb05-4de2-ba29-5167f1ac0a19",
  //     prompt: "Which version of iOS introduced SharePlay?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 15" },
  //     ],
  //     correctIndex: 3, // correct answer is "iOS 15"
  //     details: {
  //       description:
  //         "SharePlay allows users to watch TV shows, movies, and music with synced playback within FaceTime.",
  //       sources: [
  //         "https://www.lifewire.com/ios-versions-4147730",
  //         "https://support.apple.com/guide/iphone/use-shareplay-to-watch-and-listen-together-iphb657eb791/ios",
  //       ],
  //     },
  //   },
  //   {
  //     id: "162bdc7f-a0f2-40bd-98f8-049f85ac94f6",
  //     prompt: "Which version of iOS introduced Live Text?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 15" },
  //     ],
  //     correctIndex: 3, // correct answer is "iOS 15"
  //     details: {
  //       description:
  //         "Live Text allows users to copy and paste text present in photos. Users can also call phone numbers and open businesses in Maps.",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "bc561e51-0111-45b9-a9a6-73021f753eee",
  //     prompt: "Which version of iOS introduced homescreen widgets?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 14" },
  //     ],
  //     correctIndex: 3, // correct answer iOS 14
  //     details: {
  //       description: "",
  //       sources: [
  //         "https://www.theverge.com/2011/12/7/2585779/android-10th-anniversary-google-history-pie-oreo-nougat-cupcake",
  //       ],
  //     },
  //   },
  //   {
  //     id: "272aca63-4d7a-4a6a-afd2-6e5b6f23b563",
  //     prompt: "What was the original name for iOS?",
  //     answers: [
  //       { text: "Phone OS" },
  //       { text: "iPhone OS" },
  //       { text: "Cupertino OS" },
  //       { text: "Touch OS" },
  //     ],
  //     correctIndex: 1, // correct answer is "iPhone OS"
  //     details: {
  //       description:
  //         "Released in July 2010, iOS 4 marked a name change for the iPhone's operating system. ",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "04810b89-3a17-43c3-a3c7-8c796543eba9",
  //     prompt: "Which version of iOS introduced iMessage?",
  //     answers: [
  //       { text: "iOS 3" },
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 7" },
  //     ],
  //     correctIndex: 2, // correct answer is "iOS 6"
  //     details: {
  //       description:
  //         "The Maps app replaced Google Maps as the maps app that came pre-installed in iPhones.",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "8829a111-ef35-4395-be90-55669236eaf6",
  //     prompt: "Which version of iOS introduced the Maps app?",
  //     answers: [
  //       { text: "iOS 3" },
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 7" },
  //     ],
  //     correctIndex: 2, // correct answer is "iOS 6"
  //     details: {
  //       description:
  //         "The Maps app replaced Google Maps as the maps app that came pre-installed in iPhones.",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "fd830e32-c539-446d-8fb1-bf56b6600492",
  //     prompt: "Which version of iOS introduced Apple Pay?",
  //     answers: [
  //       { text: "iOS 4" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 10" },
  //     ],
  //     correctIndex: 2, // correct answer is iOS 8
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "643372e2-d080-4fdd-b8cc-9e4e3e681773",
  //     prompt: "Which version of iOS introduced Night Shift?",
  //     answers: [
  //       { text: "iOS 5" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 9" },
  //     ],
  //     correctIndex: 3, // correct answer is "iOS 9"
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "7541d979-f25b-45e7-9e2e-c75d883f8be6",
  //     prompt: "Which version of iOS introduced Siri?",
  //     answers: [
  //       { text: "iOS 5" },
  //       { text: "iOS 6" },
  //       { text: "iOS 8" },
  //       { text: "iOS 9" },
  //     ],
  //     correctIndex: 1, // correct answer is "iOS 6"
  //     details: {
  //       description: "",
  //       sources: ["https://www.lifewire.com/ios-versions-4147730"],
  //     },
  //   },
  //   {
  //     id: "6296ea7f-ff5b-470f-bb56-ab960ce02117",
  //     prompt: "Which version of iOS introduced Memoji?",
  //     answers: [
  //       { text: "iOS 7" },
  //       { text: "iOS 9" },
  //       { text: "iOS 12" },
  //       { text: "iOS 14" },
  //     ],
  //     correctIndex: 2, // correct answer is iOS 12
  //     details: {
  //       description:
  //         "Memoji, a type of personalized, animated emojii, allows users to express themselves in new ways. ",
  //       sources: [
  //         "https://www.lifewire.com/ios-versions-4147730",
  //         "https://www.lifewire.com/animoji-4153078",
  //       ],
  //     },
  //   },
];
