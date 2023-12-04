import { loginPage } from "../pages/LoginPage";
class FillLogin{
    fillWith(username,password){
        loginPage.getInputUserName().click();
        loginPage.getInputUserName().type(username)
        loginPage.getInputPassword().type(password);
        loginPage.getConectButton().click();
    }
}
export const fillLogin = new FillLogin();