'use strict';

class ComparisonPage{
  constructor(parentSelector){
    this.parent = document.querySelector(parentSelector);
  }
  async render(){
    const element = document.createElement('section');

    closeBurgerMenu();
    removeOldElement();

    element.classList.add('comparison', 'content-page');

    //Получаем данные для обработки с сервера
    const proportionsComparison = JSON.parse(localStorage.getItem('data_comparison'));
    
    if (proportionsComparison) {

      let arrayMB = [], arrayCP = [], arrayGC = [], arrayRM = [],
          MBHTML = '', CPHTML = '', GCHTML = '', RMHTML = '';
    
      for (const item of proportionsComparison) {
        const data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': item }));
    
        switch(item.slice(0, 2)) {
          case 'mb':
            arrayMB.push(JSON.parse(data.dataproduct));
          break;
          case 'cp':
            arrayCP.push(JSON.parse(data.dataproduct));
          break;
          case 'gc':
            arrayGC.push(JSON.parse(data.dataproduct));
          break;
          case 'rm':
            arrayRM.push(JSON.parse(data.dataproduct));
          break;
        }
      }

      // формируем html для каждого типа продуктов
      if (arrayMB.length !== 0) {
        MBHTML += `<h3><a href="#mb" class="comparison__title" onclick="new Categories('.wrapper', 'mb').render();">Материнские платы</a></h3>
        <div class="comparison__characteristic">
          <table>
              <tbody>
                  <tr>
                      <th>Основное</th>
                      ${arrayMB.reduce((txt, item) => txt + '<th><a href="javascript:void(0);" onclick="renderElement(\'description\', \''+item.id+'\');">'+item.name+'</a></th>', '')}
                  </tr>
                  <tr>
                      <td>Socket</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.socket+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Форм-фактор</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.formFactor+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Размеры (ВхШ)</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.size+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Чипсет</th>
                  </tr>
                  <tr>
                      <td>Чипсет</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.chipset+'</td>', '')}
                  </tr>
                  <tr>
                      <td>BIOS</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.bios+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Оперативная память</th>
                  </tr>
                  <tr>
                      <td>DDR4</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.slotsRAM+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Форм-фактор слота для памяти</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.ramFormFactor+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Режим работы</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.modeRAM+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Максимальная тактовая частота</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.ramFrequency+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Максимальный объем памяти</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.amountRAM+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Поддержка XMP</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.supportXMP+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Видеовыходы</th>
                  </tr>
                  <tr>
                      <td>Выход HDMI</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.outputHDMI+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Выход DVI</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.outputDVI+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Интегрированное аудио</th>
                  </tr>
                  <tr>
                      <td>Аудиочип</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.audioChip+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Звук (каналов)</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.sound+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Сетевые интерфейсы</th>
                  </tr>
                  <tr>
                      <td>LAN (RJ-45)</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.LAN+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Кол-во LAN-портов</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.quantityLAN+'</td>', '')}
                  </tr>
                  <tr>
                      <td>LAN контроллер</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.controllerLAN+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Слоты плат расширения</th>
                  </tr>
                  <tr>
                      <td>Слотов PCI-E 1x</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.slotsPCIE1x+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Слотов PCI-E 16x</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.slotsPCIE16x+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Поддержка PCI Express</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.supportExpress+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Поддержка CrossFire (AMD)</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.supportCrossFire+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Разъемы на задней панели</th>
                  </tr>
                  <tr>
                      <td>USB 2.0</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.USB2+'</td>', '')}
                  </tr>
                  <tr>
                      <td>USB 3.2</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.USB3+'</td>', '')}
                  </tr>
                  <tr>
                      <td>PS/2</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.PS2+'</td>', '')}
                  </tr>
              </tbody>
              <tbody>
                  <tr>
                      <th>Разъемы питания</th>
                  </tr>
                  <tr>
                      <td>Основной разъем питания</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.powerPlug+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Питание процессора</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.processorPower+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Разъемов питания кулеров</td>
                      ${arrayMB.reduce((txt, item) => txt + '<td>'+item.coolerPower+'</td>', '')}
                  </tr>
              </tbody>
          </table>
      </div>`;
      }
      if (arrayCP.length !== 0) {
        CPHTML += `<h3><a href="#cp" class="comparison__title" onclick="new Categories('.wrapper', 'cp').render();">Процессоры</a></h3>
      <div class="comparison__characteristic">
        <table>
          <tbody>
            <tr>
                <th>Основное</th>
                ${arrayCP.reduce((txt, item) => txt + '<th><a href="javascript:void(0);" onclick="renderElement(\'characteristic\', \''+item.id+'\');">'+item.name+'</a></th>', '')}
            </tr>
            <tr>
                <td>Серия</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.series+'</td>', '')}
            </tr>
            <tr>
                <td>Socket</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.socket+'</td>', '')}
            </tr>
            <tr>
                <td>Кол-во ядер</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.numberCores+'</td>', '')}
            </tr>
            <tr>
                <td>Кол-во потоков</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.numberThreads+'</td>', '')}
            </tr>
            <tr>
                <td>Тактовая частота</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.clockFrequency+'</td>', '')}
            </tr>
            <tr>
                <td>Частота TurboBoost</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.turboBoost+'</td>', '')}
            </tr>
            <tr>
                <td>Техпроцесс</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.technicalProcess+'</td>', '')}
            </tr>
            <tr>
                <td>Модель IGP</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.IGP+'</td>', '')}
            </tr>
          </tbody>
          <tbody>
            <tr>
                <th>Объемы кэш памяти</th>
            </tr>
            <tr>
                <td>1-го уровня L1</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.levelVolume1+'</td>', '')}
            </tr>
            <tr>
                <td>2-го уровня L2</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.levelVolume2+'</td>', '')}
            </tr>
              <tr>
                <td>3-го уровня L3</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.levelVolume3+'</td>', '')}
            </tr>
          </tbody>
          <tbody>
            <tr>
                <th>Характеристики</th>
            </tr>
            <tr>
                <td>Тепловыделение (TDP)</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.TDP+'</td>', '')}
            </tr>
            <tr>
                <td>Множитель</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.multiplier+'</td>', '')}
            </tr>
            <tr>
                <td>Свободный множитель</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.freeMultiplier+'</td>', '')}
            </tr>
            <tr>
                <td>Макс. рабочая температура</td>
                ${arrayCP.reduce((txt, item) => txt + '<td>'+item.maxTemperature+'</td>', '')}
            </tr>
          </tbody>
          <tbody>
              <tr>
                  <th>Поддержка памяти</th>
              </tr>
              <tr>
                  <td>Макс. объем</td>
                  ${arrayCP.reduce((txt, item) => txt + '<td>'+item.maxVolume+'</td>', '')}
              </tr>
              <tr>
                  <td>Макс. частота</td>
                  ${arrayCP.reduce((txt, item) => txt + '<td>'+item.maxFrequency+'</td>', '')}
              </tr>
              <tr>
                  <td>Число каналов</td>
                  ${arrayCP.reduce((txt, item) => txt + '<td>'+item.numberChannels+'</td>', '')}
              </tr>
          </tbody>
        </table>
      </div>`;
      }
      if (arrayGC.length !== 0) {
        GCHTML += `<h3><a href="#gc" class="comparison__title" onclick="new Categories('.wrapper', 'gc').render();">Видеокарты</a></h3>
        <div class="comparison__characteristic">
          <table>
            <tbody>
              <tr>
                  <th>Основное</th>
                  ${arrayGC.reduce((txt, item) => txt + '<th><a href="javascript:void(0);" onclick="renderElement(\'characteristic\', \''+item.id+'\');">'+item.name+'</a></th>', '')}
              </tr>
              <tr>
                  <td>Подключение</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.versionPCI+'</td>', '')}
                  <td
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <th>Графический процессор</th>
              </tr>
              <tr>
                  <td>Модель GPU</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.modelGPU+'</td>', '')}
              </tr>
              <tr>
                  <td>Объем памяти</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.memoryCapacity+'</td>', '')}
              </tr>
              <tr>
                  <td>Тип памяти</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.memoryType+'</td>', '')}
              </tr>
              <tr>
                  <td>Разрядность шины</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.busWidth+'</td>', '')}
              </tr>
              <tr>
                  <td>Частота работы GPU</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.frequencyGPU+'</td>', '')}
              </tr>
              <tr>
                  <td>Частота работы памяти</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.frequencyRAM+'</td>', '')}
              </tr>
              <tr>
                  <td>Техпроцесс</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.technicalProcess+'</td>', '')}
              </tr>
              <tr>
                  <td>Макс. разрешение</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.maxResolution+'</td>', '')}
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <th>Разъемы подключения</th>
              </tr>
              <tr>
                  <td>VGA</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.connectorVGA+'</td>', '')}
              </tr>
              <tr>
                  <td>DVI-D</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.connectorDVI+'</td>', '')}
              </tr>
              <tr>
                  <td>HDMI</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.connectorHDMI+'</td>', '')}
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <th>Программная часть</th>
              </tr>
              <tr>
                  <td>Версия DirectX</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.versionDirectX+'</td>', '')}
              </tr>
              <tr>
                  <td>Версия OpenGL</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.versionOpenGL+'</td>', '')}
              </tr>
              <tr>
                  <td>Потоковых процессоров</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.streamProcessors+'</td>', '')}
              </tr>
              <tr>
                  <td>Версия потоковых процессоров</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.streamProcessorsVersion+'</td>', '')}
              </tr>
              <tr>
                  <td>Текстурных блоков</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.textureBlocks+'</td>', '')}
              </tr>
            </tbody>
            <tbody>
              <tr>
                  <th>Общее</th>
              </tr>
              <tr>
                  <td>Макс. подключаемых мониторов</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.connectedMonitors+'</td>', '')}
              </tr>
              <tr>
                  <td>Охлаждение</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.cooling+'</td>', '')}
              </tr>
              <tr>
                  <td>Занимаемых слотов</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.occupiedSlots+'</td>', '')}
              </tr>
              <tr>
                  <td>Низкопрофильная</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.lowProfile+'</td>', '')}
              </tr>
              <tr>
                  <td>Длина видеокарты</td>
                  ${arrayGC.reduce((txt, item) => txt + '<td>'+item.length+'</td>', '')}
              </tr>
            </tbody>
          </table>
        </div>`;
      }
      if (arrayRM.length !== 0) {
        RMHTML += `<h3><a href="#rm" class="comparison__title" onclick="new Categories('.wrapper', 'rm').render();">Оперативная память</a></h3>
        <div class="comparison__characteristic">
          <table>
              <tbody>
                  <tr>
                      <th>Основное</th>
                      ${arrayRM.reduce((txt, item) => txt + '<th><a href="javascript:void(0);" onclick="renderElement(\'description\', \''+item.id+'\');">'+item.name+'</a></th>', '')}
                  </tr>
                  <tr>
                      <td>Объем памяти комплекта</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.ramKit+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Кол-во планок в комплекте</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.counterStripts+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Форм-фактор</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.ramFormFactor+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Тип памяти</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.ramSlot+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Тактовая частота</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.ramFrequency+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Пропускная способность</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.bandwidth+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Схема таймингов</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.timingScheme+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Рабочее напряжение</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.voltage+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Тип охлаждения</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.coolingType+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Профиль планки</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.plankProfile+'</td>', '')}
                  </tr>
                  <tr>
                      <td>Высота планки</td>
                      ${arrayRM.reduce((txt, item) => txt + '<td>'+item.heightPlank+'</td>', '')}
                  </tr>
              </tbody>
          </table>
      </div>`;
      }

      element.innerHTML = MBHTML + CPHTML + GCHTML + RMHTML;
    }
    this.parent.append(element);
  }
}













class IndexPage{
  constructor(parentSelector){
    this.parent = document.querySelector(parentSelector);
  }
  async render(){
    const element = document.createElement('section'),
          data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': 'all' }));

    removeOldElement();

    element.classList.add('main', 'content-page');

    let blockMB =  `<h3 class="main__title"><a href="#mb" onclick="new Categories('.wrapper', 'mb').render();">Материнские платы</a></h3>
                    <div class="main__item">`, 
        blockCP =  `<h3 class="main__title"><a href="#cp" onclick="new Categories('.wrapper', 'cp').render();">Процессоры</a></h3>
                    <div class="main__item">`,  
        blockGC =  `<h3 class="main__title"><a href="#gc" onclick="new Categories('.wrapper', 'gc').render();">Видеокарты</a></h3>
                    <div class="main__item">`, 
        blockRM =  `<h3 class="main__title"><a href="#rm" onclick="new Categories('.wrapper', 'rm').render();">Оперативная память</a></h3>
                    <div class="main__item">`, 
        dataArrayObj = [],
        counterMB = 0, counterCP = 0, counterGC = 0, counterRM = 0;

        data.forEach(elem => {
          dataArrayObj.push(JSON.parse(elem.dataproduct));    
        });


      dataArrayObj.forEach(elem => {

        const {name, id, src, price} = elem,
              typeProduct = id.slice(0, 2);

          if (typeProduct === 'mb' && counterMB < 4) {
            counterMB++;
            blockMB += `
            <div class="main-categories__item">
              <a href="javascript:void(0);" onclick="renderElement('description', '${id}');">
                <div class="main-categories__item-img">
                  <img src='${src}' alt="">
                </div>
                <h4 class="main-categories__item-title">${name}</h4>
                <span>Цена: ${price} грн.</span>
              </a>
            </div>
            `;
          } else if (typeProduct === 'cp' && counterCP < 4) {
            counterCP++;
            blockCP += `
            <div class="main-categories__item">
              <a href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">
                <div class="main-categories__item-img">
                  <img src='${src}' alt="">
                </div>
                <h4 class="main-categories__item-title">${name}</h4>
                <span>Цена: ${price} грн.</span>
              </a>
            </div>
            `;
          } else if (typeProduct === 'gc' && counterGC < 4) {
            counterGC++;
            blockGC += `
            <div class="main-categories__item">
              <a href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">
                <div class="main-categories__item-img">
                  <img src='${src}' alt="">
                </div>
                <h4 class="main-categories__item-title">${name}</h4>
                <span>Цена: ${price} грн.</span>
              </a>
            </div>
            `;
          } else if (typeProduct === 'rm' && counterRM < 4) {
            counterRM++;
            blockRM += `
            
              <div class="main-categories__item">
                <a href="javascript:void(0);" onclick="renderElement('description', '${id}');">
                  <div class="main-categories__item-img">
                    <img src='${src}' alt="">
                  </div>
                  <h4 class="main-categories__item-title">${name}</h4>
                  <span>Цена: ${price} грн.</span>
                </a>
              </div>
            `;
          }
    });

    element.innerHTML = blockMB + '</div>' + blockCP + '</div>' + blockGC + '</div>' + blockRM + '</div>';
    
    this.parent.append(element);
    checkLoadImg();
  }
}



class ComponentsPage{
  constructor(parentSelector, name, id, price){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;
  }
  async render(){
    const element = document.createElement('section'),
          data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': 'all' }));

    removeOldElement();

    element.classList.add('categories', 'content-page');

    let nav = '',
        titleBlockMB = '',
        titleBlockCP = '',
        titleBlockGC = '',
        titleBlockRM = '',
        blockMB = '',
        blockCP = '',
        blockGC = '',
        blockRM = '',
        dataArrayObj = [];

    data.forEach(elem => {
      dataArrayObj.push(JSON.parse(elem.dataproduct));    
    });

    switch(this.id.slice(0, 2)) {
      case 'mb':
        nav = `
        <div class="product">
          <h3 class="product__title">Материнская плата ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item product-selected-menu">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>
        </div>
        `;
        let mbMemoryType, mbSupportExpress, mbSocket, mbRamFormFactor;

        dataArrayObj.some(elem => {
          if(elem.id === this.id) {
            mbMemoryType = elem.ramSlot;
            mbSupportExpress = elem.supportExpress;
            mbSocket = elem.socket;
            mbRamFormFactor = elem.ramFormFactor;
            return true;
          }
        });

        dataArrayObj.forEach(elem => {

          const typeProduct = elem.id.slice(0, 2);
    
          if (typeProduct === 'cp') {
            const {name, id, src, socket, numberCores, numberThreads, clockFrequency, turboBoost, IGP} = elem;
  
            if (mbSocket === socket) {
              titleBlockCP = `<h3 class="categories__title">Процессоры</h3>`;
              blockCP += `
              <div class="categories__item">
                  <img class="categories__item-img" src='${src}' alt="">
                  <div class="categories__item-content">
                      <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">${name}</a></h4>
                      <ul class="categories__list">
                          <li class="categories__list-item">Socket: <span>${socket}</span></li>
                          <li class="categories__list-item">Кол-во ядер: <span>${numberCores}</span></li>
                          <li class="categories__list-item">Кол-во потоков: <span>${numberThreads}</span></li>
                          <li class="categories__list-item">Тактовая частота: <span>${clockFrequency}</span></li>
                          <li class="categories__list-item">Частота TurboBoost: <span>${turboBoost}</span></li>
                          <li class="categories__list-item">Модель IGP: <span>${IGP}</span></li>
                      </ul>
                      <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                  </div>
              </div>
              `;
            }
          } else  if (typeProduct === 'gc') {
            const {name, id, src, versionPCI, memoryCapacity, memoryType, busWidth, maxResolution, streamProcessors} = elem;
            
            if (mbSupportExpress === versionPCI) {
              titleBlockGC = `<h3 class="categories__title">Видеокарты</h3>`;
              blockGC += `
                <div class="categories__item">
                    <img class="categories__item-img" src='${src}' alt="">
                    <div class="categories__item-content">
                        <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">${name}</a></h4>
                        <ul class="categories__list">
                            <li class="categories__list-item">Подключение: <span>PCI-E v${versionPCI}</span></li>
                            <li class="categories__list-item">Объем памяти: <span>${memoryCapacity}</span></li>
                            <li class="categories__list-item">Тип памяти: <span>${memoryType}</span></li>
                            <li class="categories__list-item">Разрядность шины: <span>${busWidth}</span></li>
                            <li class="categories__list-item">Макс. разрешение: <span>${maxResolution}</span></li>
                            <li class="categories__list-item">Потоковых процессоров: <span>${streamProcessors}</span></li>
                        </ul>
                        <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                    </div>
                </div>
            `;
            }
            
          } else if (typeProduct === 'rm') {
            const {name, id, src, ramKit, bandwidth, voltage, ramSlot, ramFrequency, heightPlank, ramFormFactor} = elem;
            
            if (ramSlot === mbMemoryType && ramFormFactor === mbRamFormFactor) {
              titleBlockRM = `<h3 class="categories__title">Оперативная память</h3>`;
              blockRM += `
                <div class="categories__item">
                    <img class="categories__item-img" src='${src}' alt="">
                    <div class="categories__item-content">
                        <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                        <ul class="categories__list">
                            <li class="categories__list-item">Объем памяти комплекта: <span>${ramKit}</span></li>
                            <li class="categories__list-item">Тип памяти: <span>${ramSlot}</span></li>
                            <li class="categories__list-item">Тактовая частота: <span>${ramFrequency}</span></li>
                            <li class="categories__list-item">Пропускная способность: <span>${bandwidth}</span></li>
                            <li class="categories__list-item">Рабочее напряжение: <span>${voltage}</span></li>
                            <li class="categories__list-item">Высота планки: <span>${heightPlank}</span></li>
                        </ul>
                        <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                    </div>
                </div>
            `;
            }
          }
        });
      break;
      case 'cp':
        nav = `
        <div class="product">
          <h3 class="product__title">Процессор ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item product-selected-menu">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>
        </div>
        `;

        let cpSocket;

        dataArrayObj.some(elem => {
          if(elem.id === this.id) {
            cpSocket = elem.socket;
            return true;
          }
        });

        dataArrayObj.forEach(elem => {
    
          if (elem.id.slice(0, 2) === 'mb') {
            const {name, id, src, socket, formFactor, chipset, ramSlot, ramFrequency, plugs, slotsPCIE1x, slotsPCIE16x} = elem;
  
            if (cpSocket === socket) {
              titleBlockMB = `<h3 class="categories__title">Материнские платы</h3>`;
              blockMB += `
                <div class="categories__item">
                    <img class="categories__item-img" src='${src}' alt="">
                    <div class="categories__item-content">
                        <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                        <ul class="categories__list">
                            <li class="categories__list-item">Форм-фактор: <span>${formFactor}</span></li>
                            <li class="categories__list-item">Socket: <span>${socket}</span></li>
                            <li class="categories__list-item">ОЗУ: <span>${ramSlot}, ${ramFrequency}</span></li>
                            <li class="categories__list-item">Чипсет: <span>${chipset}</span></li>
                            <li class="categories__list-item">Разъемы: <span>${plugs}</span></li>
                            <li class="categories__list-item">Расширения: <span>PCI-E 1x - ${slotsPCIE1x}, PCI-E 16x - ${slotsPCIE16x}</span></li>
                        </ul>
                        <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                    </div>
                </div>
              `;
            }
          }
        });
      break;
      case 'gc':
        nav = `
        <div class="product">
          <h3 class="product__title">Видеокарта ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item product-selected-menu">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>
        </div>
        `;

        let gcSupportExpress;

        dataArrayObj.some(elem => {
          if(elem.id === this.id) {
            gcSupportExpress = elem.versionPCI;
            return true;
          }
        });
        
        dataArrayObj.forEach(elem => {
    
          if (elem.id.slice(0, 2) === 'mb') {
            const {name, id, src, socket, formFactor, chipset, ramSlot, ramFrequency, plugs, slotsPCIE1x, slotsPCIE16x, supportExpress} = elem;
  
            if (gcSupportExpress === supportExpress) {
              titleBlockMB = `<h3 class="categories__title">Материнские платы</h3>`;
              blockMB += `
                <div class="categories__item">
                    <img class="categories__item-img" src='${src}' alt="">
                    <div class="categories__item-content">
                        <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                        <ul class="categories__list">
                            <li class="categories__list-item">Форм-фактор: <span>${formFactor}</span></li>
                            <li class="categories__list-item">Socket: <span>${socket}</span></li>
                            <li class="categories__list-item">ОЗУ: <span>${ramSlot}, ${ramFrequency}</span></li>
                            <li class="categories__list-item">Чипсет: <span>${chipset}</span></li>
                            <li class="categories__list-item">Разъемы: <span>${plugs}</span></li>
                            <li class="categories__list-item">Расширения: <span>PCI-E 1x - ${slotsPCIE1x}, PCI-E 16x - ${slotsPCIE16x}</span></li>
                        </ul>
                        <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                    </div>
                </div>
              `;
            }
          }
        });
      break;
      case 'rm':
        nav = `
        <div class="product">
          <h3 class="product__title">Оперативная память ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">
                  <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
                  <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item product-selected-menu">комплектующие</a></li>
                  <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
                  <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
              </ul>
          </nav>
        </div>
        `;
        let rmMemoryType, rmRamFormFactor;

        dataArrayObj.some(elem => {
          if(elem.id === this.id) {
            rmMemoryType = elem.ramSlot;
            rmRamFormFactor = elem.ramFormFactor;
            return true;
          }
        });
        
        dataArrayObj.forEach(elem => {
    
          if (elem.id.slice(0, 2) === 'mb') {
            const {name, id, src, socket, formFactor, chipset, ramSlot, ramFrequency, plugs, slotsPCIE1x, slotsPCIE16x, ramFormFactor} = elem;
  
            if (rmMemoryType === ramSlot && rmRamFormFactor === ramFormFactor) {
              titleBlockMB = `<h3 class="categories__title">Материнские платы</h3>`;
              blockMB += `
                <div class="categories__item">
                    <img class="categories__item-img" src='${src}' alt="">
                    <div class="categories__item-content">
                        <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                        <ul class="categories__list">
                            <li class="categories__list-item">Форм-фактор: <span>${formFactor}</span></li>
                            <li class="categories__list-item">Socket: <span>${socket}</span></li>
                            <li class="categories__list-item">ОЗУ: <span>${ramSlot}, ${ramFrequency}</span></li>
                            <li class="categories__list-item">Чипсет: <span>${chipset}</span></li>
                            <li class="categories__list-item">Разъемы: <span>${plugs}</span></li>
                            <li class="categories__list-item">Расширения: <span>PCI-E 1x - ${slotsPCIE1x}, PCI-E 16x - ${slotsPCIE16x}</span></li>
                        </ul>
                        <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
                    </div>
                </div>
              `;
            }
          }
        });
      break;
    }

    element.innerHTML = nav + titleBlockMB + blockMB + titleBlockCP + blockCP + titleBlockGC + blockGC + titleBlockRM + blockRM;
    this.parent.append(element);
  }
}



class Categories{
  constructor(parentSelector, type){
    this.parent = document.querySelector(parentSelector);
    this.type = type;
  }
  async render(){
    const element = document.createElement('section'),
          data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': 'all' }));

    closeBurgerMenu();
    removeOldElement();

    element.classList.add('categories', 'content-page');

    let categoriesItemHTML;
    switch (this.type) {
      case 'mb':
        categoriesItemHTML = `<h3 class="categories__title"><a href="#mb" onclick="new Categories('.wrapper', 'mb').render();">Материнские платы</a></h3>`;
      break;
      case 'cp':
        categoriesItemHTML = `<h3 class="categories__title"><a href="#cp" onclick="new Categories('.wrapper', 'cp').render();">Процессоры</a></h3>`;
      break;
      case 'gc':
        categoriesItemHTML = `<h3 class="categories__title"><a href="#gc" onclick="new Categories('.wrapper', 'gc').render();">Видеокарты</a></h3>`;
      break;
      case 'rm':
        categoriesItemHTML = `<h3 class="categories__title"><a href="#rm" onclick="new Categories('.wrapper', 'rm').render();">Оперативная память</a></h3>`;
      break;
    }

    data.forEach(elem => {

      let {id} = JSON.parse(elem.dataproduct),
          idProduct = id.slice(0, 2);

      if (idProduct === this.type) {

        if (idProduct === 'mb') {
          const {name, id, src, socket, formFactor, chipset, ramSlot, ramFrequency, plugs, slotsPCIE1x, slotsPCIE16x} = JSON.parse(elem.dataproduct);

          categoriesItemHTML += `
          <div class="categories__item">
              <img class="categories__item-img" src='${src}' alt="">
              <div class="categories__item-content">
                  <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                  <ul class="categories__list">
                      <li class="categories__list-item">Форм-фактор: <span>${formFactor}</span></li>
                      <li class="categories__list-item">Socket: <span>${socket}</span></li>
                      <li class="categories__list-item">ОЗУ: <span>${ramSlot}, ${ramFrequency}</span></li>
                      <li class="categories__list-item">Чипсет: <span>${chipset}</span></li>
                      <li class="categories__list-item">Разъемы: <span>${plugs}</span></li>
                      <li class="categories__list-item">Расширения: <span>PCI-E 1x - ${slotsPCIE1x}, PCI-E 16x - ${slotsPCIE16x}</span></li>
                  </ul>
                  <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
              </div>
          </div>
          `;
        } else if (idProduct === 'cp') {
          const {name, id, src, socket, numberCores, numberThreads, clockFrequency, turboBoost, IGP} = JSON.parse(elem.dataproduct);

          categoriesItemHTML += `
          <div class="categories__item">
              <img class="categories__item-img" src='${src}' alt="">
              <div class="categories__item-content">
                  <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">${name}</a></h4>
                  <ul class="categories__list">
                      <li class="categories__list-item">Socket: <span>${socket}</span></li>
                      <li class="categories__list-item">Кол-во ядер: <span>${numberCores}</span></li>
                      <li class="categories__list-item">Кол-во потоков: <span>${numberThreads}</span></li>
                      <li class="categories__list-item">Тактовая частота: <span>${clockFrequency}</span></li>
                      <li class="categories__list-item">Частота TurboBoost: <span>${turboBoost}</span></li>
                      <li class="categories__list-item">Модель IGP: <span>${IGP}</span></li>
                  </ul>
                  <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
              </div>
          </div>
          `;
        } else if (idProduct === 'gc') {
          const {name, id, src, versionPCI, memoryCapacity, memoryType, busWidth, maxResolution, streamProcessors} = JSON.parse(elem.dataproduct);

          categoriesItemHTML += `
          <div class="categories__item">
              <img class="categories__item-img" src='${src}' alt="">
              <div class="categories__item-content">
                  <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('characteristic', '${id}');">${name}</a></h4>
                  <ul class="categories__list">
                      <li class="categories__list-item">Подключение: <span>PCI-E v${versionPCI}</span></li>
                      <li class="categories__list-item">Объем памяти: <span>${memoryCapacity}</span></li>
                      <li class="categories__list-item">Тип памяти: <span>${memoryType}</span></li>
                      <li class="categories__list-item">Разрядность шины: <span>${busWidth}</span></li>
                      <li class="categories__list-item">Макс. разрешение: <span>${maxResolution}</span></li>
                      <li class="categories__list-item">Потоковых процессоров: <span>${streamProcessors}</span></li>
                  </ul>
                  <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
              </div>
          </div>
          `;
        } else if (idProduct === 'rm') {
          const {name, id, src, ramKit, bandwidth, voltage, ramSlot, ramFrequency, heightPlank} = JSON.parse(elem.dataproduct);

          categoriesItemHTML += `
          <div class="categories__item">
              <img class="categories__item-img" src='${src}' alt="">
              <div class="categories__item-content">
                  <h4><a class="categories__item-title" href="javascript:void(0);" onclick="renderElement('description', '${id}');">${name}</a></h4>
                  <ul class="categories__list">
                      <li class="categories__list-item">Объем памяти комплекта: <span>${ramKit}</span></li>
                      <li class="categories__list-item">Тип памяти: <span>${ramSlot}</span></li>
                      <li class="categories__list-item">Тактовая частота: <span>${ramFrequency}</span></li>
                      <li class="categories__list-item">Пропускная способность: <span>${bandwidth}</span></li>
                      <li class="categories__list-item">Рабочее напряжение: <span>${voltage}</span></li>
                      <li class="categories__list-item">Высота планки: <span>${heightPlank}</span></li>
                  </ul>
                  <a href="javascript:void(0);" onclick="comparisonProduct('${id}', this);" class="categories__item-content-btn">${createTextBtnComparison(id)}</a>
              </div>
          </div>
          `;
        }
      }
    });

    element.innerHTML = categoriesItemHTML;
    this.parent.append(element);
  }
}


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
    const element = document.createElement('section');

    removeOldElement();

    element.classList.add('product', 'content-page');

    element.innerHTML = `
    <h3 class="product__title">Материнская плата ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item product-selected-menu">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
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
    const element = document.createElement('section');

    removeOldElement();

    element.classList.add('product', 'content-page');

    element.innerHTML = `
    <h3 class="product__title">Материнская плата ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item product-selected-menu">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
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


class DescriptionRAM{
  constructor(parentSelector, name, id, price, src, ramFormFactor, ramSlot, ramFrequency, ramKit, counterStripts, bandwidth, timingScheme, voltage, coolingType, plankProfile, heightPlank){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;
    this.src = src;
    this.ramFormFactor = ramFormFactor;
    this.ramSlot = ramSlot;
    this.ramFrequency = ramFrequency;
    this.ramKit = ramKit;
    this.counterStripts = counterStripts;
    this.bandwidth = bandwidth;
    this.timingScheme = timingScheme;
    this.voltage = voltage;
    this.coolingType = coolingType;
    this.plankProfile = plankProfile;
    this.heightPlank = heightPlank;
  }
  render(){
    const element = document.createElement('section');

    removeOldElement();

    element.classList.add('product', 'content-page');

    element.innerHTML = `
    <h3 class="product__title">Оперативная память ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item product-selected-menu">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
        </ul>
    </nav>
    <div class="product-characteristics">
        <img class="product-characteristics__img" src="${this.src}" alt="">
        <ul class="product-characteristics__list">
            <li class="product-characteristics-list__item">Объем памяти комплекта: <span>${this.ramKit}</span></li>
            <li class="product-characteristics-list__item">Кол-во планок в комплекте: <span>${this.counterStripts}</span></li>
            <li class="product-characteristics-list__item">Форм-фактор: <span>${this.ramFormFactor}</span></li>
            <li class="product-characteristics-list__item">Тип памяти: <span>${this.ramSlot}</span></li>
            <li class="product-characteristics-list__item">Тактовая частота: <span>${this.ramFrequency}</span></li>
            <li class="product-characteristics-list__item">Пропускная способность: <span>${this.bandwidth}</span></li>
            <li class="product-characteristics-list__item">Схема таймингов: <span>${this.timingScheme}</span></li>
            <li class="product-characteristics-list__item">Рабочее напряжение: <span>${this.voltage}</span></li>
            <li class="product-characteristics-list__item">Тип охлаждения: <span>${this.coolingType}</span></li>
            <li class="product-characteristics-list__item">Профиль планки: <span>${this.plankProfile}</span></li>
            <li class="product-characteristics-list__item">Высота планки: <span>${this.heightPlank}</span></li>
        </ul>
    </div>
    `;
    this.parent.append(element);
  }
}


class CharacteristicCPU{
  constructor(parentSelector, name, id, price, src, series, socket, numberCores, numberThreads, clockFrequency, turboBoost, technicalProcess, IGP, levelVolume1, levelVolume2, levelVolume3, TDP, multiplier, freeMultiplier, maxTemperature, maxVolume, maxFrequency, numberChannels){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;
    this.src = src;
    this.series = series;
    this.socket = socket;
    this.numberCores = numberCores;
    this.numberThreads = numberThreads;
    this.clockFrequency = clockFrequency;
    this.turboBoost = turboBoost;
    this.technicalProcess = technicalProcess;
    this.IGP = IGP;
    this.levelVolume1 = levelVolume1;
    this.levelVolume2 = levelVolume2;
    this.levelVolume3 = levelVolume3;
    this.TDP = TDP;
    this.multiplier = multiplier;
    this.freeMultiplier = freeMultiplier;
    this.maxTemperature = maxTemperature;
    this.maxVolume = maxVolume;
    this.maxFrequency = maxFrequency;
    this.numberChannels = numberChannels;
  }
  render(){
    const element = document.createElement('section');

    removeOldElement();

    element.classList.add('product', 'content-page');

    element.innerHTML = `
    <h3 class="product__title">Процессор ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item product-selected-menu">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
        </ul>
    </nav>
    <div class="product__characteristic">
      <table>
        <tbody>
          <tr>
              <th>Основное</th>
          </tr>
          <tr>
              <td>Серия</td>
              <td>${this.series}</td>
          </tr>
          <tr>
              <td>Socket</td>
              <td>${this.socket}</td>
          </tr>
          <tr>
              <td>Кол-во ядер</td>
              <td>${this.numberCores}</td>
          </tr>
          <tr>
              <td>Кол-во потоков</td>
              <td>${this.numberThreads}</td>
          </tr>
          <tr>
              <td>Тактовая частота</td>
              <td>${this.clockFrequency}</td>
          </tr>
          <tr>
              <td>Частота TurboBoost</td>
              <td>${this.turboBoost}</td>
          </tr>
          <tr>
              <td>Техпроцесс</td>
              <td>${this.technicalProcess}</td>
          </tr>
          <tr>
              <td>Модель IGP</td>
              <td>${this.IGP}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
              <th>Объемы кэш памяти</th>
          </tr>
          <tr>
              <td>1-го уровня L1</td>
              <td>${this.levelVolume1}</td>
          </tr>
          <tr>
              <td>2-го уровня L2</td>
              <td>${this.levelVolume2}</td>
          </tr>
            <tr>
              <td>3-го уровня L3</td>
              <td>${this.levelVolume3}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
              <th>Характеристики</th>
          </tr>
          <tr>
              <td>Тепловыделение (TDP)</td>
              <td>${this.TDP}</td>
          </tr>
          <tr>
              <td>Множитель</td>
              <td>${this.multiplier}</td>
          </tr>
          <tr>
              <td>Свободный множитель</td>
              <td>${this.freeMultiplier}</td>
          </tr>
          <tr>
              <td>Макс. рабочая температура</td>
              <td>${this.maxTemperature}</td>
          </tr>
        </tbody>
        <tbody>
            <tr>
                <th>Поддержка памяти</th>
            </tr>
            <tr>
                <td>Макс. объем</td>
                <td>${this.maxVolume}</td>
            </tr>
            <tr>
                <td>Макс. частота</td>
                <td>${this.maxFrequency}</td>
            </tr>
            <tr>
                <td>Число каналов</td>
                <td>${this.numberChannels}</td>
            </tr>
        </tbody>
      </table>
  </div>
    `;
    this.parent.append(element);
  }
}


class CharacteristicGraphicsCard{
  constructor(parentSelector, name, id, price, versionPCI, modelGPU, memoryCapacity, memoryType, busWidth, frequencyGPU, frequencyRAM, technicalProcess, maxResolution, connectorVGA, connectorDVI, connectorHDMI, versionDirectX, versionOpenGL, streamProcessors, streamProcessorsVersion, textureBlocks, connectedMonitors, cooling, occupiedSlots, lowProfile, length, description){
    this.parent = document.querySelector(parentSelector);
    this.name = name;
    this.id = id;
    this.price = price;

    this.versionPCI = versionPCI;
    this.modelGPU = modelGPU;
    this.memoryCapacity = memoryCapacity;
    this.memoryType = memoryType;
    this.busWidth = busWidth;
    this.frequencyGPU = frequencyGPU;
    this.frequencyRAM = frequencyRAM;
    this.technicalProcess = technicalProcess;
    this.maxResolution = maxResolution;


    this.connectorVGA = connectorVGA;
    this.connectorDVI = connectorDVI;
    this.connectorHDMI = connectorHDMI;

    this.versionDirectX = versionDirectX;
    this.versionOpenGL = versionOpenGL;
    this.streamProcessors = streamProcessors;
    this.streamProcessorsVersion = streamProcessorsVersion;
    this.textureBlocks = textureBlocks;

    this.connectedMonitors = connectedMonitors;
    this.cooling = cooling;
    this.occupiedSlots = occupiedSlots;
    this.lowProfile = lowProfile;
    this.length = length;
    this.description = description;

  }
  render(){
    const element = document.createElement('section');

    removeOldElement();

    element.classList.add('product', 'content-page');

    element.innerHTML = `
    <h3 class="product__title">Видеокарта ${this.name}</h3>
    <nav class="product__nav">
        <ul class="product__menu">
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item product-selected-menu">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
            <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
            <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
        </ul>
    </nav>
    <div class="product__characteristic">
      <table>
        <tbody>
          <tr>
              <th>Основное</th>
          </tr>
          <tr>
              <td>Подключение</td>
              <td>PCI-E v${this.versionPCI}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
              <th>Графический процессор</th>
          </tr>
          <tr>
              <td>Модель GPU</td>
              <td>${this.modelGPU}</td>
          </tr>
          <tr>
              <td>Объем памяти</td>
              <td>${this.memoryCapacity}</td>
          </tr>
          <tr>
              <td>Тип памяти</td>
              <td>${this.memoryType}</td>
          </tr>
          <tr>
              <td>Разрядность шины</td>
              <td>${this.busWidth}</td>
          </tr>
          <tr>
              <td>Частота работы GPU</td>
              <td>${this.frequencyGPU}</td>
          </tr>
          <tr>
              <td>Частота работы памяти</td>
              <td>${this.frequencyRAM}</td>
          </tr>
          <tr>
              <td>Техпроцесс</td>
              <td>${this.technicalProcess}</td>
          </tr>
          <tr>
              <td>Макс. разрешение</td>
              <td>${this.maxResolution}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
              <th>Разъемы подключения</th>
          </tr>
          <tr>
              <td>VGA</td>
              <td>${this.connectorVGA}</td>
          </tr>
          <tr>
              <td>DVI-D</td>
              <td>${this.connectorDVI}</td>
          </tr>
          <tr>
              <td>HDMI</td>
              <td>${this.connectorHDMI}</td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
              <th>Программная часть</th>
          </tr>
          <tr>
              <td>Версия DirectX</td>
              <td>${this.versionDirectX}</td>
          </tr>
          <tr>
              <td>Версия OpenGL</td>
              <td>${this.versionOpenGL}</td>
          </tr>
          <tr>
              <td>Потоковых процессоров</td>
              <td>${this.streamProcessors}</td>
          </tr>
          <tr>
              <td>Версия потоковых процессоров</td>
              <td>${this.streamProcessorsVersion}</td>
          </tr>
          <tr>
              <td>Текстурных блоков</td>
              <td>${this.textureBlocks}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
              <th>Общее</th>
          </tr>
          <tr>
              <td>Макс. подключаемых мониторов</td>
              <td>${this.connectedMonitors}</td>
          </tr>
          <tr>
              <td>Охлаждение</td>
              <td>${this.cooling}</td>
          </tr>
          <tr>
              <td>Занимаемых слотов</td>
              <td>${this.occupiedSlots}</td>
          </tr>
          <tr>
              <td>Низкопрофильная</td>
              <td>${this.lowProfile}</td>
          </tr>
          <tr>
              <td>Длина видеокарты</td>
              <td>${this.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h4 class="product__description-title">описание:</h4>
    <p class="product__description-text">
      ${this.description}
    </p>
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
      const element = document.createElement('section');
      
      removeOldElement();
  
      element.classList.add('product', 'content-page');

      let nameProduct, uniquelyMenuHTML, menuHTML, commentListHTML = '';

      uniquelyMenuHTML = `
            <li><a href="javascript:void(0);" onclick="renderElement('characteristic', '${this.id}');" class="product-menu__item">характеристики</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item product-selected-menu">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
          `;

      switch (this.id.slice(0, 2)) {
        case 'mb': 
          nameProduct = 'Материнская плата';
          uniquelyMenuHTML = `
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
          ` + uniquelyMenuHTML;
        break;
        case 'cp': 
          nameProduct = 'Процессор';
        break;
        case 'gc': 
          nameProduct = 'Видеокарта';
        break;
        case 'rm': 
          nameProduct = 'Оперативная память';
          uniquelyMenuHTML = `
            <li><a href="javascript:void(0);" onclick="renderElement('description', '${this.id}');" class="product-menu__item">описание</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('comment', '${this.id}');" class="product-menu__item product-selected-menu">отзывы</a></li>
            <li><a href="javascript:void(0);" onclick="renderElement('components', '${this.id}');" class="product-menu__item">комплектующие</a></li>
          `;
        break;
      }

      menuHTML = `<h3 class="product__title">${nameProduct} ${this.name}</h3>
          <nav class="product__nav">
              <ul class="product__menu">` + uniquelyMenuHTML + `
              <li><a href="javascript:void(0);" onclick="addToBasketProduct('${this.name}', '${this.id}', ${this.price});" class="product-menu__item">купить</a></li>
              <li><a href="javascript:void(0);" onclick="comparisonProduct('${this.id}', this);" class="product-menu__item">${createTextBtnComparison(this.id)}</a></li>
          </ul>
      </nav>`;

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
        commentListHTML = `<h4 class="product__comments__title">Отзывов не обнаружено, но вы можете оставить первый отзыв😉</h4>`;
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


async function renderElement(menu, idProduct) {
  const data = await getDataBD('../php/get_product.php', JSON.stringify({ 'id': idProduct })),
        dataProduct = JSON.parse(data.dataproduct),
        dataComment = JSON.parse(data.comment),
        typeProduct = idProduct.slice(0, 2);

        window.location.hash = typeProduct + '/' + idProduct.slice(2) + '/' + menu;

  if (menu === 'comment') {
    const {parentSelector, name, id, price} = dataProduct;

    new CommentPage(parentSelector, name, id, price, dataComment).render(); 
  } else if (menu === 'components') {
    const {parentSelector, name, id, price} = dataProduct;

    new ComponentsPage(parentSelector, name, id, price).render();
  } else {
    switch (typeProduct) {
      case 'mb': 
        const {parentSelector, name, id, price, src, direction, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, plugs, processorPower, description, size, slotsRAM, modeRAM, amountRAM, supportXMP, outputHDMI, outputDVI, audioChip, LAN, quantityLAN, controllerLAN, slotsPCIE1x, slotsPCIE16x, supportExpress, supportCrossFire, USB2, USB3, PS2, coolerPower} = dataProduct;

        if (menu === 'description') {
          new DescriptionMotherboard(parentSelector, name, id, price, src, direction, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, plugs, processorPower, description).render(); 
        } else if (menu === 'characteristic') {
          new CharacteristicMotherboard(parentSelector, name, id, price, socket, bios, ramFormFactor, sound, powerPlug, formFactor, chipset, ramSlot, ramFrequency, processorPower, size, slotsRAM, modeRAM, amountRAM, supportXMP, outputHDMI, outputDVI, audioChip, LAN, quantityLAN, controllerLAN, slotsPCIE1x, slotsPCIE16x, supportExpress, supportCrossFire, USB2, USB3, PS2, coolerPower).render();
        }
      break;
      case 'cp': 
        if (menu === 'characteristic') {
          const {parentSelector, name, id, price, src, series, socket, numberCores, numberThreads, clockFrequency, turboBoost, technicalProcess, IGP, levelVolume1, levelVolume2, levelVolume3, TDP, multiplier, freeMultiplier, maxTemperature, maxVolume, maxFrequency, numberChannels} = dataProduct;

          new CharacteristicCPU(parentSelector, name, id, price, src, series, socket, numberCores, numberThreads, clockFrequency, turboBoost, technicalProcess, IGP, levelVolume1, levelVolume2, levelVolume3, TDP, multiplier, freeMultiplier, maxTemperature, maxVolume, maxFrequency, numberChannels).render();
        }
      break;
      case 'gc': 
        if (menu === 'characteristic') {
          const {parentSelector, name, id, price, versionPCI, modelGPU, memoryCapacity, memoryType, busWidth, frequencyGPU, frequencyRAM, technicalProcess, maxResolution, connectorVGA, connectorDVI, connectorHDMI, versionDirectX, versionOpenGL, streamProcessors, streamProcessorsVersion, textureBlocks, connectedMonitors, cooling, occupiedSlots, lowProfile, length, description} = dataProduct;

          new CharacteristicGraphicsCard(parentSelector, name, id, price, versionPCI, modelGPU, memoryCapacity, memoryType, busWidth, frequencyGPU, frequencyRAM, technicalProcess, maxResolution, connectorVGA, connectorDVI, connectorHDMI, versionDirectX, versionOpenGL, streamProcessors, streamProcessorsVersion, textureBlocks, connectedMonitors, cooling, occupiedSlots, lowProfile, length, description).render();
        }
      break;
      case 'rm': 
        if (menu === 'description') {
          const {parentSelector, name, id, price, src, ramFormFactor, ramSlot, ramFrequency, ramKit, counterStripts, bandwidth, timingScheme, voltage, coolingType, plankProfile, heightPlank} = dataProduct;

          new DescriptionRAM(parentSelector, name, id, price, src, ramFormFactor, ramSlot, ramFrequency, ramKit, counterStripts, bandwidth, timingScheme, voltage, coolingType, plankProfile, heightPlank).render();
        }
      break;
    };
  }
}



function comparisonProduct(id, element) {
    let dataStorage = JSON.parse(localStorage.getItem('data_comparison'));
  
    if (dataStorage === null || dataStorage.length === 0) {
      dataStorage = [];
      dataStorage.push(id);
      element.innerText = 'Удалить из сравнения';
    } else {
      const index = dataStorage.indexOf(id);
        if (index > -1) {
          dataStorage.splice(index, 1);
          element.innerText = 'Добавить к сравнению';
        } else {
          dataStorage.push(id);
          element.innerText = 'Удалить из сравнения';
        }
    }
    localStorage.setItem('data_comparison', JSON.stringify(dataStorage));
  }




function createTextBtnComparison(id) {
  let dataStorage = JSON.parse(localStorage.getItem('data_comparison'));

  if (dataStorage === null || dataStorage.length === 0) {
    return 'Добавить к сравнению';
  } else {
    const index = dataStorage.indexOf(id);
    if (index > -1) {
      return 'Удалить из сравнения';
    } else {
      return 'Добавить к сравнению';
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
      } catch (e) {
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

function autoHeightBlock() {
  let proportions = [];

  document.querySelectorAll('.main__item').forEach((item) => {
    const imgArray = item.querySelectorAll('.main-categories__item-img');
    let maxHeight = 0, 
        width = 0;

    imgArray.forEach(img => {
      if (maxHeight < img.clientHeight) {
        maxHeight = img.clientHeight;
        width = img.clientWidth;
      }
    });
    
    
    if (maxHeight > width) {
      maxHeight = width;
    }

    proportions.push(width/maxHeight);

    imgArray.forEach(img => {
      img.style.height = maxHeight + 'px';
    });
  });
  localStorage.setItem('data_width', JSON.stringify(proportions));
}


function checkLoadImg() {
  if (document.readyState == "complete") {
    autoHeightBlock();
  } else {
    document.onreadystatechange = function () {
      if (document.readyState == "complete") {
        autoHeightBlock();
      }
    };
  }
}





window.addEventListener('resize', () => {
  try {
    const proportions = JSON.parse(localStorage.getItem('data_width'));

    document.querySelectorAll('.main__item').forEach((item, i) => {
      item.querySelectorAll('.main-categories__item-img').forEach(img => {
        img.style.height = img.clientWidth/proportions[i] + 'px';
      });
    });
  } catch {}
});