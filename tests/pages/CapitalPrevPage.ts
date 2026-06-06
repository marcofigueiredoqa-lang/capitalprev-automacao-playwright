import { Page, Locator, expect } from '@playwright/test';

// ADESÃO - INFORMAÇÕES PESSOAIS DO TITULAR
export class CapitalPrevPage {
  readonly page:            Page;
  readonly campoNome:             Locator;
  readonly campoCPF:              Locator;
  readonly campoGenero:           Locator;
  readonly opcaoMasculino:        Locator;
  readonly opcaoFeminino:         Locator;
  readonly campoDataNasc:         Locator;
  readonly campoEstadoCivil:      Locator;
  readonly opcaoCasado:           Locator;
  readonly campoEmail:            Locator;
  readonly campoCelular:          Locator;
  readonly botaoCopiarDados:      Locator;
  readonly botaoContinuar:        Locator;
  readonly campoInstituidor:      Locator;
  readonly opcaoCapitalprev:      Locator;
  readonly tituloEnderecoTitular: Locator;  
  readonly calendario:            Locator;
  readonly calendarioAnterior:    Locator;
  readonly mes:                   Locator;
  readonly ano:                   Locator;
  readonly dia:                   Locator;

  constructor(page: Page) {
  
    this.page = page;
    this.campoNome              = page.locator('#NO_PESSOA');
    this.campoCPF               = page.locator('#CPF_CGC');
    this.campoDataNasc          = page.locator('#DT_NASCIMENTO');
    this.campoGenero            = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(4) > div > button > div.itc-button-content.drop-shadow-md.flex.flex-1.justify-start');
    this.opcaoMasculino         = page.getByText('MASCULINO', { exact: true }).last();
    this.opcaoFeminino          = page.getByText('FEMININO', { exact: true });
    this.campoEstadoCivil       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(5) > div > button')
    this.opcaoCasado            = page.getByText('CASADO', { exact: true }).last();
    this.campoEmail             = page.locator('#NO_EMAIL');
    this.campoCelular           = page.locator('#NR_CELULAR');
    this.botaoCopiarDados       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(4) > button');
    this.botaoContinuar         = page.getByRole('button', { name: 'Continuar' });
    this.campoInstituidor       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(4) > div:nth-child(6) > div > button > div.itc-button-content.drop-shadow-md.flex.flex-1.justify-start');
    this.opcaoCapitalprev       = page.getByText('CAPITALPREV', { exact: true }).last();
    this.tituloEnderecoTitular  = page.getByText('Endereço do titular do plano', { exact: true });
    this.calendario             = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(3) > div > div > div.flex.items-center.shrink-0 > button')
    this.calendarioAnterior     = page.locator('#radix-_r_qu_ > div > div > nav > button.itc-button.inline-flex.items-center.justify-center.text-sm.font-medium.space-x-3.rounded.hover\:cursor-pointer.disabled\:pointer-events-none.disabled\:opacity-50.text-\(--button-ghost-foreground\).border-0.transition-all.hover\:text-\(--button-ghost-hover\).active\:text-\(--button-ghost-active\).min-w-fit.absolute.left-0.h-7.w-7.bg-transparent.p-0.opacity-80.hover\:opacity-100')
    this.mes                    = page.locator('#radix-_r_0_ > div > div > div > div')
    this.ano                    = page.locator('#radix-_r_qu_ > div > div > div > div.grid.grid-cols-4.gap-y-2.mx-auto.mt-4 > button:nth-child(1)')
    this.dia                    = page.locator('#radix-_r_qu_ > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > button')
    ;
  }


  async abrirPagina() {
    await this.page.goto('https://webhmg.intech.com.br/capitalprev/adesao/#/passo-1');
  }

  async preencherNome() {
    await this.campoNome.fill('Playwright');
  }
  async preencherCPF() {
    const cpf = gerarCPFValido();
    await this.campoCPF.fill(cpf);
  }

  async preencherCPFInvalido() {
    await this.campoCPF.fill('05457855555');
  }
  async preencherCPFInvalido2() {
    await this.campoCPF.fill('555');
  }

  async preencherDataNasc() {
    await this.campoDataNasc.fill('05/10/2001');
  }

  async preencherDataNascFutura() {
    await this.campoDataNasc.fill('05/10/2097');
  }

  async preencherDataNascInexistente() {
    await this.campoDataNasc.fill('57/57/5757');
  }

  async preencherDataNascManual() {
    await this.calendario.click();
    await this.mes.click();
    await this.calendarioAnterior.click();
    await this.ano.click();
    await this.dia.click();
  }

async selecionarMasculino() {
  await this.campoGenero.click();
  await this.opcaoMasculino.click();
}

async selecionarFeminino() {
  await this.campoGenero.click();
  await this.opcaoFeminino.click();
}

async selecionarEstado() {
  await this.campoEstadoCivil.click();
  await this.opcaoCasado.click();
}

async preencherEmail() {
    await this.campoEmail.fill('teste@teste.com');
  }

async preencherEmailInvalido() {
    await this.campoEmail.fill('teste31213com');
  }  

async preencherCelular() {
    await this.campoCelular.fill('61981047777');
  }

async copiarDados() {
    await this.botaoCopiarDados.click();
  }

async selecionarInstituidor() {
  await this.campoInstituidor.click();
  await this.opcaoCapitalprev.click();
}

async continuar() {
    await this.botaoContinuar.click();
  }

async validarTituloEndereco() {
  await expect(this.tituloEnderecoTitular).toBeVisible();
}

async preencherPasso01Completo() {
    // INFORMAÇÕES PESSOAIS DO TITULAR:
    await this.preencherNome();
    await this.preencherCPF();
    await this.preencherDataNasc();
    await this.selecionarMasculino();
    await this.selecionarEstado();
    await this.preencherEmail();
    await this.preencherCelular();

    // Empregado, associado ou aposentado
    await this.copiarDados();
    await this.selecionarInstituidor();
    await this.continuar();
    await this.validarTituloEndereco()
}


}

// Função para gerar o CPF a cada execução
function gerarCPFValido(): string {
  const numeros = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));

  const calcularDigito = (base: number[]) => {
    const soma = base.reduce((total, numero, index) => {
      return total + numero * (base.length + 1 - index);
    }, 0);

    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const primeiroDigito = calcularDigito(numeros);
  const segundoDigito = calcularDigito([...numeros, primeiroDigito]);

  return [...numeros, primeiroDigito, segundoDigito].join('');


}