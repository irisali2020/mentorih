import React, { useState } from 'react';

export default function Logros() {
  // Estado para saber qué categoría está seleccionada y filtrar los logros
  const [categoriaActiva, setCategoriaActiva] = useState('enfoque');

  const categorias = [
    { id: 'enfoque', nombre: 'Enfoque', emoji: '🎯' },
    { id: 'constancia', nombre: 'Constancia', emoji: '⏳' },
    { id: 'disciplina', nombre: 'Disciplina', emoji: '🛡️' },
    { id: 'acompanamiento', nombre: 'Acompañamiento', emoji: '🤝' },
    { id: 'seguimiento', nombre: 'Seguimiento', emoji: '📈' },
  ];

  return (
    <div style={styles.pageContainer}>
      
      {/* SECCIÓN DE CATEGORÍAS (BOTONES RESPONSIVE) */}
      <nav style={styles.categoriesNav}>
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoriaActiva(cat.id)}
            style={{
              ...styles.categoryButton,
              ...(categoriaActiva === cat.id ? styles.activeButton : {}),
            }}
          >
            <span style={{ marginRight: '6px' }}>{cat.emoji}</span>
            {cat.nombre}
          </button>
        ))}
      </nav>

      {/* CONTENIDO PRINCIPAL - Ahora controlado por Flexbox responsivo en línea */}
      <div style={styles.contentLayout}>
        
        {/* COLUMNA PRINCIPAL DE CONTENIDO */}
        <section style={styles.mainColumn}>
          <div style={styles.widget}>
            <h3 style={{marginTop: 0, color: '#333'}}>🏆 Logros de {categorias.find(c => c.id === categoriaActiva)?.nombre}</h3>
            <p style={{color: '#666', margin: 0}}>Próximamente: Lista de objetivos y medallas desbloqueadas para esta categoría.</p>
          </div>
        </section>

        {/* COLUMNA DE ESTADO Y COMUNIDAD (Widgets) */}
        <aside style={styles.widgetsColumn}>
          
          {/* Widget de Enfoque / Filtro Dinámico */}
          <div style={styles.widget}>
            <h3 style={styles.widgetTitle}>🎯 Categoría Activa</h3>
            <div style={styles.areaTag}>
              {categorias.find(c => c.id === categoriaActiva)?.nombre}
            </div>
          </div>

          {/* Widget de Racha */}
          <div style={styles.widget}>
            <h3 style={styles.widgetTitle}>🔥 Tu Racha</h3>
            <div style={styles.rachaNumber}>5 Días</div>
            <p style={{fontSize: '14px', color: '#777', margin: 0}}>¡Mantén el fuego encendido!</p>
          </div>

          {/* Widget de Aliados */}
          <div style={styles.widget}>
            <h3 style={styles.widgetTitle}>🤝 Aliados Activos</h3>
            <ul style={styles.aliadosList}>
              <li style={styles.aliadoItem}>
                <span style={styles.aliadoAvatar}>💼</span> 
                <div>
                  <strong style={{color: '#333', fontSize: '14px'}}>Más de 5 aliados</strong>
                  <p style={{margin:0, fontSize: '12px', color: '#777'}}>¡Has hecho un gran trabajo!</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
}

// ESTILOS EN LÍNEA OPTIMIZADOS Y TOTALMENTE RESPONSIVOS
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 16px',
    fontFamily: 'system-ui, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    boxSizing: 'border-box',
    width: '100%',
  },
  categoriesNav: {
    display: 'flex',
    gap: '10px',
    overflowX: 'auto',
    paddingBottom: '12px',
    marginBottom: '20px',
    WebkitOverflowScrolling: 'touch',
    // Oculta la barra de scroll en navegadores basados en Webkit y Firefox
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none',
  },
  categoryButton: {
    padding: '10px 18px',
    borderRadius: '20px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    backgroundColor: '#ffffff',
    color: '#4b4b4b',
    fontWeight: '600',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
  },
  activeButton: {
    backgroundColor: '#315ea0',
    color: '#ffffff',
    borderColor: '#315ea0',
    boxShadow: '0px 4px 12px rgba(49, 94, 160, 0.25)',
  },
  contentLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap', // Aplana las columnas cuando no hay espacio suficiente (Móviles)
    gap: '20px',
    width: '100%',
    boxSizing: 'border-box',
  },
  mainColumn: {
    flex: '2 1 500px', // Toma más espacio en PC, pero permite encogerse y colapsar
    boxSizing: 'border-box',
    minWidth: '280px', // Evita desbordes en pantallas pequeñas
  },
  widgetsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    flex: '1 1 300px', // Toma una proporción menor en PC y baja al 100% en teléfonos
    boxSizing: 'border-box',
    minWidth: '280px', // Cabe perfectamente en cualquier celular
  },
  widget: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '16px',
    border: '2px solid #e5e5e5',
    boxShadow: '0 4px 0 #e5e5e5',
    boxSizing: 'border-box',
    width: '100%',
  },
  widgetTitle: {
    fontSize: '16px',
    color: '#1a1a1a',
    margin: '0 0 12px 0',
    fontWeight: 'bold',
  },
  areaTag: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#e1f5fe',
    color: '#0288d1',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  rachaNumber: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ff4b4b',
    margin: '0 0 4px 0',
  },
  aliadosList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  aliadoItem: {
    display: 'flex',
    alignItems: 'center',    
    gap: '12px',
    textAlign: 'left',
  },
  aliadoAvatar: {
    fontSize: '24px',
    backgroundColor: '#f5f7fa',
    padding: '8px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
};