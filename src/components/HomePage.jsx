import React, { useEffect } from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '500px', 
        fontFamily: 'Arial, sans-serif', 
    },
    h1: {
        fontSize: '30px', 
        color: '#FFFFFF', 
        background: '#33CCFF', 
        padding: '20px', 
        borderRadius: '8px', 
    },
    chatbot: {
        width: '100%',
        maxWidth: '400px',
        height: '600px',
    }
};

const HomePage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>Vu Trung Nghia</h1>
        </div>
    );
};

export default HomePage;
