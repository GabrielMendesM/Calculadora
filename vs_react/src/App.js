import logo from './logo.svg';
import './App.css';
import Teste from './componentes/Testes';
import Botão from './componentes/Botão';

function App() {
  return (
    <>
      <header>
        <h1>CALCULADORA</h1>
      </header>
      <section>
        <div className="res">
          <p>0</p>
        </div>
        <div className="conta-atual">
          <p></p></div>
        <div className="botões">
          <div className="btns-limpar">
            <Botão texto="CE"/>
            <Botão texto="C"/>
          </div>
          <div className="btns-num">
            <Botão texto="1"/>
            <Botão texto="2"/>
            <Botão texto="3"/>
            <Botão texto="4"/>
            <Botão texto="5"/>
            <Botão texto="6"/>
            <Botão texto="7"/>
            <Botão texto="8"/>
            <Botão texto="9"/>
            <Botão texto="0"/>
            <Botão texto=","/>
          </div>
          <div className="btns-oper">
            <Botão texto="+"/>
            <Botão texto="-"/>
            <Botão texto="*"/>
            <Botão texto="/"/>
            <Botão texto="="/>
          </div>
        </div>
      </section>
    </>  
  );
}

export default App;
