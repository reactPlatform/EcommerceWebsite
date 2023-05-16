import Card from 'react-bootstrap/Card';
import '../assets/cartdisplay.css';
const CartDisplay = ({item}) => {
    
  return (
    <Card style={{ width: '18rem' }} key={item.id} className='cartspacing'>
      <Card.Body className='cartColor'>
        <Card.Title>{item.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Amount: &#8377;{item.price}</Card.Subtitle>
        <Card.Text>
          <button className='bt1'>+</button>
          <button className='bt2'>1</button>
          <button className='bt3'>-</button>
        </Card.Text>
        <button className='bt4'>Remove</button>
        
      </Card.Body>
    </Card>
  );
}

export default CartDisplay;