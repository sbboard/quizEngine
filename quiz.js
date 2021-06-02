const yesNo = [true, false];

let profile = {
  name: null,
  email: null,
  age: null,
  gender: null,
  inUS: null,
  diet: [],
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
    subQ: null,
    answer: "name",
    multipleAnsAllow: false,
    otherOption: false,
    options: [],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Select your age range",
    subQ: null,
    answer: "age",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["0-13", "14-18", "19-30", "31-45", "46-65", "65+"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Select your gender",
    subQ: null,
    answer: "gender",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["Female", "Male", "Non-binary", "Prefer not to share"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you have pregnancy goals?",
    subQ: null,
    answer: "pregnant",
    multipleAnsAllow: false,
    otherOption: false,
    options: [
      "Hope to be pregnant within 1-2 years",
      "Prenatal (currently pregnant)",
      "Postpartum",
      "None of the above",
    ],
    relyOnThisBeingTrue: "gender",
    relyAnswer: "Female",
  },
  {
    question: "What's your Level of commitment?",
    subQ: null,
    answer: "commit",
    multipleAnsAllow: false,
    otherOption: false,
    options: [
      "Skeptical",
      "Interested",
      "Ready to dive in... where do I sign?",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Check off all you've been diagnosed with",
    subQ: "(select all that apply)",
    answer: "diagnose",
    multipleAnsAllow: true,
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
    relyAnswer: null,
  },
  {
    question: "Have you previously been to a function medicine practitioner?",
    subQ: null,
    answer: "previous",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Enter your email so we can send you results",
    subQ: null,
    answer: "email",
    multipleAnsAllow: false,
    otherOption: false,
    options: [],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you reside within the US?",
    subQ: null,
    answer: "inUS",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Are you local to Belmar, New Jersey?",
    subQ: "(within 50 miles)",
    answer: "nearBelmar",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: "inUS",
    relyAnswer: null,
  },
  {
    question: "Does your diet fall into any of these categories?",
    subQ: "(select all that apply)",
    answer: "diet",
    multipleAnsAllow: true,
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
    relyAnswer: null,
  },
  {
    question: "How many times/week do you exercise?",
    subQ: null,
    answer: "exercise",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["0", "1-2", "3-5", "7+"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "What intensity level is your exercise",
    subQ: null,
    answer: "exIntense",
    multipleAnsAllow: false,
    otherOption: false,
    options: [
      "Low (walking, yoga)",
      "Moderate (jogging, body weight exercises)",
      "Intense (marathon, HIIT, weight lifting)",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you sweat when you exercise?",
    subQ: "(If you glisten, mark no)",
    answer: "sweat",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    tip: `Hyperbaric oxygen therapy increases the amount of oxygen your blood can carry. With repeated scheduled treatments, the temporary extra high oxygen levels encourage normal tissue oxygen levels, even after the therapy is completed.`,
  },
  {
    question: "Do you have a daily bowel movement?",
    subQ: null,
    answer: "dailyBowel",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you smoke?",
    subQ: null,
    answer: "smoke",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you drink?",
    subQ: null,
    answer: "drink",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you take any supplements?",
    subQ: null,
    answer: "supplements",
    multipleAnsAllow: false,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
];

const quizElement = document.getElementById("quiz");
let currentQ = 0;

function startQuiz() {
  quizElement.innerHTML = null;
  let progressBar = document.createElement("progress");
  progressBar.id = "quizProg";
  progressBar.value = currentQ;
  progressBar.max = questions.length;
  let qHead = document.createElement("h1");
  quizElement.appendChild(qHead);
  let subQ = document.createElement("h2");
  quizElement.appendChild(subQ);
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
    //check if it depends on another question to display
    if (
      currentIndex.relyOnThisBeingTrue == null ||
      profile[currentIndex.relyOnThisBeingTrue] === "true" ||
      profile[currentIndex.relyOnThisBeingTrue] === currentIndex.relyAnswer
    ) {
      //clear block
      quizBlock.innerHTML = null;
      quizBlock.classList.remove("fadein");
      //check if it's NOT a tip
      if (currentIndex.question != "TIP") {
        //create question
        qHead.innerHTML = currentIndex.question;

        //create subQ
        if (currentIndex.subQ != null) {
          subQ.innerHTML = currentIndex.subQ;
        } else {
          subQ.innerHTML = null;
        }

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
              v
                ? (optionWrap.innerHTML = "Yes")
                : (optionWrap.innerHTML = "No");
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
                Array.from(document.querySelectorAll(".selected")).forEach(
                  (el) => el.classList.remove("selected")
                );
                profile[currentIndex.answer] = v.toString();
                optionWrap.classList.add("selected");
              } else {
                if (optionWrap.classList.contains("selected") == false) {
                  profile[currentIndex.answer].push(v.toString());
                  optionWrap.classList.add("selected");
                } else {
                  optionWrap.classList.remove("selected");
                  var index = profile[currentIndex.answer].indexOf(
                    v.toString()
                  );
                  if (index !== -1) {
                    profile[currentIndex.answer].splice(index, 1);
                  }
                }
              }

              checkForSubmit();
            };
            qInput.appendChild(optionWrap);
          });

          /////////////////////////////////////////////////
          /////
          //Other Option
          ///
          if (currentIndex.otherOption == true) {
            //used to submit info on keyup and onclick
            function checkOtherInput() {
              if (document.getElementById("otherInput").value.length > 0) {
                profile[`${currentIndex.answer}Other`] =
                  document.getElementById("otherInput").value;
              } else {
                profile[`${currentIndex.answer}Other`] = null;
              }
            }
            let otherInput = document.createElement("input");
            //creating the element
            let optionWrap = document.createElement("div");
            optionWrap.classList.add("opWrap");

            //on click
            optionWrap.onclick = function (e) {
              if (optionWrap.classList.contains("selected")) {
                optionWrap.classList.remove("selected");
                profile[`${currentIndex.answer}Other`] = null;
              } else {
                optionWrap.classList.add("selected");
                otherInput.focus();
                checkOtherInput();
              }
            };

            let rLabel = document.createElement("span");
            rLabel.innerHTML = "Other: ";
            otherInput.id = "otherInput";
            //on keyup
            qInput.onkeyup = () => {
              checkOtherInput();
            };

            if (profile[`${currentIndex.answer}Other`] != null) {
              optionWrap.classList.add("selected");
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
        if (isForward) {
          //styling for tip
          qHead.innerHTML = null;
          subQ.innerHTML = null;
          let tipHere = document.createElement("div");
          tipHere.id = "tip";
          let refinedTip = currentIndex.tip;
          // if(refinedTip.indexOf('<v>') > -1){
          //   let variabletoswap = refinedTip.slice(refinedTip.indexOf('<v>','</v>'))
          //   let cleanedVariable = variabletoswap.replace('<v>','')
          //   cleanedVariable = cleanedVariable.replace('</v>','')
          //   refinedTip = refinedTip.replace(variabletoswap,profile[cleanedVariable])
          // }
          tipHere.innerHTML = refinedTip;
          quizBlock.appendChild(tipHere);

          //btns for tip
          btnWrap.innerHTML = null;
          let backBtn = document.createElement("button");
          submitBtn.id = "nextBtn";
          submitBtn.innerHTML = "next";
          submitBtn.onclick = () => {
            currentQ++;
            progressBar.value = currentQ;
            postQ(true);
          };
          submitBtn.type = "submit";
          backBtn.innerHTML = "back";
          backBtn.onclick = () => {
            currentQ = currentQ - 1;
            progressBar.value = currentQ;
            postQ(false);
          };
          backBtn.type = "button";
          btnWrap.appendChild(backBtn);
          btnWrap.appendChild(submitBtn);
          void quizBlock.offsetWidth;
          quizBlock.classList.add("fadein");
        } else {
          let currentIndex = questions[currentQ];
          profile[currentIndex.answer] = "n/a";
          submitQ(isForward);
        }
      }
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
    "Weight Loss",
    "Mystery Illness",
    "Overall Health & Prevention",
  ];
  const goalRange = 3;
  quizElement.innerHTML = null;
  let goalBlock = document.createElement("div");
  goalBlock.id = "goalBlock";

  //create header
  let headerEl = document.createElement("h1");
  headerEl.innerHTML = `Choose up to ${goalRange} HEALTH GOALS`;
  goalBlock.appendChild(headerEl);

  let subHead = document.createElement("h2");
  subHead.innerHTML = "prioritize importance with 1 = most important";
  goalBlock.appendChild(subHead);

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
  quizElement.innerHTML = null;
  let resultsBlock = document.createElement("div");
  resultsBlock.id = "resultsBlock";
  let resultHeader = document.createElement("h1");
  resultHeader.innerHTML = `${profile.name}'s Healing Journey`;
  resultsBlock.appendChild(resultHeader);
  let fillerH2 = document.createElement("h2");
  resultsBlock.appendChild(fillerH2);
  let resultInfo = document.createElement("div");
  //local
  let localP = document.createElement("p");
  if (profile.nearBelmar === "false" || profile.nearBelmar === "n/a") {
    localP.innerHTML =
      "At Integrative Wellness Group, we treat patients near and far. While telehealth is technically the term, we elevate the experience with personal touchpoints, virtual appointments, optional technology & treatment delivery, and much more.";
  } else {
    localP.innerHTML =
      "Located in Belmar, New Jersey, Integrative Wellness Group has a beautiful state of the art facility equipped with technology, chiropractic treatment, a full detoxification spa (infrared sauna, ionic foot bath, yoni steam, cupping), Demartini mental health treatment, and more. The feelings of tranquility are enhanced by the panoramic view of Belmar waterfront. If you’re local to the area, we would love to welcome you into our office to experience hands-on care & healing treatments on your journey.";
  }
  resultInfo.appendChild(localP);
  //detox
  let sweatP = document.createElement("p");
  if (profile.sweat === "false") {
    sweatP.innerHTML =
      "Often overlooked, the body’s detoxification process is vital to keep us feeling our best. If you’re unclear on what detoxification is, perfect examples are sweat and sleep. When you sweat youe body is expelling toxins. When you sleep the space between your cells increases, thus increasing the flow of toxins being flushed out. The primary function of your liver, kidneys, and lungs is detoxification, if they’re bogged down, you’re not expelling toxicity out of your body efficiently.";
  } else {
    sweatP.innerHTML = `If you’re looking to maintain and/or enhance your body’s detoxification pathways, you need to engage in active sweating! Our favorite method is the infrared sauna where you can sweat out your toxins.`;
  }
  resultInfo.appendChild(sweatP);

  //pump it out
  resultsBlock.appendChild(resultInfo);
  resultsBlock.classList.add("fadein");
  quizElement.appendChild(resultsBlock);
  console.log(profile);
}
