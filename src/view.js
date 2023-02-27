//import AmpersandView from 'ampersand-view';

export default function greet(name) {
    const div = document.createElement("div")
    const title = document.createElement("h1");
    const hello = document.createElement("h2");
    title.innerHTML = `Ampersand for Dummies`;
    hello.innerHTML = `Hello, ${name}.`;
    div.append(title, hello);
    return div
}
document.body.appendChild(greet("Raquel"));
console.log(greet("Raquel"));

//greet("Carly")
console.log("Raquel needs to sleep")

// export default function addParagraph() {
//     
//     console.log("Raquel needs to sleep")
//     return
// }

// import AmpersandView from 'ampersand-view';


// module.exports = AmpersandView.extend({
    
//     template: "<h2>Let us see if this works</h2>",

    // events: {
    //     "click [data-hook=edit]": "edit"
    // },

    // bindings: {
    //     "model.name": {
    //         type: 'text',
    //         hook: 'name'
    //     },

    //     "model.age": {
    //         type: 'text',
    //         hook: 'age'
    //     }
    // },
    //}
    
// });
