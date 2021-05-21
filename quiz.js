const yesNo = [true, false];

let profile = {
  name: null,
  email: null,
  age: null,
  gender: null,
  inUS: null,
  diet: null,
  nearBelmar: null,
  commit: null,
  diagnose: [],
  previous: null,
  exercise: null,
  exIntense: null,
  sweat: null,
  dailyBowel: null,
  smoke: null,
  drink: null,
  supplements: null,
  goals: { top: null, mid: null, low: null },
};

const questions = [
  {
    question: "What is your first name?",
    answer: "name",
    required: true,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: [],
  },
  {
    question: "Select your age range",
    answer: "age",
    required: true,
    category: "basics",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["0-13", "14-18", "19-30", "31-45", "46-65", "65+"],
  },
  {
    question: "Gender",
    answer: "gender",
    required: true,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: ["Female", "Male", "Non-binary"],
  },
  {
    question: "Level of commitment",
    answer: "commit",
    required: true,
    multipleAnsAllow: false,
    otherOption: false,
    category: "basics",
    options: [
      "Skeptical",
      "Interested",
      "Ready to dive in... where do I sign?",
    ],
  },
  {
    question: "Check off all you've been diagnosed with",
    answer: "diagnose",
    required: true,
    multipleAnsAllow: true,
    category: "health history",
    otherOption: true,
    options: [
      "Cancer",
      "Lyme",
      "Gut Issues (Celiac)",
      "Neurological (ALS, MS)",
      "Skin Issues (Cystic Acne)",
      "Mystery Illness",
      "Chronic Pain",
      "Hormonal (PCOS, Cycle Issues, Infertility)",
      "Breast Tissue Abnormality",
      "Mental Health (Depression)",
      "None",
    ],
  },
  {
    question:
      "Have you previously been to a function medicine practitioner before?",
    answer: "previous",
    required: false,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Enter your email so we can send you results",
    answer: "email",
    required: false,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: [],
  },
  {
    question: "Do you reside within the US?",
    answer: "inUS",
    required: true,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Are you local to Belmar, New Jersey? (within X miles)",
    answer: "nearBelmar",
    required: false,
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Does your diet fall into any of these categories?",
    answer: "diet",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: true,
    options: [
      "Vegan",
      "Vegetarian",
      "Paleo",
      "Gluten-Free",
      "Intermittent Fasting",
      "None",
    ],
  },
  {
    question: "How many times/week do you exercise?",
    answer: "exercise",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: ["0", "1-2", "3-5", "7+"],
  },
  {
    question: "What intensity level is your exercise",
    answer: "exIntense",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: [
      "Low (walking, yoga)",
      "Moderate (jogging, body weight exercises)",
      "Intense (marathon, HIIT, weight lifting)",
    ],
  },
  {
    question: "Do you sweat when you exercise? (If you glisten, mark no)",
    answer: "sweat",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Do you have a daily bowel movement?",
    answer: "dailyBowel",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Do you smoke?",
    answer: "smoke",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Do you drink?",
    answer: "drink",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
  },
  {
    question: "Do you take any supplements?",
    answer: "supplements",
    required: false,
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
  },
];

const quizElement = document.getElementById("quiz");
let currentQ = 0;

function startQuiz() {
  function postQ() {
    let currentIndex = questions[currentQ];
    //clear block
    quizBlock.innerHTML = null;

    //create question
    let qHead = document.createElement("h1");
    qHead.innerHTML = currentIndex.question;
    quizBlock.appendChild(qHead);

    ///////////////////////
    // DIFFERENT INPUT TYPES
    /////////////////////////
    //post input
    if (currentIndex.options.length == 0) {
      let qInput = document.createElement("input");
      qInput.onkeyup = function (e) {
        profile[currentIndex.answer] = e.target.value;
      };
      quizBlock.appendChild(qInput);
    }
    //post radio/check list
    else {
      let qInput = document.createElement("div");
      qInput.id = "radioInputs";
      currentIndex.options.map((v) => {
        let optionWrap = document.createElement("div");
        optionWrap.classList.add("opWrap");
        let rOption = document.createElement("input");
        if (currentIndex.multipleAnsAllow == false) {
          rOption.type = "radio";
        } else {
          rOption.type = "checkbox";
        }
        rOption.value = v;
        rOption.name = "currentQ";
        rOption.onclick = function (e) {
          if (currentIndex.multipleAnsAllow == false) {
            profile[currentIndex.answer] = e.target.value;
          } else {
            //right now this only adds, it doesnt subtract
            profile[currentIndex.answer].push(e.target.value);
          }
        };
        let rLabel = document.createElement("label");
        if (typeof v === "boolean") {
          v ? (rLabel.innerHTML = "Yes") : (rLabel.innerHTML = "No");
        } else {
          rLabel.innerHTML = v;
        }
        optionWrap.appendChild(rOption);
        optionWrap.appendChild(rLabel);
        qInput.appendChild(optionWrap);
      });
      quizBlock.appendChild(qInput);
    }
    //////////////////////////////////////

    //create next / submit
    let submitBtn = document.createElement("button");
    if (currentQ < questions.length - 1) {
      submitBtn.innerHTML = "next";
      // submitBtn.onclick = submitQ;
      submitBtn.onclick = displayPriorityChart;
    } else {
      submitBtn.innerHTML = "next";
      submitBtn.onclick = displayPriorityChart;
    }
    quizBlock.appendChild(submitBtn);
  }

  function submitQ() {
    let currentIndex = questions[currentQ];
    if (
      currentIndex.required == false ||
      profile[currentIndex.answer] != null
    ) {
      currentQ++;
      postQ();
    }
  }

  let quizBlock = document.createElement("div");
  quizBlock.id = "quizBlock";
  quizElement.appendChild(quizBlock);
  postQ(quizBlock);
}

function displayPriorityChart() {
  const goalSelection = [
    "Digestion",
    "Sleep",
    "Fitness",
    "Stress",
    "Mood",
    "Energy",
    "Brain",
    "Mental Health",
    "Mystery Illness",
    "Overall Health & Prevention",
  ];
  const goalRange = 3;
  quizElement.innerHTML = null;
  let goalBlock = document.createElement("div");
  goalBlock.id = "goalBlock";

  //create header
  let headerEl = document.createElement("h1");
  headerEl.innerHTML = `Choose up to ${goalRange} HEALTH GOALS and prioritize importance with 1 = most important`;
  goalBlock.appendChild(headerEl);

  //create table
  let tableWrap = document.createElement("div");
  tableWrap.id = "goalTable";

  //create number key
  let keyWrap = document.createElement("div");
  keyWrap.id = "tableRow";
  let keyLabel = document.createElement("label");
  keyWrap.appendChild(keyLabel);
  for (let i = 0; i < goalRange; i++) {
    let span = document.createElement("span");
    span.innerHTML = i + 1;
    keyWrap.appendChild(span);
  }
  tableWrap.appendChild(keyWrap);

  let endBtn = document.createElement("button");
  endBtn.disabled = true;

  //create radio buttons
  goalSelection.map((v) => {
    let rowWrap = document.createElement("div");
    rowWrap.id = "tableRow";
    let label = document.createElement("label");
    label.innerHTML = v;
    rowWrap.appendChild(label);
    for (let i = 0; i < goalRange; i++) {
      let radioBtn = document.createElement("input");
      radioBtn.type = "radio";
      radioBtn.name = i + 1;
      radioBtn.dataset.goal = v;
      //on click
      radioBtn.onclick = () => {
        //make sure it's the only one clicked
        let currentElm = document.querySelectorAll('[data-goal="' + v + '"]');
        //assign goal
        switch (i) {
          case 0:
            currentElm[1].checked = false;
            currentElm[2].checked = false;
            profile.goals.top = v;
            break;
          case 1:
            currentElm[0].checked = false;
            currentElm[2].checked = false;
            profile.goals.mid = v;
            break;
          case 2:
            currentElm[0].checked = false;
            currentElm[1].checked = false;
            profile.goals.low = v;
            break;
          default:
            profile.goals.top = v;
            break;
        }
        //check for 3 done
        var checkedBoxes = document.querySelectorAll("input:checked");
        if (checkedBoxes.length > 2) {
          endBtn.disabled = false;
        } else {
          endBtn.disabled = true;
        }
      };
      rowWrap.appendChild(radioBtn);
    }
    tableWrap.appendChild(rowWrap);
  });
  goalBlock.appendChild(tableWrap);

  //create finisj button
  endBtn.onclick = displayResults;
  endBtn.innerHTML = "finish";

  goalBlock.appendChild(endBtn);

  quizElement.appendChild(goalBlock);
}

function displayResults() {
  let resultsBlock = document.createElement("div");
  console.log(`${profile.name}'s Healing Journey`);
  //detox
  if (profile.sweat == false) {
    console.log(
      "Often overlooked, the body’s detoxification process is vital to keep us feeling our best. If you’re unclear on what detoxification is, perfect examples are sweat and sleep. When you sweat youe body is expelling toxins. When you sleep the space between your cells increases, thus increasing the flow of toxins being flushed out. The primary function of your liver, kidneys, and lungs is detoxification, if they’re bogged down, you’re not expelling toxicity out of your body efficiently. "
    );
  } else {
    console.log(
      `If you’re looking to maintain and/or enhance your body’s detoxification pathways, you need to engage in active sweating! Our favorite method is the infrared sauna where you can sweat out your toxins.`
    );
  }
  if (profile.supplements) {
    console.log(
      `At Integrative Wellness Group, we pride ourselves on testing (not guessing). Through IRT (Integrative Response Testing), our team is able to ___ determine what supplements, services, and therapies will benefit you best at every stage of your wellness journey.`
    );
  }
  console.log("-");
  console.log(profile);
}

startQuiz();
