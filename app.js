const ul_container = document.querySelector('.ul_container');
const btn = document.getElementById("addBtn")
const form = document.getElementById("name")
let li = 0;
let text = 1;

function addProduct() {
    if (form.value !== "") {

        li = document.createElement('li');
        text = document.createTextNode(form.value);
       li.appendChild(text);
       ul_container.appendChild(li);

       document.querySelector('li').addEventListener('click', () => {
        document.querySelector('li').toggleAttribute('line');
      }); 

}
}



btn.addEventListener('click', addProduct);








    
    




