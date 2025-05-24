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

// 메뉴 데이터를 저장할 배열
let menus = [];

// 메뉴 데이터를 파일로 저장
const saveMenus = async () => {
  await fs.writeJSON('menus.json', menus);
};

// 메뉴 데이터를 파일에서 불러오기
const loadMenus = async () => {
  try {
    menus = await fs.readJSON('menus.json');
  } catch (error) {
    menus = [];
  }
};

// 메뉴 관련 API 라우트
app.get('/api/menus', async (req, res) => {
  await loadMenus();
  res.json(menus);
});

app.post('/api/menus', async (req, res) => {
  const { name, image } = req.body;
  
  // 메뉴 추가
  const menu = {
    id: Date.now(),
    name,
    image
  };
  
  menus.push(menu);
  await saveMenus();
  
  res.json(menu);
});

app.delete('/api/menus/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  menus = menus.filter(menu => menu.id !== id);
  await saveMenus();
  res.json({ message: 'Menu deleted successfully' });
});

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
