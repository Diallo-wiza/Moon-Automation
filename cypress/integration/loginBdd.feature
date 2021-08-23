Feature: Template Moon Main Page

  I want to open moon template
  
  @focus
  Scenario: Opening a moon template page
    Given I open the moon front page
    When I click on the profile button 
    And I click on the Create account button
    And I enter "user+test5@wizacha.com"
    And I put "Wizaplace1!"
    And I confirm "Wizaplace1!"
    Then I click on the submit button