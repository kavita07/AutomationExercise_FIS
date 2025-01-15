Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the home page
    When I search for <input>
    And I click on the first book in the list
    And I click on Add to cart
    Then verify the cart has been updated and displays the number of items in the cart <cartCount>

    Examples:
      | input | cartCount| 
      | book |  1 |
