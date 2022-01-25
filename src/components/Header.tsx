import style from '../styles/header.module.css'

interface Props {
  productTitle: string
  productId: string
}

const Header: React.FC<Props> = ({ productTitle, productId }) => {
  return (
    <div className={style.container}>
      <div className={style.col}>
        <h1>
          Tracking Result for {productTitle} # {productId}
        </h1>
        <div className={style.statusContainer}>
          Current Status: <button>Picked Up</button>
        </div>
      </div>
      <progress value="50" max="100"></progress>
    </div>
  )
}

export default Header
