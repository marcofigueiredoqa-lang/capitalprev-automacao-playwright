import { test, expect }     from '@playwright/test';
import { CapitalPrevPage }  from './pages/CapitalPrevPage.ts';


  test('Informações do Titular - Validar campos obrigatórios', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();
    await passo01.continuar();
    await expect(page.getByText('Campo obrigatório')).toHaveCount(12);
    
  });

  test('Informações do Titular - Bloquear e-mail inválido', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();
    await passo01.preencherNome();
    await passo01.preencherCPF();
    await passo01.preencherDataNasc();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmailInvalido();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await expect(page.locator('#NO_EMAIL')).toHaveJSProperty('validity.valid', false);
    
  });

  test('Informações do Titular - CPF inválido', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();

    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await passo01.preencherNome();
    await passo01.preencherCPFInvalido();
    await passo01.preencherDataNasc();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmail();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await expect(page.getByText('CPF inválido')).toHaveCount(2);

  });

  test('Informações do Titular - CPF com menos de 11 dígitos', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();

    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await passo01.preencherNome();
    await passo01.preencherCPFInvalido2();
    await passo01.preencherDataNasc();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmail();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await expect(page.getByText('Campo obrigatório')).toHaveCount(1);
  });

  test('Informações do Titular - Data de nascimento futura', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();

    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await passo01.preencherNome();
    await passo01.preencherCPF();
    await passo01.preencherDataNascFutura();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmail();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await expect(page.getByText('Error: A data informada deve ser inferior a data de hoje.')).toHaveCount(1);
    await expect(page.getByText('Confira se a data de nascimento informada está correta')).toHaveCount(1);
  });
  test('Informações do Titular - Data de nascimento inexistente', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();

    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await passo01.preencherNome();
    await passo01.preencherCPF();
    await passo01.preencherDataNascInexistente();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmail();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await expect(page.getByText('Campo obrigatório')).toHaveCount(1);
  });

test('Informações do Titular - Inserção manual no calendário', async ({ page }) => {
    const passo01 = new CapitalPrevPage(page);
    await passo01.abrirPagina();

    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await passo01.preencherNome();
    await passo01.preencherCPF();
    await passo01.preencherDataNascManual();
    await passo01.selecionarMasculino();
    await passo01.selecionarEstado();
    await passo01.preencherEmail();
    await passo01.preencherCelular();

    // Empregado, associado ou aposentado
    await passo01.copiarDados();
    await passo01.selecionarInstituidor();
    await passo01.continuar();
    await passo01.validarTituloEndereco()
  });
