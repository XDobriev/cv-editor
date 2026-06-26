# Портфолио — Хамзат Добриев · Frontend Developer

Веб-портфолио и резюме в эстетике «Dev / Techno» (IBM Plex Sans + Mono, тёплая бумага, терракотовый акцент). Чистая статика без сборки: React 18 подключается с CDN.

## 🔗 Живая версия

- **Портфолио:** https://xdobriev.github.io/cv-editor/
- **Резюме (A4 → PDF):** https://xdobriev.github.io/cv-editor/resume.html
- **Редактор:** https://xdobriev.github.io/cv-editor/editor.html

## Состав

| Файл | Назначение |
|------|------------|
| `index.html` | Лендинг-портфолио (hero · проекты · опыт · стек · контакты) |
| `cv.js` | React-компонент `WebCV` — разметка лендинга |
| `resume-data.js` | Данные резюме и портфолио (`window.RESUME`) |
| `resume.html` | Готовое резюме формата A4 с экспортом в текстовый PDF |
| `editor.html` | Визуальный редактор резюме |
| `print.html` | Печатная версия |
| `resume-*.jsx` | Исходники-черновики альтернативных вёрсток резюме |

## Стек

`React` · `JavaScript ES6+` · `HTML5 / CSS3` · GitHub Pages

## Локальный запуск

Сборка не нужна — открой `index.html` в браузере или подними любой статический сервер:

```bash
npx serve .
```
