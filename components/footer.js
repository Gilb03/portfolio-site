const Footer = () => (
    <div id="footer" className="section" style={{'textAlign': 'center'}}>
    <div className="columns">
    <div className="column">
    <a href="https://www.twitter.com/_gilbproducing" target="_blank">
    <img src="/static/twitter.png" alt="" /></a>
    <a href="https://www.linkedin.com/in/gilbertking/" target="_blank">
    <img src="/static/linkedin.png" alt="" /></a>
    </div>
    </div>
      <p>Copyright 2017 &copy; All Rights Reserved by <a href="#">gilbproducing</a></p>
      <style jsx>{`
        #footer {
          background-color: #282828;
          color: white;
          height: 160px;
        }
        .title {
          color: white;
        }
        a {
          color:white;
        }
        columns{
          margin-left: 1rem;
          margin-right: 1rem;
          text-align: center;
        }
        img {
          height: 50px;
          width:  50px;
          padding: 5px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
  
  export default Footer