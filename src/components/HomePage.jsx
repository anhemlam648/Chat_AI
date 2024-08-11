import { useEffect } from 'react';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '0 20px',
        boxSizing: 'border-box',
    },
    header: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    mainContent: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '10px',
        fontSize: '0.875rem',
        width: '100%',
    },
    chatbot: {
        width: '100%',
        maxWidth: '400px',
        height: '600px',
    }
};

const HomePage = () => {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Vu Trung Nghia</h1>
            </header>
            <main style={styles.mainContent}>
                <h2>Welcome Chat Bot Website</h2>
            </main>
            <footer style={styles.footer}>
                <p>&copy; 2024 By Vu Trung Nghia.</p>
            </footer>
        </div>
    );
};

export default HomePage;
