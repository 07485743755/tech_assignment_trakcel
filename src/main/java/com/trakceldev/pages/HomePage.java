package com.trakceldev.pages;

import com.trakceldev.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends Utility {


    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//input[@id='candidate']")
    WebElement blankField;

    @FindBy(xpath = "//button[contains(text(),'Add a number')]")
    WebElement addNumberBtn;

    @FindBy(xpath = "//button[contains(text(),'Remove a number')]")
    WebElement removeNumberBtn;

    @FindBy(xpath = "//button[contains(text(),'Calculate Total')]")
    WebElement calculateTotalBtn;

    @FindBy(xpath = "//span[@class='total_value']")
    WebElement total;

    @FindBy(xpath = "(//ul[@id='dynamic-list']//li)[1]")
    WebElement addedNumber1;

    @FindBy(xpath = "(//ul[@id='dynamic-list']//li)[2]")
    WebElement addedNumber2;

    @FindBy(xpath = "(//ul[@id='dynamic-list']//li)[3]")
    WebElement addedNumber3;


    public void enterNumberInBlankField(String number) {

        clearTextFromField(blankField);
        log.info("Enter Number : " + number + " In blank field : " + blankField.toString());
        sendTextToElement(blankField, number);
    }

    public void clickOnAddNumberBtn() {

        log.info("Click on Add a number button : " + addNumberBtn.toString());
        clickOnElement(addNumberBtn);
    }

    public void clickOnRemoveNumberBtn() {

        log.info("Click on Remove a number button : " + removeNumberBtn.toString());
        clickOnElement(removeNumberBtn);
    }

    public void clickOnCalculateTotalBtn() {

        log.info("Click on Calculate Total button : " + calculateTotalBtn.toString());
        clickOnElement(calculateTotalBtn);
    }

    public String getTotalValue() {

        log.info("Getting text from : " + total.toString());
        return getTextFromElement(total);
    }

    public String getAddedNumber1(){

        log.info("Getting added number 1 from : "+addedNumber1.toString());
        return getTextFromElement(addedNumber1);
    }

    public String getAddedNumber2(){

        log.info("Getting added number 2 from : "+addedNumber2.toString());
        return getTextFromElement(addedNumber2);
    }

    public String getAddedNumber3(){

        log.info("Getting added number 3 from : "+addedNumber3.toString());
        return getTextFromElement(addedNumber3);
    }
}
