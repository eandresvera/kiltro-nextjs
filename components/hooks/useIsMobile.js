import { useState, useEffect } from 'react'

export const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState('loading');

    useEffect(() => {
        const handleIsMobile = () => {
            setIsMobile( window.innerWidth <= 768 )
        }

        handleIsMobile();

        window.addEventListener('resize', handleIsMobile)
        return () => removeEventListener('resize', handleIsMobile);
    }, [])
    
    return {isMobile};
}