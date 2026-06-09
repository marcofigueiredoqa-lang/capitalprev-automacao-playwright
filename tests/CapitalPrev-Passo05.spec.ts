import { test, expect }     from '@playwright/test';
import { CapitalPrevPage }  from './pages/CapitalPrevPage.ts';
import { CapitalPrevPage2 }  from './pages/CapitalPrevPage2.ts';
import { CapitalPrevPage3 }  from './pages/CapitalPrevPage3.ts';
import { CapitalPrevPage4 }  from './pages/CapitalPrevPage4.ts';
import { CapitalPrevPage5 }  from './pages/CapitalPrevPage5.ts';


test.beforeEach(async ({ page }) => {

    const passo01 = new CapitalPrevPage(page);
    const passo02 = new CapitalPrevPage2(page);
    const passo03 = new CapitalPrevPage3(page);
    const passo04 = new CapitalPrevPage4(page);
    const passo05 = new CapitalPrevPage5(page);

    await passo01.abrirPagina();
    await passo01.preencherPasso01Completo();
    await passo02.preencherPasso02Completo();
    await passo03.preencherPasso03Completo();
    await passo04.preencherPasso04Completo();
  });



test('Etapa de segurança - Token Inválido', async ({ page }) => {
    const passo05 = new CapitalPrevPage5(page);

    await passo05.tokenIncorreto();
    await passo05.continuar();
    await expect(page.getByText('Error: Código inválido!')).toHaveCount(1);


  });  

  