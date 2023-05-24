import Card from 'react-bootstrap/Card';
import '../assets/cartdisplay.css';
import { useContext , useState} from 'react';
import { CartContext } from './CartContext';
import plusImg from '../assets/images/plus.png';
import minusImg from '../assets/images/minus-button (1).png';
const CartDisplay = ({item}) => {
  
  const [itemQuantity,setItemQuantity] = useState(item.itemCount);
  const { removeFromCart} = useContext(CartContext);
  const {updateItemQuantity , decreaseItemQuantity} = useContext(CartContext);
  const removeCartItem = (removeItem) => {
    removeFromCart(removeItem.id);
  }
  const increaseQuantity = () => {
    if(item.itemCount < 5 ){
      updateItemQuantity(item);
      setItemQuantity(item.itemCount);
    }
    
  }
  const decreaseQuantity = () => {
    if(item.itemCount > 1){
      decreaseItemQuantity(item);
      setItemQuantity(item.itemCount);
    }
  }
    
  return (
    <Card style={{ width: '18rem' }} key={item.id} className='cartspacing'>
      <Card.Body className='cartColor'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Amount: &#8377;{item.price * itemQuantity}</Card.Subtitle>
        <Card.Text className='cartdesign'>
          <img className='plusIcon' src={plusImg} alt='plusImg' onClick={() => increaseQuantity()}/>
          <span className='itemCount'>{itemQuantity}</span>
          <img className='minusIcon' src={minusImg} alt='minusImg' onClick={() => decreaseQuantity()}/>
        </Card.Text>
        <button className='bt4' onClick={() => removeCartItem(item)}>Remove</button>
        
      </Card.Body>
    </Card>
  );
}

export default CartDisplay;