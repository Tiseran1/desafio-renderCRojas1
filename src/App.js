import { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)
  const {nuevoColaborador, setNuevoColaborador} = useState({
    id:"",
    nombre:"",
    correo: ""
  });
  
const agregarColaborador = (e) => {
  e.preventDefault();

  if(nuevoColaborador.nombre =="" || nuevoColaborador.correo == ""){
    return alert ("Faltan campos por llenar")
  }
}

  return (
<div className="container">
  <nav>
    <input
      nav class="navbar bg-dark form-control me-2 my-3 " data-bs-theme="dark"
      className="form-control me-2 my-3"
      placeholder="Buscar un colaborador" 
    />
  </nav>

<form action="" onSubmit={agregarColaborador}>
<h3> Agregar un colaborador</h3>

<div className="mt-3">
<label> Nombre del colaborador</label>
<input 
className="form-control me-2 my-3"
type="text"
onChange={(e) => setNuevoColaborador({
  id: nuevoColaborador.id,
  nombre: e.target.value,
  correo: nuevoColaborador.correo
})}
  value={nuevoColaborador.nombre}
/>
</div>

<div className="mt-3">
<label> Correo del colaborador</label>
<input 
className="form-control me-2 my-3"
type="email"
onChange={(e) => setNuevoColaborador({
  id: nuevoColaborador.id,
  nombre: nuevoColaborador.nombre,
  correo: e.target.value,
})}
  value={nuevoColaborador.correo}
/>
</div>

<button
className="mt-3 btn btn-danger"
type="submit"
>
  Agregar Colaborador 
</button>


</form>

<div className="mt-3">
    <h4> 
      Listado de Colaboradores
    </h4>
    <ul> 
      {colaboradores.map( ({id,nombre,correo})  => <li key={id}>{nombre} | {correo}
      </li>)}
    </ul>
</div>

</div>

  );
}

export default App;
