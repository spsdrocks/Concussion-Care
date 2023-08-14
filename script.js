//Title: Concussion Care





//Start of functions


//Temp spot
function copySiteLink() {

    function removePopup() {
        document.getElementById("popupText").innerHTML = "";
        document.getElementById("popupText").style.display = "none";
    } 

    navigator.clipboard.writeText("https://github.com/spsdrocks/Concussion-Care");
    setTimeout(removePopup, 4500);
  document.getElementById("popupText").style.display = "block";
    document.getElementById("popupText").innerHTML = "Site Link Copied to Clipboard";
    
    
}



//Program manager
function programManager(stageNumber) {
  switch (stageNumber) {
    case 1:
      stageOne();
      break;

    case 2:
      stageTwo();
      break;

    case 3:
      stageThree();
      break;

    case 4:
      stageFour()
      break;

    case 5:
      stageFive()
      break;

    case 6:
      stageSix()
      break;

    case 7:
      stageSeven()
      break;

    default:
      userInfo.currentStage = 1;
      stageOne()
      break;
  }
}





//Step 1: rest
function stageOne() {
  let stageOneOk = ["Short board games", "Short phone calls", "Crafts"];
  let stageOneNo = ["School/Work", "Physical excercise", "Sports"];
  let stageOneQuestions = ["How do you feel doing short, cognitive, non-technological activities?", "How do you feel on the phone?", "How are you doing crafts?", "How are your overall symptoms?"];

  userInfo.stageQuestions = stageOneQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number One | Rest";
  document.getElementById("stage-information").innerHTML = "This is the rest stage of your recovery. In this stage you will want to rest for 24-48 hours.";

  stageQuestionPrinter(stageOneOk, stageOneNo, stageOneQuestions);
}





//Step 2: light brain activity
function stageTwo() {
  let stageTwoOk = ["Light reading", "Short ammounts of TV", "Some social activity"];
  let stageTwoNo = ["School", "Work", "Physical excercise", "Sports"];
  let stageTwoQuestions = ["How do you feel when doing creative thinking activities?", "How do you when socializing?", "How is your ability to do more than 30 minutes of cognitive activity at once?", "How do you feel while reading" ];

  userInfo.stageQuestions = stageTwoQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number Two | Light Cognitive Activity";
  document.getElementById("stage-information").innerHTML = "This stage focuses on bringing back light cognitive abilities like reading and conversation.";

  stageQuestionPrinter(stageTwoOk, stageTwoNo, stageTwoQuestions);
}





//Step 3: light school work/physical activity
function stageThree() {
  let stageThreeOk = ["School/Work activities in short ammounts", "Light physical activity"];
  let stageThreeNo = ["School/Work", "Heavy physical activity", "Sports"];
  let stageThreeQuestions = ["How is your ability to do at least an hour of cognitive activity in chunks?", "How do you feel while doing light physical activity?", "How do you feel while not doing anything?"];

  userInfo.stageQuestions = stageThreeQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number Three | Light Work and Physical Activity";
  document.getElementById("stage-information").innerHTML = "In this stage you will ease back into school/work while continuing to develop your cognitive ability.";

  stageQuestionPrinter(stageThreeOk, stageThreeNo, stageThreeQuestions);
}





//Step 4: part-time light load
function stageFour() {
  let stageFourOk = ["Up to 2 hours cognitive activity", "Half school/work days", "Light physical activity"];
  let stageFourNo = ["Heavy physical activity", "Tests/Meetings", "Homework/Extra work", "Sports"];
  let stageFourQuestions = ["How is you ability to attend work/school part time?", "How do you feel while doing physical activity?", "How is your ability to focus on a task for longer than 30 minutes?"];

  userInfo.stageQuestions = stageFourQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number Four | Part Time Work With Light Load";
  document.getElementById("stage-information").innerHTML = "While you continue to increase cognitive and work activities you will begin light activity.";

  stageQuestionPrinter(stageFourOk, stageFourNo, stageFourQuestions);
}





//Step 5: part-time moderate
function stageFive() {
  let stageFiveOk = ["Limited tests/meetings", "4-5 hour school/work days", "Homework/Extra work in short chunks"];
  let stageFiveNo = ["Heavy physical activity", "Long tests/meetings", "Full sport participation"];
  let stageFiveQuestions = ["How do you feel during extended periods of brain use?", "How is your attention span?", "Do you feel any symptoms during school/work?", "How is your ability to go to school/work for the majority of the week at reduced hours?"];

  userInfo.stageQuestions = stageFiveQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number Five | Part Time Work With Medium Load";
  document.getElementById("stage-information").innerHTML = "In this stage you will continue to increase activities from before while returning to light homework/extra work.";

  stageQuestionPrinter(stageFiveOk, stageFiveNo, stageFiveQuestions);
}





//Step 6: nearly normal work
function stageSix() {
  let stageSixOk = ["Near normal cognitive activity", "School/work full time", "Homework/Extra work up to 1 hour",];
  let stageSixNo = ["Heavy physical activity", "Long tests/meetings", "Full sport participation"];
  let stageSixQuestions = ["How do you feel during extended period of physical exercise?", "How do you feel during a full week of work/school?", "How do you feel about going back to your preconcussion routine?"];

  userInfo.stageQuestions = stageSixQuestions.length;
  
  document.getElementById("stage-number").innerHTML = "Stage Number Six | Nearly Normal Work load";
  document.getElementById("stage-information").innerHTML = "This stage simply continues to expand the things from the previous stages.";

  stageQuestionPrinter(stageSixOk, stageSixNo, stageSixQuestions);
}





//Step 7: full time
function stageSeven() {
  let stageSevenOk = ["Normal cognitive activity", "Normal school/work", "Normal physical activity"];
  let stageSevenNo = ["Full sport participation (Must be cleared by doctor)"];
  
  document.getElementById("stage-number").innerHTML = "Stage Number Seven | Full Time";
  document.getElementById("stage-information").innerHTML = "By this stage you should feel better in most areas except contact activities like some sports.";

  stageQuestionPrinter(stageSevenOk, stageSevenNo, 0);
}





//Question printer
function stageQuestionPrinter(stageOk, stageNo, stageQuestions) {
  let okText = "<ul>";
  for (let i = 0; i < stageOk.length; i++) {
    okText += ("<li>" + stageOk[i] + "</li>");
  }
  okText += "</ul>";

  let noText = "<ul>";
  for (let j = 0; j < stageNo.length; j++) {
    noText += ("<li>" + stageNo[j] + "</li>");
  }
  noText += "</ul>";

  document.getElementById("stage-ok-list").innerHTML = okText;
  document.getElementById("stage-no-list").innerHTML = noText;

  let formQuestions = "<div>"
  for (let k = 0; k < stageQuestions.length; k++) {
    formQuestions += (`<label class="select-label" for="question-${k + 1}" id="question-${k + 1}-label">${stageQuestions[k]}<br /></label>
                        <select class="select-box" name="queston-${k + 1}" id="question-${k + 1}">
                          <option value="2">Good</option>
                          <option value="1">Ok</option> 
                          <option value="0">Bad</option>
                        </select><br />`);
  }
  formQuestions += "</div>";

  document.getElementById("stage-form").innerHTML = formQuestions;
}





//Result checker
function resultChecker() {
  let questionsResult = 0;

  
  for (i = 0; i < userInfo.stageQuestions; i++) {
    questionsResult += (parseInt(document.getElementById(`question-${i + 1}`).value));
  }

  questionsResult /= userInfo.stageQuestions;

  if (questionsResult == 2) {
    document.getElementById("print-result").innerHTML = "";
    userInfo.currentStage += 1;
    programManager(userInfo.currentStage);
    
  } else if (questionsResult <= 0.5) {
    document.getElementById("print-result").innerHTML = "";
    (userInfo.currentStage == 1) ? userInfo.currentStage = 1 : userInfo.currentStage -= 1;
    programManager(userInfo.currentStage);
    
  } else {
    document.getElementById("print-result").innerHTML = "You are not ready for the next stage. Take at least one more day before moving on.";
  }

  if (userInfo.currentStage == 7) {
    document.getElementById("print-result").innerHTML = "You are now healed from your concussion, please refer to a doctor before returning fully to any sports."
    document.getElementById("submit-button").style.display = "none";
  }
}





//End of functions





//Beginning of program





//Variable declaration
let userInfo = {
  userName: "John Doe",
  currentStage: null,
  stageQuestions: null,
}
//Variable declaration





//Start of main
programManager(userInfo.currentStage);
//End of main





//End of program