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
Error: locator.click: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('#radix-_r_qu_ > div > div > div > div > button > div')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
        - generic [ref=e20]:
          - generic [ref=e21]:
            - generic [ref=e22]:
              - generic [ref=e23]: Nome completo *
              - textbox "Digite seu nome completo" [ref=e25]: Playwright
            - generic [ref=e26]:
              - generic [ref=e27]: CPF *
              - textbox "Digite seu CPF" [ref=e29]: 595.048.001-57
            - generic [ref=e30]:
              - generic [ref=e31]: Data de nascimento *
              - generic [ref=e33]:
                - textbox [ref=e35]
                - button [expanded] [ref=e36] [cursor=pointer]:
                  - img [ref=e38]
            - generic [ref=e40]:
              - generic [ref=e41]: Gênero *
              - generic [ref=e42]:
                - combobox [ref=e43]:
                  - generic [ref=e44]:
                    - generic: Selecione um item...
                  - img [ref=e46]
                - combobox [ref=e48]
            - generic [ref=e49]:
              - generic [ref=e50]: Estado civil *
              - generic [ref=e51]:
                - combobox [ref=e52]:
                  - generic [ref=e53]:
                    - generic: Selecione um item...
                  - img [ref=e55]
                - combobox [ref=e57]
            - generic [ref=e58]:
              - generic [ref=e59]: Email *
              - textbox "Digite seu email" [ref=e61]
            - generic [ref=e62]:
              - generic [ref=e63]: Celular *
              - textbox "(00) 0000-0000" [ref=e65]
          - generic [ref=e66]:
            - generic [ref=e67]:
              - paragraph [ref=e68]: Anexar documento do titular do plano
              - paragraph [ref=e69]: "Os documentos aceitos para envio são: RG, CNH, Certidão de Nascimento (para menores), Passaporte, CTPS, Carteira Profissional ou Identidade Militar. Ressaltamos que a utilização desses documentos tem como finalidade exclusiva a confirmação de suas informações. Formatos aceitos: PDF, JPG, PNG. No máximo 10mb"
            - generic [ref=e72] [cursor=pointer]:
              - generic [ref=e73]: Anexar documento de identificação
              - img [ref=e75]
          - paragraph [ref=e77]: Empregado, associado ou aposentado
          - generic [ref=e78]:
            - button "Copiar Dados do Titular" [ref=e79]:
              - generic [ref=e80]: Copiar Dados do Titular
            - generic [ref=e81]:
              - generic [ref=e82]: Nome completo *
              - textbox "Digite o nome completo" [ref=e84]
            - generic [ref=e85]:
              - generic [ref=e86]: Número celular *
              - textbox "(00) 0000-0000" [ref=e88]
            - generic [ref=e89]:
              - generic [ref=e90]: CPF *
              - textbox "Digite o CPF" [ref=e92]
            - generic [ref=e93]:
              - generic [ref=e94]: Grau de parentesco *
              - generic [ref=e95]:
                - combobox [ref=e96]:
                  - generic [ref=e97]:
                    - generic: Selecione um item...
                  - img [ref=e99]
                - combobox [ref=e101]
            - generic [ref=e102]:
              - generic [ref=e103]: Instituidor *
              - generic [ref=e104]:
                - combobox [ref=e105]:
                  - generic [ref=e106]:
                    - generic: Selecione um item...
                  - img [ref=e108]
                - combobox [ref=e110]
          - button "Continuar" [ref=e111]:
            - generic [ref=e112]: Continuar
      - generic [ref=e113]:
        - text: Versão 0.0.43
        - text: Versão API 0.2.11
  - dialog [ref=e115]:
    - generic [ref=e117]:
      - navigation:
        - button "Go to the Previous Month" [ref=e118]:
          - img [ref=e120]
        - button "Go to the Next Month" [ref=e122]:
          - img [ref=e124]
      - generic [ref=e126]:
        - button "junho 2026" [active] [ref=e128]:
          - generic [ref=e129]: junho 2026
        - grid "junho 2026" [ref=e130]:
          - rowgroup [ref=e131]:
            - row [ref=e132]:
              - columnheader [ref=e133]: dom
              - columnheader [ref=e134]: seg
              - columnheader [ref=e135]: ter
              - columnheader [ref=e136]: qua
              - columnheader [ref=e137]: qui
              - columnheader [ref=e138]: sex
              - columnheader [ref=e139]: sab
          - rowgroup [ref=e140]:
            - row "domingo, 31 de maio de 2026 segunda-feira, 1 de junho de 2026 terça-feira, 2 de junho de 2026 quarta-feira, 3 de junho de 2026 quinta-feira, 4 de junho de 2026 sexta-feira, 5 de junho de 2026 Today, sábado, 6 de junho de 2026" [ref=e141]:
              - gridcell "domingo, 31 de maio de 2026" [ref=e142]:
                - button "domingo, 31 de maio de 2026" [ref=e143]: "31"
              - gridcell "segunda-feira, 1 de junho de 2026" [ref=e144]:
                - button "segunda-feira, 1 de junho de 2026" [ref=e145]: "1"
              - gridcell "terça-feira, 2 de junho de 2026" [ref=e146]:
                - button "terça-feira, 2 de junho de 2026" [ref=e147]: "2"
              - gridcell "quarta-feira, 3 de junho de 2026" [ref=e148]:
                - button "quarta-feira, 3 de junho de 2026" [ref=e149]: "3"
              - gridcell "quinta-feira, 4 de junho de 2026" [ref=e150]:
                - button "quinta-feira, 4 de junho de 2026" [ref=e151]: "4"
              - gridcell "sexta-feira, 5 de junho de 2026" [ref=e152]:
                - button "sexta-feira, 5 de junho de 2026" [ref=e153]: "5"
              - gridcell "Today, sábado, 6 de junho de 2026" [ref=e154]:
                - button "Today, sábado, 6 de junho de 2026" [ref=e155]: "6"
            - row "domingo, 7 de junho de 2026 segunda-feira, 8 de junho de 2026 terça-feira, 9 de junho de 2026 quarta-feira, 10 de junho de 2026 quinta-feira, 11 de junho de 2026 sexta-feira, 12 de junho de 2026 sábado, 13 de junho de 2026" [ref=e156]:
              - gridcell "domingo, 7 de junho de 2026" [ref=e157]:
                - button "domingo, 7 de junho de 2026" [ref=e158]: "7"
              - gridcell "segunda-feira, 8 de junho de 2026" [ref=e159]:
                - button "segunda-feira, 8 de junho de 2026" [ref=e160]: "8"
              - gridcell "terça-feira, 9 de junho de 2026" [ref=e161]:
                - button "terça-feira, 9 de junho de 2026" [ref=e162]: "9"
              - gridcell "quarta-feira, 10 de junho de 2026" [ref=e163]:
                - button "quarta-feira, 10 de junho de 2026" [ref=e164]: "10"
              - gridcell "quinta-feira, 11 de junho de 2026" [ref=e165]:
                - button "quinta-feira, 11 de junho de 2026" [ref=e166]: "11"
              - gridcell "sexta-feira, 12 de junho de 2026" [ref=e167]:
                - button "sexta-feira, 12 de junho de 2026" [ref=e168]: "12"
              - gridcell "sábado, 13 de junho de 2026" [ref=e169]:
                - button "sábado, 13 de junho de 2026" [ref=e170]: "13"
            - row "domingo, 14 de junho de 2026 segunda-feira, 15 de junho de 2026 terça-feira, 16 de junho de 2026 quarta-feira, 17 de junho de 2026 quinta-feira, 18 de junho de 2026 sexta-feira, 19 de junho de 2026 sábado, 20 de junho de 2026" [ref=e171]:
              - gridcell "domingo, 14 de junho de 2026" [ref=e172]:
                - button "domingo, 14 de junho de 2026" [ref=e173]: "14"
              - gridcell "segunda-feira, 15 de junho de 2026" [ref=e174]:
                - button "segunda-feira, 15 de junho de 2026" [ref=e175]: "15"
              - gridcell "terça-feira, 16 de junho de 2026" [ref=e176]:
                - button "terça-feira, 16 de junho de 2026" [ref=e177]: "16"
              - gridcell "quarta-feira, 17 de junho de 2026" [ref=e178]:
                - button "quarta-feira, 17 de junho de 2026" [ref=e179]: "17"
              - gridcell "quinta-feira, 18 de junho de 2026" [ref=e180]:
                - button "quinta-feira, 18 de junho de 2026" [ref=e181]: "18"
              - gridcell "sexta-feira, 19 de junho de 2026" [ref=e182]:
                - button "sexta-feira, 19 de junho de 2026" [ref=e183]: "19"
              - gridcell "sábado, 20 de junho de 2026" [ref=e184]:
                - button "sábado, 20 de junho de 2026" [ref=e185]: "20"
            - row "domingo, 21 de junho de 2026 segunda-feira, 22 de junho de 2026 terça-feira, 23 de junho de 2026 quarta-feira, 24 de junho de 2026 quinta-feira, 25 de junho de 2026 sexta-feira, 26 de junho de 2026 sábado, 27 de junho de 2026" [ref=e186]:
              - gridcell "domingo, 21 de junho de 2026" [ref=e187]:
                - button "domingo, 21 de junho de 2026" [ref=e188]: "21"
              - gridcell "segunda-feira, 22 de junho de 2026" [ref=e189]:
                - button "segunda-feira, 22 de junho de 2026" [ref=e190]: "22"
              - gridcell "terça-feira, 23 de junho de 2026" [ref=e191]:
                - button "terça-feira, 23 de junho de 2026" [ref=e192]: "23"
              - gridcell "quarta-feira, 24 de junho de 2026" [ref=e193]:
                - button "quarta-feira, 24 de junho de 2026" [ref=e194]: "24"
              - gridcell "quinta-feira, 25 de junho de 2026" [ref=e195]:
                - button "quinta-feira, 25 de junho de 2026" [ref=e196]: "25"
              - gridcell "sexta-feira, 26 de junho de 2026" [ref=e197]:
                - button "sexta-feira, 26 de junho de 2026" [ref=e198]: "26"
              - gridcell "sábado, 27 de junho de 2026" [ref=e199]:
                - button "sábado, 27 de junho de 2026" [ref=e200]: "27"
            - row "domingo, 28 de junho de 2026 segunda-feira, 29 de junho de 2026 terça-feira, 30 de junho de 2026 quarta-feira, 1 de julho de 2026 quinta-feira, 2 de julho de 2026 sexta-feira, 3 de julho de 2026 sábado, 4 de julho de 2026" [ref=e201]:
              - gridcell "domingo, 28 de junho de 2026" [ref=e202]:
                - button "domingo, 28 de junho de 2026" [ref=e203]: "28"
              - gridcell "segunda-feira, 29 de junho de 2026" [ref=e204]:
                - button "segunda-feira, 29 de junho de 2026" [ref=e205]: "29"
              - gridcell "terça-feira, 30 de junho de 2026" [ref=e206]:
                - button "terça-feira, 30 de junho de 2026" [ref=e207]: "30"
              - gridcell "quarta-feira, 1 de julho de 2026" [ref=e208]:
                - button "quarta-feira, 1 de julho de 2026" [ref=e209]: "1"
              - gridcell "quinta-feira, 2 de julho de 2026" [ref=e210]:
                - button "quinta-feira, 2 de julho de 2026" [ref=e211]: "2"
              - gridcell "sexta-feira, 3 de julho de 2026" [ref=e212]:
                - button "sexta-feira, 3 de julho de 2026" [ref=e213]: "3"
              - gridcell "sábado, 4 de julho de 2026" [ref=e214]:
                - button "sábado, 4 de julho de 2026" [ref=e215]: "4"
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
  47  |     this.mes                    = page.locator('#radix-_r_qu_ > div > div > div > div > button > div')
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
  59  |     await this.campoNome.fill('Playwright');
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
> 87  |     await this.mes.click();
      |                    ^ Error: locator.click: Test timeout of 120000ms exceeded.
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
  160 | 
  161 |   const calcularDigito = (base: number[]) => {
  162 |     const soma = base.reduce((total, numero, index) => {
  163 |       return total + numero * (base.length + 1 - index);
  164 |     }, 0);
  165 | 
  166 |     const resto = soma % 11;
  167 |     return resto < 2 ? 0 : 11 - resto;
  168 |   };
  169 | 
  170 |   const primeiroDigito = calcularDigito(numeros);
  171 |   const segundoDigito = calcularDigito([...numeros, primeiroDigito]);
  172 | 
  173 |   return [...numeros, primeiroDigito, segundoDigito].join('');
  174 | 
  175 | 
  176 | }
```