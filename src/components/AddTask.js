import React from "react";

export default function AddTask({buttonTitle = 'Salvar', onAdd}) {
    return (
        <form onSubmit={function (evento) {
            evento.preventDefault();

            const form = new FormData(evento.target);

            onAdd(form.get('nome'));

            evento.target.reset()
        }}>
            <input type="text" name="nome" placeholder="Digite o nome da tarefa"/>
            <button>{buttonTitle}</button>
        </form>
    )
}
