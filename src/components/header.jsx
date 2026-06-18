
import React from 'react';  
function Header() {  
    return (  
        <header style={{ backgroundColor: "rgb(76, 78, 175)", padding: "10px", textAlign: "center", color: "white" }}> 
            <div >
                
                <span style={styles.brandLogo}>🤖 Mentor Virtual</span>      
                <h1>Hola, soy Mentor!</h1> 
            </div> 
        </header>  
    );  
}  export default Header
  
// ESTILOS EN LÍNEA EN JAVASCRIPT PURO
const styles = {
  pageContainer: {
    display: 'grid',
    gridTemplateColumns: '260px 1fr 320px',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    backgroundColor: '#fafafa',
  },
  sidebar: {
    gridColumn: '3',
    backgroundColor: '#fff',
    borderRight: '2px solid #e5e5e5',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  logo: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#58cc02',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#aaa',
    letterSpacing: '1px',
    margin: '0 0 5px 0',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  navItem: {
    padding: '14px 16px',
    borderRadius: '12px',
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#4b4b4b',
    border: '2px solid transparent',
  },
  mainContent: {
    gridColumn: '2',
    padding: '40px',
    overflowY: 'auto',
    backgroundColor: '#bb0e0e',
  },
  header: {
    marginBottom: '40px',
    borderBottom: '2px solid #200808',
    paddingBottom: '20px',
  },
  mainTitle: {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', // Se adapta al estirar la pantalla sin romperse
    lineHeight: '1.2',                      // Evita estrictamente que las letras se monten una sobre otra
    color: '#fff',                          // Texto blanco para que resalte y sea legible sobre el fondo rojo
    margin: '0 0 10px 0',
  },
  nivelesContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  nivelCard: {
    border: '2px solid #e5e5e5',
    borderRadius: '20px',
    padding: '24px',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 4px 0 #e5e5e5',
  },
  nivelBadge: {
    position: 'absolute',
    top: '24px',
    right: '24px',
    backgroundColor: '#af52de',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  actionButton: {
    marginTop: '15px',
    padding: '10px 20px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#af52de',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 0 #8e3eb8',
  },
  rightPanel: {
    gridColumn: '2',
    padding: '40px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  widget: {
    backgroundColor: '#fff',
    border: '2px solid #e5e5e5',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 4px 0 #e5e5e5',
  },
  areaTag: {
    display: 'inline-block',
    backgroundColor: '#ffc800',
    color: '#fff',
    padding: '6px 16px',
    borderRadius: '12px',
    fontWeight: 'bold',
    marginTop: '5px',
  },
  rachaNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff4b4b',
    margin: '5px 0',
  },
  aliadosList: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    // flexDirection: 'column',
    gap: '12px',
  },
  aliadoItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textAlign: 'left',
  },
  aliadoAvatar: {
    fontSize: '24px',
    backgroundColor: '#f1f1f1',
    padding: '8px',
    borderRadius: '12px',
  }
};