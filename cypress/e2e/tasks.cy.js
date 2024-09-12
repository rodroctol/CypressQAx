//import { faker } from '@faker-js/faker' ### Leaving this code commented only for studying purposes.


//const taskName = faker; ### Leaving this code commented only for studying purposes.

describe('should creat a new task', () => {

    var taskName = "Read a book about JS coding.";

    it('register a new task', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: taskName }
        }).then(response => {
            expect(response.status).to.eq(204);
        })

        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type(taskName);

        //.type(randomName.music.songName()); ### Leaving this code commented only for studying purposes.

        cy.contains('button', 'Create').click();

        cy.contains('main div p', taskName)
            .should('be.visible');
    })

    it('should not allow repeated task', () => {

        cy.request({
            url: 'http://localhost:3333/helper/tasks',
            method: 'DELETE',
            body: { name: taskName }
        }).then(response => {
            expect(response.status).to.eq(204);
        })

        cy.request({
            url: 'http://localhost:3333/tasks',
            method: 'POST',
            body: { name: taskName, is_done: false }
        }).then(response => {
            expect(response.status).to.eq(201);
        })

        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type(taskName);
        cy.contains('button', 'Create').click();
        cy.get('.swal2-html-container')
            .should('be.visible')
            .should('have.text', 'Task already exists!');
    })
})