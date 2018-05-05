MODX-REVO- Сайт VOGSS
=======================

> Верстка построен на Materialize в связке с sass
******************

####Директория
******************
>dir /font
>
>dir /img
>
>dir /libs
>
>dir /js
>
>dir /sass
>>dir /box

###MODX_TPL
******************

Модули для сайта
-------------------------------
### Шапка header Модуль
******************
```
<header class="header">
  <div class="container">
    <div class="row">
      <a href="#" class="logo">
        <img class="img-classic" src="img/logo.png" alt="Pictures">
      </a>
      <div class="header__contact">
        <a href="tel:880006006">+7 (8442) 550-222</a>
        <a href="tel:880006006">+7 (8442) 550-330</a>
        <a href="mailto:in_box@vogss.ru">E-mail:in_box@vogss.ru</a>
      </div>
    </div>
  </div>
</header>
```
*****************

### Навигация NAV Меню
***********************
```
<nav>
  <div class="container">
    <div class="nav-wrapper">
      <ul id="nav-mobile" class="hide-on-med-and-down">
        <li><a href="sass.html">Главная</a></li>
        <li><a href="badges.html">Услуги</a></li>
        <li><a href="collapsible.html">новости </a></li>
        <li><a href="collapsible.html">База знаний </a></li>
        <li><a href="collapsible.html">контакты</a></li>
      </ul>
      <form class="sisea-search-form" action="[[~[[*id]]]]"  method="get">
          <input type="text" name="query" class="input-xlarge search-query" value="" placeholder="Введите запрос">
          <button type="submit" class="btn-success"><img src="img/search.png" alt=""></button>
      </form>
    </div>
  </div>
</nav>
```
***********************

### Слайдер Carusel-Slide
***********************
```
<div class="owl-carousel owl-theme slide">
  <div class="item">
    <img src="img/slide.png" alt="">
    <div class="container">
        <div class="signature up">Практика готовых решений с 1995 года</div>
    </div>
    
  </div>
</div>
```
**********************

### Контент info_block
**********************
```
<div class="info_block">
  <div class="container">
    <h2>О компании</h2>
    <p>Фирма “VOGSS” начала свою деятельность с 26 января 1995 года и добилась значительных успехов на рынке, став заметной фигурой среди Волгоградских поставщиков компьютерной техники, офисного и сетевого оборудования и сетевых решений. На сегодняшний день фирма "VOGSS” является крупнейшим в Волгограде системным интегратором, предоставляющим своим клиентам полный спектр услуг по созданию комплексных компьютерных, сетевых, информационных и телефонных систем для всех сфер деятельности и ориентирована на удовлетворение самых взыскательных запросов рынка на высококачественную технику и услуги по сервису поставленного оборудования.
      </p>
  </div>
</div>
```
***********************

### Услуги uslugi
***********************
```
<div class="uslugi">
  <div class="container">
    <h2>Услуги</h2>
    <div class="f-row">
      [[!getImageList?
        &tvname=`uslugi`
        &tpl=`@CODE:
        <div class="ele">
          <div>
      		<img src="[[+image]]" alt="[[+set]]">
          </div>
          <div>
            [[+desc]]
      	  </div>
        </div>
        `
      ]]
  </div>
  </div>
</div>
```
>
>
#### &tvname--uslugi--migx
-------------
Вкладки формы:
*******
```
[{"caption":"Item", "fields": 
  [
   {"field":"set","caption":"Заголовок"},
   {"field":"desc","caption":"Описание"}, 
   {"field":"image","caption":"Изображение","inputTVtype":"image"}
  ]
}]
```
Разметка колонок:
*******
```
[
 {"header": "Заголовок", "sortable": "true", "dataIndex": "set"},
 {"header": "Подзаголовок", "sortable": "true", "dataIndex": "desc"},
 {
  "header": "Изображение", "sortable": "false", "dataIndex": 
  "image","renderer": "this.renderImage"
  }
]
```

********************

### Быстрый вызов call_back
********************
```
<div class="call_back">
  <div class="container">
    <div class="h1 up">есть задача? </div>
    <div class="h2 up">найдем лучшее решение!</div>
    <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col xl4 s12">
              <input id="icon_prefix" type="text" class="validate">
              <label for="icon_prefix">First Name</label>
            </div>
            <div class="input-field col xl4 s12">
              <input id="icon_telephone" type="tel" class="validate">
              <label for="icon_telephone">Telephone</label>
            </div>
            <div class="input-field col xl2 s12">
                <button type="submit" class="btn">Спросить</button>
              </div>
          </div>
        </form>
      </div>
  </div>
</div>
```
*******************

### Преимущество advant
*******************
```
<div class="advant">
  <div class="container">
    <h2>наши преимущества</h2>
    <div class="f-row">
      <div class="ele">
        <div>
          <img  src="img/a_ele1.png" alt="">
        </div>
        <div>
          <p> <strong>«Все из одних рук»</strong> </br>От проекта , поставки , 
              инсталяции до сопровождения</p>
        </div>
      </div>

      <div class="ele">
        <div>
          <img  src="img/a_ele2.png" alt="">
        </div>
        <div>
          <p> <strong>надежность</strong> </br> 22 года стабильной 
              <br>	работы</p>
        </div>
      </div>

      <div class="ele">
        <div>
          <img  src="img/a_ele3.png" alt="">
        </div>
        <div>
          <p> <strong>опыт работы</strong> </br> с государственными и
              коммерческими заказчиками </p>
        </div>
      </div>
    
      <div class="ele">
        <div>
          <img  src="img/a_ele4.png" alt="">
        </div>
        <div>
          <p> <strong>Компетентность и профессионализм</strong> </p>
        </div>
      </div>

      <div class="ele">
        <div>
          <img  src="img/a_ele5.png" alt="">
        </div>
        <div>
          <p><strong>Доставка по РФ</strong> </p>
        </div>
      </div>
      
      <div class="ele">
        <div>
          <img  src="img/a_ele6.png" alt="">
        </div>
        <div>
          <p><strong>Гибкие условия оплаты</strong> </p>
        </div>
      </div>

    </div>
  </div>
</div>
```
*********************

### Новостной блок cnn
*********************
```
<div class="cnn">
<div class="container">
  <h2>новости</h2>
  <div class="f-row">
    <div class="new">
      <div class="img">
        <img  src="img/layer-205.png" alt="">
      </div>
      <div class="data">13.09.2017</div>
      <div class="h1">Распродажа складских остатков кабеля</div>
      <p>Распродаем складские остатки кабеля.
        Кабель ВВГнг 5х16 мм 350руб/м - (Остаток 380 м)</p>
      <a href="#">подробнее</a>
    </div>
    <div class="new">
      <div class="img">
          <img  src="img/layer-205.png" alt="">
      </div>
      <div class="data">13.09.2017</div>
      <div class="h1">Распродажа складских остатков кабеля</div>
      <p>Распродаем складские остатки кабеля.
        Кабель ВВГнг 5х16 мм 350руб/м - (Остаток 380 м)</p>
      <a href="#">подробнее</a>
    </div>
    <div class="new">
      <div class="img">
          <img  src="img/layer-205.png" alt="">
      </div>
      <div class="data">13.09.2017</div>
      <div class="h1">Распродажа складских остатков кабеля</div>
      <p>Распродаем складские остатки кабеля.
        Кабель ВВГнг 5х16 мм 350руб/м - (Остаток 380 м)</p>
      <a href="#">подробнее</a>
    </div>

  </div>
  <a href="#" class="up">Все новости</a>
</div>
</div>
```
********************

### PARTNER
********************
```
<div class="partner">
  <div class="container">
    <h2>наши партнеры</h2>
    <div class="owl-carousel owl-theme part">
      
      <div class="item">
          <img src="img/layer-208.png" alt="">
        </div>
        <div class="item">
            <img src="img/layer-209.png" alt="">
          </div>
          <div class="item">
              <img src="img/layer-210.png" alt="">
            </div>
            <div class="item">
                <img src="img/layer-211.png" alt="">
              </div>
              <div class="item">
                  <img src="img/layer-212.png" alt="">
                </div>
    </div>
  </div>
</div>
```
*******************

### Контакты form_call_contact
*******************
```
<div class="form_call_contact">
  <div class="container">
    <div class="row">
    <div class="col xl6 l6 m12 s12">
      <h2>Контакты</h2>
      <div class="f-col">
        <p class="adress"> <strong>Адрес:</strong>  <br>
          400131, Россия г. Волгоград, ул. Рокоссовского, 28
        </p>
        <p class="time">
            <strong>Время работы: </strong>	<br>
            9:00 - 17:30, выходной Сб, Вс
        </p>
        <p class="phone">
          <a href="tel:+7 (8442) 550-222">+7 (8442) 550-222</a>,<a href="tel:+7 (8442) 550-222">+7 (8442) 550-330</a>
        </p>
        <p class="mail">
            E-mail: <a href="tel:in_box@vogss.ru">in_box@vogss.ru</a>
        </p>
      </div>
    </div>
    <div class="col xl6 l6 s12 m12 form right">
      <div class="h2 up">форма <br>обратной связи </div>
      <form action="">
        <input type="text" name="user" placeholder="Введите Ваше имя">
        <input type="mail" name="mail" placeholder="Введите Ваш E-mail">
        <textarea name="info" id=""  rows="5" placeholder="Ваше сообщение"></textarea>
        <label>
            <input type="checkbox" class="filled-in" checked="checked" />
            <span>Согласие на обработку персональных данных</span>
          </label>
          <button type="submit" class="btn up">отправить</button>
      </form>
    </div>
  </div>
  </div>
</div>
```