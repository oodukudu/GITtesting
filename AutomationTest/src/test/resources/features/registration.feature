Feature: Student Registration Form

  Background:
    Given the user navigates to the website
    And the user clicks on the demo site button
    And the user clicks on the form
    And the user clicks the practice form button

  @regression @valid
  Scenario Outline: Valid Registration
    When the user enters firstname "<firstName>"
    And the user enters lastname "<lastName>"
    And the user enters email address "<email>"
    And the user selects gender option
    And the user enters mobile number "<phoneNumber>"
    And the user enters date of birth
    And the user selects hobbies
    And the user uploads a picture
    And the user enters address "<homeAddress>"
    And the user selects a state
    And the user selects a city

    When the user clicks the submit button
    Then the form is submitted successfully
#    Then the form is submitted successfully with this message "Thanks for submitting the form"
    And the user clicks the close button

    Examples:
      | firstName | lastName | email                 | phoneNumber | homeAddress |
      | Oyin      | Odukudu  | oyinodukudu@gmail.com | 0746473647  | Glasgow, UK |
      | Tanis     | Chase    | tanischase@gmail.com  | 0746436887  | London, UK  |
      | Jack      | Phil     | jackphil@gmail.com    | 0748457664  | Leeds, UK   |

  @regression @invalid
  Scenario: Invalid Registration
    When the user enters firstname "Oyin"
    And the user enters lastname "Odukudu"
    And the user enters email address "oyinodukudu@gmail.com"
    And the user selects gender option
    And the user does not enter mobile number
    And the user enters date of birth
    And the user selects an hobby
    And the user uploads a picture
    And the user enters address "Glasgow, UK"
    And the user selects a state
    And the user selects a city

    When the user clicks the submit button
#    Then the form is not submitted