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
  interest: null,
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
  pregnantOption: null,
  drink: null,
  supplements: null,
  goals: { top: null, mid: null, low: null },
};

const questions = [
  {
    question: "What is your first name?",
    subQ: null,
    answer: "name",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: [],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Select your age range:",
    subQ: null,
    answer: "age",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: ["0-13", "14-19", "20-29", "30-39", "40-49", "50-59", "60+"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    img: "age.jpg",
    relyOnThisBeingTrue: null,
    tip: `Most people blame aging & genetics on their poor health but oftentimes there’s more to it.`,
  },
  {
    question: "Gender",
    subQ: null,
    img: null,
    answer: "gender",
    multipleAnsAllow: false,
    otherOption: false,
    options: ["Female", "Male", "Non-binary", "Prefer not to share"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "PROMPT",
    subQ: null,
    relyOnThisBeingTrue: "gender",
    relyAnswer: "Female",
    img: null,
    answer: "pregnantOption",
    options: [
      "Continue to Pregnancy, Postpartum & Fertility Goals",
      "Skip & Continue with Quiz",
    ],
  },
  {
    question: "Do you have upcoming pregnancy goals?",
    subQ: null,
    answer: "pregnant",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: [
      "Hope to be pregnant within 1-2 years",
      "Prenatal (currently pregnant)",
      "Postpartum",
      "None of the above",
    ],
    relyOnThisBeingTrue: "pregnantOption",
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: "pregnantOption",
    relyAnswer: null,
    img: "preg.jpg",
    tip: `Exposure to flavors in the womb can affect a baby’s food preference later in life.`,
  },
  {
    question: "What's your Level of commitment?",
    subQ: null,
    answer: "commit",
    multipleAnsAllow: false,
    otherOption: false,
    img: null,
    options: [
      "Looking to gather more information",
      "Already interested",
      "Ready to dive in... where do I sign?",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Check off all you’ve been diagnosed with or are dealing with:",
    subQ: "(select all that apply)",
    answer: "diagnose",
    multipleAnsAllow: true,
    img: null,
    otherOption: true,
    options: [
      "Cancer",
      "Lyme",
      "Gut Issues (IBS, Celiac, Crohn's, etc.)",
      "Neurological (ALS, MS, ADD, PTSD, etc.)",
      "Skin Issues (Cystic Acne, Psoriasis, Thinning Skin, Sun Damage etc.)",
      "Mystery Illness",
      "Chronic Pain",
      "Hormonal (PCOS, Cycle Issues, Endometriosis, etc.)",
      "Breast Tissue or Lymphatic Abnormality",
      "Mental Health (Depression, Anxiety, OCD, etc.)",
      "Surgery Within Past 1 Year",
      "None",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Have you previously been to a functional medicine practitioner?",
    subQ: null,
    answer: "previous",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    img: "functional.jpg",
    tip: `At IWG we use a hair sample to understand your body’s genetic makeup.`,
  },
  {
    question: "Enter your email so we can send you results:",
    subQ: null,
    answer: "email",
    multipleAnsAllow: false,
    otherOption: false,
    options: [],
    img: null,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "Do you live in the US?",
    subQ: null,
    answer: "inUS",
    multipleAnsAllow: false,
    otherOption: false,
    img: null,
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
    img: "map-2.jpg",
    options: yesNo,
    relyOnThisBeingTrue: "inUS",
    relyAnswer: null,
  },
  {
    question: "Does your diet fall into any of these categories?",
    subQ: "(select all that apply)",
    answer: "diet",
    multipleAnsAllow: true,
    img: null,
    otherOption: true,
    options: [
      "Vegan - Gotta love veggies!",
      "Vegetarian - Just the less strict version of a vegan",
      "Paleo - Just like our ancestors",
      "Grain or Gluten-Free - Cauliflower crust is my jam",
      "Intermittent Fasting - Who needs breakfast?",
      "I eat it all!",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    img: "diet.jpg",
    tip: `Vitamin C enhances the absorption of iron. Pro tip: enjoy dark chocolate (iron) oranges (vitamin C) for dessert!`,
  },
  {
    question:
      "How often do you incorporate exercise, activity or movement into your week?",
    subQ: null,
    answer: "exercise",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: [
      "0 Room for improvement",
      "1-2 Working on it...",
      "3-5 All about those endorphins",
      "7+ Weekend warrior",
    ],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    img: "incorp.jpg",
    tip: `As little as one exercise session can improve your mood, memory and focus.`,
  },
  {
    question: "What intensity level is your exercise?",
    subQ: null,
    answer: "exIntense",
    multipleAnsAllow: false,
    img: null,
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
    question: "TIP",
    img: "level.jpg",
    relyOnThisBeingTrue: null,
    tip: `Hyperbaric oxygen therapy increases the amount of oxygen your blood can carry which can increase recovery time.`,
  },
  {
    question:
      "Are you interested in receiving more information on mental health, therapy & mindset?",
    subQ: null,
    answer: "interest",
    multipleAnsAllow: false,
    img: null,
    options: ["Yes", "Hmm not sure"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
    otherOption: false,
  },
  {
    question: "Do you sweat when you exercise?",
    subQ: null,
    answer: "sweat",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: ["yes", "No (If You Only Glisten, Mark No)"],
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    img: "sweat.jpg",
    tip: `Sweating is great for your body, if you are only glistening, your detox pathways might be clogged.`,
  },
  {
    question: "Do you drink? If so, how often?",
    subQ: null,
    answer: "drink",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: [
      "Yes, I enjoy a few fun drinks! 🍹",
      "Socially... but not often",
      "No, I prefer 0-proof",
    ],
    relyOnThisBeingTrue: "age",
    relyAnswer: ["20-29", "30-39", "40-49", "50-59", "60+"],
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: "age",
    img: "drink.jpg",
    relyAnswer: ["20-29", "30-39", "40-49", "50-59", "60+"],
    tip: `Your liver is your body’s filtration system… but just like the filter on your vacuum, your body’s filter needs to be cleaned so it can continue to perform its job and remove toxins over your lifetime.`,
  },
  {
    question: "Do you take any supplements?",
    subQ: null,
    answer: "supplements",
    multipleAnsAllow: false,
    img: null,
    otherOption: false,
    options: yesNo,
    relyOnThisBeingTrue: null,
    relyAnswer: null,
  },
  {
    question: "TIP",
    relyOnThisBeingTrue: null,
    img: "supp.jpg",
    tip: `Turmeric is an herb that is known for its anti-inflammatory properties; it’s main component, curcumin, is “activated” by black pepper, so be sure to sprinkle some atop your golden latte! P.S. Inflammation is a double-edged sword…it helps fights infections but over the long term inflammation leads to damage of the arteries, organs, and joints and is linked to chronic disease.`,
  },
];

const quizElement = document.getElementById("quiz");
let currentQ = 0;

document.addEventListener("DOMContentLoaded", changeHeight);

function changeHeight() {
  let headerHeight = document.getElementById("top-bar-wrap").offsetHeight;
  document.getElementById(
    "quizParent"
  ).style.minHeight = `calc(100vh - ${headerHeight}px - 1em`;
}

function startQuiz() {
  let preloadedImages = [];
  function preloadImgs() {
    let imagesToLoad = questions.filter((v) => {
      return v.img != null;
    });
    imagesToLoad.forEach((v, i) => {
      preloadedImages[i] = new Image();
      preloadedImages[i].src = `./quizAssets/${v.img}`;
    });
    let headerImg = new Image();
    headerImg.src = `./quizAssets/resultsHead.png`;
    preloadedImages.push(headerImg);
  }
  preloadImgs();
  let progressBar = document.getElementById("quizProg");
  progressBar.value = 0;

  function updateProgressbar() {
    progressBar.value = questions.filter(
      (obj, index) =>
        obj.question != "TIP" && obj.question != "PROMPT" && index < currentQ
    ).length;
  }
  //every question that's not a tip or prompt
  progressBar.max = questions.filter(
    (obj) => obj.question != "TIP" && obj.question != "PROMPT"
  ).length;
  let qHead = document.createElement("h1");
  let subQ = document.createElement("h2");
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
      profile[currentIndex.relyOnThisBeingTrue] === currentIndex.relyAnswer ||
      (Array.isArray(currentIndex.relyAnswer) &&
        currentIndex.relyAnswer.indexOf(
          profile[currentIndex.relyOnThisBeingTrue]
        ) > -1)
    ) {
      if (isForward) {
        slideElement();
      } else {
        slideElementBW();
      }
      setTimeout(() => {
        //clear block
        quizBlock.innerHTML = null;
        //check if it's NOT a tip or prompt
        if (
          currentIndex.question != "TIP" &&
          currentIndex.question != "PROMPT"
        ) {
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
            } else {
              qInput.type = "text";
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
              let spanWrap = document.createElement("span");
              //change option text if boolean
              if (typeof v === "boolean") {
                v ? (spanWrap.innerHTML = "Yes") : (spanWrap.innerHTML = "No");
              } else {
                spanWrap.innerHTML = v;
              }
              optionWrap.appendChild(spanWrap);
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

              if (currentIndex.multipleAnsAllow == true) {
                optionWrap.classList.add("checklist");
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
              optionWrap.classList.add("otherOption");
              if (currentIndex.multipleAnsAllow == true) {
                optionWrap.classList.add("checklist");
              }

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

          //post map of belmar
          if (currentIndex.img != null) {
            let mapImage = document.createElement("img");
            mapImage.src = `./quizAssets/${currentIndex.img}`;
            mapImage.id = "map";
            quizBlock.appendChild(mapImage);
          }

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
          checkForSubmit();
        } else if (currentIndex.question == "PROMPT") {
          if (isForward) {
            qHead.innerHTML = null;
            subQ.innerHTML = null;
            quizElement.classList.add("promptMode");

            btnWrap.innerHTML = null;
            let backBtn = document.createElement("button");
            backBtn.id = "promptOne";
            backBtn.innerHTML = currentIndex.options[0];
            backBtn.onclick = () => {
              profile[currentIndex.answer] = "true";
              submitBtn.onclick = submitQ(isForward);

              setTimeout(() => {
                quizBlock.classList.remove("hidden");
                btnWrap.classList.remove("mainView");
                quizElement.classList.remove("promptMode");
              }, 300);
            };
            backBtn.type = "button";

            submitBtn.id = "promptTwo";
            submitBtn.innerHTML = currentIndex.options[1];
            submitBtn.onclick = () => {
              profile[currentIndex.answer] = "false";
              submitBtn.onclick = submitQ(isForward);
              setTimeout(() => {
                quizBlock.classList.remove("hidden");
                btnWrap.classList.remove("mainView");
                quizElement.classList.remove("promptMode");
              }, 300);
            };
            submitBtn.type = "submit";

            btnWrap.appendChild(backBtn);
            btnWrap.appendChild(submitBtn);
            void quizBlock.offsetWidth;
            quizBlock.classList.add("hidden");
            btnWrap.classList.add("mainView");
          } else {
            let currentIndex = questions[currentQ];
            profile[currentIndex.answer] = "n/a";
            submitQ(isForward);
          }
        } else {
          // if (isForward) {
          //styling for tip
          qHead.innerHTML = "Did You Know?";
          qHead.classList.add("tiphead");
          subQ.classList.add("tipsubhead");
          subQ.innerHTML = null;
          if (currentIndex.img != null) {
            let mapImage = document.createElement("img");
            mapImage.src = `./quizAssets/${currentIndex.img}`;
            mapImage.id = "map";
            quizBlock.appendChild(mapImage);
          }
          let tipHere = document.createElement("div");
          tipHere.id = "tip";
          let refinedTip = currentIndex.tip;
          tipHere.innerHTML = refinedTip;
          quizBlock.appendChild(tipHere);

          //btns for tip
          btnWrap.innerHTML = null;
          let backBtn = document.createElement("button");
          submitBtn.id = "nextBtn";
          if (currentQ < questions.length - 1) {
            submitBtn.innerHTML = "next";
            submitBtn.onclick = () => {
              currentQ++;
              updateProgressbar();
              postQ(true);
              setTimeout(() => {
                qHead.classList.remove("tiphead");
                subQ.classList.remove("tipsubhead");
              }, 300);
            };
          } else {
            submitBtn.innerHTML = "next";
            submitBtn.onclick = displayPriorityChart;
          }
          submitBtn.type = "submit";
          backBtn.innerHTML = "back";
          backBtn.onclick = () => {
            currentQ = currentQ - 1;
            updateProgressbar();
            postQ(false);
            qHead.classList.remove("tiphead");
            subQ.classList.remove("tipsubhead");
          };
          backBtn.type = "button";
          btnWrap.appendChild(backBtn);
          btnWrap.appendChild(submitBtn);
          void quizBlock.offsetWidth;
          // } else {
          //   let currentIndex = questions[currentQ];
          //   profile[currentIndex.answer] = "n/a";
          //   submitQ(isForward);
          // }
        }
      }, 300);
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
          updateProgressbar();
          postQ(true);
        } else {
          currentQ = currentQ - 1;
          updateProgressbar();
          postQ(false);
        }
      }
    }
  }

  function backQ() {
    currentQ = currentQ - 1;
    updateProgressbar();
    postQ(false);
  }

  let quizBlock = document.createElement("form");
  quizBlock.onsubmit = () => {
    return false;
  };
  quizBlock.id = "quizBlock";

  setTimeout(() => {
    quizElement.innerHTML = null;
    document.getElementById("quizParent").classList.remove("startUp");
    document.addEventListener("keyup", handleKeyPress);
    quizElement.appendChild(qHead);
    quizElement.appendChild(subQ);
    quizElement.appendChild(quizBlock);
    quizElement.appendChild(btnWrap);
    document.getElementById("quizParent").appendChild(progressBar);
  }, 300);
  postQ(true);

  ///////////////////////////
  // PRIORITY CHART
  //////////////////////////

  function displayPriorityChart() {
    slideElement();
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
      "Uncover Mystery Illness",
      "Overall Health & Prevention",
    ];
    const goalRange = 3;
    let goalBlock = document.createElement("div");
    goalBlock.id = "goalBlock";

    //create header
    let headerEl = document.createElement("h1");
    headerEl.innerHTML = `Choose up to ${goalRange} Health Goals`;
    goalBlock.appendChild(headerEl);

    let subHead = document.createElement("h2");
    subHead.innerHTML = "Rank from most important (1) to least important (3)";
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

    //backbtn
    let newBackBtn = document.createElement("button");
    newBackBtn.id = "backBtn";
    newBackBtn.innerHTML = "back";
    newBackBtn.onclick = () => {
      setTimeout(() => {
        quizElement.innerHTML = null;
        // document.getElementById("quizParent").classList.remove("startUp");
        quizElement.appendChild(qHead);
        quizElement.appendChild(subQ);
        quizElement.appendChild(quizBlock);
        quizElement.appendChild(btnWrap);
      }, 300);
      backQ
    };

    //create finisj button
    endBtn.onclick = displayResults;
    endBtn.innerHTML = "finish";
    endBtn.id = "nextBtn";
    let newBtnWrap = document.createElement("div");
    newBtnWrap.id = "btnWrap";

    newBtnWrap.appendChild(newBackBtn);
    newBtnWrap.appendChild(endBtn);
    goalBlock.appendChild(newBtnWrap);

    setTimeout(() => {
      quizElement.innerHTML = null;
      quizElement.appendChild(goalBlock);
    }, 300);
  }

  //////////////////////////////
  // RESULTS
  /////////////////////////////
  function displayResults() {
    slideElement();
    function distanceBlurb() {
      let blurb = document.createElement("div");
      let sectionHead = document.createElement("h2");
      let sectionText = document.createElement("p");

      blurb.classList.add("infoBlocks");
      if (profile.nearBelmar === "true") {
        sectionHead.innerHTML = "In-Person Care";
        sectionText.innerHTML =
          "Located in Belmar, New Jersey, Integrative Wellness Group has a beautiful state of the art facility equipped with technology, chiropractic treatment, a full detoxification spa (infrared sauna, ionic foot bath, yoni steam, cupping), and more. The feelings of tranquility are enhanced by the panoramic view of Belmar waterfront. If you’re local to the area, we would love to welcome you into our office to experience hands-on care & healing treatments on your journey.";
      } else {
        sectionHead.innerHTML = "Long Distance Care";
        sectionText.innerHTML =
          "We treat patients near and far. While telehealth is technically the term, we elevate the experience with personal touchpoints, virtual appointments, optional technology & treatment delivery, and much more.<a href='https://integrativewellnessgroup.dream.press/long-distance-patient/' target='_blank'>To learn more about our telehealth options, click here</a>";
      }
      blurb.appendChild(sectionHead);
      blurb.appendChild(sectionText);
      return blurb;
    }
    function detoxBlurb() {
      let blurb = document.createElement("div");
      blurb.classList.add("infoBlocks");
      let sectionHead = document.createElement("h2");
      let sectionText = document.createElement("p");
      sectionHead.innerHTML = "Detoxification";

      if (profile.sweat === "false") {
        sectionText.innerHTML =
          "To maintain your body’s detoxification pathways, you need to engage in active sweating! Our favorite method is the infrared sauna where you can sweat out your toxins.<a href='https://shop.integrativewellnessgroup.com/collections/spa-services' target='_blank'>To book your Spa Session, click here</a><i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>";
      } else {
        sectionText.innerHTML = `If you’re looking to maintain and/or enhance your body’s detoxification pathways, you need to engage in active sweating! Our favorite method is the infrared sauna where you can sweat out your toxins.<a href="https://shop.integrativewellnessgroup.com/collections/spa-services" target='_blank'>To book your Spa Session, click here</a><i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>`;
      }
      blurb.appendChild(sectionHead);
      blurb.appendChild(sectionText);
      return blurb;
    }
    function supplementBlurb() {
      let blurb = document.createElement("div");
      blurb.classList.add("infoBlocks");
      let sectionHead = document.createElement("h2");
      let sectionText = document.createElement("p");
      sectionHead.innerHTML = "Integrative Response Testing";
      sectionText.innerHTML =
        "At Integrative Wellness Group, we pride ourselves on testing (not guessing). Through IRT (Integrative Response Testing), our team is able to determine which supplements, services, and therapies will benefit you best at every stage of your wellness journey. Most patients are surprised that every supplement they consume should be personally tested for them… and a person’s supplement recommendations change over time as their bodies evolve and heal. IRT is included in every program we offer and implemented during the testing and reevaluation stage!";
      blurb.appendChild(sectionHead);
      blurb.appendChild(sectionText);
      return blurb;
    }
    function additionalOptions() {
      let somethingInThere = false;
      let blurb = document.createElement("div");
      //thermography
      if (
        profile.diagnose.indexOf("Breast Tissue or Lymphatic Abnormality") > -1
      ) {
        somethingInThere = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Thermography";
        sectionText.innerHTML = `The Alfathermo thermographic imaging machine is used to evaluate breast health, lymphatic health, neoplastic changes, musculoskeletal issues, vascular disease, dental issues, thyroid conditions, and extracranial cerebral and facial vascular disease. Thermography testing is recommended for everyone, although we place special emphasis on those with breast or lymphatic irregularities.<a href="https://shop.integrativewellnessgroup.com/products/hyperbaric-chamber" target='_blank'>To book your Thermography Session, click here</a>.<i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }
      //Hyperbaric Chamber
      if (
        profile.exIntense.includes("Intense") ||
        profile.diagnose.indexOf("Surgery Within Past 1 Year") > -1
      ) {
        somethingInThere = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Hyperbaric Chamber";
        sectionText.innerHTML = `The hyperbaric chamber is an enclosed pressurized pod where atmospheric pressure is raised 2-3 times regular air pressure. This therapy is recommended for those who would benefit from increased oxygen in blood which improves recovery time, speeds up wound healing, and decreases swelling.<a href="https://shop.integrativewellnessgroup.com/products/hyperbaric-chamber" target='_blank'>To book your Hyperbaric Chamber Session, click here</a><i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }
      //Chiropractic Care
      if (
        profile.nearBelmar === "true" &&
        (profile.exIntense != "Low (walking, yoga)" ||
          profile.diagnose.indexOf("Chronic Pain") > -1 ||
          profile.diagnose.indexOf("Surgery Within Past 1 Year") > -1 ||
          profile.pregnant == "Postpartum" ||
          profile.goals.top == "Overall Health & Prevention" ||
          profile.goals.mid == "Overall Health & Prevention" ||
          profile.goals.low == "Overall Health & Prevention")
      ) {
        somethingInThere = true;
        let subSection = document.createElement("div");
        let sectionHead = document.createElement("h2");
        subSection.classList.add("infoBlocks");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Chiropractic Care";
        sectionText.innerHTML = `Chiropractic care with IWG is a full-body approach to decreasing pain and increasing function by realigning the joints of the spine and extremities (knees, shoulders, feet). Our chiropractors also eliminate tension with muscle release therapy and work to restore proper function with rehabilitation and cold laser therapy. We recommend this therapy for anyone looking to improve their overall wellness as well as those experiencing chronic or prolonged pain.<a href="https://shop.integrativewellnessgroup.com/collections/iwg-signature-programs/products/chiropractic-exam-for-new-patients" target='_blank'>To book your Chiropractic Onboarding, click here</a><i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }

      //Demartini Method
      if (
        profile.diagnose.indexOf(
          "Mental Health (Depression, Anxiety, OCD, etc.)"
        ) > -1 ||
        profile.interest == "Yes"
      ) {
        somethingInThere = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "The Demartini Method®";
        sectionText.innerHTML = `The DeMartini Method® is a breakthrough discovery and cutting edge personal transformation methodology that results in a new perspective and paradigm in thinking and feeling. Developed by Dr. John DeMartini, it is the culmination of more than 44 years of research and studies in numerous disciplines including physics, philosophy, theology, metaphysics, psychology, astronomy, mathematics, neurology and physiology. The DeMartini Method is the most powerful, effective and efficient methodology in personal transformation providing lifelong results that can shift your mindset.<a href="https://shop.integrativewellnessgroup.com/collections/iwg-signature-programs/products/the-demartini-method-group" target='_blank'>To book your Demartini Method, click here</a><i>There is no consultation call required for this therapy. Once purchased, our team will reach out to schedule.</i>
      `;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }
      if (somethingInThere != false) {
        return blurb;
      } else {
        return false;
      }
    }
    function programOptions() {
      let alreadyAssigned = false;
      let blurb = document.createElement("div");
      //Pediatric
      if (profile.age == "0-13") {
        alreadyAssigned = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Pediatrics";
        sectionText.innerHTML = `This program is catered to the kiddos! Parents, we understand that your child deserves the best and we’re here to support you. Complete with lab tests, therapies and personalized recommendations for your growing child, our support system is designed to help your child thrive. We’ve even got a candy milkshake smoothie guide (where no one can taste the spirulina!)<a href="https://integrativewellnessgroup.com/start-your-journey/" target='_blank'>For your Prenatal & Pregnancy Program, click here to book a consultation call</a>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }

      //Pregnancy & Fertility
      else if (
        (profile.pregnant != "None of the above" &&
          profile.pregnant != "n/a") ||
        profile.diagnose.indexOf(
          "Hormonal (PCOS, Cycle Issues, Endometriosis, etc.)"
        ) > -1
      ) {
        alreadyAssigned = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Prenatal & Pregnancy";
        sectionText.innerHTML = `This program is for anyone looking for care during their pregnancy or the journey to get there. Our team structures the pregnancy portion of this program to best support each individual during their journey, even trimester by trimester. Whether you’re struggling with conception or pregnancy care, we’re here to help.<a href="https://integrativewellnessgroup.com/start-your-journey/" target='_blank'>For your Prenatal & Pregnancy Program, click here to book a consultation call</a>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }

      //Integrative Intensive
      if (
        profile.diagnose.length > 3 ||
        profile.diagnose.indexOf("Cancer") > -1 ||
        profile.diagnose.indexOf("Mystery Illness") > -1
      ) {
        alreadyAssigned = true;
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Integrative Intensive";
        sectionText.innerHTML = `Our intensive program is perfect for someone who has been on the merry-go-round of NO answers and NO solutions to their symptoms. The advanced testing used in this program allows your doctors to target the root cause of your issues and create a personalized healing approach that allows you to get your life back. This program has helped people with autoimmune conditions, hormonal issues, mystery illness, Lyme disease, toxicity, thyroid issues, migraines, neurological issues, concussions, mental health issues, and so much more!<a href="https://integrativewellnessgroup.com/start-your-journey/" target='_blank'>For your Integrative Intensive Program, click here to book a consultation call</a>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }

      //Functional Medicine
      if (alreadyAssigned == false) {
        let subSection = document.createElement("div");
        subSection.classList.add("infoBlocks");
        let sectionHead = document.createElement("h2");
        let sectionText = document.createElement("p");
        sectionHead.innerHTML = "Functional Medicine";
        sectionText.innerHTML = `This program is perfect for those looking to personalize & solidify their path to wellness with an Integrative Medicine evaluation, complete with essential lab tests and recommendations for your diet and lifestyle. Our functional medicine practitioners meet with every patient to create a custom plan that meets their INDIVIDUAL needs and preferences.⁠<a href="https://integrativewellnessgroup.com/start-your-journey/" target='_blank'>For your Prenatal & Pregnancy Program, click here to book a consultation call</a>`;
        subSection.appendChild(sectionHead);
        subSection.appendChild(sectionText);
        blurb.appendChild(subSection);
      }
      return blurb;
    }

    let resultsBlock = document.createElement("div");
    resultsBlock.id = "resultsBlock";
    let headerImage = document.createElement("img");
    headerImage.id = "resultsHeaderImg";
    headerImage.src = "/quizAssets/resultsHead.png";
    let resultHeader = document.createElement("h1");
    resultHeader.innerHTML = `${profile.name}'s Healing Journey`;
    resultsBlock.appendChild(resultHeader);

    let resultInfo = document.createElement("div");
    resultInfo.id = "resultInfo";

    //intro
    // let intro = document.createElement("div");
    // let introHead = document.createElement("h2");
    // intro.classList.add("infoBlocks");
    // intro.classList.add("intro");
    // introHead.innerHTML = "IWG: <span>We don’t guess, we test.</span>";
    // intro.appendChild(introHead);
    // let introText = document.createElement("p");
    // introText.innerHTML = `At Integrative Wellness Group, you, the patient, come first. Our therapies, testing, and treatment are customized to assess and heal your body. Our practitioners spend time getting to know you and your wellness journey so we can empower you to take back control of your health.`;
    // intro.appendChild(introText);
    // resultInfo.appendChild(intro);

    resultsBlock.appendChild(headerImage);

    let programHeader = document.createElement("h1");
    programHeader.id = "programHeader";
    programHeader.innerHTML = "Program";
    resultsBlock.appendChild(programHeader);

    resultInfo.appendChild(distanceBlurb());
    resultInfo.appendChild(detoxBlurb());
    if (profile.supplements === "true") {
      resultInfo.appendChild(supplementBlurb());
    }
    if (additionalOptions()) {
      resultInfo.appendChild(additionalOptions());
    }
    resultInfo.appendChild(programOptions());

    let finalBtn = document.createElement("a");
    finalBtn.href = "https://integrativewellnessgroup.com/start-your-journey/";
    finalBtn.target = "_blank";
    finalBtn.id = "finalBtn";
    finalBtn.innerHTML =
      "To learn more about IWG or any of the information above, please book a complimentary consultation with one of our health coaches.";
    //pump it out
    resultsBlock.appendChild(resultInfo);
    resultsBlock.appendChild(finalBtn);
    setTimeout(() => {
      quizElement.innerHTML = null;
      quizElement.appendChild(resultsBlock);
    }, 300);
  }

  function slideElement() {
    quizElement.classList.remove("slidein");
    quizElement.classList.remove("slideinBW");
    quizElement.classList.add("slideout");
    setTimeout(() => {
      quizElement.classList.remove("slideout");
      quizElement.classList.add("slidein");
    }, 300);
  }

  function slideElementBW() {
    quizElement.classList.remove("slidein");
    quizElement.classList.remove("slideinBW");
    quizElement.classList.add("slideoutBW");
    setTimeout(() => {
      quizElement.classList.remove("slideoutBW");
      quizElement.classList.add("slideinBW");
    }, 300);
  }
}
