import './directory-item.scss'

const DirectoryItem = ({data}) => {
  const {imageUrl, title} = data
  return (
    <div className='directory-item-container'>
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
