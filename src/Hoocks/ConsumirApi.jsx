import React from 'react'
import axios from 'axios'



    const PersonajesAxios = async(state)=>{
        const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
        state(respuesta.data.results);
    }

    const PersonajeUnico = async(state,id)=>{
        const respuesta = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        state(respuesta.data.results)
    }

    export {
    PersonajesAxios,
    PersonajeUnico
    }


