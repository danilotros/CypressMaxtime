import { loginPage } from "../pages/LoginPage";
class ValidateLogin{
    with(confirmText){
        Cypress.on('uncaught:exception', (err, runnable) => {
            cy.wait(150000);
            loginPage.getLblConfirm().as("label");
            loginPage.getLblConfirm().should("contains",confirmText);
            return false
        })
    }
}
export const validateLogin =new ValidateLogin();