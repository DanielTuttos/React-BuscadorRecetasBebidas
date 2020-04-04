import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    // state local
    const [busqueda, guardarBusqueda] = useState({
        nombre: '',
        categoria: ''
    });

    // usamos context en este componente
    const { categorias } = useContext(CategoriasContext);

    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    // funcion para leer los contenidos 
    const obtenerDatos = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }


    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center" >
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatos}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatos}
                    >
                        <option value="">-- Selecciona Categoria --</option>

                        {categorias.map(categoria => (
                            <option
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}

                    </select>
                </div>
                <div className="col-md-4">
                    <input type="submit" value="Buscar Bebidas" className="btn btn-block btn-primary" />
                </div>
            </div>
        </form>
    );
}

export default Formulario;