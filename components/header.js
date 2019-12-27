import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <div className="header section">
      <img className="logo" src="/static/IMG_6038.jpg" alt="" width="15" height="55"/>
    </div>
    <style jsx>{`
      .logo {
        margin-bottom: 1px;
      }
      .title {
        font-weight: bold;
        color: #282828;
      }
      .header {
        text-align: center;
        background-color: white;
        color: black;
        padding-right: .5rem;
        padding-top: .5rem;
        padding-bottom: .5rem;
      }
      img { 
      height: 350px;
      width:  350px;
      margin-bottom:5px;
      border-radius: 50%;
      }
    `}</style>

  </div>
)

export default Header