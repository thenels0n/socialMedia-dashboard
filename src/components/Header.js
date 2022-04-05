import React from 'react'

const Header = (props) => {
  return (
    <section className='header' style={{backgroundColor:props.bg}}>
      <div className='container'>
        <div className='header-content'>
          <h2 className='' style={{color:props.color}}>Social Media Dashboard</h2>
          <h3>Total Followers: 23,004</h3>
        </div>
        <hr />
        <div className="header-toggle">
        { props.theme ? <h3>Dark mode</h3> : <h3>Light mode</h3>}
          { props.theme ? <button onClick={props.toggleTheme} className='parent-button'>
            <button onDrag={props.toggleTheme}  className='left-button'></button> 
          </button>
          : 
          <button onClick={props.toggleTheme} className='parent-button'>
            <button onDrag={props.toggleTheme} style={{background:props.transparent}} className='left-button'></button> 
            <button onDrag={props.toggleTheme}  style={{background: props.btnBg}} className='right-button'></button>
          </button> }
        </div>
        
      </div>
    </section>
  )
}

export default Header