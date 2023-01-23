const container = document.querySelector('.container');

console.log(container);

const btn = document.getElementById("addSl")


btn.addEventListener('click' , function addList() {
    const li = document.createElement('li');
    const text = document.createTextNode("salut");
    li.appendChild(text);
    container.appendChild(li);
    });



