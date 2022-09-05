import React, { createContext, useState, useEffect } from "react";

import authService from '../service/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";



const usuarioContext = {
    logado: false,
    usuario: {},
    loading: false,
    login: () => new Promise(),
    logout: () => { }
}

const AuthContext = createContext(usuarioContext);

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function obterDadosDaStorage() {
            const usuarioStorage = await AsyncStorage.getItem("@FLMAuth: user");
            const tokenStorage = await AsyncStorage.getItem("@FLMAuth token");

            await new Promise((resolve) => setTimeout(resolve, 2000));

            if (usuarioStorage && tokenStorage) {
                setLoading(false);
                setUsuario(JSON.parse(usuarioStorage));
            }
        }

        obterDadosDaStorage();

    }, []);

    const salvarStorage = async (usuario, token) => {
        await AsyncStorage.setItem("@FLMAuth: user", JSON.stringify(usuario));
        await AsyncStorage.setItem("@FLMAuth token", token);
    }


    const login = () => {
        setLoading(true);

        authService.login("fulano@gmail.com", '123456')
            .then((response => {
                // AQUI VOU REGISTRAR O USUARIO DE ALGUMA FORMA
                setUsuario(response.usuario);

                // DEPOIS SALVAR NA STORAGE
                salvarStorage(response.usuario, response.token)

            }))
            .catch(error => {
               
            })
            .finally(() => setLoading(false))
    }

    const logout = () => {
        AsyncStorage.clear()
            .then(() => {
                setUsuario({});

            });

    }
    return (
        <AuthContext.Provider value={{ logado: !!usuario.id, usuario, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;

