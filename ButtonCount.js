export class ButtonCount extends HTMLElement {
    constructor () {
        super ();

        // create button element
        let btn = document.createElement ('button');
        btn.innerHTML = 'Times Clicked: ';

        // create counter
        let count = document.createElement ('output');
        count.textContent = 0;
        
        btn.append (count);

        // Update the count when the button is clicked
        btn.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent = currVal + 1;
        });

        // use shadow dom for markup
        this.attachShadow ({mode: 'open'});
        this.shadowRoot.append(btn);
    }
}

// custom elements registry 
customElements.define('button-count', ButtonCount);
