## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## This is Desight Website project
### проект поделен на основные части: 
* app – место для всех страниц, которые будут в проекте
* components разделяется на два раздела
    * обычные компоненты (@components/*)
    * компоненты-секции (@sections/*)
* все картинки находятся в одном месте (@images/*)

### отдельные моменты
* обратите внимание на то, как расписаны пути в tsconfig
```json
"@/*": ["./src/*"],
"@public/*": ["./public/*"],
"@images/*": ["./public/images/*"],
"@styles/*": ["./src/styles/*"],
"@components/*": ["./src/components/*"],
"@sections/*": ["./src/components/sections/*"]
```
* все scss-variables автоматически импортируются во все scss файлы
* первым делом изучите variables и globals – с большой вероятностью вам не придется стилизовать текстовые элементы
* обязательно использовать цвета из variables – этот проект будет с нами очень долго, будем его постоянно улучшать, поэтому нужна возможность удобно менять цвета
* все переиспользуемые элементы css обязательно прописывать либо в globals, либо в variables. не должно быть повторяющегося css
