$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featureFile/addNumber.feature");
formatter.feature({
  "line": 1,
  "name": "Multiple number add test",
  "description": "\r\nAs a user I want to to add multiple numbers to the list",
  "id": "multiple-number-add-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should able to add multiple numbers to the list",
  "description": "",
  "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add \"\u003cNumber1\u003e\" in blank field and I click on Add a number button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add \"\u003cNumber2\u003e\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \"\u003cNumber3\u003e\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to see \"\u003cNumber1\u003e\",\"\u003cNumber2\u003e\" and \"\u003cNumber3\u003e\" added successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;",
  "rows": [
    {
      "cells": [
        "Number1",
        "Number2",
        "Number3"
      ],
      "line": 13,
      "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;1"
    },
    {
      "cells": [
        "98",
        "657",
        "9765"
      ],
      "line": 14,
      "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;2"
    },
    {
      "cells": [
        "87",
        "8759",
        "139"
      ],
      "line": 15,
      "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;3"
    },
    {
      "cells": [
        "148",
        "8",
        "74"
      ],
      "line": 16,
      "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2361418400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should able to add multiple numbers to the list",
  "description": "",
  "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add \"98\" in blank field and I click on Add a number button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add \"657\" in blank field and I click on Add a number button",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \"9765\" in blank field and I click on Add a number button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to see \"98\",\"657\" and \"9765\" added successfully",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 84257800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 800256800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "657",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 854811600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9765",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 742191500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "98",
      "offset": 18
    },
    {
      "val": "657",
      "offset": 23
    },
    {
      "val": "9765",
      "offset": 33
    }
  ],
  "location": "MyStepdefs.iAmAbleToSeeAndAddedSuccessfully(String,String,String)"
});
formatter.result({
  "duration": 646395300,
  "status": "passed"
});
formatter.after({
  "duration": 643691000,
  "status": "passed"
});
formatter.before({
  "duration": 1469540200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should able to add multiple numbers to the list",
  "description": "",
  "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add \"87\" in blank field and I click on Add a number button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add \"8759\" in blank field and I click on Add a number button",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \"139\" in blank field and I click on Add a number button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to see \"87\",\"8759\" and \"139\" added successfully",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 800553900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8759",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 817004800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "139",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 732415100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87",
      "offset": 18
    },
    {
      "val": "8759",
      "offset": 23
    },
    {
      "val": "139",
      "offset": 34
    }
  ],
  "location": "MyStepdefs.iAmAbleToSeeAndAddedSuccessfully(String,String,String)"
});
formatter.result({
  "duration": 647871500,
  "status": "passed"
});
formatter.after({
  "duration": 613793800,
  "status": "passed"
});
formatter.before({
  "duration": 1492652700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should able to add multiple numbers to the list",
  "description": "",
  "id": "multiple-number-add-test;user-should-able-to-add-multiple-numbers-to-the-list;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    },
    {
      "line": 5,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I add \"148\" in blank field and I click on Add a number button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I add \"8\" in blank field and I click on Add a number button",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I add \"74\" in blank field and I click on Add a number button",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I am able to see \"148\",\"8\" and \"74\" added successfully",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 26300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 835896300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 768431700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "74",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 730515300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "148",
      "offset": 18
    },
    {
      "val": "8",
      "offset": 24
    },
    {
      "val": "74",
      "offset": 32
    }
  ],
  "location": "MyStepdefs.iAmAbleToSeeAndAddedSuccessfully(String,String,String)"
});
formatter.result({
  "duration": 648194900,
  "status": "passed"
});
formatter.after({
  "duration": 623796300,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featureFile/arithmetic.feature");
formatter.feature({
  "line": 1,
  "name": "Arithmetic Test",
  "description": "\r\nAs a user I want to calculate the total of the added list",
  "id": "arithmetic-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1438804800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I added multiple numbers in list",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add \"5876\" in blank field and I click on Add a number button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add \"48\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add \"864\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5876",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 780163900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 753435200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "864",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 730318000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should able to calculate total of listed numbers",
  "description": "",
  "id": "arithmetic-test;user-should-able-to-calculate-total-of-listed-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Smoke"
    },
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I added multiple numbers in list",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on Calculate Total",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAddedMultipleNumbersInList()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnCalculateTotal()"
});
formatter.result({
  "duration": 71733700,
  "status": "passed"
});
formatter.after({
  "duration": 597924200,
  "status": "passed"
});
formatter.before({
  "duration": 1453957800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I added multiple numbers in list",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add \"5876\" in blank field and I click on Add a number button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add \"48\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add \"864\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 19600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5876",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 812826500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 790002800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "864",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 725179400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should able to calculate the total of listed number correctly",
  "description": "",
  "id": "arithmetic-test;user-should-able-to-calculate-the-total-of-listed-number-correctly",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Sanity"
    },
    {
      "line": 16,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I added multiple numbers in list",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Calculate Total",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I am able to get total of added numbers correctly which is equals to\"6788\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAddedMultipleNumbersInList()"
});
formatter.result({
  "duration": 20200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnCalculateTotal()"
});
formatter.result({
  "duration": 74263800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6788",
      "offset": 69
    }
  ],
  "location": "MyStepdefs.iAmAbleToGetTotalOfAddedNumbersCorrectlyWhichIsEqualsTo(String)"
});
formatter.result({
  "duration": 1057089100,
  "status": "passed"
});
formatter.after({
  "duration": 630991800,
  "status": "passed"
});
formatter.before({
  "duration": 1406971800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I added multiple numbers in list",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add \"5876\" in blank field and I click on Add a number button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add \"48\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add \"864\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 25400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5876",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 874926900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 755154000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "864",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 739714300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should able to remove a number from list successfully",
  "description": "",
  "id": "arithmetic-test;user-should-able-to-remove-a-number-from-list-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Sanity"
    },
    {
      "line": 22,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I added multiple numbers in list",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I remove last added number from list",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I am able to see last added number \"864\" removed from list successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAddedMultipleNumbersInList()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iRemoveLastAddedNumberFromList()"
});
formatter.result({
  "duration": 577491900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "864",
      "offset": 36
    }
  ],
  "location": "MyStepdefs.iAmAbleToSeeLastAddedNumberRemovedFromListSuccessfully(String)"
});
formatter.result({
  "duration": 20132539800,
  "status": "passed"
});
formatter.after({
  "duration": 652071900,
  "status": "passed"
});
formatter.before({
  "duration": 1589449200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I added multiple numbers in list",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I add \"5876\" in blank field and I click on Add a number button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I add \"48\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I add \"864\" in blank field and I click on Add a number button",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5876",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 793327800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 740678600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "864",
      "offset": 7
    }
  ],
  "location": "MyStepdefs.iAddInBlankFieldAndIClickOnAddANumberButton(String)"
});
formatter.result({
  "duration": 737066700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should able to recalculate after remove number and validate the total successfully",
  "description": "",
  "id": "arithmetic-test;user-should-able-to-recalculate-after-remove-number-and-validate-the-total-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I added multiple numbers in list",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I remove last added number from list",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I click on Calculate Total",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should able to see total is equals to \"5924\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAddedMultipleNumbersInList()"
});
formatter.result({
  "duration": 12600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iRemoveLastAddedNumberFromList()"
});
formatter.result({
  "duration": 579380400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnCalculateTotal()"
});
formatter.result({
  "duration": 81532400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5924",
      "offset": 41
    }
  ],
  "location": "MyStepdefs.iShouldAbleToSeeTotalIsEqualsTo(String)"
});
formatter.result({
  "duration": 35211100,
  "status": "passed"
});
formatter.after({
  "duration": 644967300,
  "status": "passed"
});
});