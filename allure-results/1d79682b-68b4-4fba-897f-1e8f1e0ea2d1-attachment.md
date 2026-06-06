# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: CapitalPrev-Passo01.spec.ts >> Informações do Titular - CPF com menos de 11 dígitos
- Location: tests\CapitalPrev-Passo01.spec.ts:53:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  getByText('CPF inválido')
Expected: 2
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for getByText('CPF inválido')
    23 × locator resolved to 0 elements
       - unexpected value "0"

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
      - generic [ref=e20]:
        - generic [ref=e21]:
          - generic [ref=e22]:
            - generic [ref=e23]: Nome completo *
            - textbox "Digite seu nome completo" [ref=e25]: Playwright
          - generic [ref=e26]:
            - generic [ref=e27]: CPF *
            - generic [ref=e28]:
              - textbox "Digite seu CPF" [active] [ref=e29]: 555.___.___-__
              - generic [ref=e30]: Campo obrigatório
          - generic [ref=e31]:
            - generic [ref=e32]: Data de nascimento *
            - generic [ref=e34]:
              - textbox [ref=e36]: 05/10/2001
              - button [ref=e37]:
                - img [ref=e39]
          - generic [ref=e41]:
            - generic [ref=e42]: Gênero *
            - generic [ref=e43]:
              - combobox [ref=e44]:
                - generic [ref=e45]:
                  - generic: MASCULINO
                - img [ref=e47]
              - combobox [ref=e49]
          - generic [ref=e50]:
            - generic [ref=e51]: Estado civil *
            - generic [ref=e52]:
              - combobox [ref=e53]:
                - generic [ref=e54]:
                  - generic: CASADO
                - img [ref=e56]
              - combobox [ref=e58]
          - generic [ref=e59]:
            - generic [ref=e60]: Email *
            - textbox "Digite seu email" [ref=e62]: teste@teste.com
          - generic [ref=e63]:
            - generic [ref=e64]: Celular *
            - textbox "(00) 0000-0000" [ref=e66]: (61) 98104-7777
        - generic [ref=e67]:
          - generic [ref=e68]:
            - paragraph [ref=e69]: Anexar documento do titular do plano
            - paragraph [ref=e70]: "Os documentos aceitos para envio são: RG, CNH, Certidão de Nascimento (para menores), Passaporte, CTPS, Carteira Profissional ou Identidade Militar. Ressaltamos que a utilização desses documentos tem como finalidade exclusiva a confirmação de suas informações. Formatos aceitos: PDF, JPG, PNG. No máximo 10mb"
          - generic [ref=e73] [cursor=pointer]:
            - generic [ref=e74]: Anexar documento de identificação
            - img [ref=e76]
        - paragraph [ref=e78]: Empregado, associado ou aposentado
        - generic [ref=e79]:
          - button "Copiar Dados do Titular" [ref=e80]:
            - generic [ref=e81]: Copiar Dados do Titular
          - generic [ref=e82]:
            - generic [ref=e83]: Nome completo *
            - textbox "Digite o nome completo" [ref=e85]: Playwright
          - generic [ref=e86]:
            - generic [ref=e87]: Número celular *
            - textbox "(00) 0000-0000" [ref=e89]: (61) 98104-7777
          - generic [ref=e90]:
            - generic [ref=e91]: CPF *
            - textbox "Digite o CPF" [ref=e93]: "555"
          - generic [ref=e94]:
            - generic [ref=e95]: Grau de parentesco *
            - generic [ref=e96]:
              - combobox [ref=e97]:
                - generic [ref=e98]:
                  - generic: NÃO APLICÁVEL
                - img [ref=e100]
              - combobox [ref=e102]
          - generic [ref=e103]:
            - generic [ref=e104]: Instituidor *
            - generic [ref=e105]:
              - combobox [ref=e106]:
                - generic [ref=e107]:
                  - generic: CAPITALPREV
                - img [ref=e109]
              - combobox [ref=e111]
        - button "Continuar" [ref=e112]:
          - generic [ref=e113]: Continuar
    - generic [ref=e114]:
      - text: Versão 0.0.43
      - text: Versão API 0.2.11
```

# Test source

```ts
  1  | import { test, expect }     from '@playwright/test';
  2  | import { CapitalPrevPage }  from './pages/CapitalPrevPage.ts';
  3  | 
  4  | 
  5  |   test('Informações do Titular - Validar campos obrigatórios', async ({ page }) => {
  6  |     const passo01 = new CapitalPrevPage(page);
  7  |     await passo01.abrirPagina();
  8  |     await passo01.continuar();
  9  |     await expect(page.getByText('Campo obrigatório')).toHaveCount(12);
  10 |     
  11 |   });
  12 | 
  13 |   test('Informações do Titular - Bloquear e-mail inválido', async ({ page }) => {
  14 |     const passo01 = new CapitalPrevPage(page);
  15 |     await passo01.abrirPagina();
  16 |     await passo01.preencherNome();
  17 |     await passo01.preencherCPF();
  18 |     await passo01.preencherDataNasc();
  19 |     await passo01.selecionarMasculino();
  20 |     await passo01.selecionarEstado();
  21 |     await passo01.preencherEmailInvalido();
  22 |     await passo01.preencherCelular();
  23 | 
  24 |     // Empregado, associado ou aposentado
  25 |     await passo01.copiarDados();
  26 |     await passo01.selecionarInstituidor();
  27 |     await passo01.continuar();
  28 |     await expect(page.locator('#NO_EMAIL')).toHaveJSProperty('validity.valid', false);
  29 |     
  30 |   });
  31 | 
  32 |   test('Informações do Titular - CPF inválido', async ({ page }) => {
  33 |     const passo01 = new CapitalPrevPage(page);
  34 |     await passo01.abrirPagina();
  35 | 
  36 |     // INFORMAÇÕES PESSOAIS DO TITULAR:
  37 |     await passo01.preencherNome();
  38 |     await passo01.preencherCPFInvalido();
  39 |     await passo01.preencherDataNasc();
  40 |     await passo01.selecionarMasculino();
  41 |     await passo01.selecionarEstado();
  42 |     await passo01.preencherEmail();
  43 |     await passo01.preencherCelular();
  44 | 
  45 |     // Empregado, associado ou aposentado
  46 |     await passo01.copiarDados();
  47 |     await passo01.selecionarInstituidor();
  48 |     await passo01.continuar();
  49 |     await expect(page.getByText('CPF inválido')).toHaveCount(2);
  50 | 
  51 |   });
  52 | 
  53 |   test('Informações do Titular - CPF com menos de 11 dígitos', async ({ page }) => {
  54 |     const passo01 = new CapitalPrevPage(page);
  55 |     await passo01.abrirPagina();
  56 | 
  57 |     // INFORMAÇÕES PESSOAIS DO TITULAR:
  58 |     await passo01.preencherNome();
  59 |     await passo01.preencherCPFInvalido2();
  60 |     await passo01.preencherDataNasc();
  61 |     await passo01.selecionarMasculino();
  62 |     await passo01.selecionarEstado();
  63 |     await passo01.preencherEmail();
  64 |     await passo01.preencherCelular();
  65 | 
  66 |     // Empregado, associado ou aposentado
  67 |     await passo01.copiarDados();
  68 |     await passo01.selecionarInstituidor();
  69 |     await passo01.continuar();
> 70 |     await expect(page.getByText('CPF inválido')).toHaveCount(2);
     |                                                  ^ Error: expect(locator).toHaveCount(expected) failed
  71 |   });
  72 | 
  73 |   test('Informações do Titular - Data de nascimento futura', async ({ page }) => {
  74 |     
  75 |   });
  76 |   test('Informações do Titular - Data de nascimento antiga', async ({ page }) => {
  77 |     
  78 |   });
  79 | 
  80 | 
```