Feature: Steps for reporting new issue/bug ticket

Scenario: invalid email address and password accepted to sign in successfully

 Reproduce Steps:

    Given I navigate to url successfully
    When I see Your Logo visible
    And I click on Sign in button
    And I see create an account column
    And I enter valid email address
    And I click on create an account button
    Then I see account creation form
    And I enter valid mandatory fields
    And I see my account created successfully

    Given I navigate to url successfully
    When I see Your Logo visible
    And I click on Sign in button
    And I see already registered? column
    And I enter invalid email address
    And I enter invalid password 
    And I click on Sign in button
    Then I see my-account page 
    And I see 'welcome to your account' message


 Expected Steps:                                   //New Account is created successfully
                     
    Given I navigate to url successfully
    When I see Your Logo visible
    And I click on Sign in button
    And I see already registered? column
    And I enter invalid email address
    And I enter invalid password 
    And I click on Sign in button
    Then I should see Authentication error message shown
    And I should be 'Authentication Failed' message

 Current Behaviour:

    The entered invalid email address and password is able to sign in successfully and create my account page

Note: Screen Shot for reference 
    (Screen shot of the page can be taken and attach in this ticket)