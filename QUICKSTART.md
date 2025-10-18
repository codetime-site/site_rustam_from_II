# 🚀 Быстрый старт

## Шаг 1: Установка зависимостей

```bash
cd cnc-website
npm install
```

## Шаг 2: Сборка проекта

```bash
npm run build
```

Эта команда создаст минифицированные файлы:
- `assets/css/main.min.css`
- `assets/js/main.min.js`

## Шаг 3: Запуск локального сервера

### Вариант 1: PHP встроенный сервер

```bash
cd src
php -S localhost:8000
```

Откройте браузер: http://localhost:8000

### Вариант 2: Gulp с BrowserSync (рекомендуется для разработки)

1. Настройте прокси в `gulpfile.js` (строка 95):
```javascript
proxy: 'localhost/cnc-website/src/', // Измените на ваш путь
```

2. Запустите:
```bash
npm run dev
```

Сайт автоматически откроется в браузере с live reload.

## 📝 Основные команды

- `npm run build` - Полная сборка проекта
- `npm run dev` - Режим разработки с live reload
- `npm run stylus` - Компиляция только Stylus
- `npm run stylus:watch` - Отслеживание изменений Stylus

## 🎨 Добавление изображений

1. Создайте папку `assets/img/`
2. Добавьте изображения:
   - `about-cnc.jpg` - Фото оборудования для секции "О компании"
   - `equipment-1.jpg` - Токарный станок
   - `equipment-2.jpg` - Фрезерный станок
   - `equipment-3.jpg` - Токарно-фрезерный центр
   - `product-1.jpg` до `product-6.jpg` - Примеры изделий

## ⚙️ Настройка контактов

Отредактируйте файлы:
- `src/components/header/header.php` - телефон в шапке
- `src/components/contacts/contacts.php` - контактная информация
- `src/components/footer/footer.php` - контакты в подвале

## 📧 Настройка формы обратной связи

Отредактируйте `src/js/main.js`, метод `submitForm()` (строка 91):

```javascript
// Замените на реальный API endpoint
fetch('/api/contact', { 
    method: 'POST', 
    body: formData 
})
```

## 🎯 Что дальше?

1. ✅ Добавьте реальные изображения в `assets/img/`
2. ✅ Настройте контактную информацию
3. ✅ Подключите форму к backend
4. ✅ Добавьте Google Analytics (если нужно)
5. ✅ Оптимизируйте изображения
6. ✅ Протестируйте на разных устройствах

## 🐛 Возможные проблемы

### Ошибка при установке зависимостей

```bash
npm cache clean --force
npm install
```

### Stylus не компилируется

Проверьте синтаксис в `.styl` файлах. Stylus чувствителен к отступам.

### BrowserSync не работает

Убедитесь, что путь в `gulpfile.js` правильный и сервер запущен.

## 📞 Поддержка

Если возникли вопросы, проверьте:
- [README.md](README.md) - полная документация
- [gulpfile.js](gulpfile.js) - конфигурация сборки
- [package.json](package.json) - список зависимостей

---

Удачи в разработке! 🎉