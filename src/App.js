import './scss/app.scss'
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div class="wrapper">
      <Header/>
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories/> 
          <Sort/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
          <PizzaBlock title='Mexican' price='500'/>
          <PizzaBlock title='France' price='330'/>
          <PizzaBlock title='Italiano' price='450'/>
          <PizzaBlock title='Ukrainian' price='470'/>
          <PizzaBlock title='Poland' price='550'/>
          <PizzaBlock title='Canada' price='340'/>
          <PizzaBlock title='LosAngeles' price='600'/>
          <PizzaBlock title='London' price='430'/>
          <PizzaBlock title='Amsterdam' price='460'/>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
