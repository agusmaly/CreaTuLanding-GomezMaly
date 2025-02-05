import { useEffect, useRef } from "react";

const BannerGatos = () => {
    const bannerRef = useRef(null); // Referencia al div

    useEffect(() => {
        if (!bannerRef.current) return;

        const handleMouseMove = (e) => {
            const rect = bannerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            bannerRef.current.style.setProperty('--x', `${x}px`);
            bannerRef.current.style.setProperty('--y', `${y}px`);
        };

        bannerRef.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            bannerRef.current.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null;
};

export default BannerGatos;


// import { useEffect } from 'react';

// const ImageTransitionEffect = () => {
//     useEffect(() => {
//         const imageTransition = document.querySelector('.image-transition');

//         if (!imageTransition) return; // Evita errores si el elemento no está en el DOM

//         const handleMouseMove = (e) => {
//             const rect = e.target.getBoundingClientRect();
//             const x = e.clientX - rect.left;
//             const y = e.clientY - rect.top;
//             e.target.style.setProperty('--x', `${x}px`);
//             e.target.style.setProperty('--y', `${y}px`);
//         };

//         imageTransition.addEventListener('mousemove', handleMouseMove);

//         return () => {
//             imageTransition.removeEventListener('mousemove', handleMouseMove);
//         };
//     }, []);

//     return null; // No renderiza nada, solo maneja el efecto
// };

// export default ImageTransitionEffect;
