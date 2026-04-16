
class LanguageCard extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const name = this.getAttribute('name');
        const description = this.getAttribute('description');

        shadow.innerHTML = `
            <style>
                :host {
                    text-align: left;
                }
                h3 {
                    font-size: 1.25rem;
                    font-weight: 600;
                    color: var(--primary-color, #007BFF);
                    margin: 0 0 0.5rem 0;
                }
                p {
                    margin: 0;
                }
            </style>
            <h3>${name}</h3>
            <p>${description}</p>
        `;

        this.addEventListener('click', () => {
            alert(`Let's start learning ${name}!`);
        });
    }
}

customElements.define('language-card', LanguageCard);
