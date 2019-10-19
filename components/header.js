import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <div className="header section">
      <img className="logo" src="/static/gilb3.jpg" alt="" width="422" height="490"/>
    </div>
    <style jsx>{`
      .logo {
        margin-bottom: 15px;
      }
      .title {
        font-weight: bold;
        color: #282828;
      }
      .header {
        text-align: center;
        background-color: white;
        color: black;
      }
      img { 
        height: 550px;
      width:  450px;
      margin-bottom:10px;
      border-radius: 50%;
      }
    `}</style>

  </div>
)

export default Header