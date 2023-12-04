import { Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import { fillLogin } from "../../../main/tasks/FillLogin";
import { validateLogin } from "../../../main/questions/ValidateLogin";
Given("A user open a maxtime website",()=>{
    cy.visit("/");
});
When("A user enters the username {string} the password {string} and clic the login button",(username,password)=>{
    fillLogin.fillWith(username,password)
});
Then("A user should see that title of home page contains {string}",(confirmText)=>{
    validateLogin.with(confirmText);
});