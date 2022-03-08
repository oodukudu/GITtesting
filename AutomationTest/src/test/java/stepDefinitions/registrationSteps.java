package stepDefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import pageObject.registrationPage;

import java.util.ArrayList;

public class registrationSteps {

    WebDriver driver;

    public registrationPage registrationPage;

    @Before
    public void browserSetup() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("https://www.toolsqa.com");
        registrationPage = new registrationPage(driver);
    }

    @After
    public void tearDown() {
        driver.close();
        driver.quit();
    }

    @Given("^the user navigates to the website$")
    public void theUserNavigatesToTheWebsite() {
//        WebDriverManager.chromedriver().setup();
//        driver = new ChromeDriver();
//        driver.get("https://www.toolsqa.com");
//        driver.manage().window().maximize();
//        driver.findElement(By.xpath("//*[@id=\"accept-cookie-policy\"]")).click();

        registrationPage.clickCookieButton();
    }

    @And("^the user clicks on the demo site button$")
    public void theUserClicksOnTheDemoSiteButton() {
//        driver.findElement(By.xpath("//*[contains(text(), 'Demo Site')]")).click();
        registrationPage.clickDemoSiteButton();
    }

    @And("^the user clicks on the form$")
    public void theUserClicksOnTheForm() {
        ArrayList<String> newTab = new ArrayList<String>(driver.getWindowHandles());
        driver.switchTo().window(newTab.get(1));

//        driver.findElement(By.id("close-fixedban")).click();
        registrationPage.clickAdBanner();

//        driver.findElement(By.xpath("//*[@id=\"app\"]/div/div/div[2]/div/div[2]")).click();

//        WebElement formButton = driver.findElement(By.xpath("//*[contains(text(), 'Forms')]"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.formButton);

//        registrationPage.clickFormButton();
    }

    @And("^the user clicks the practice form button$")
    public void theUserClicksThePracticeFormButton() {
        registrationPage.clickPracticeFormButton();
//        driver.findElement(By.xpath("//span[contains(text(), 'Practice Form')]")).click();
    }

    @When("^the user enters firstname \"([^\"]*)\"$")
    public void theUserEntersFirstname(String firstName) {
        registrationPage.enterFirstname(firstName);
//        driver.findElement(By.id("firstName")).sendKeys(firstName);
    }

    @And("^the user enters lastname \"([^\"]*)\"$")
    public void theUserEntersLastname(String surname) {
        registrationPage.enterLastname(surname);
//        driver.findElement(By.id("lastName")).sendKeys(surname);
    }

    @And("^the user enters email address \"([^\"]*)\"$")
    public void theUserEntersEmailAddress(String email) {
        registrationPage.enterEmail(email);
//        driver.findElement(By.id("userEmail")).sendKeys(email);
    }

    @And("^the user selects gender option$")
    public void theUserSelectsGenderOption() {
        registrationPage.clickGenderButton();
//        driver.findElement(By.xpath("//*[@id=\"genterWrapper\"]/div[2]/div[2]")).click();
    }

    @And("^the user enters mobile number \"([^\"]*)\"$")
    public void theUserEntersMobileNumber(String phoneNumber) {
        registrationPage.enterMobileNumber(phoneNumber);
//        driver.findElement(By.id("userNumber")).sendKeys(phoneNumber);
    }

    @And("^the user selects hobbies$")
    public void theUserSelectsHobbies() {
        registrationPage.selectHobbies();
//        driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]/div[2]/div[1]")).click();
//        driver.findElement(By.xpath("//*[@id=\"hobbiesWrapper\"]/div[2]/div[2]")).click();
    }

    @And("^the user enters address \"([^\"]*)\"$")
    public void theUserEntersAddress(String address) {
        registrationPage.enterAddress(address);
//       driver.findElement(By.cssSelector("#currentAddress")).sendKeys(address);
    }

    @And("^the user selects a state$")
    public void theUserSelectsAState() {
//        WebElement stateDropdown = driver.findElement(By.xpath("//*[@id=\"state\"]"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", registrationPage.stateField);

        registrationPage.selectState();

//        stateDropdown.click();
//        driver.findElement(By.xpath("//*[@id=\"react-select-3-option-1\"]")).click();
    }

    @And("^the user selects a city$")
    public void theUserSelectsACity() {
        registrationPage.selectCity();
//        driver.findElement(By.id("city")).click();
//        driver.findElement(By.xpath("//*[@id=\"react-select-4-option-2\"]")).click();
    }

    @When("^the user clicks the submit button$")
    public void theUserClicksTheSubmitButton() {
        //zoom in
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("document.body.style.zoom = '0.65'");

        // implementing JS to click submit button
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.submitButton);
//        driver.findElement(By.id("submit")).click();
    }

    @Then("^the form is submitted successfully$")
    public void theFormIsSubmittedSuccessfully() throws InterruptedException {
//        Thread.sleep(10000);
//        boolean formSubmitted = driver.findElement(By.id("example-modal-sizes-title-lg")).isDisplayed();
        Assert.assertTrue(registrationPage.verifyFormSubmission());
    }

    @And("^the user clicks the close button$")
    public void theUserClicksTheCloseButton() {
//        WebElement closeButton = driver.findElement(By.id("closeLargeModal"));
//        JavascriptExecutor js = (JavascriptExecutor)driver;
//        js.executeScript("arguments[0].scrollIntoView(true);", closeButton);

        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click();", registrationPage.closeButton);

//        driver.findElement(By.id("closeLargeModal")).click();
    }

    @And("^the user uploads a picture$")
    public void theUserUploadsAPicture() {
        registrationPage.pickPicture();
//        driver.findElement(By.id("uploadPicture")).sendKeys("/Users/oyinodukudu/Downloads/Riverside.jpg");
    }

    @Then("^the form is submitted successfully with this message \"([^\"]*)\"$")
    public void theFormIsSubmittedSuccessfullyWithThisMessage(String validationMessage) {
        Assert.assertEquals(validationMessage, driver.findElement(By.id("example-modal-sizes-title-lg")).getText());
    }

    @And("^the user enters date of birth$")
    public void theUserEntersDateOfBirth() {
//        driver.findElement(By.id("dateOfBirthInput")).click();
//        Select month = new Select(driver.findElement(By.xpath("//*[@id=\"dateOfBirth\"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[1]/select")));
//        month.selectByVisibleText("April");
//
//        Select year = new Select(driver.findElement(By.xpath("//*[@id=\"dateOfBirth\"]/div[2]/div[2]/div/div/div[2]/div[1]/div[2]/div[2]/select")));
//        year.selectByVisibleText("1963");
//
//        driver.findElement(By.xpath("//*[@class = 'react-datepicker__day react-datepicker__day--024']")).click();
        registrationPage.enterDOB();
    }

    @And("^the user does not enter mobile number$")
    public void theUserDoesNotEnterMobileNumber() {
        registrationPage.omitMobileNumber();
//        driver.findElement(By.xpath("//*[@id=\"userNumber\"]")).sendKeys("");
    }

    @Then("^the form is not submitted$")
    public void theFormIsNotSubmitted() {
    }

    @And("^the user selects an hobby$")
    public void theUserSelectsAnHobby() {
        registrationPage.clickHobby();
    }

}