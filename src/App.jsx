import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuEdit from './components/MenuEdit';

function App() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // 로컬 데이터 불러오기
    const menusData = require('./data/menu.json');
    setMenus(menusData.menus);
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('정말로 삭제하시겠습니까?')) return;

    try {
      setMenus(menus.filter(menu => menu.id !== id));
      alert('메뉴가 성공적으로 삭제되었습니다!');
    } catch (error) {
      console.error('Error deleting menu:', error);
      alert('메뉴 삭제 중 오류가 발생했습니다.');
    }
  };

  return (
    <Router>
      <div>
        <nav style={{
          padding: '1rem',
          backgroundColor: '#f5ebe0',
          color: '#b8860b'
        }}>
          <Link to="/" style={{
            color: '#b8860b',
            textDecoration: 'none',
            marginRight: '1rem',
            fontWeight: 500
          }}>메뉴 목록</Link>
        </nav>
        <div style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={
              <MenuList menus={menus} onDelete={handleDelete} />
            } />
            <Route path="/edit" element={
              <MenuEdit menus={menus} fetchMenus={fetchMenus} />
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
