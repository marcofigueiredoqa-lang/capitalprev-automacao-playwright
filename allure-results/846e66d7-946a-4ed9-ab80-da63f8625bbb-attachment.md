# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CapitalPrev-Passo01.spec.ts >> Informações do Titular - Inserção manual no calendário
- Location: tests\CapitalPrev-Passo01.spec.ts:113:5

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('#NO_PESSOA')

```

# Page snapshot

```yaml
- main [ref=e6]:
  - generic [ref=e7]:
    - img "CapitalPrev" [ref=e10]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - paragraph [ref=e16]:
          - text: Adesão
          - text: "[Capital Prev Mais]"
        - generic [ref=e17]: 1/5
      - paragraph [ref=e19]: Informações pessoais do titular
      - alert [ref=e20]:
        - img [ref=e22]
        - generic [ref=e24]:
          - heading "Houve um erro ao processar a sua requisição, tente novamente mais tarde." [level=5] [ref=e25]
          - generic [ref=e26]: Ocorreu um erro ao processar sua requisição. Erro registrado com protocolo 81a72bab-0606-48fa-a1a2-0ef8c7e42075Ocorreu um erro ao processar sua requisição. Erro registrado com protocolo 0b1cb5d1-40c5-4a03-89ad-6acb96d12918Ocorreu um erro ao processar sua requisição. Erro registrado com protocolo 251991a7-a977-4695-a206-74fb79b6980cOcorreu um erro ao processar sua requisição. Erro registrado com protocolo 8ab375a8-d9ac-475f-811c-9394467019fc
    - generic [ref=e27]:
      - text: Versão 0.0.43
      - text: Versão API 0.2.11
```

# Test source

```ts
  1   | import { Page, Locator, expect } from '@playwright/test';
  2   | 
  3   | // ADESÃO - INFORMAÇÕES PESSOAIS DO TITULAR
  4   | export class CapitalPrevPage {
  5   |   readonly page:            Page;
  6   |   readonly campoNome:             Locator;
  7   |   readonly campoCPF:              Locator;
  8   |   readonly campoGenero:           Locator;
  9   |   readonly opcaoMasculino:        Locator;
  10  |   readonly opcaoFeminino:         Locator;
  11  |   readonly campoDataNasc:         Locator;
  12  |   readonly campoEstadoCivil:      Locator;
  13  |   readonly opcaoCasado:           Locator;
  14  |   readonly campoEmail:            Locator;
  15  |   readonly campoCelular:          Locator;
  16  |   readonly botaoCopiarDados:      Locator;
  17  |   readonly botaoContinuar:        Locator;
  18  |   readonly campoInstituidor:      Locator;
  19  |   readonly opcaoCapitalprev:      Locator;
  20  |   readonly tituloEnderecoTitular: Locator;  
  21  |   readonly calendario:            Locator;
  22  |   readonly calendarioAnterior:    Locator;
  23  |   readonly mes:                   Locator;
  24  |   readonly ano:                   Locator;
  25  |   readonly dia:                   Locator;
  26  | 
  27  |   constructor(page: Page) {
  28  |   
  29  |     this.page = page;
  30  |     this.campoNome              = page.locator('#NO_PESSOA');
  31  |     this.campoCPF               = page.locator('#CPF_CGC');
  32  |     this.campoDataNasc          = page.locator('#DT_NASCIMENTO');
  33  |     this.campoGenero            = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(4) > div > button > div.itc-button-content.drop-shadow-md.flex.flex-1.justify-start');
  34  |     this.opcaoMasculino         = page.getByText('MASCULINO', { exact: true }).last();
  35  |     this.opcaoFeminino          = page.getByText('FEMININO', { exact: true });
  36  |     this.campoEstadoCivil       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(5) > div > button')
  37  |     this.opcaoCasado            = page.getByText('CASADO', { exact: true }).last();
  38  |     this.campoEmail             = page.locator('#NO_EMAIL');
  39  |     this.campoCelular           = page.locator('#NR_CELULAR');
  40  |     this.botaoCopiarDados       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(4) > button');
  41  |     this.botaoContinuar         = page.getByRole('button', { name: 'Continuar' });
  42  |     this.campoInstituidor       = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(4) > div:nth-child(6) > div > button > div.itc-button-content.drop-shadow-md.flex.flex-1.justify-start');
  43  |     this.opcaoCapitalprev       = page.getByText('CAPITALPREV', { exact: true }).last();
  44  |     this.tituloEnderecoTitular  = page.getByText('Endereço do titular do plano', { exact: true });
  45  |     this.calendario             = page.locator('#root > div > div > div > main > div > div:nth-child(3) > div > form > div:nth-child(1) > div:nth-child(3) > div > div > div.flex.items-center.shrink-0 > button')
  46  |     this.calendarioAnterior     = page.locator('#radix-_r_qu_ > div > div > nav > button.itc-button.inline-flex.items-center.justify-center.text-sm.font-medium.space-x-3.rounded.hover\:cursor-pointer.disabled\:pointer-events-none.disabled\:opacity-50.text-\(--button-ghost-foreground\).border-0.transition-all.hover\:text-\(--button-ghost-hover\).active\:text-\(--button-ghost-active\).min-w-fit.absolute.left-0.h-7.w-7.bg-transparent.p-0.opacity-80.hover\:opacity-100')
  47  |     this.mes                    = page.locator('#radix-_r_0_ > div > div > div > div')
  48  |     this.ano                    = page.locator('#radix-_r_qu_ > div > div > div > div.grid.grid-cols-4.gap-y-2.mx-auto.mt-4 > button:nth-child(1)')
  49  |     this.dia                    = page.locator('#radix-_r_qu_ > div > div > div > table > tbody > tr:nth-child(3) > td:nth-child(3) > button')
  50  |     ;
  51  |   }
  52  | 
  53  | 
  54  |   async abrirPagina() {
  55  |     await this.page.goto('https://webhmg.intech.com.br/capitalprev/adesao/#/passo-1');
  56  |   }
  57  | 
  58  |   async preencherNome() {
> 59  |     await this.campoNome.fill('Playwright');
      |                          ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  60  |   }
  61  |   async preencherCPF() {
  62  |     const cpf = gerarCPFValido();
  63  |     await this.campoCPF.fill(cpf);
  64  |   }
  65  | 
  66  |   async preencherCPFInvalido() {
  67  |     await this.campoCPF.fill('05457855555');
  68  |   }
  69  |   async preencherCPFInvalido2() {
  70  |     await this.campoCPF.fill('555');
  71  |   }
  72  | 
  73  |   async preencherDataNasc() {
  74  |     await this.campoDataNasc.fill('05/10/2001');
  75  |   }
  76  | 
  77  |   async preencherDataNascFutura() {
  78  |     await this.campoDataNasc.fill('05/10/2097');
  79  |   }
  80  | 
  81  |   async preencherDataNascInexistente() {
  82  |     await this.campoDataNasc.fill('57/57/5757');
  83  |   }
  84  | 
  85  |   async preencherDataNascManual() {
  86  |     await this.calendario.click();
  87  |     await this.mes.click();
  88  |     await this.calendarioAnterior.click();
  89  |     await this.ano.click();
  90  |     await this.dia.click();
  91  |   }
  92  | 
  93  | async selecionarMasculino() {
  94  |   await this.campoGenero.click();
  95  |   await this.opcaoMasculino.click();
  96  | }
  97  | 
  98  | async selecionarFeminino() {
  99  |   await this.campoGenero.click();
  100 |   await this.opcaoFeminino.click();
  101 | }
  102 | 
  103 | async selecionarEstado() {
  104 |   await this.campoEstadoCivil.click();
  105 |   await this.opcaoCasado.click();
  106 | }
  107 | 
  108 | async preencherEmail() {
  109 |     await this.campoEmail.fill('teste@teste.com');
  110 |   }
  111 | 
  112 | async preencherEmailInvalido() {
  113 |     await this.campoEmail.fill('teste31213com');
  114 |   }  
  115 | 
  116 | async preencherCelular() {
  117 |     await this.campoCelular.fill('61981047777');
  118 |   }
  119 | 
  120 | async copiarDados() {
  121 |     await this.botaoCopiarDados.click();
  122 |   }
  123 | 
  124 | async selecionarInstituidor() {
  125 |   await this.campoInstituidor.click();
  126 |   await this.opcaoCapitalprev.click();
  127 | }
  128 | 
  129 | async continuar() {
  130 |     await this.botaoContinuar.click();
  131 |   }
  132 | 
  133 | async validarTituloEndereco() {
  134 |   await expect(this.tituloEnderecoTitular).toBeVisible();
  135 | }
  136 | 
  137 | async preencherPasso01Completo() {
  138 |     // INFORMAÇÕES PESSOAIS DO TITULAR:
  139 |     await this.preencherNome();
  140 |     await this.preencherCPF();
  141 |     await this.preencherDataNasc();
  142 |     await this.selecionarMasculino();
  143 |     await this.selecionarEstado();
  144 |     await this.preencherEmail();
  145 |     await this.preencherCelular();
  146 | 
  147 |     // Empregado, associado ou aposentado
  148 |     await this.copiarDados();
  149 |     await this.selecionarInstituidor();
  150 |     await this.continuar();
  151 |     await this.validarTituloEndereco()
  152 | }
  153 | 
  154 | 
  155 | }
  156 | 
  157 | // Função para gerar o CPF a cada execução
  158 | function gerarCPFValido(): string {
  159 |   const numeros = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
```