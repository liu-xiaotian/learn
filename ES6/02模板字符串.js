//传统的 JavaScript 语言
// const oBox = document.querySelector('.box');
// let id = 1,name = '小马哥';
// let htmlTel = "<ul><li><p>id:" + id + "</p><p>name:" + name + "</p></li></ul>";
// oBox.innerHTML = htmlTel;

//ES6引入了模板字符串
let htmlTel = `<ul>
    <li>
    <p>id:${id}</p>
    <p>name:${name}</p>
    </li>
</ul>`;
