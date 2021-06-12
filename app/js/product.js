'use strict';

class DescriptionMotherboard{
  constructor(parentSelector, name, id, price, src, direction, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, plugs, processorPower, description){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;
    this.src = src;
    this.direction = direction;
    this.socket = socket;
    this.bios = bios;
    this.ramFormFactor = ramFormFactor;
    this.sound = sound;
    this.powerPlug = powerPlug;
    this.formFactor = formFactor;
    this.chipset = chipset;
    this.ramSlot = ramSlot;
    this.ramFrequency = ramFrequency;
    this.plugs = plugs;
    this.processorPower = processorPower;
    this.description = description;
  }
  render(){
    const element = document.createElement('section'),
          oldElement = document.querySelector('.product');

    if (oldElement) {
      oldElement.remove();
    }

    element.classList.add('product');

    element.innerHTML = `
    <h3 class="product__title">Материнская плата ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item product-selected-menu">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="callPopUp('Раздел находится в разработке!');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}');" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
        </ul>
    </nav>
    <div class="product-characteristics">
        <img class="product-characteristics__img" src="${this.src}" alt="">
        <ul class="product-characteristics__list">
            <li class="product-characteristics-list__item">По направлению: <span>${this.direction}</span></li>
            <li class="product-characteristics-list__item">Socket: <span>${this.socket}</span></li>
            <li class="product-characteristics-list__item">BIOS: <span>${this.bios}</span></li>
            <li class="product-characteristics-list__item">Форм-фактор ОЗУ: <span>${this.ramFormFactor}</span></li>
            <li class="product-characteristics-list__item">Звук (каналов): <span>${this.sound}</span></li>
            <li class="product-characteristics-list__item">Разъем питания: <span>${this.powerPlug}</span></li>
            <li class="product-characteristics-list__item">Форм-фактор: <span>${this.formFactor}</span></li>
            <li class="product-characteristics-list__item">Чипсет: <span>${this.chipset}</span></li>
            <li class="product-characteristics-list__item">Слоты ОЗУ: <span>${this.ramSlot}</span></li>
            <li class="product-characteristics-list__item">Тактовая частота ОЗУ: <span>${this.ramFrequency}</span></li>
            <li class="product-characteristics-list__item">Разъемы: <span>${this.plugs}</span></li>
            <li class="product-characteristics-list__item">Питание процессора: <span>${this.processorPower}</span></li>
        </ul>
    </div>
    <h4 class="product__description-title">описание:</h4>
    <p class="product__description-text">
      ${this.description}
    </p>
    `;
    this.parent.append(element);
  }
}



class CharacteristicMotherboard{
  constructor(parentSelector, name, id, price, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, processorPower, size, slotsRAM, modeRAM, amountRAM, supportXMP, outputHDMI, outputDVI, audioChip, LAN, quantityLAN, controllerLAN, slotsPCIE1x, slotsPCIE16x, supportExpress, supportCrossFire, USB2, USB3, PS2, coolerPower){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;
    this.socket = socket;
    this.bios = bios;
    this.ramFormFactor = ramFormFactor;
    this.sound = sound;
    this.powerPlug = powerPlug;
    this.formFactor = formFactor;
    this.chipset = chipset;
    this.ramSlot = ramSlot;
    this.ramFrequency = ramFrequency;
    this.processorPower = processorPower;

    this.size = size;
    this.slotsRAM = slotsRAM;
    this.modeRAM = modeRAM;
    this.amountRAM = amountRAM;
    this.supportXMP = supportXMP;
    this.outputHDMI = outputHDMI;
    this.outputDVI = outputDVI;
    this.audioChip = audioChip;
    this.LAN = LAN;
    this.quantityLAN = quantityLAN;
    this.controllerLAN = controllerLAN;
    this.slotsPCIE1x = slotsPCIE1x;
    this.slotsPCIE16x = slotsPCIE16x;
    this.supportExpress = supportExpress;
    this.supportCrossFire = supportCrossFire;
    this.USB2 = USB2;
    this.USB3 = USB3;
    this.PS2 = PS2;
    this.coolerPower = coolerPower;
  }
  render(){
    const element = document.createElement('section'),
          oldElement = document.querySelector('.product');

    if (oldElement) {
      oldElement.remove();
    }

    element.classList.add('product');

    element.innerHTML = `
    <h3 class="product__title">Материнская плата ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item product-selected-menu">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="callPopUp('Раздел находится в разработке!');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}');" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
        </ul>
    </nav>
    <div class="product__characteristic">
                <table>
                    <tbody>
                        <tr>
                            <th>Основное</th>
                        </tr>
                        <tr>
                            <td>Socket</td>
                            <td>${this.socket}</td>
                        </tr>
                        <tr>
                            <td>Форм-фактор</td>
                            <td>${this.formFactor}</td>
                        </tr>
                        <tr>
                            <td>Размеры (ВхШ)</td>
                            <td>${this.size}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Чипсет</th>
                        </tr>
                        <tr>
                            <td>Чипсет</td>
                            <td>${this.chipset}</td>
                        </tr>
                        <tr>
                            <td>BIOS</td>
                            <td>${this.bios}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Оперативная память</th>
                        </tr>
                        <tr>
                            <td>DDR4</td>
                            <td>${this.slotsRAM}</td>
                        </tr>
                        <tr>
                            <td>Форм-фактор слота для памяти</td>
                            <td>${this.ramFormFactor}</td>
                        </tr>
                        <tr>
                            <td>Режим работы</td>
                            <td>${this.modeRAM}</td>
                        </tr>
                        <tr>
                            <td>Максимальная тактовая частота</td>
                            <td>${this.ramFrequency}</td>
                        </tr>
                        <tr>
                            <td>Максимальный объем памяти</td>
                            <td>${this.amountRAM}</td>
                        </tr>
                        <tr>
                            <td>Поддержка XMP</td>
                            <td>${this.supportXMP}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Видеовыходы</th>
                        </tr>
                        <tr>
                            <td>Выход HDMI</td>
                            <td>${this.outputHDMI}</td>
                        </tr>
                        <tr>
                            <td>Выход DVI</td>
                            <td>${this.outputDVI}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Интегрированное аудио</th>
                        </tr>
                        <tr>
                            <td>Аудиочип</td>
                            <td>${this.audioChip}</td>
                        </tr>
                        <tr>
                            <td>Звук (каналов)</td>
                            <td>${this.sound}</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>Сетевые интерфейсы</th>
                        </tr>
                        <tr>
                            <td>LAN (RJ-45)</td>
                            <td>${this.LAN}</td>
                        </tr>
                        <tr>
                            <td>Кол-во LAN-портов</td>
                            <td>${this.quantityLAN}</td>
                        </tr>
                        <tr>
                            <td>LAN контроллер</td>
                            <td>${this.controllerLAN}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Слоты плат расширения</th>
                        </tr>
                        <tr>
                            <td>Слотов PCI-E 1x</td>
                            <td>${this.slotsPCIE1x}</td>
                        </tr>
                        <tr>
                            <td>Слотов PCI-E 16x</td>
                            <td>${this.slotsPCIE16x}</td>
                        </tr>
                        <tr>
                            <td>Поддержка PCI Express</td>
                            <td>${this.supportExpress}</td>
                        </tr>
                        <tr>
                            <td>Поддержка CrossFire (AMD)</td>
                            <td>${this.supportCrossFire}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Разъемы на задней панели</th>
                        </tr>
                        <tr>
                            <td>USB 2.0</td>
                            <td>${this.USB2}</td>
                        </tr>
                        <tr>
                            <td>USB 3.2</td>
                            <td>${this.USB3}</td>
                        </tr>
                        <tr>
                            <td>PS/2</td>
                            <td>${this.PS2}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th>Разъемы питания</th>
                        </tr>
                        <tr>
                            <td>Основной разъем питания</td>
                            <td>${this.powerPlug}</td>
                        </tr>
                        <tr>
                            <td>Питание процессора</td>
                            <td>${this.processorPower}</td>
                        </tr>
                        <tr>
                            <td>Разъемов питания кулеров</td>
                            <td>${this.coolerPower}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    `;
    this.parent.append(element);
  }
}


class CommentPage{
  constructor(parentSelector, name, id, price, dataComment){
      this.parent = document.querySelector(parentSelector);
      this.name = name;
      this.id = id;
      this.price = price;
      this.dataComment = dataComment;
    }
    render(){
      const element = document.createElement('section'),
            oldElement = document.querySelector('.product');
      
      if (oldElement) {
        oldElement.remove();
      }
  
      element.classList.add('product');

      let nameProduct, menuHTML, commentListHTML = '';

      if (this.id.slice(0, 2) === 'mb') {
        menuHTML = `<h3 class="product__title">Материнская плата ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item product-selected-menu">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="callPopUp('Раздел находится в разработке!');" class="product-menu__item">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}');" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>`;
      } else {
        switch (this.id.slice(0, 2)) {
          case 'cp': 
            nameProduct = 'Процессор';
          break;
          case 'gc': 
            nameProduct = 'Видеокарта';
          break;
          case 'rm': 
            nameProduct = 'Оперативная память';
          break;
        }
        menuHTML = `<h3 class="product__title">${nameProduct} ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item product-selected-menu">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="callPopUp('Раздел находится в разработке!');" class="product-menu__item">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}');" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>`;
      }


      if (this.dataComment.length > 0) {
        this.dataComment.forEach(comment => {
          commentListHTML += `
            <div class="product__comments__item">
                <span>${comment.username}</span>
                <p>${comment.textcomment}</p>
                <time>${comment.time}</time>
            </div>
          `;
        });
      } else {
        commentListHTML = `<h4 class="product__comments__title">Отзывов не обнаружено, вы можете оставить первый отзыв😉</h4>`;
      }
  
      element.innerHTML = menuHTML + `<div class="product__comments">` + commentListHTML + ` 
            <form class="product__comments__form" data-id-product='${this.id}'>
                <h4>Оставить отзыв:</h4>
                <div class="product__comments__form-row">
                    <input type="text" name="username" tabindex="1" placeholder="Ваше имя или email" required>
                </div>
                <div class="product__comments__form-row">
                    <textarea rows="7" name="textcomment" tabindex="2" placeholder="Ваш отзыв" required 
                    maxlength="1000"></textarea>
                </div>
                <div class="product__comments__form-row">
                    <button class="product__comments__form-conteiner-btn">Отправить отзыв</button>
                </div>
            </form>
            </div>`;
    this.parent.append(element);
    addCommentProduct();
  }
}



/* document.addEventListener('DOMContentLoaded', ()=>{


}); */

async function renderElement(menu, idProduct) {
  const data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': idProduct })),
        dataProduct = JSON.parse(data.dataproduct),
        dataComment = JSON.parse(data.comment);
  console.log(idProduct);
  console.log('dataProduct', dataProduct);
  console.log('dataComment', dataComment);

  if (menu === 'comment') {
    const {parentSelector, name, id, price} = dataProduct;

    new CommentPage(parentSelector, name, id, price, dataComment).render(); 
  } else {
    switch (idProduct.slice(0, 2)) {
      case 'mb': 
        const {parentSelector, name, id, price, src, direction, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, plugs, processorPower, description, size, slotsRAM, modeRAM, amountRAM, supportXMP, outputHDMI, outputDVI, audioChip, LAN, quantityLAN, controllerLAN, slotsPCIE1x, slotsPCIE16x, supportExpress, supportCrossFire, USB2, USB3, PS2, coolerPower} = dataProduct;

        if (menu === 'description') {
          console.log('description');
          new DescriptionMotherboard(parentSelector, name, id, price, src, direction, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, plugs, processorPower, description).render(); 
        } else if (menu === 'characteristic') {
          console.log('characteristic');
          new CharacteristicMotherboard(parentSelector, name, id, price, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, processorPower, size, slotsRAM, modeRAM, amountRAM, supportXMP, outputHDMI, outputDVI, audioChip, LAN, quantityLAN, controllerLAN, slotsPCIE1x, slotsPCIE16x, supportExpress, supportCrossFire, USB2, USB3, PS2, coolerPower).render();
        }
      break;
    };
  }
}



function comparisonProduct(id) {
  let dataStorage = JSON.parse(localStorage.getItem('data_comparison')),
      clickElement = document.querySelectorAll('.product-menu__item');

  if (dataStorage === null || dataStorage.length === 0) {
    dataStorage = [];
    dataStorage.push(id);
    clickElement[clickElement.length-1].innerText = 'удалить из сравнения';
  } else {
    const index = dataStorage.indexOf(id);
      if (index > -1) {
        dataStorage.splice(index, 1);
        clickElement[clickElement.length-1].innerText = 'добавить к сравнению';
      } else {
        dataStorage.push(id);
        clickElement[clickElement.length-1].innerText = 'удалить из сравнения';
      }
  }
  localStorage.setItem('data_comparison', JSON.stringify(dataStorage));
}



function createTextBtnComparison(id) {
  let dataStorage = JSON.parse(localStorage.getItem('data_comparison'));

  if (dataStorage === null || dataStorage.length === 0) {
    return 'добавить к сравнению';
  } else {
    const index = dataStorage.indexOf(id);
    if (index > -1) {
      return 'удалить из сравнения';
    } else {
      return 'добавить к сравнению';
    }
  } 
}



function addCommentProduct() {
  const form = document.querySelector('.product__comments__form');
       
  if (form) {
      try {
        let dataStorage = JSON.parse(localStorage.getItem('data_user'));

        if (dataStorage !== null) {
            document.querySelector('.product__comments__form-row input').value  = `${dataStorage.email}`;
        }
      } catch {
        console.log('Зачем очистили данные авторизации???');
      }
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form),
            data = Object.fromEntries(formData.entries()),
            idProduct = form.getAttribute('data-id-product');

      data.time = getNewDate();
      data.id = idProduct;
    
      const answer = await getDataBD('../php/add_comment_product.php', JSON.stringify(data));

      if (answer) {
        form.reset();
        callPopUp('Спасибо за отзыв!');
        renderElement('comment', idProduct);
      } else {
        callPopUp('Произошла ошибка, попробуйте еще!');
      }
    });
  }
}

//addCommentProduct();


//console.log(JSON.stringify([{username: "zhenya_todorov", textcomment: "rtetete", time: "12 июня 2021 г.", id: "mb001"}, {username: "zhenya_todorov", textcomment: "rtetete", time: "12 июня 2021 г.", id: "mb001"}]));