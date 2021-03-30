class AddressStepPage {
    private BottonLogin: string;
    private BtnExecutePayment: string

    constructor() {
        this.BottonLogin = '#SubmitLogin';
        this.BtnExecutePayment = '.cart_navigation span'
    }

    public PressLogin(): void {
        cy.get(this.BottonLogin).click()
    }

    public MakePayment(): void {
        cy.get(this.BtnExecutePayment).click()
    }
}

export { AddressStepPage }
