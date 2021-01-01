import React,{useContext} from 'react'
import { GlobalContext } from './../context/GlobalState';
import {transactionType} from '../context/GlobalState';

const TransactionItem =({trans}:{trans:transactionType})=>{
    const {deleteTransaction}=useContext(GlobalContext);
    const sign = trans.amount < 0 ? '-' : '+';
    return(
        <li className={trans.amount < 0 ? 'minus' : 'plus'}>
      {trans.text}
      <span>
        {sign}${Math.abs(trans.amount)}
      </span>

      <button onClick={() => deleteTransaction(trans.id)} className="delete-btn">x</button>
    </li>
    )

}

export default TransactionItem;