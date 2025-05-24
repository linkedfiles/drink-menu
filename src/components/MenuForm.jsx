import React, { useState } from 'react';

const MenuForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, image });
    setName('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>메뉴 등록</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>
          메뉴명:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: '10px', width: '300px' }}
          />
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          이미지 URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={{ marginLeft: '10px', width: '300px' }}
          />
        </label>
      </div>
      <button type="submit" style={{ padding: '8px 16px' }}>
        등록
      </button>
    </form>
  );
};

export default MenuForm;
