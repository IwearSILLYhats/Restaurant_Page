//creates form with first name, last name, email address, subject, and message fields
export default function contact (){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    content.appendChild(contact);

        const formStart = document.createElement('form');
        formStart.classList.add('form');
        contact.appendChild(formStart);

            const header = document.createElement('h3');
            header.textContent = 'Need to get in touch?';
            formStart.appendChild(header);

            const nameField = document.createElement('div');
            nameField.classList.add('nameField');
            formStart.appendChild(nameField);

                const nameLabel = document.createElement('label');
                nameLabel.textContent = 'Name ';
                nameField.appendChild(nameLabel);

                const nameWrapper = document.createElement('div');
                nameWrapper.classList.add('wrapper');
                nameWrapper.classList.add('name');
                nameField.appendChild(nameWrapper);

                    const fNameInput = document.createElement('input');
                    fNameInput.setAttribute('placeholder', 'First');
                    nameWrapper.appendChild(fNameInput);
                    
                    const lNameInput = document.createElement('input');
                    lNameInput.setAttribute('placeholder', 'Last');
                    nameWrapper.appendChild(lNameInput);

            const emailWrapper = document.createElement('div');
            emailWrapper.classList.add('wrapper');
            formStart.appendChild(emailWrapper);

                const emailLabel = document.createElement('label');
                emailLabel.textContent = 'Email ';
                emailWrapper.appendChild(emailLabel);

                const emailInput = document.createElement('input');
                emailInput.setAttribute('placeholder', 'example@sample.com');
                emailWrapper.appendChild(emailInput);

            const subjectWrapper = document.createElement('div');
            subjectWrapper.classList.add('wrapper');
            formStart.appendChild(subjectWrapper);

                const subjectLabel = document.createElement('label');
                subjectLabel.textContent = 'Subject ';
                subjectWrapper.appendChild(subjectLabel);

                const subjectInput = document.createElement('input');
                subjectInput.setAttribute('placeholder', "RE: suspicious glow");
                subjectWrapper.appendChild(subjectInput);

            const messageWrapper = document.createElement('div');
            messageWrapper.classList.add('wrapper');
            formStart.appendChild(messageWrapper);

                const messageLabel = document.createElement('label');
                messageLabel.textContent = 'Message ';
                messageWrapper.appendChild(messageLabel);

                const messageInput = document.createElement('textarea');
                messageInput.setAttribute('rows', '4');
                messageInput.setAttribute('placeholder', "I jUsT gOt RaDiAtIoN pOiSoNiNg. That's what you sound like.");
                messageWrapper.appendChild(messageInput);

            const submitButton = document.createElement('button');
            submitButton.textContent = 'SUBMIT';
            submitButton.setAttribute('type', 'button');
            formStart.appendChild(submitButton);
}