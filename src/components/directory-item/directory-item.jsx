import './directory-item.scss'
import {useNavigate} from "react-router-dom";

const DirectoryItem = ({data}) => {
  const {imageUrl, title, route} = data
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route)

  return (
    <div className='directory-item-container' onClick={onNavigateHandler}>
      <div className='background-image' style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className='directory-item-body'>
        <h2>{title}</h2>
        <p>Show Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem
