import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'


import { Container } from "./styles";

export function Summary() {

  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>1000R$</strong>
      </div>

      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>-500R$</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total"/>
        </header>
        <strong>500R$</strong>
      </div>
    </Container>
  )
}