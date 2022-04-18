
import Label from "./Label"
import './ListItem.css'
function ListItem(props) {
    const {
        title,
        desc,
        isActive,
        onDeleteAction
    } = props;
    console.log(props);
    
  return (
       <div className='list-item'>
            <div className='list-title'><h4>{title}</h4>
            <label onClick={onDeleteAction} >Delete</label>
            </div>
            
            <div className='list-desc'>{desc}</div>
            <div className='list-label'>
              <Label onAction= {() =>{ console.log('hai');}} isActive={isActive} />
            </div>
          </div>
  )
}

export default ListItem
