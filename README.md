# lesson4: "Forms";

## Task 1. Добавление данных о продуктах в стейт классового компонента `Main`.

- произведите рефакторинг стейта компонента `Main` так, чтобы данные, которые находятся в импортруемом объекте data, попали в стейт.

```javascript
state = { cart: [], ...data };
```

- передавайте компонентам `PhoneList` и `LaptopList` данные из стейта.
- проверьте работоспособность кода.

## Task 2. Создание формы объявления.

- Создайте в папке Components папку `admin`, а в ней классовый компонент `AdvForm`.
- В компоненте AdvForm создайте стейт со свойствами, которые будут необходимы для создания нового объявления. Например такими:

```javascript
state = {
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
};
```

- создайте разметку, которая будет включать в себя: - тег `<form></form>` - внутри тега form будут находится теги `<label>` и `<input>`. Создайте их столько, сколько данных Вы планируете добавлять в объявление.

```javascript
  <label className="advFormLabel">
  <input type="text" className="advFormInput" />
```

`</label>` - для каждого input добавьте атрибуты name и value. Значение name должно быть идентичным свойству, которое записано в стейте. А значение `value` будет самим этим значением. Вы получите примерно такую разметку:

```javascript
<form>
  <label className='advFormLabel'>
    Название продукта
    <input
      type='text'
      name='name'
      value={this.state.name}
      className='advFormInput'
    />
  </label>
  <label className='advFormLabel'>
    Изображение
    <input
      type='text'
      name='image'
      value={this.state.image}
      className='advFormInput'
    />
  </label>
  <label className='advFormLabel'>
    Описание
    <input
      type='text'
      name='description'
      value={this.state.description}
      className='advFormInput'
    />
  </label>
  <label className='advFormLabel'>
    Цена
    <input
      type='text'
      name='price'
      value={this.state.price}
      className='advFormInput'
    />
  </label>
</form>
```

- Для свойства `isSale` нужно создать

```javascript
<input type='checkbox'/>
<label className='advFormLabel'>
  Учавствует в распродаже
    <input
        type='checkbox'
        name='isSale'
        checked={this.state.isSale}
        className='advFormCheckBox'
        onChange={this.onHandleChange}
    />
</label>
```

- В компоненте `Main` добавьте компонент `AdvForm` в разметку. Проверьте, что все отображается корректно.
- Создайте метод, который по событию onChange на элементе input будет изменять стейт. Предусмотрите то, что для разных типов input стейт будет изменяться по разному. Используйте вычисляемые свойства объекта.
- Добавьте в форму кнопку

```javascript
<button type='submit'>Добавить продукт</button>
```

, а на саму форму метод, которые будет отрабатывать при `submit`.

- Выведите в консоль браузера получаемый результат в виде объекта.

## Task 3. Добавление объявления в стейт компонента Main.

- В компоненте `AdvForm` создайте массив с двумя элементами, которые соответствуют категории товара, находящимся в стейте компонента `Main`. Например так:

```javascript
const productCategories = ["laptops", "phones"];
```

- Добавьте в стейт компонента свойство category, со значением первого элемента созданного Вами массива.

```javascript
state = {
  category: productCategories[0],
  name: "",
  image: "",
  description: "",
  price: 0,
  isSale: false,
};
```

- Добавьте в форму элемент `select` c элементами option, которые будут формироваться исходя из данных, находящихся в массиве. Добавьте необходимые аттрибуты и метод, который будет срабатывать по событию `onChange`.

```javascript
<label className='advFormLabel'>
  Категория
  <select
    value={this.state.category}
    name='category'
    onChange={this.onHandleChange}>
    {productCategories.map((category) => (
      <option value={category} key={category}>
        {category}
      </option>
    ))}
  </select>
</label>
```

- Проверьте работоспособность Ващего кода.
- В компоненте Main создайте метод добавления продукта, который будет в параметрах содержать название категории и добавляемый продукт. При вызове метода, в стейте будет изменться результирующий массив только выбранной категории. Использовать нужно вычисляемые свойства объекта.

```javascript
addNewAdv = (category, product) => {
  this.setState((prevState) => ({
    [category]: [...prevState[category], product],
  }));
};
```

- Передайте в компонент `AdvForm` созданный метод.
- В компоненте `AdvForm`, в методе, который срабатывает по событию onSubmit, вызывайте полученный в пропах метод и передайте те данные, которые необходимы. Используйте деструктуризацию стейта, чтобы код был чище и понятнее. В данной реализации необходимо также предусмотреть добавление уникального `id` продукта. Используйте библиотеку `uuid`. Значение цены тоже необходимо передавать как число.

```javascript
onHandleSubmit = (e) => {
  e.preventDefault();
  const { category, name, image, description, price, isSale } = this.state;
  this.props.addNewAdv(category, {
    name,
    image,
    description,
    price: Number(price),
    isSale,
    id: uuidv4(),
  });
};
```

- Очистите поля ввода в форме после добавления продукта
- Проверьте работоспособность кода.
