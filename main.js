const ul = document.querySelector("ul")


async function main() {

    let response = await

    fetch ("https://jsonplaceholder.typicode.com/todos")

    console.log(response);

    let jsonqilish = await response.json()
    console.log(jsonqilish);

    for (
        const data of jsonqilish    
    ){
        console.log(data);

        const liElement = document.createElement("li")
        const cardElement = document.createElement("div")
        const  cardHeader = document.createElement("div")
        const cardTitle = document.createElement("h2")
        const cardBody = document.createElement("div")


        cardElement.classList.add("card")
        cardHeader.classList.add("card-header")
        cardBody.classList.add("card-body")
        cardTitle.classList.add("card-title")

        cardTitle.textContent = data.title
        cardHeader.textContent = data.completed
        cardBody.textContent = data.id


        cardHeader.appendChild(cardTitle)
        cardElement.appendChild(cardHeader)
        cardElement.appendChild(cardBody)
        liElement.appendChild(cardElement)
        ul.appendChild(liElement)





    }
}

main()