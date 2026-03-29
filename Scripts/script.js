const container = document.querySelector(".content")
const tagIndexed = document.querySelector(".indexed-tags")
const span = document.querySelector(".how-many-libs span")
const btnAll = document.querySelector(".tag-all")
const searchBar = document.querySelector("#search-bar")
const searchBarBox = document.querySelector(".search-bar-box")


let tagsArr = []
let globalData = []


async function init(){
    try{
        const response = await fetch("../Data/data.json");
        globalData = await response.json()

        renderCards(globalData)
        setupFilters(globalData)
        setupSearch(globalData)
        span.textContent = globalData.length
    }catch (error){
        console.log("Erro ao carregar JSON")
    }
}


function renderCards(dataToShow) {
    container.innerHTML = ""
    
    dataToShow.forEach((lib) => {
        const newCard = document.createElement('div')
        newCard.classList.add("card-container")
        newCard.innerHTML = `
            <div class="card-img">${lib.icon}</div>
            <div class="card-name">${lib.name}</div>
            <div class="card-description">
                <p>${lib.description.slice(0, 140)}...</p>
            </div>
            <div class="card-tag-category">${lib.category}</div>
        `

        newCard.addEventListener('click', () => {
            window.location.href = `details.html?id=${lib.id}`
        })

        container.appendChild(newCard)
    })
}



function setupFilters(data){
    btnAll.addEventListener('click', () => {
        span.textContent = data.length
        btnAll.classList.add('active')
        document.querySelectorAll('.tags').forEach(tag => tag.classList.remove('active'));
        renderCards(data)
    }); 
    
    
    data.forEach((lib) => {
        if (!tagsArr.includes(lib.category)) {
            tagsArr.push(lib.category)
            
            const newTag = document.createElement('div')
            newTag.classList.add("tags")
            newTag.textContent = lib.category
            
            newTag.addEventListener('click', (e) => {
                e.stopPropagation()
                
                const filtered = data.filter(card => card.category === lib.category)
                span.textContent = filtered.length
                document.querySelectorAll('.tags').forEach(t => t.classList.remove('active'))
                newTag.classList.add('active')
                btnAll.classList.remove('active')
                renderCards(filtered)
            })
            
            tagIndexed.appendChild(newTag)
           
        }
    })
}

function setupSearch(data) {
    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Filtra os dados para os cards e para a lista
        const filtered = data.filter(lib => {
            return (
                lib.name.toLowerCase().includes(searchTerm) || 
                lib.category.toLowerCase().includes(searchTerm)
            );
        });

        // Atualiza os cards principais
        renderCards(filtered);
        span.textContent = filtered.length;

        // Lógica da lista suspensa (searchBarBox)
        if (searchTerm.length > 0 && filtered.length > 0) {
            renderSearchDropdown(filtered);
            searchBarBox.classList.add("visible");
        } else {
            searchBarBox.classList.remove("visible");
            // Limpa após a transição de saída para não "piscar"
            setTimeout(() => { if(!searchBarBox.classList.contains("visible")) searchBarBox.innerHTML = ""; }, 300);
        }
    });

    // Fecha a busca ao clicar fora
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".search-container")) {
            searchBarBox.classList.remove("visible");
        }
    });
}

function renderSearchDropdown(foundData) {
    searchBarBox.innerHTML = "";
    const ul = document.createElement('ul');
    ul.classList.add('ul-search-response');

    foundData.forEach((lib) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="details.html?id=${lib.id}">
                <span class="search-icon">${lib.icon}</span>
                <span class="search-name">${lib.name}</span>
                <span class="search-cat">${lib.category}</span>
            </a>
        `;
        ul.appendChild(li);
    });

    searchBarBox.appendChild(ul);
}

init()




