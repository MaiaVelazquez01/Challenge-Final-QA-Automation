# Challenge Final QA Automation - Cohorte I 2026

## Integrantes del Grupo

| Nombre            | Email                                                             |
| ----------------- | ----------------------------------------------------------------- |
| Brisa Villca      | [brisaaldanavillca@gmail.com](mailto:brisaaldanavillca@gmail.com) |
| Maia Velazquez    | [camila2014.live@gmail.com](mailto:camila2014.live@gmail.com)     |
| Tobias Cabrera    | [tobicabrera14@gmail.com](mailto:tobicabrera14@gmail.com)         |
| Alejandra Vazquez | [alevazdom70@gmail.com](mailto:alevazdom70@gmail.com)             |
| Irai Bocco        | [ircastro333@gmail.com](mailto:ircastro333@gmail.com)             |
| Dayana Herrera    | [milendayana@gmail.com](mailto:milendayana@gmail.com)

---

## Descripción del Proyecto

Este proyecto corresponde al Trabajo Final Integrador del curso QA Automation - Cohorte I 2026.

La aplicación utilizada para las pruebas es:

https://automationintesting.online/

Shady Meadows es un sistema web de reservas para un Bed & Breakfast que permite:

* Consultar habitaciones disponibles.
* Realizar reservas.
* Contactar al establecimiento.
* Gestionar reservas desde un panel administrativo.

El objetivo del proyecto fue aplicar técnicas de testing manual y automatizado utilizando Cypress, además de documentar casos de prueba y reportar defectos encontrados.

---

## Tecnologías Utilizadas

* JavaScript
* Node.js
* Cypress
* Git
* GitHub
* Trello
* Google Sheets / Excel

---

## Estructura del Proyecto

```text
cypress
│
├── e2e
│   └── myTestRestfulBooker.cy.js
│
├── fixtures
│   └── credencialesAdmin.json
│   └── datosReserva.json
├── support
│   ├── commands.js
│   └── e2e.js
│
|__ cypress.config.js
|__ README.md
```

---

## Casos de Prueba

Documentación de casos de prueba:

https://docs.google.com/spreadsheets/d/1CSTu1HyEGi-I8h1tQkNuG1LzjfVN_eO71MOCJHOOSN0/edit?gid=1904594772#gid=1904594772

La documentación incluye:

* Casos positivos
* Casos negativos
* Casos de borde
* Estado de ejecución
* Evidencias
* Tickets asociados

---

## Tablero de Bugs

Tablero Trello:

https://trello.com/b/jYiloEky/reporte-de-bugs-shady-meadows

Columnas utilizadas:

* Backlog de Bugs
* En Progreso
* Listo para Revisar
* Cerrado

Cada bug contiene:

* ID
* Título
* Descripción
* Pasos para reproducir
* Resultado esperado
* Resultado actual
* Severidad
* Prioridad
* Evidencia

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/[usuario]/[repositorio].git
```

Ingresar al proyecto:

```bash
cd [repositorio]
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecución de Pruebas

Abrir Cypress:

```bash
npx cypress open
```

Ejecutar en modo headless:

```bash
npx cypress run
```

---

## Credenciales Utilizadas

Panel Administrativo:

Usuario:

```text
admin
```

Contraseña:

```text
password
```

---

## Cobertura de Testing

Módulos evaluados:

* Booking
* Contacto
* Admin panel
* Home

Tipos de pruebas realizadas:

* Funcionales
* Positivas
* Negativas
* Casos de borde
* Automatizadas
* Exploratorias

---

## Evidencias

Las evidencias de ejecución y reporte de defectos se encuentran adjuntas en:

* Tablero Trello
* Capturas de pantalla
* Videos generados

---

## Autoría

Trabajo realizado como parte del Challenge Final de QA Automation - Cohorte I 2026.

Fecha de entrega: 25/06/2026
