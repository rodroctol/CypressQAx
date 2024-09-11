import { faker } from '@faker-js/faker'


const randomName = faker;

describe('tarefas', () => {
    
    it('cadastrar uma nova tarefa', () => {
        cy.visit('http://localhost:3000');
        cy.get('input[placeholder="Add a new Task"]')
            .type(randomName.music.songName());
        cy.contains('button', 'Create').click();
    })

})