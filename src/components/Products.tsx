import notebook from '../assets/notebook.png'
import pens from '../assets/pens.jpg'

import '../styles/payment.css'

const Products = () => {
  return (
    <>
        <div className='payment_product_card'>
            <img className='payment_product_image' src={notebook} />
            <div>
                <h3>Notebook</h3>
                <p>Good quality notebook, perfect for taking notes.</p>
            </div>
        </div>
        <div className='payment_product_card'>
            <img className='payment_product_image' src={pens} />
            <div>
                <h3>Pens</h3>
                <p>Beautiful pen for writing on the notebook above.</p>
            </div>
        </div>
    </>
  )
}

export default Products