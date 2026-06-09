import { Page, Locator, expect} from '@playwright/test';

export class CapitalPrevPage5 {

    readonly botaoContinuar: Locator;
    readonly mensagemSucesso: Locator;
    

  constructor(private page: Page) {

    this.botaoContinuar       = page.getByRole('button', { name: 'Continuar' });
    this.mensagemSucesso      = this.page.getByText('Agora é só aguardar!');
  }

  

 async preencherToken() {

    const response = await this.page.waitForResponse(async response => {
        try {
            const body = await response.text();
            return /^\d{6}$/.test(body.replace(/"/g, ''));
        } catch {
            return false;
        }
    });

    const token = (await response.text()).replace(/"/g, '');

    console.log(`Token capturado: ${token}`);

    await this.page.locator('input').first().fill(token);
}


async continuar() {
    await this.botaoContinuar.click();
  }

async tokenIncorreto() {
    await this.page.locator('input').first().fill('123444');
  }

async preencherPasso05Completo(){
    await this.preencherToken();
    await this.continuar();
    await this.validarMensagem();
}

async validarMensagem() {
    await expect(this.mensagemSucesso).toBeVisible({
    timeout: 30000 // 30 segundos
});






  }





}