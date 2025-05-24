import React from 'react';

const MenuEdit = ({ menus, fetchMenus }) => {
  const handleSubmit = async (menu) => {
    try {
      const response = await fetch('/api/menus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(menu),
      });
      
      if (response.ok) {
        await fetchMenus();
        alert('메뉴가 성공적으로 등록되었습니다!');
      } else {
        alert('메뉴 등록에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('메뉴 등록 중 오류가 발생했습니다.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;

    try {
      const response = await fetch(`/api/menus/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        await fetchMenus();
        alert('메뉴가 성공적으로 삭제되었습니다!');
      } else {
        alert('메뉴 삭제에 실패했습니다.');
      }
    } catch (error) {
      console.error('Error deleting menu:', error);
      alert('메뉴 삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <div style={{
      padding: '1rem',
      maxWidth: '500px',
      margin: '0 auto'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '15px',
        padding: '2rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        marginBottom: '2rem'
      }}>
        <h2 style={{
          color: '#1976d2',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>메뉴 등록</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          handleSubmit({
            name: formData.get('name')
          });
        }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#2c3e50',
              fontWeight: 500
            }}>메뉴명:</label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '8px',
                border: '1px solid #e9ecef',
                fontSize: '1rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#1976d2'}
              onBlur={(e) => e.target.style.borderColor = '#e9ecef'}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onClick={(e) => {
              e.currentTarget.style.backgroundColor = '#1565c0';
            }}
          >
            등록하기
          </button>
        </form>
      </div>

      <div style={{
        background: '#ffffff',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
      }}>
        <h3 style={{
          color: '#2c3e50',
          fontSize: '1.25rem',
          marginBottom: '1.5rem',
          borderBottom: '1px solid #e9ecef',
          paddingBottom: '0.5rem'
        }}>등록된 메뉴</h3>
        {menus.map((menu) => (
          <div key={menu.id} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem',
            borderBottom: '1px solid #e9ecef',
            transition: 'background-color 0.3s ease'
          }}>
            <span style={{
              color: '#2c3e50',
              fontWeight: 500
            }}>{menu.name}</span>
            <button
              onClick={() => handleDelete(menu.id)}
              style={{
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onClick={(e) => {
                e.currentTarget.style.backgroundColor = '#c7254e';
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuEdit;
