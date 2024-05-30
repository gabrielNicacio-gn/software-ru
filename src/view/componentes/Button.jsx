import React from 'react';

export function Button({ cor, texto, icone, tamanho, hover }) {
    return (
        <button
            type="button"
            className={`${cor} rounded-md flex justify-center items-center gap-1 p-1 text-sm w-${tamanho} ${hover && `hover:${hover}`}`}
        >
            {icone}
            {texto}
        </button>
    );
}