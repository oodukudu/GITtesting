package pageObject;

import cucumber.api.java.eo.Se;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;

public class registrationPage {

    WebDriver webDriver;

    public registrationPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }

    @FindBy(how = How.XPATH, using = "//*[@id=\"accept-cookie-policy\"]")
    private WebElement cookieButton;

    @FindBy(xpath = "//*[contains(text(), 'Demo Site')]")
    private WebElement demoSiteButton;

    @FindBy(id = "close-fixedban")
    private WebElement adButton;

    @FindBy(xpath = "//span[contains(text(), 'Practice Form')]")
    private WebElement practiceFormButton;

    @FindBy(xpath = "//*[contains(text(), 'Forms')]")
    public WebElement formButton;

    @FindBy(id = "firstName")
    private WebElement userFirstName;

    @FindBy(id = "lastName")
    private WebElement userLastName;

    @FindBy(id = "userEmail")
    private WebElement userEmail;

    @FindBy(xpath = "//*[@id=\"genterWrapper\"]/div[2]/div[2]")
    public WebElement femaleGender;

    @FindBy(xpath = "//*[@id=\"genterWrapper\"]/div[2]/div[1]")
    public WebElement maleGender;

    @FindBy(id = "userNumber")
    private WebElement mobileNumber;

    @FindBy(xpath = "//*[@id=\"hobbiesWrapper\"]/div[2]/div[1]")
    private WebElement hobby_1;

    @FindBy(xpath = "//*[@id=\"hobbiesWrapper\"]/div[2]/div[2]")
    private WebElement hobby_2;

    @FindBy(css = "#currentAddress")
    private WebElement homeAddress;

    @FindBy(id = "dateOfBirthInput")
    private WebElement dobField;

    @FindBy(xpath = "//*[@id=\"dateOfBirth\"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select")
    private WebElement dobMonth;

    @FindBy(xpath = "//*[@id=\"dateOfBirth\"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/select")
    private WebElement dobYear;

    @FindBy(xpath = "//*[@class = 'react-datepicker__day react-datepicker__day--024']")
    private WebElement dobDate;

    @FindBy(id = "uploadPicture")
    private WebElement pictureButton;

    @FindBy(xpath = "//*[@id=\"state\"]")
    public WebElement stateField;

    @FindBy(xpath = "//*[@id=\"react-select-3-option-1\"]")
    private WebElement stateUttar;

    @FindBy(id = "city")
    private WebElement cityDropdown;

    @FindBy(xpath = "//*[@id=\"react-select-4-option-2\"]")
    private WebElement cityMerrut;

    @FindBy(id = "submit")
    public WebElement submitButton;

    @FindBy(id = "example-modal-sizes-title-lg")
    private WebElement formSubmission;

    @FindBy(id = "closeLargeModal")
    public WebElement closeButton;

    @FindBy(xpath = "//*[@id=\"hobbiesWrapper\"]/div[2]/div[3]")
    private WebElement hobby3;

    public void clickCookieButton() {
        cookieButton.click();
    }

    public void clickDemoSiteButton() {
        demoSiteButton.click();
    }

    public void clickAdBanner() {
        adButton.click();
    }

    public void clickPracticeFormButton() {
        practiceFormButton.click();
    }

    public void enterFirstname(String firstName) {
        userFirstName.sendKeys(firstName);
    }

    public void enterLastname(String lastName) {
        userLastName.sendKeys(lastName);
    }

    public void enterEmail(String email) {
        userEmail.sendKeys(email);
    }

    public void clickGenderButton() {
        femaleGender.click();
    }

    public void enterMobileNumber(String number) {
        mobileNumber.sendKeys(number);
    }

    public void selectHobbies() {
        hobby_1.click();
        hobby_2.click();
    }

    public void enterAddress(String address) {
        homeAddress.sendKeys(address);
    }

    public void enterDOB() {
        dobField.click();

        new Select(dobMonth).selectByVisibleText("April");
        new Select(dobYear).selectByVisibleText("1963");

        dobDate.click();
    }

    public void pickPicture() {
        pictureButton.sendKeys("/Users/oyinodukudu/Downloads/Riverside.jpg");
    }

    public void selectState() {
        stateField.click();
        stateUttar.click();
    }

    public void selectCity() {
        cityDropdown.click();
        cityMerrut.click();
    }

    public boolean verifyFormSubmission() throws InterruptedException {
        Thread.sleep(10000);
        boolean isFormSubmitted = formSubmission.isDisplayed();
        return isFormSubmitted;
    }

    public void omitMobileNumber() {
        mobileNumber.sendKeys("");
    }

    public void clickHobby() {
        hobby3.click();
    }

}