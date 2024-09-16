Cypress.Commands.add('createTask', (taskName = '') => {
    cy.visit('/');
    cy.get('input[placeholder="Add a new Task"]').as('inputTask');

    if (taskName !== '') {
        cy.get('@inputTask')
            .type(taskName);
    }
    cy.contains('button', 'Create').click();
});

Cypress.Commands.add('removeTaskByName', (taskName) => {
    cy.request({
        url: Cypress.env('apiUrl') + '/helper/tasks',
        method: 'DELETE',
        body: { name: taskName }
    }).then(response => {
        expect(response.status).to.eq(204);
    })
});

Cypress.Commands.add('postTask', (taskName) => {
    cy.request({
        url: 'http://localhost:3333/tasks',
        method: 'POST',
        body: { name: taskName, is_done: false }
    }).then(response => {
        expect(response.status).to.eq(201);
    });
});

Cypress.Commands.add('isRequired', (targetMessage) => {
    cy.get('@inputTask')
        .invoke('prop', 'validationMessage')
        .should((text) => {
            expect(
                text
            ).to.eq(text)
        })
})