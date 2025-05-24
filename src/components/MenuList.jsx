import React from 'react';

const MenuList = ({ menus }) => {
  return (
    <div style={{
      padding: '1rem',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f5ebe0',
      fontFamily: 'Georgia, serif'
    }}>
      <div style={{
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#b8860b',
          fontWeight: 700,
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.1) 0%, rgba(184, 134, 11, 0) 100%)',
          padding: '0.5rem 1rem',
          borderRadius: '10px'
        }}>MENU</h1>
      </div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2rem',
        padding: '0 1rem',
        paddingBottom: '2rem'
      }}>
        {menus.map((menu) => (
          <div key={menu.id} style={{
            background: 'linear-gradient(135deg, #fff8dc 0%, #f5ebe0 100%)',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.05) 0%, rgba(184, 134, 11, 0) 100%)',
              zIndex: 0
            }}></div>
            <div style={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center'
            }}>
              <h3 style={{
                color: '#b8860b',
                fontSize: '1.5rem',
                fontWeight: 600,
                marginBottom: '0.8rem',
                lineHeight: '1.2'
              }}>{menu.name}</h3>
              <p style={{
                color: '#8b6508',
                fontSize: '1rem',
                marginBottom: '1rem'
              }}>Available</p>
              <div style={{
                width: '80%',
                height: '2px',
                background: 'linear-gradient(135deg, #b8860b 0%, #8b6508 100%)',
                margin: '0 auto'
              }}></div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid #d2b48c'
      }}>
        <p style={{
          color: '#8b6508',
          fontSize: '1rem'
        }}>© 2025 Ese House. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MenuList;
