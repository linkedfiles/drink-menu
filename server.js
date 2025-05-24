const express = require('express');
const cors = require('cors');
const fs = require('fs-extra');
const path = require('path');

const app = express();
const port = 4000;

// CORS 설정
app.use(cors());

// JSON 파싱 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 메뉴 데이터 파일 경로
const menuFilePath = path.join(__dirname, 'menus.json');

// 메뉴 목록 조회
app.get('/api/menus', (req, res) => {
  try {
    const menus = JSON.parse(fs.readFileSync(menuFilePath, 'utf8'));
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: '메뉴 데이터를 읽을 수 없습니다.' });
  }
});

// 메뉴 등록
app.post('/api/menus', (req, res) => {
  try {
    const menus = JSON.parse(fs.readFileSync(menuFilePath, 'utf8'));
    const newMenu = {
      id: menus.length ? Math.max(...menus.map(m => m.id)) + 1 : 1,
      name: req.body.name,
      image: req.body.image
    };
    menus.push(newMenu);
    fs.writeFileSync(menuFilePath, JSON.stringify(menus, null, 2));
    res.json(newMenu);
  } catch (error) {
    res.status(500).json({ error: '메뉴를 등록할 수 없습니다.' });
  }
});

// 메뉴 삭제
app.delete('/api/menus/:id', (req, res) => {
  try {
    const menus = JSON.parse(fs.readFileSync(menuFilePath, 'utf8'));
    const updatedMenus = menus.filter(menu => menu.id !== parseInt(req.params.id));
    fs.writeFileSync(menuFilePath, JSON.stringify(updatedMenus, null, 2));
    res.json({ message: '메뉴가 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ error: '메뉴를 삭제할 수 없습니다.' });
  }
});

// Vercel 호스팅을 위한 설정
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
