// ID Test Scenario : PPDB-R.1.2
// Test Scenario Description : Check The Register Functionally

describe('Test Scenario Register', () => {
  // Test Case ID : TC_R_01
  // Test Case : Fill in all the fields with the correct format

  it('Should be able to register', () => {
    cy.visit('http://127.0.0.1:8000/register')
    cy.get('#username').type("khrnnisak07")
    cy.get('#name').type("Inda Khoirun Nisak")
    cy.get('#email').type("khrnnisak07@gmail.com")
    cy.get('#password').type("654321")
    cy.get('#password-confirm').type("654321")
    cy.get('.btn').click()
  })
  // Test Case ID : TC_R_02
  // Test Case : Leave one field blank

  it('Must fail to register (leave one field blank)', () => {
    cy.visit('http://127.0.0.1:8000/register')
    cy.get('#username')
    cy.get('#name').type("Inda Khoirun Nisak")
    cy.get('#email').type("khrnnisak07@gmail.com")
    cy.get('#password').type("654321")
    cy.get('#password-confirm').type("654321")
    cy.get('.btn').click()
  })
  // Test Case ID : TC_R_03
  // Test Case : Fill in the email field with the wrong format

  it('Must fail to register (fill in the email field with the wrong format)', () => {
    cy.visit('http://127.0.0.1:8000/register')
    cy.get('#username').type("khrnnisak07")
    cy.get('#name').type("Inda Khoirun Nisak")
    cy.get('#email').type("khrnnisak07")
    cy.get('#password').type("654321")
    cy.get('#password-confirm').type("654321")
    cy.get('.btn').click()
  })
  // Test Case ID : TC_R_04
  // Test Case : Fill in the password field with 2 characters

  it('Must fail to register (fill in the password field with 2 characters)', () => {
    cy.visit('http://127.0.0.1:8000/register')
    cy.get('#username').type("khrnnisak0")
    cy.get('#name').type("Inda Khoirun Nisak")
    cy.get('#email').type("khrnnisak07@gmail.com")
    cy.get('#password').type("65")
    cy.get('#password-confirm').type("65")
    cy.get('.btn').click()
  })
  // Test Case ID : TC_R_05
  // Test Case : Enter a different password in the confirm password field

  it('Must fail to register (enter a different password in the confirm password field)', () => {
    cy.visit('http://127.0.0.1:8000/register')
    cy.get('#username').type("khrnnisak0")
    cy.get('#name').type("Inda Khoirun Nisak")
    cy.get('#email').type("khrnnisak07@gmail.com")
    cy.get('#password').type("654321")
    cy.get('#password-confirm').type("658901")
    cy.get('.btn').click()
  })
})