function interfaz()
{
    return(
        <div class="contenedor">
        <h1>Lista de Tareas xeneize</h1>
        <div class="entrada-tarea">
            <input type="text" id="entradaTarea" placeholder="Agregar una nueva tarea"/>
            <button id="agregarTareaBtn">Agregar</button>
        </div>
        <div class="filtros">
            <button id="mostrarTodas">Todas</button>
            <button id="mostrarPendientes">Pendientes</button>
            <button id="mostrarCompletadas">Completadas</button>
        </div>
        {/* {/* <ul id="listaTareas"></ul> */  //ACA VA LISTATAREAS}
}
        <button id="eliminarCompletadas">Eliminar Completadas</button>
    </div>
    )

}
export default Interfaz