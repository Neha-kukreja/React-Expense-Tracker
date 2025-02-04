import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  margin: 30px 0 10px;
  align-items: center;
  width: 360px;
`;
const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (playload) => {
    const transactionArray = [...transactions];
    transactionArray.push(playload);
    updateTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((playload) => {
      playload.type === "EXPENSE"
        ? (exp = exp+playload.amount)
        : (inc = inc+playload.amount);
    });
    updateExpense(exp);
    updateIncome(inc);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <Container>
      <OverviewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};
export default HomeComponent;
