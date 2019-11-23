const Socials = () => (
    <div className="section" id="socials" style={{ 'backgroundColor': 'white', 'textAlign': 'center'}}>
      <h2 className="title is-2">You Should Follow Us!</h2>
      <div className="columns">
        <div className="column">
          <a href="https://www.linkedin.com/in/gilbertking/" target="_blank"><img src="/static/linkedin.png" alt="" /></a> 
          <p className="title is-5">Linkedin</p>
        </div>
        <div className="column">
          <a href="https://twitter.com/_gilbproducing" target="_blank"><img src="/static/twitter.png" alt="" /></a> 
          <p className="title is-5">Twitter</p>
        </div>
      </div>
      <style jsx>{`
        .elevator {
          text-align: center;
        }
        .title {
          font-weight: bold;
        }
        img {
          height: 120px;
          width:  120px;
          margin-bottom:10px;
          border-radius: 50%;
        }
      `}</style>
    </div>)
  
  export default Socials