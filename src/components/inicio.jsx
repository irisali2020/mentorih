import React from 'react';

export default function Inicio() {
  return (
    <div style={styles.pageContainer}>
      
      {/* CONTENIDO PRINCIPAL - Usamos una clase CSS para controlar el layout de forma responsiva */}
      <main className="inicio-main-content" style={styles.mainContentExpanded}>
        <header style={styles.header}>
          <h1 style={styles.mainTitle}>
            Te acompaño a desarrollar los hábitos necesarios para lograr tus metas de estudio y aprendizaje
          </h1>
          <h2 style={styles.subTitle}>
            ¡Enfoque, Constancia, Disciplina, Acompañamiento, Resultados, Celebración!
          </h2>
          <h3 style={styles.callToAction}>
            ¡Selecciona el hábito que deseas trabajar y empezamos!
          </h3>
          <p style={styles.descriptionText}>
            Sigue el flujo de tu aprendizaje diario para consolidar tus hábitos.
          </p>
        </header>

        {/* Contenedor de niveles con clase responsiva */}
        <section className="niveles-grid-container">
          
          {/* NIVEL 1: EMPEZAR */}
          <div style={styles.nivelCard}>
            <div style={styles.nivelBadge}>NIVEL 1</div>
            <h2 style={styles.nivelTitle}>🌱 Empezar: Fijar Objetivos</h2>
            <p style={styles.cardText}>Registra 3 objetivos de aprendizaje para la semana.</p>
            <button style={styles.actionButton}>Establecer Metas</button>
          </div>

          {/* NIVEL 2: EJECUTAR */}
          <div style={styles.nivelCard}>
            <div style={styles.nivelBadge}>NIVEL 2</div>
            <h2 style={styles.nivelTitle}>⚡ Ejecutar el Plan</h2>
            <p style={styles.cardText}>Es hora de la acción. Inicia tu temporizador de estudio y mitiga las distracciones.</p>
            <button style={{...styles.actionButton, backgroundColor: '#58cc02', boxShadow: '0 4px 0 #3b8a01'}}>
              Iniciar Sesión
            </button>
          </div>

          {/* NIVEL 3: EVALUAR */}
          <div style={styles.nivelCard}>
            <div style={styles.nivelBadge}>NIVEL 3</div>
            <h2 style={styles.nivelTitle}>📊 Evaluar Resultados</h2>
            <p style={styles.cardText}>Analiza tus métricas de enfoque, reporta qué aprendiste y ajusta el rumbo.</p>
            <button style={{...styles.actionButton, backgroundColor: '#1899e8', boxShadow: '0 4px 0 #116ca5'}}>
              Ver Reporte
            </button>
          </div>

        </section>
      </main>      
    </div>
  );
}

// ESTILOS EN LÍNEA OPTIMIZADOS
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    margin: 0,
    padding: 0,
  },
  mainContentExpanded: {
    backgroundColor: '#315ea0',
    color: '#fff',
  },
  header: {
    marginBottom: '32px',
    borderBottom: '2px solid rgba(255, 255, 255, 0.2)', // Cambiado a un sutil borde blanco transparente en lugar de negro
    paddingBottom: '20px',
  },
  mainTitle: {
    fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', 
    lineHeight: '1.3',
    color: '#fff',
    margin: '0 0 16px 0',
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#e2e8f0', 
    fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
    margin: '0 0 12px 0',
    fontWeight: 'normal',
  },
  callToAction: {
    color: '#ffc800', // Un toque de color para destacar el llamado a la acción
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    margin: '0 0 12px 0',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#f1f5f9',
    fontSize: '15px',
    margin: '8px 0 0 0',
  },
  nivelCard: {
    border: '2px solid #e5e5e5',
    borderRadius: '20px',
    padding: '24px',
    position: 'relative',
    backgroundColor: '#fff',
    boxShadow: '0 4px 0 #e5e5e5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Asegura que los botones queden alineados abajo
  },
  nivelBadge: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    backgroundColor: '#af52de',
    color: '#fff',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
  },
  nivelTitle: {
    color: '#1a1a1a', 
    marginTop: '15px', // Espacio para que no choque con el badge en móviles
    marginBottom: '8px',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  cardText: {
    color: '#4a4a4a', 
    marginTop: 0,
    marginBottom: '16px',
    fontSize: '15px',
    lineHeight: '1.4',
  },
  actionButton: {
    marginTop: 'auto', // Empuja el botón al fondo de la tarjeta si tienen textos largos
    padding: '12px 20px',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#af52de',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 0 #8e3eb8',
    transition: 'transform 0.1s ease',
  }
};