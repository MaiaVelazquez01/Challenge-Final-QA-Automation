describe('Booking - Shady Meadows', () => {

    beforeEach(() => {
        cy.visit('https://automationintesting.online/')
        cy.consultarDisponibilidad('15/07/2026', '16/07/2026')
    })

    it('CP1 - Reserva exitosa como usuario invitado', () => {
        cy.intercept('POST', '**/api/booking').as('crearReserva')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosValidos
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReserva')
        })
    })

    it('CP2 - Reserva con campos vacíos', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConCamposVacios')

        cy.get('.btn-primary').click()

        cy.validarErrorReserva('@crearReservaConCamposVacios')

        cy.verMsjsCamposObligatorios()
        cy.verMsjErrorFN()
        cy.verMsjErrorLN()
        cy.verMsjErrorPhone()

    })

    it('CP3 - Reserva con dato FirstName de 2 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConFNInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConFNDe2Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorFN()
        })

        cy.validarErrorReserva('@reservarConFNInvalido')
    })

    it('CP4 - Reserva con dato FirstName de 3 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConFNValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConFNDe3Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReservaConFNValido')
        })
    })

    it('CP5 - Reserva con dato FirstName de 18 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConFNValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConFNDe18Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReservaConFNValido')
        })
    })

    it('CP6 - Reserva con dato FirstName de 19 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConFNInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConFNDe19Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorFN()
        })

        cy.validarErrorReserva('@reservarConFNInvalido')
    })

    it('CP7 - Reserva con dato LastName de 2 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConLNInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConLNDe2Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorLN()
        })

        cy.validarErrorReserva('@reservarConLNInvalido')
    })

    it('CP8 - Reserva con dato LastName de 3 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConLNValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConLNDe3Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')

            cy.validarReservaExitosa('@crearReservaConLNValido')

        })
    })

    it('CP9 - Reserva con dato LastName de 30 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConLNValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConLNDe30Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReservaConLNValido')
        })
    })

    it('CP10 - Reserva con dato LastName de 31 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConLNInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConLNDe31Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorLN()
        })

        cy.validarErrorReserva('@reservarConLNInvalido')
    })

    it('CP11 - Reserva con dato Email inválido', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConEmailInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConEmailInvalido

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorEmail()
        })

        cy.validarErrorReserva('@reservarConEmailInvalido')
    })

    it('CP12 - Reserva con dato Phone de 10 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConPhoneInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConPhoneDe10Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorPhone()
        })

        cy.validarErrorReserva('@reservarConPhoneInvalido')
    })

    it('CP13 - Reserva con dato Phone de 11 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConPhoneValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConPhoneDe11Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReservaConPhoneValido')
        })
    })

    it('CP14 - Reserva con dato Phone de 21 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('crearReservaConPhoneValido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConPhoneDe21Caracteres
            cy.completarFormularioReserva(input)
            cy.reservarHabitacion('2026-07-15', '2026-07-16')
            cy.validarReservaExitosa('@crearReservaConPhoneValido')
        })
    })

    it('CP15 - Reserva con dato Phone de 22 caracteres', () => {
        cy.intercept('POST', '**/api/booking').as('reservarConPhoneInvalido')

        cy.fixture('datosReserva').then((data) => {
            const input = data.datosConPhoneDe22Caracteres

            cy.completarFormularioReserva(input)
            cy.get('.btn-primary').click()

            cy.verMsjErrorPhone()
        })

        cy.validarErrorReserva('@reservarConPhoneInvalido')
    })

    it('CP16 - Validar que el sistema calcula correctamente el precio total de la reserva', () => {

        cy.contains('a', /rooms/i).click({ force: true })

        cy.get('input[type="text"]').eq(0).type('25/06/2026')
        cy.get('input[type="text"]').eq(1).type('28/06/2026')

        cy.contains('button', /check availability/i).click({ force: true })

        cy.wait(3000)

        cy.get('#rooms .card').first().within(() => {
            cy.contains(/book now|reserve/i).click({ force: true })
        })

        cy.contains(/price summary/i).should('be.visible')

        cy.get('body').then(($body) => {

            const montos = [...$body.text().matchAll(/£(\d+)/g)]
                .map(m => Number(m[1]))

            const subtotal = montos.at(-4)
            const cleaningFee = montos.at(-3)
            const serviceFee = montos.at(-2)
            const total = montos.at(-1)

            expect(total).to.equal(subtotal + cleaningFee + serviceFee)

        })

    })

})

describe('Contacto - Shady Meadows', () => {

    it('CP28 - Envío exitoso del formulario de contacto con datos válidos', () => {

        cy.visit('https://automationintesting.online/')

        cy.contains('a', /contact|contact us/i).click({ force: true })

        cy.fixture('datosReserva').then(({ datosContactoValidos }) => {

            cy.get('#name').type(datosContactoValidos.Name)
            cy.get('#email').type(datosContactoValidos.Email)
            cy.get('#phone').type(datosContactoValidos.Phone)
            cy.get('#subject').type(datosContactoValidos.Subject)
            cy.get('#description').type(datosContactoValidos.Description)

        })

        cy.contains('button', /submit|send|enviar/i).click({ force: true })

        cy.contains(/thanks for getting in touch/i)
            .should('be.visible')

    })

})

describe('Admin panel - Shady Meadows', () => {

    it('CP29 - Login exitoso con credenciales válidas', () => {

        cy.visit('https://automationintesting.online/admin', {
            failOnStatusCode: false
        })

        cy.get('#username')
            .should('be.visible')
            .type('admin')

        cy.get('#password')
            .should('be.visible')
            .type('password')

        cy.get('#doLogin')
            .click()

        cy.url({ timeout: 10000 })
            .should('include', '/admin')

        cy.contains(/rooms/i, { timeout: 10000 })
            .should('be.visible')
    })

    it('CP30 - Login con contraseña incorrecta', () => {
        cy.fixture('credencialesAdmin').then((data) => {
            cy.visit('https://automationintesting.online/admin', { failOnStatusCode: false })

            cy.get('#username').type(data.adminValido.Username)
            cy.get('#password').type('contraseña_incorrecta')
            cy.get('#doLogin').click()
            cy.contains("Invalid credentials").should("be.visible")

        })
    })

    it('CP31 - Login solo con usuario, dejando password vacio', () => {
        cy.fixture('credencialesAdmin').then((data) => {
            cy.visit('https://automationintesting.online/admin', { failOnStatusCode: false })
            cy.get('#username').type(data.adminValido.Username)
            cy.get('#doLogin').click()
            cy.contains('Invalid credentials').should('be.visible')
        })
    })

    it('CP32 - visualizacion y lectura de mensajes de clientes', () => {
        cy.visit('https://automationintesting.online/', { failOnStatusCode: false })
        cy.contains('Shady Meadows', { timeout: 15000 }).should('be.visible')
        
        cy.get('#name').type('qa tester')
        cy.get('#email').type('qa@tester.com')
        cy.get('#phone').type('12345678901')
        cy.get('#subject').type('Mensaje de prueba CP32')
        cy.get('#description').type('Este mensaje es para verificar la lectura en el panel admin.')
        cy.contains('Submit').click()
        
        cy.fixture('credencialesAdmin').then((data) => {
            cy.visit('https://automationintesting.online/admin', { failOnStatusCode: false })
            cy.get('#username').type(data.adminValido.Username)
            cy.get('#password').type(data.adminValido.Password)
            cy.get('#doLogin').click()

            cy.contains('Messages').click()

            cy.contains('Mensaje de prueba CP32').should('be.visible').click()
            cy.contains('Este mensaje es para verificar la lectura en el panel admin.').should('be.visible')
        })
    })

})