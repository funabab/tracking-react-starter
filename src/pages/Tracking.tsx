import Header from '../components/Header'
import style from '../styles/tracking.module.css'

const TRAVEL_HISTORY = [
  {
    status: 'Picked up Hub In',
    name: 'AGRA-UTTAR PRADESH',
    date: 'Dec 02.2020 06:47',
    updatedBy: 'Agra Boy',
    desc: 'Hub In Successed',
  },
  {
    status: 'Picked up',
    name: 'AGRA-UTTAR PRADESH',
    date: 'Nov 18.2020 03:57',
    updatedBy: 'Agra Boy',
  },
  {
    status: 'Proceed for pickup',
    name: 'AGRA-UTTAR PRADESH',
    date: 'Oct 22.2020 08:39',
    updatedBy: 'Agra Boy',
  },
  {
    status: 'Shipping Booked',
    name: 'AGRA-UTTAR PRADESH',
    date: 'May 13.2020 16:37',
    updatedBy: 'Agra Boy',
    desc: 'Shipment Booked',
  },
]

const Tracking: React.FC = () => {
  return (
    <>
      <Header productTitle="AWS" productId="280" />
      <div className={style.container}>
        <div className={style.history}>
          <h2>Travel History</h2>
          <div className="itemsContainer">
            {TRAVEL_HISTORY.map((history, index) => (
              <div className={style.itemsWrapper} key={index}>
                <div className={style.items}>
                  <h3>{history.status}</h3>
                  <ul>
                    <li>
                      {history.name} ({history.date})
                    </li>
                    <li>Updated by {history.updatedBy}</li>
                    {history.desc && <li>{history.desc}</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={style.details}>
          <table>
            <tbody>
              <tr>
                <th>Schedule Delivery</th>
                <th>Latest Location</th>
              </tr>
              <tr>
                <td>May 15.2020, By End of Day</td>
                <td>Picked Up Hub In</td>
              </tr>
            </tbody>
          </table>
          <h2>Additional Information</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Origin:</strong> May 15.2020, By End of Day
                </td>
                <td>
                  <strong>Type:</strong> Picked Up Hub In
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Tracking
