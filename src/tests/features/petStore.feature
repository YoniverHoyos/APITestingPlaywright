Feature: Pet Store Api funcionality test

  Scenario: Consult an existing purchase order
    Given User consult the purchase order with id "1"
    Then the response status should be 200 if exists, or 404 if not for order id 1
    And the order information should be returned

  Scenario: Create and search a purchase order
    Given User create a purchase order
    And User search the created purchase order
    Then the response status should be 200
    And the created order should be returned

  Scenario: Verify store inventory
    Given User request the store inventory
    Then the response status should be 200
    And the inventory information should be returned

  Scenario: Delete a purchase order
    Given User create a purchase order
    Then User delete the purchase order created
    Then the response status should be 200
    And the purchase order should not exist
