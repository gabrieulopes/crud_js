'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')


const tempclient = {
    nome: "Emanuel",
    email: "maneu@gmail.com",
    celular: "92991661794",
    cidade: "manaus"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalStorage = (dbclient) => localStorage.setItem("db_client", JSON.stringify(dbclient))

//CRUD - CREAT, READ, UPDATE, DELETE

//CRUD - DELETE
const DELETEClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index, 1)
    setLocalStorage(dbClient)
}

//CRUD - UPDATE
const UPDATEClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client
    setLocalStorage(dbClient)
}

//CRUD - READ
const readClient = () => getLocalStorage()

//CRUD - CREATE
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    
}


//Interação com o layout
const saveClient = () => {
    if (isValidFields()) {
        console.log ('cadastrando cliente')
    }
    
}
  
//eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)