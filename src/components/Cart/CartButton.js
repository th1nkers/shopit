import classes from './CartButton.module.css';
import {uiActions} from '../../store/ui-slice'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const CartButton = (props) => {


  const dispatch = useDispatch()

  const totalQuantity = useSelector(state=> state.cart.totalQuantity)

const toogleHandler = () =>{
  dispatch(uiActions.toggle());
}

  return (
    <button className={classes.button} onClick={toogleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
