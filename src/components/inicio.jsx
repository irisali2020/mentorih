import React from 'react';

export default function Inicio() {
  return (
   <div style={styles.pageContainer}>
  
  {/* HEADER SUPERIOR (Ocupa todo el ancho superior con el color del contenedor) */}
  {/* <header style={styles.topNavbar}>
    <div style={styles.navbarContent}>
      <span style={styles.brandLogo}>🤖 Mentor Virtual</span>
    </div>
  </header> */}

  {/* CONTENIDO PRINCIPAL (Ahora expandido) */}
  <main style={styles.mainContentExpanded}>
    <header style={styles.header}>
      <h1 style={styles.mainTitle}>Te acompaño a desarrollar los hábitos necesarios para lograr tus metas de estudio y aprendizaje</h1>
      <h2 style={{color: '#fff', fontSize: '18px', margin: '0 0 10px 0'}}>¡Enfoque, Constancia, Disciplina, Acompañamiento, Resultados, Celebración!</h2>
      <p>Sigue el flujo de tu aprendizaje diario para consolidar tus hábitos.</p>
    </header>

    {/* Seccion de niveles adaptada para ocupar más espacio */}
    <section style={styles.nivelesContainerExpanded}>
      
      {/* NIVEL 1: EMPEZAR */}
      <div style={styles.nivelCard}>
        <div style={styles.nivelBadge}>NIVEL 1</div>
        <h2>🌱 Empezar: Fijar Objetivos</h2>
        <p>Registra 3 objetivos de aprendizaje para la semana.</p>
        <button style={styles.actionButton}>Establecer Metas</button>
      </div>

      {/* NIVEL 2: EJECUTAR */}
      <div style={styles.nivelCard}>
        <div style={styles.nivelBadge}>NIVEL 2</div>
        <h2>⚡ Ejecutar el Plan</h2>
        <p>Es hora de la acción. Inicia tu temporizador de estudio y mitiga las distracciones.</p>
        <button style={{...styles.actionButton, backgroundColor: '#58cc02', boxShadow: '0 4px 0 #3b8a01'}}>
          Iniciar Sesión
        </button>
      </div>

      {/* NIVEL 3: EVALUAR */}
      <div style={styles.nivelCard}>
        <div style={styles.nivelBadge}>NIVEL 3</div>
        <h2>📊 Evaluar Resultados</h2>
        <p>Analiza tus métricas de enfoque, reporta qué aprendiste y ajusta el rumbo.</p>
        <button style={{...styles.actionButton, backgroundColor: '#1899e8', boxShadow: '0 4px 0 #116ca5'}}>
          Ver Reporte
        </button>
      </div>

    </section>
  </main>      

</div>
  );
}

// ESTILOS EN LÍNEA EN JAVASCRIPT PURO
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa', // Asegúrate de usar aquí tu color de fondo principal
    margin: 0,
    padding: 0,
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
  mainContentExpanded: {
    gridColumn: '2',
    flexDirection: 'row',
    padding: '40px',
    // overflowY: 'auto',
    backgroundColor: '#315ea0',
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
    gridColumn: '1',
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
    flexDirection: 'column',
    gap: '12px',
  },
  aliadoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  aliadoAvatar: {
    fontSize: '24px',
    backgroundColor: '#f1f1f1',
    padding: '8px',
    borderRadius: '12px',
  }
};