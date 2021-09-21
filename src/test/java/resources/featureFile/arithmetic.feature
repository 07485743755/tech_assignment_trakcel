Feature: Arithmetic Test

  As a user I want to calculate the total of the added list

  Background: I added multiple numbers in list
    Given I am on homepage
    When  I add "5876" in blank field and I click on Add a number button
    And   I add "48" in blank field and I click on Add a number button
    And   I add "864" in blank field and I click on Add a number button

  @Smoke @Sanity @Regression
  Scenario: User should able to calculate total of listed numbers
    Given I added multiple numbers in list
    Then  I click on Calculate Total

  @Sanity @Regression
  Scenario: User should able to calculate the total of listed number correctly
    Given   I added multiple numbers in list
    When    I click on Calculate Total
    Then    I am able to get total of added numbers correctly which is equals to"6788"

  @Sanity @Regression
  Scenario: User should able to remove a number from list successfully
    Given   I added multiple numbers in list
    When    I remove last added number from list
    Then    I am able to see last added number "864" removed from list successfully

  @Regression
  Scenario: User should able to recalculate after remove number and validate the total successfully
    Given   I added multiple numbers in list
    When    I remove last added number from list
    And     I click on Calculate Total
    Then    I should able to see total is equals to "5924"