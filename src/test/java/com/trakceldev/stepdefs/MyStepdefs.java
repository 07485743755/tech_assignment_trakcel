package com.trakceldev.stepdefs;

import com.trakceldev.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class MyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I add \"([^\"]*)\" in blank field and I click on Add a number button$")
    public void iAddInBlankFieldAndIClickOnAddANumberButton(String number) throws InterruptedException {
        Thread.sleep(500);
        new HomePage().enterNumberInBlankField(number);
        new HomePage().clickOnAddNumberBtn();

    }

    @Then("^I am able to see \"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\" added successfully$")
    public void iAmAbleToSeeAndAddedSuccessfully(String expectedNumber1, String expectedNumber2, String expectedNumber3) throws InterruptedException {

        Thread.sleep(500);
        Assert.assertEquals(expectedNumber1, new HomePage().getAddedNumber1());
        Assert.assertEquals(expectedNumber2, new HomePage().getAddedNumber2());
        Assert.assertEquals(expectedNumber3, new HomePage().getAddedNumber3());

    }

    @Then("^I click on Calculate Total$")
    public void iClickOnCalculateTotal() {

        new HomePage().clickOnCalculateTotalBtn();

    }

    @Given("^I added multiple numbers in list$")
    public void iAddedMultipleNumbersInList() {

    }

    @Then("^I am able to get total of added numbers correctly which is equals to\"([^\"]*)\"$")
    public void iAmAbleToGetTotalOfAddedNumbersCorrectlyWhichIsEqualsTo(String expectedTotal) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedTotal,new HomePage().getTotalValue());
    }

    @When("^I remove last added number from list$")
    public void iRemoveLastAddedNumberFromList() throws InterruptedException {
        Thread.sleep(500);
        new HomePage().clickOnRemoveNumberBtn();
    }

    @Then("^I am able to see last added number \"([^\"]*)\" removed from list successfully$")
    public void iAmAbleToSeeLastAddedNumberRemovedFromListSuccessfully(String expectedNumber) {

        try {
            Assert.assertEquals(expectedNumber,new HomePage().getAddedNumber3());
        }catch (Exception e){

            System.out.println("\nNumber is removed successfully");
        }

    }

    @Then("^I should able to see total is equals to \"([^\"]*)\"$")
    public void iShouldAbleToSeeTotalIsEqualsTo(String expectedTotal)  {

        Assert.assertEquals(expectedTotal,new HomePage().getTotalValue());
    }
}
