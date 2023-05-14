describe('e2e test', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.window().then((win) => {
            win.localStorage.setItem("access_token", "ya29.a0AWY7CklVlgALUlcxg3KV_YUgJd_Wq6OxT74geFVCO9eWLOq0Bbwjat0O81q7kofXL79b6SzCWFLeMu8zSe-FqiX_-0gsDNoJKUpWf86RjxoqYM5VAWwIadAPQhKnzJbW3hZWng-C9T1JzVw4pBEj_Ox7Q9YgaCgYKAcISARASFQG1tDrpR_zNp6n4hcFn6m6PcOJPYw0163");
            win.localStorage.setItem("profileImg", "https://lh3.googleusercontent.com/a/AGNmyxakzvuZeE63ADf_bvk7_TAkZkMK2NsPZ5Fm1ZYLcOI=s96-c");
        });
    })

    it('test init visit', () => {
        cy.visit('http://localhost:3000/dashboard/')
        cy.get('.Header-style__Wrapper-sc-ce8a9536-2 > h1').should('have.text', "Dashboard")
        cy.get(':nth-child(1) > .WorkspaceLink-style__StyledLink-sc-8e984ea0-1 > img').click()
        cy.get('.Header-style__Wrapper-sc-ce8a9536-2 > h1').should('have.text', "Moje složky")
        cy.get('.Folder-style__ButtonWrapper-sc-cc89e4f4-5 > .Button-style__StyledButton-sc-4ba6b3f3-1').should('contain.text', "Vytvořit novou složku")
        cy.get('.Folder-style__ButtonWrapper-sc-cc89e4f4-5 > .Button-style__StyledButton-sc-4ba6b3f3-1').click()
        const date = new Date()
        cy.get('.CreateFolder-style__StyledInput-sc-c0086ab2-2').type(`Faktury  ${date.toLocaleTimeString()}`)
        cy.get('.Button-style__StyledSecondaryButton-sc-4ba6b3f3-9').click()
        cy.get('.CreateFolder-style__StyledSchemaInput-sc-c0086ab2-6').type("Firma")
        cy.get('[style="display: flex; justify-content: space-between;"] > .Button-style__StyledButton-sc-4ba6b3f3-1').click()
        cy.wait(1000)
        cy.get('.CreateFolder-style__SuccessModal-sc-c0086ab2-7 > div > .Button-style__StyledButton-sc-4ba6b3f3-1 > .Button-style__StyledInput-sc-4ba6b3f3-2').click({force: true})
        cy.get('.CreateFolder-style__SuccessModal-sc-c0086ab2-7 > div > .Button-style__StyledOutlineButton-sc-4ba6b3f3-6').click({force: true})
        cy.wait(1000)
        cy.get('.Button-style__StyledInput-sc-4ba6b3f3-2').click({force:true})
    })
    //
    it('can add new todo items', () => {
        cy.visit('http://localhost:3000/dashboard/')
        cy.get('.DragAndDrop-style__StyledDragAndDrop-sc-5b92576c-0').then((dropArea) => {
            cy.fixture('Screenshot_2.png', 'base64').then((fileContent) => {
                // Convert the base64 file content to a Blob
                const blob = Cypress.Blob.base64StringToBlob(fileContent);

                // Create a new FileReader to read the Blob content
                const fileReader = new FileReader();
                fileReader.onloadend = () => {
                    // Create a custom drop event with the necessary properties
                    const dropEvent = new Event('drop', { bubbles: true });
                    dropEvent.dataTransfer = new DataTransfer();

                    // Set the file data to the DataTransfer object using setData
                    dropEvent.dataTransfer.setData('application/x-moz-file', blob);
                    dropEvent.dataTransfer.setData('text/uri-list', fileReader.result);

                    // Trigger the drop event on the drop area element
                    dropArea[0].dispatchEvent(dropEvent);
                };

                // Read the Blob content as a data URL using FileReader
                fileReader.readAsDataURL(blob);
            });
        });
    })
    //
    // it('can check off an item as completed', () => {
    //
    //     cy.contains('Pay electric bill')
    //         .parent()
    //         .find('input[type=checkbox]')
    //         .check()
    //
    //     cy.contains('Pay electric bill')
    //         .parents('li')
    //         .should('have.class', 'completed')
    // })
    //
    // context('with a checked task', () => {
    //     beforeEach(() => {
    //
    //         cy.contains('Pay electric bill')
    //             .parent()
    //             .find('input[type=checkbox]')
    //             .check()
    //     })
    //
    //     it('can filter for uncompleted tasks', () => {
    //
    //         cy.contains('Active').click()
    //
    //
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .first()
    //             .should('have.text', 'Walk the dog')
    //         cy.contains('Pay electric bill').should('not.exist')
    //     })
    //
    //     it('can filter for completed tasks', () => {
    //
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .first()
    //             .should('have.text', 'Pay electric bill')
    //
    //         cy.contains('Walk the dog').should('not.exist')
    //     })
    //
    //     it('can delete all completed tasks', () => {
    //         cy.contains('Clear completed').click()
    //
    //         cy.get('.todo-list li')
    //             .should('have.length', 1)
    //             .should('not.have.text', 'Pay electric bill')
    //
    //         cy.contains('Clear completed').should('not.exist')
    //     })
    // })
})
