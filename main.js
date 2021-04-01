(function(){
    //Variables
    var lista = document.getElementById("lista");
    var tareaInput = document.getElementById("tareaInput");
    var btnNuevaTarea = document.getElementById("btn-agregar");

    //Funciones 
    var agregarTarea = function(){
        var tarea = tareaInput.value;
        var nuevaTarea = document.createElement("li");
        var enlace = document.createElement("a");
        var contenido = document.createTextNode(tarea);

        if (tarea === "") {
            tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
            tareaInput.className = "error";
            return false;
        }

        //agrega contenido al enlace
        enlace.appendChild(contenido);
        //establece un atributo al href
        enlace.setAttribute("href", "#");
        //agrega el enlace (a) a la nueva tarea (li)
        nuevaTarea.appendChild(enlace);
        //se agrega la nueva tarea a la lista
        lista.appendChild(nuevaTarea);

        tareaInput.value = "";
        
        //Borrar elementos de la lista LI
        for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}
    }
    
    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea")
    }

    var eliminarTarea = function(){
        this.parentNode.removeChild(this);
    }

    //Eventos

    //Agregar Tarea
    btnNuevaTarea.addEventListener("click", agregarTarea);

    //Comprobar input
    tareaInput.addEventListener("click", comprobarInput);

    //Borrar elementos de la lista LI
    for (var i = 0; i <= lista.children.length -1; i++) {
        lista.children[i].addEventListener("click", eliminarTarea);
    }

}())