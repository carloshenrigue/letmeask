//uma bliblioteca com todos os atributos de uma variavel
import { ButtonHTMLAttributes } from "react";

import "../styles/button.scss";

//vai adicionar as proproedade ao html
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
    return(
        <button className="button" {...props} />
    )
}

