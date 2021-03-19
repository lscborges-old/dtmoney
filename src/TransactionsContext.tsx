import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

export const TransactionContext = createContext<Transaction[]>([]);

interface Transaction {
  id:number,
  title:string,
  type: string,
  category: string,
  amount: number,
  createdAt: string
}

interface TransactionProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({children}:TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => {
      setTransactions(response.data.transactions)
    })

  },[setTransactions])

  return(
  <TransactionContext.Provider value={transactions}>
    {children}
  </TransactionContext.Provider>)
}