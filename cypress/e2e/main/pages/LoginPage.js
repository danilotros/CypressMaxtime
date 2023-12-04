class LoginPage{
    elements ={
        usernameInput:() => cy.xpath(`//td//input[@name='Logon$v0$MainLayoutEdit$xaf_l30$xaf_dviUserName_Edit']`),
        passwordInput: () => cy.get("#Logon_v0_MainLayoutEdit_xaf_l35_xaf_dviPassword_Edit_I"),
        conectButton: () => cy.xpath(`//a[@title='Conectarse']`),
        lblConfirm: () => cy.get("#Vertical_VCC_VSL")
    };
    getInputUserName(){
        return this.elements.usernameInput();
    }
    getInputPassword(){
        return this.elements.passwordInput();
    }
    getConectButton(){
        return this.elements.conectButton();
    }
    getLblConfirm(){
        return this.elements.lblConfirm();
    }

}
export const loginPage=new LoginPage();