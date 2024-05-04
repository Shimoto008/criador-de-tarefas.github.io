const botao = document.querySelector('.add-task')
const addtarefa = document.querySelector('.input-task')
const listacomp = document.querySelector('.add-list')


let lista = []



function valorInput(){
   lista.push({
    tarefa: addtarefa.value,
    concluida: false
   })

   addtarefa.value = ""
   tarefaMost()

}

function tarefaMost(){
    
    let novaLi = ""
   
    
    lista.forEach((item, index) => {
        novaLi = novaLi +  `
         <li class="task ${item.concluida && "done"}">
              <img src="img/checked.png" alt="acept" onclick="concluirTaf(${index})"/>
                  <p>${item.tarefa}</p>
               <img src="img/trash.png" alt="lixeira" onclick="deleteItem(${index})"/>
        </li>
        `
    } )


    listacomp.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(lista))
    
    
}

function concluirTaf(index){

    lista[index].concluida = !lista[index].concluida
    tarefaMost()

}

function deleteItem(index){
   lista.splice(index, 1)

   tarefaMost()

}

function loadingItem(){
    const tarefaslocal = localStorage.getItem('lista')

    if(tarefaslocal){
        lista = JSON.parse(tarefaslocal)

    }
    
    tarefaMost()
}

loadingItem()




botao.addEventListener('click', valorInput )