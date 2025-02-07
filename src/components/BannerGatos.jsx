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



