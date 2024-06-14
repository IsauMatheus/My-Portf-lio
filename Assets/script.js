
//Função de efeito de digitaçao//
function typeWhrite(elemento){
    const textArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textArray.forEach((caractere,i) =>{
        setTimeout( () =>{ elemento.innerHTML += caractere;
    }, 75 * i)
    }) 
}

//Elementos selecionados//
let text = document.querySelector('h1')
typeWhrite(text)

//Funçao de ativar link ao dar scroll //

//Elementos selcionados//

let links = document.querySelectorAll(".nav-link")
let sections = document.querySelectorAll("section")

//Eventos para criar a funçao//
window.addEventListener('scroll', () => {
    sections.forEach(sections => {
    let top = window.scrollY;
    let offset = sections.offsetTop - 84;
    let heightsection = sections.offsetHeight
    let  idSection = sections.getAttribute('id')
        if(top >= offset && top < offset + heightsection){
            links.forEach(link => {
                link.classList.remove('actived');

                document.querySelector(`header nav a[href*='${idSection}']`).classList.add
                ('actived');
            })
        }
    })
})

//Efeito ao dar scroll na pagina //
const Sections = document.querySelectorAll('.Section')

const myObserver = new IntersectionObserver((element) => {
    element.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

Sections.forEach((Section) => {
    myObserver.observe(Section)    
})