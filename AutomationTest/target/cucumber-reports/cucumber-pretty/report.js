$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration.feature");
formatter.feature({
  "line": 1,
  "name": "Student Registration Form",
  "description": "",
  "id": "student-registration-form",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"\u003chomeAddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "student-registration-form;valid-registration;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email",
        "phoneNumber",
        "homeAddress"
      ],
      "line": 29,
      "id": "student-registration-form;valid-registration;;1"
    },
    {
      "cells": [
        "Oyin",
        "Odukudu",
        "oyinodukudu@gmail.com",
        "0746473647",
        "Glasgow, UK"
      ],
      "line": 30,
      "id": "student-registration-form;valid-registration;;2"
    },
    {
      "cells": [
        "Tanis",
        "Chase",
        "tanischase@gmail.com",
        "0746436887",
        "London, UK"
      ],
      "line": 31,
      "id": "student-registration-form;valid-registration;;3"
    },
    {
      "cells": [
        "Jack",
        "Phil",
        "jackphil@gmail.com",
        "0748457664",
        "Leeds, UK"
      ],
      "line": 32,
      "id": "student-registration-form;valid-registration;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7873331250,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on the demo site button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the practice form button",
  "keyword": "And "
});
formatter.match({
  "location": "registrationSteps.theUserNavigatesToTheWebsite()"
});
formatter.result({
  "duration": 429593333,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheDemoSiteButton()"
});
formatter.result({
  "duration": 196508000,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheForm()"
});
formatter.result({
  "duration": 2490365625,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksThePracticeFormButton()"
});
formatter.result({
  "duration": 851209459,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"Oyin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"Odukudu\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"oyinodukudu@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"0746473647\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"Glasgow, UK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Oyin",
      "offset": 27
    }
  ],
  "location": "registrationSteps.theUserEntersFirstname(String)"
});
formatter.result({
  "duration": 1079100917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Odukudu",
      "offset": 26
    }
  ],
  "location": "registrationSteps.theUserEntersLastname(String)"
});
formatter.result({
  "duration": 54449417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oyinodukudu@gmail.com",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersEmailAddress(String)"
});
formatter.result({
  "duration": 78456542,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsGenderOption()"
});
formatter.result({
  "duration": 593020750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0746473647",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersMobileNumber(String)"
});
formatter.result({
  "duration": 386580792,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserEntersDateOfBirth()"
});
formatter.result({
  "duration": 2381721375,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsHobbies()"
});
formatter.result({
  "duration": 234894375,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserUploadsAPicture()"
});
formatter.result({
  "duration": 121815125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow, UK",
      "offset": 25
    }
  ],
  "location": "registrationSteps.theUserEntersAddress(String)"
});
formatter.result({
  "duration": 99986750,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsAState()"
});
formatter.result({
  "duration": 180205167,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsACity()"
});
formatter.result({
  "duration": 88250666,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheSubmitButton()"
});
formatter.result({
  "duration": 337979417,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theFormIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 10096369417,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheCloseButton()"
});
formatter.result({
  "duration": 37848542,
  "status": "passed"
});
formatter.after({
  "duration": 274499083,
  "status": "passed"
});
formatter.before({
  "duration": 2534552500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on the demo site button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the practice form button",
  "keyword": "And "
});
formatter.match({
  "location": "registrationSteps.theUserNavigatesToTheWebsite()"
});
formatter.result({
  "duration": 554148334,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheDemoSiteButton()"
});
formatter.result({
  "duration": 129607792,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheForm()"
});
formatter.result({
  "duration": 3182150666,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksThePracticeFormButton()"
});
formatter.result({
  "duration": 732465875,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"Tanis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"Chase\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"tanischase@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"0746436887\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"London, UK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Tanis",
      "offset": 27
    }
  ],
  "location": "registrationSteps.theUserEntersFirstname(String)"
});
formatter.result({
  "duration": 704356833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chase",
      "offset": 26
    }
  ],
  "location": "registrationSteps.theUserEntersLastname(String)"
});
formatter.result({
  "duration": 157803625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tanischase@gmail.com",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersEmailAddress(String)"
});
formatter.result({
  "duration": 198131708,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsGenderOption()"
});
formatter.result({
  "duration": 388807667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0746436887",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersMobileNumber(String)"
});
formatter.result({
  "duration": 305240417,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserEntersDateOfBirth()"
});
formatter.result({
  "duration": 2243156166,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsHobbies()"
});
formatter.result({
  "duration": 276782167,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserUploadsAPicture()"
});
formatter.result({
  "duration": 81270291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London, UK",
      "offset": 25
    }
  ],
  "location": "registrationSteps.theUserEntersAddress(String)"
});
formatter.result({
  "duration": 94230334,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsAState()"
});
formatter.result({
  "duration": 193192000,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsACity()"
});
formatter.result({
  "duration": 131470417,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheSubmitButton()"
});
formatter.result({
  "duration": 421105750,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theFormIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 10092275250,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheCloseButton()"
});
formatter.result({
  "duration": 39437125,
  "status": "passed"
});
formatter.after({
  "duration": 294475208,
  "status": "passed"
});
formatter.before({
  "duration": 2570504250,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "the user navigates to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user clicks on the demo site button",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user clicks on the form",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the user clicks the practice form button",
  "keyword": "And "
});
formatter.match({
  "location": "registrationSteps.theUserNavigatesToTheWebsite()"
});
formatter.result({
  "duration": 513167458,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheDemoSiteButton()"
});
formatter.result({
  "duration": 174311417,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksOnTheForm()"
});
formatter.result({
  "duration": 2655283958,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksThePracticeFormButton()"
});
formatter.result({
  "duration": 996427125,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Valid Registration",
  "description": "",
  "id": "student-registration-form;valid-registration;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@regression"
    },
    {
      "line": 9,
      "name": "@valid"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "the user enters firstname \"Jack\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the user enters lastname \"Phil\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user enters email address \"jackphil@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user selects gender option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user enters mobile number \"0748457664\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user enters date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user selects hobbies",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user uploads a picture",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user enters address \"Leeds, UK\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user selects a state",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user selects a city",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user clicks the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the form is submitted successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    Then the form is submitted successfully with this message \"Thanks for submitting the form\""
    }
  ],
  "line": 26,
  "name": "the user clicks the close button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Jack",
      "offset": 27
    }
  ],
  "location": "registrationSteps.theUserEntersFirstname(String)"
});
formatter.result({
  "duration": 557353166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Phil",
      "offset": 26
    }
  ],
  "location": "registrationSteps.theUserEntersLastname(String)"
});
formatter.result({
  "duration": 163683875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jackphil@gmail.com",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersEmailAddress(String)"
});
formatter.result({
  "duration": 198474500,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsGenderOption()"
});
formatter.result({
  "duration": 360992709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0748457664",
      "offset": 31
    }
  ],
  "location": "registrationSteps.theUserEntersMobileNumber(String)"
});
formatter.result({
  "duration": 345336916,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserEntersDateOfBirth()"
});
formatter.result({
  "duration": 2217635042,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsHobbies()"
});
formatter.result({
  "duration": 287186167,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserUploadsAPicture()"
});
formatter.result({
  "duration": 95576208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leeds, UK",
      "offset": 25
    }
  ],
  "location": "registrationSteps.theUserEntersAddress(String)"
});
formatter.result({
  "duration": 100768833,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsAState()"
});
formatter.result({
  "duration": 233157250,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserSelectsACity()"
});
formatter.result({
  "duration": 78846250,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheSubmitButton()"
});
formatter.result({
  "duration": 385279458,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theFormIsSubmittedSuccessfully()"
});
formatter.result({
  "duration": 10070131875,
  "status": "passed"
});
formatter.match({
  "location": "registrationSteps.theUserClicksTheCloseButton()"
});
formatter.result({
  "duration": 38042209,
  "status": "passed"
});
formatter.after({
  "duration": 520291208,
  "status": "passed"
});
});