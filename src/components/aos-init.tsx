<<<<<<< HEAD
"use client"

import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export function AosInit() {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true,
        })
    }, [])

    return null;
=======
"use client"

import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export function AosInit() {
    useEffect(() => {
        Aos.init({
            duration: 500,
            once: true,
        })
    }, [])

    return null;
>>>>>>> 1a3b13d (fix-age-add-readme)
}