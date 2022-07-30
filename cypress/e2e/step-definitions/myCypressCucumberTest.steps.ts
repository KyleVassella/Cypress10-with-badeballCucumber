import {Given, And, Then} from "@badeball/cypress-cucumber-preprocessor";

Given('I visit the home page', () => {
    cy.visit('http://localhost:4200')
    cy.contains('Choose your location')
})