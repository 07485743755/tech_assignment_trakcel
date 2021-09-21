Feature: Multiple number add test

  As a user I want to to add multiple numbers to the list

  @Smoke @Smoke @Regression
  Scenario Outline: User should able to add multiple numbers to the list
    Given I am on homepage
    When  I add "<Number1>" in blank field and I click on Add a number button
    And   I add "<Number2>" in blank field and I click on Add a number button
    And   I add "<Number3>" in blank field and I click on Add a number button
    Then  I am able to see "<Number1>","<Number2>" and "<Number3>" added successfully
    Examples:
      | Number1 | Number2 | Number3 |
      | 98      | 657     | 9765    |
      | 87      | 8759    | 139     |
      | 148     | 8       | 74      |
