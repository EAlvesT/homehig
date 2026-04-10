<<<<<<< HEAD
"use client"

import { useState, createContext, useContext } from "react";

interface PhoneContextData {
    phones: string[];
    addPhone: (novoNumero: string) => void;
}

export const PhoneContext = createContext<PhoneContextData | undefined>(undefined);

export function PhoneProvider({ children }: { children: React.ReactNode }) {
    const [phones, setPhones] = useState<string[] | []>([]);

    function addPhone(novoNumero: string) {
        novoNumero.trim();

        setPhones(prev => [...prev, novoNumero])
    }

    return (
        <PhoneContext.Provider value={{ phones, addPhone }}>
            {children}
        </PhoneContext.Provider>
    )
}

=======
"use client"

import { useState, createContext, useContext } from "react";

interface PhoneContextData {
    phones: string[];
    addPhone: (novoNumero: string) => void;
}

export const PhoneContext = createContext<PhoneContextData | undefined>(undefined);

export function PhoneProvider({ children }: { children: React.ReactNode }) {
    const [phones, setPhones] = useState<string[] | []>([]);

    function addPhone(novoNumero: string) {
        novoNumero.trim();

        setPhones(prev => [...prev, novoNumero])
    }

    return (
        <PhoneContext.Provider value={{ phones, addPhone }}>
            {children}
        </PhoneContext.Provider>
    )
}

>>>>>>> 1a3b13d (fix-age-add-readme)
export const usePhones = () => useContext(PhoneContext)