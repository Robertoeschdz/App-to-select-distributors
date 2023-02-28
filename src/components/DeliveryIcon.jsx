import styles from '../App.module.css'
import deliveryImg from '../assets/delivery.webp'

export default function DeliveryIcon ({ availableDealers }) {
  return (
    <div className='d-flex align-items-center'>
      <div className={styles.deliverimg}>
        <img width='30' src={deliveryImg} alt='Delivery icon' />
      </div>
      <p className='h4 ms-3 text-success'>{availableDealers}/8</p>
    </div>
  )
}
