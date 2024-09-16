describe('tasks', () => {
    
    let testData;

    before(() => {
        cy.fixture('tasks').then(t => {
            testData = t
        })
    })

    context('register', () => {
        const taskName = "Read a book about JS coding.";

        it('register a new task', () => {
            cy.removeTaskByName(taskName);
            cy.createTask(taskName);
            cy.contains('main div p', taskName)
                .should('be.visible');
        });

        it('should not allow repeated task', () => {

            const task = testData.dup

            cy.removeTaskByName(task.name);
            cy.postTask(task.name);
            cy.createTask(task.name);
            cy.get('.swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!');
        });

        it('Requested field', () => {
            cy.createTask();
            cy.isRequired('This is a required field');
        })
    });

    context('update', () => {
        it('completing a task', () => {
            const taskName  = {
                name: 'resolver bug',
                is_done: false
            }
            cy.removeTaskByName(taskName.name);
            cy.postTask(taskName.name);

            cy.visit('/');

            cy.contains('p', taskName.name)
                .parent()
                .find('button[class*=ItemToggle')
                .click()

            cy.contains('p', taskName.name).should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('Delete', () => {
        it('Removing a task', () => {
            const taskName = "cagando tudo"
            cy.removeTaskByName(taskName);
            cy.createTask(taskName);

            cy.visit('/');

            cy.contains('p', taskName)
                .parent()
                .find('button[class*=ItemDelete')
                .click()

            cy.contains('p', taskName).should('not.exist')
        })
    })
});