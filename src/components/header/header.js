import React from "react";
import './header.css';
import {Link} from "react-router-dom";
import {CollectionBlock} from "../collection-block";

export const Header = () =>{
    return(
        <div className="row header">
            <Link to="/" className="col-3 text-center header-text">Симптом</Link>
            <Link to="/login" className="col-3 text-center header-text">Вход</Link>
            <Link to="/registration" className="col-3 text-center header-text">Регистрация</Link>
            <Link to="/" className="col-3"><CollectionBlock/></Link>
        </div>
    )
}