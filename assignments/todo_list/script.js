function AllTodos() {
    var div = document.getElementsByClassName("Todos")[0];
    div.innerHTML = '';
    var h5 = document.createElement('h5');
    h5.innerHTML = "All TODOS"
    div.appendChild(h5);
    
    var ul = document.createElement("ul");
    div.appendChild(ul);
    
    
        async function fetchData(url) {
    
            const response = await fetch(url);
            var data = await response.json();
            for (let i = 0; i < data.length; i++) {
                var li = document.createElement('li');
                li.innerHTML = "userId  :" + data[i].userId + " id :" + data[i].id + "  title :" + data[i].title + "  completed : " + data[i].completed;
                ul.append(li);
            }
    
        }
    
        fetchData('https://jsonplaceholder.typicode.com/todos');
    };
    
function Completed(){
    var div = document.getElementsByClassName("Todos")[0];
    div.innerHTML = '';
    var h5 = document.createElement('h5');
    h5.innerHTML = "COMPLETED TODOS"
    div.appendChild(h5);
    
    var ul = document.createElement("ul");
    div.appendChild(ul);

    async function fetchData(url) {
    
        const response = await fetch(url);
        var data = await response.json();
        for (let i = 0; i < data.length; i++) {
            if(data[i].completed){
                var li = document.createElement('li');
                li.innerHTML = "userId  :" + data[i].userId + " id :" + data[i].id + "  title :" + data[i].title + "  completed : " + data[i].completed;
                ul.append(li);

            }
        }
        

    }
    fetchData('https://jsonplaceholder.typicode.com/todos');
}

function Pending(){
    var div = document.getElementsByClassName("Todos")[0];
    div.innerHTML = '';
    var h5 = document.createElement('h5');
    h5.innerHTML = "PENDING TODOS"
    div.appendChild(h5);
    
    var ul = document.createElement("ul");
    div.appendChild(ul);

    async function fetchData(url) {
    
        const response = await fetch(url);
        var data = await response.json();
        for (let i = 0; i < data.length; i++) {
            if(!data[i].completed){
                var li = document.createElement('li');
                li.innerHTML = "userId  :" + data[i].userId + " id :" + data[i].id + "  title :" + data[i].title + "  completed : " + data[i].completed;
                ul.append(li);

            }
        }
        

    }
    fetchData('https://jsonplaceholder.typicode.com/todos');
}

