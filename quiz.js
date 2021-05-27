const yesNo = [true, false];

let profile = {
  name: null,
  email: null,
  age: null,
  gender: null,
  inUS: null,
  diet: null,
  dietOther: null,
  nearBelmar: null,
  doesEx: null,
  commit: null,
  diagnose: [],
  diagnoseOther: null,
  previous: null,
  exercise: null,
  exIntense: null,
  sweat: null,
  dailyBowel: null,
  smoke: null,
  pregnant: null,
  drink: null,
  supplements: null,
  goals: { top: null, mid: null, low: null },
};

const questions = [
  {
    question: "Enter your name",
    answer: "name",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: [],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Select your age range",
    answer: "age",
    category: "basics",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["0-13", "14-18", "19-30", "31-45", "46-65", "65+"],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Select your gender",
    answer: "gender",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: ["Female", "Male", "Non-binary"],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you reside within the US?",
    answer: "inUS",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "Are you local to Belmar, New Jersey?<br/>(within X miles)",
    answer: "nearBelmar",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: "inUS",
  },
  {
    question:
      "Have you previously been to a function medicine practitioner before?",
    answer: "previous",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "What's your Level of commitment?",
    answer: "commit",
    multipleAnsAllow: false,
    otherOption: false,
    category: "basics",
    options: [
      "Skeptical",
      "Interested",
      "Ready to dive in... where do I sign?",
    ],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Enter your email so we can send you results",
    answer: "email",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: [],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Check off all you've been diagnosed with",
    answer: "diagnose",
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
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you have pregnancy goals?",
    answer: "pregnant",
    multipleAnsAllow: false,
    category: "basics",
    otherOption: false,
    options: [
      "Hope to be pregnant within 1-2 years",
      "Prenatal (currently pregnant)",
      "Postpartum",
      "None of the above / Not Applicable",
    ],
    relyOnThisBeingTrue: null,
  },
  {
    question: "Does your diet fall into any of these categories?",
    answer: "diet",
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
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you exercise?",
    answer: "doesEx",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "How many times/week do you exercise?",
    answer: "exercise",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: ["0", "1-2", "3-5", "7+"],
    relyOnThisBeingTrue: "doesEx",
  },
  {
    question: "What intensity level is your exercise",
    answer: "exIntense",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: [
      "Low (walking, yoga)",
      "Moderate (jogging, body weight exercises)",
      "Intense (marathon, HIIT, weight lifting)",
    ],
    relyOnThisBeingTrue: "doesEx",
  },
  {
    question: "Do you sweat when you exercise? (If you glisten, mark no)",
    answer: "sweat",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: "doesEx",
  },
  {
    question: "Do you have a daily bowel movement?",
    answer: "dailyBowel",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you smoke?",
    answer: "smoke",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you drink?",
    answer: "drink",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
  {
    question: "Do you take any supplements?",
    answer: "supplements",
    multipleAnsAllow: false,
    category: "lifestyle",
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
  },
];

const quizElement = document.getElementById("quiz");
let currentQ = 0;

function startQuiz() {
  quizElement.innerHTML = null;
  let progressBar = document.createElement("progress");
  progressBar.id = "quizProg";
  progressBar.value = currentQ;
  progressBar.max = questions.length + 1;
  let qHead = document.createElement("h1");
  quizElement.appendChild(qHead);
  let btnWrap = document.createElement("div");
  btnWrap.id = "btnWrap";

  function handleKeyPress(e) {
    var key = e.keyCode || e.which;
    if (key == 13) {
      if (document.getElementById("nextBtn") != null) {
        document.getElementById("nextBtn").click();
      }
    }
  }
  document.addEventListener("keyup", handleKeyPress);

  function postQ(isForward) {
    let submitBtn = document.createElement("button");
    function checkForSubmit() {
      if (
        profile[currentIndex.answer] != null &&
        profile[currentIndex.answer].length > 0
      ) {
        submitBtn.disabled = false;
      } else {
        submitBtn.disabled = true;
      }
    }
    let currentIndex = questions[currentQ];
    if (
      currentIndex.relyOnThisBeingTrue == null ||
      profile[currentIndex.relyOnThisBeingTrue] === "true"
    ) {
      //clear block
      quizBlock.innerHTML = null;
      quizBlock.classList.remove("fadein");

      //create question
      qHead.innerHTML = currentIndex.question;

      ///////////////////////
      // DIFFERENT INPUT TYPES
      /////////////////////////
      //post input
      if (currentIndex.options.length == 0) {
        let qInput = document.createElement("input");
        if (currentIndex.answer == "email") {
          qInput.type = "email";
        }
        if (profile[currentIndex.answer] != null) {
          qInput.value = profile[currentIndex.answer];
        }
        qInput.onkeyup = function (e) {
          profile[currentIndex.answer] = e.target.value;
          checkForSubmit();
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
          //change option text if boolean
          if (typeof v === "boolean") {
            v ? (optionWrap.innerHTML = "Yes") : (optionWrap.innerHTML = "No");
          } else {
            optionWrap.innerHTML = v;
          }
          //check if it's been filled in already
          if (currentIndex.multipleAnsAllow == false) {
            if (profile[currentIndex.answer] == v) {
              optionWrap.classList.add("selected");
            }
          } else {
            if (profile[currentIndex.answer].indexOf(v) > -1) {
              optionWrap.classList.add("selected");
            }
          }

          optionWrap.onclick = () => {
            if (currentIndex.multipleAnsAllow == false) {
              Array.from(document.querySelectorAll(".selected")).forEach((el) =>
                el.classList.remove("selected")
              );
              profile[currentIndex.answer] = v.toString();
              optionWrap.classList.add("selected");
            } else {
              if (optionWrap.classList.contains("selected") == false) {
                profile[currentIndex.answer].push(v.toString());
                optionWrap.classList.add("selected");
              } else {
                optionWrap.classList.remove("selected");
                var index = profile[currentIndex.answer].indexOf(v.toString());
                if (index !== -1) {
                  profile[currentIndex.answer].splice(index, 1);
                }
              }
            }

            checkForSubmit();
          };
          qInput.appendChild(optionWrap);
        });
        /////
        //Other Option
        ///
        if (currentIndex.otherOption == true) {
          //used to submit info on keyup and onclick
          function checkOtherInput() {
            if (document.getElementById("otherInput").value.length > 0) {
              profile[`${currentIndex.answer}Other`] =
                document.getElementById("otherInput").value;
            }
          }
          //creating the element
          let optionWrap = document.createElement("div");
          optionWrap.classList.add("opWrap");
          //on click
          optionWrap.onclick = function (e) {
            checkOtherInput();
          };
          let rLabel = document.createElement("span");
          rLabel.innerHTML = "Other: ";
          let otherInput = document.createElement("input");
          otherInput.id = "otherInput";
          //on keyup
          qInput.onkeyup = () => {
            checkOtherInput();
          };

          if (profile[`${currentIndex.answer}Other`] != null) {
            otherInput.value = profile[`${currentIndex.answer}Other`];
          }
          optionWrap.appendChild(rLabel);
          optionWrap.appendChild(otherInput);
          qInput.appendChild(optionWrap);
        }
        quizBlock.appendChild(qInput);
      }
      //////////////////////////////////////

      //create next / submit
      btnWrap.innerHTML = null;
      let backBtn = document.createElement("button");
      submitBtn.id = "nextBtn";
      if (currentQ < questions.length - 1) {
        submitBtn.innerHTML = "next";
        submitBtn.onclick = submitQ;
        submitBtn.type = "submit";
      } else {
        submitBtn.innerHTML = "next";
        submitBtn.type = "submit";
        submitBtn.onclick = displayPriorityChart;
      }
      if (currentQ > 0) {
        backBtn.innerHTML = "back";
        backBtn.onclick = backQ;
        backBtn.type = "button";
        btnWrap.appendChild(backBtn);
      }
      btnWrap.appendChild(submitBtn);
      void quizBlock.offsetWidth;
      quizBlock.classList.add("fadein");
      checkForSubmit();
    } else {
      let currentIndex = questions[currentQ];
      profile[currentIndex.answer] = "n/a";
      submitQ(isForward);
    }
  }

  function submitQ(isForward) {
    function validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    let currentIndex = questions[currentQ];
    if (
      profile[currentIndex.answer] != null &&
      profile[currentIndex.answer].length > 0
    ) {
      if (
        currentIndex.answer != "email" ||
        (currentIndex.answer == "email" &&
          validateEmail(profile[currentIndex.answer]))
      ) {
        if (isForward) {
          currentQ++;
          progressBar.value = currentQ;
          postQ(true);
        } else {
          currentQ = currentQ - 1;
          progressBar.value = currentQ;
          postQ(false);
        }
      }
    }
  }

  function backQ() {
    currentQ = currentQ - 1;
    progressBar.value = currentQ;
    postQ(false);
  }

  let quizBlock = document.createElement("form");
  quizBlock.onsubmit = () => {
    return false;
  };
  quizBlock.id = "quizBlock";
  quizElement.appendChild(quizBlock);
  quizElement.appendChild(btnWrap);
  quizElement.appendChild(progressBar);
  postQ(true);
}

///////////////////////////
// PRIORITY CHART
//////////////////////////

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
  keyWrap.classList.add("tableRow");
  keyWrap.classList.add("topRow");
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
    rowWrap.classList.add("tableRow");
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
  endBtn.id = "nextBtn";

  goalBlock.appendChild(endBtn);
  goalBlock.classList.add("fadein");

  quizElement.appendChild(goalBlock);
}

//////////////////////////////
// RESULTS
/////////////////////////////
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
