const taskTitle = 'Complete Cypress setup';
const taskUrl = 'dQw4w9WgXcQ';
let todo = "new todo";

describe('Todo Item Descriptin Entry', () => {
    before(() => {
        // We ned to create a user before running the test use the command defined in the support folder
        cy.createUser();
        cy.login();
        cy.createTask(taskTitle, taskUrl);
        cy.wait(1000);
        cy.clickTask(taskTitle);
        cy.get('.popup').should('be.visible');
    });


    // Test case R8UC1 test Id 1
    it('Enter description in input field, the description should appear coorectly', () => {
    
        // // Interact with elements within the popup
        // Adjust the timeout if the element takes time to appear
        // Clear any default text and type new text
        const descriptionText = "Complete the report";
        cy.contains('(add a description here)').click();
        
        cy.get('input[type="text"]').eq(2)  // Adjust the index if needed
          .should('be.visible')
          .click()
          .clear()
          .type(descriptionText)
          .should('have.value', descriptionText);



       // Scroll to the element and then clear it
        // Force the action to bypass any visibility checks
        

        // Submit the form to save the new description
        cy.get('input[type="submit"]').eq(1).click();

    
        // // Optionally close the popup if necessary for further actions
        // cy.get('.close-btn').click();
        // cy.get('.popup').should('not.exist');
       
        // cy.get(".todo-item")
        //     .its("length")
        //     .then((len) => {
        //         cy.get('input[placeholder="Add a new todo item"]').type(todo, {
        //             force: true,
        //         });
        //         cy.get(".inline-form").submit();
        //         cy.get(".todo-item:last").should("contain.text", todo);
        //         // Check how many todo items there are after adding a new one
        //         cy.get(".todo-item")
        //             .its("length")
        //             .should("eq", len + 1);
        //     });
      });

      afterEach(() => {
        // Reset the description to its original state
        cy.contains('Complete the report').click();
        cy.get('input[type="text"]').eq(2)
          .should('be.visible')
          .click()
          .clear()
          .type('(add a description here)'); // Reset to the original text

        cy.get('input[type="submit"]').eq(1).click(); // Assuming this is necessary to save the change
        
       
    });
    
      after(() => {
        // Clean up and delete the user after the tests are completed
        cy.deleteUser();
        
      });


})