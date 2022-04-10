import { useCallback, useState, useRef } from 'react';
import './App.css'

import 'survey-react/modern.min.css';
import { Survey, StylesManager, Model } from 'survey-react';

StylesManager.applyTheme("modern");

const surveyJson = {
  pages: [{
    elements: [{
      type: "html",
      html: "<h2>In this survey, we will ask you a couple questions to calculate your good life scores.</h2>"
    }]
  },
  {
    elements: [
    {
        "type": "boolean",
        "name": "community",
        "title": "Community",
        "label": "Do you have a community?",
        "isRequired": true
    }
]},

{
  elements: [
  {
      "type": "boolean",
      "name": "relationshipLoved",
      "title": "Relationshiop",
      "label": "Do you have a person you love?",
      "isRequired": true
  },
  {
    "type": "boolean",
    "name": "relationshipFriend",
    "title": "Relationshiop",
    "label": "Do you have a friend you can rely on?",
    "isRequired": true
}
]},

{
  elements: [
  {
      "type": "boolean",
      "name": "wealth",
      "title": "Wealth",
      "label": "Can we find happiness in wealth?",
      "isRequired": true
  },
  
]},
{
  elements: [
  {
      "type": "boolean",
      "name": "ability",
      "title": "Ability",
      "label": "Do you have the ability to change the world?",
      "isRequired": true
  },
  
]},
{
  elements: [
  {
      "type": "boolean",
      "name": "hospitality",
      "title": "Hospitality",
      "label": "Are you friendly towards strangers?",
      "isRequired": true
  },
  
]},{
  elements: [
  {
      "type": "boolean",
      "name": "peace",
      "title": "Peace",
      "label": "Do you have a trauma?",
      "isRequired": true
  },
  
]},
{
  elements: [
  {
      "type": "boolean",
      "name": "ability",
      "title": "Ability",
      "label": "Do you have a power to control someone?",
      "isRequired": true
  },
  
]},
{
  elements: [
    {
      name: "wisdom and Spirituality",
      title: "On a scale of zero to ten, how likely are you spiritually connected to God?",
      type: "rating",
      rateMin: 0,
      rateMax: 10,
    }
  
]},

{
  elements: [
    {
      name: "Freedom",
      title: "On a scale of zero to ten, how likely do you feel you are freed?",
      type: "rating",
      rateMin: 0,
      rateMax: 10,
    }
  
]},


  //  {
  //   elements: [{
  //     name: "satisfaction-score",
  //     title: "How would you describe your life as it is?",
  //     type: "radiogroup",
  //     choices: [
  //       { value: 5, text: "Fully satisfying" },
  //       { value: 4, text: "Generally satisfying" },
  //       { value: 3, text: "Neutral" },
  //       { value: 2, text: "Rather unsatisfying" },
  //       { value: 1, text: "Not satisfying at all" }
  //     ],
  //     isRequired: true
  //   },
  // ]
  // }, 

  // {
  //   elements: [

    
  //    {
  //     name: "nps-score",
  //     title: "On a scale of zero to ten, how likely are you to be happy?",
  //     type: "rating",
  //     rateMin: 0,
  //     rateMax: 10,
  //   }],
  //   visibleIf: "{satisfaction-score} >= 4"
  // }, {
  //   elements: [{
  //     name: "how-can-we-improve",
  //     title: "In your opinion, how could we improve our product?",
  //     type: "comment"
  //   }],
  //   visibleIf: "{satisfaction-score} = 3"
  // }, {
  //   elements: [{
  //     name: "disappointing-experience",
  //     title: "Please let us know why you had such a disappointing experience with our product",
  //     type: "comment"
  //   }],
  //   visibleIf: "{satisfaction-score} =< 2"
  // }


],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Take the Survey",
  completedHtml: "Thank you for your feedback!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function App() {
  // useRef enables the Model object to persist between state changes
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default App;