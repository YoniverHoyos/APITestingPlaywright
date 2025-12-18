Feature: Current Weather Information

  Scenario: Get weather information by city name in JSON format
    Given the OpenWeather API is available
    When User request the weather for city "London" in JSON format
    Then the response status should be 200
    And the weather information should be returned in JSON

  Scenario: Get weather information by latitude and longitude
    Given the OpenWeather API is available
    When User request the weather using latitude "51.50" and longitude "-0.12" in JSON format
    Then the response status should be 200
    And the weather information should be returned in JSON

  Scenario: Get weather information in XML format
    Given the OpenWeather API is available
    When User request the weather for city "London" in XML format
    Then the response status should be 200
    And the weather information should be returned in XML
