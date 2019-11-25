const CurrentProjects = () => (
  <div>
    {/* Turn the current project section into a slideshow and then be done */}
  <div id="current-projects" className="section" class="center" style={{'textAlign': 'center'}}>
    <h1 className="title is-2">Current Projects</h1>
    </div>
    <div className="columns">
     <div className="column">
     <img src="/static/syspod.png" alt="" target="_blank"></img>
        <h3 className="title is-3">Shoot Your Shot Podcast</h3>
        <p>Hey, we’re all here to grow our networks, relax, vibe and get productive. We will be having weekly discussions centered around growing comfortability 
          in expressing our ideas and becoming tighter knit in the process. Plain and simple! </p>
     </div>
      <div className="column">
      <img src="/static/gilbproducing.jpg" alt="" target="_blank"></img>
        <h3 className="title is-3">Foxworth Consulting</h3>
        <p>There is no commitment necessary. Everybody is dealing with enough priority overload already. We should flow, and that’s just how it goes. Fox 
          will eventually tell thew world what he wants to do and when that's decided it will be here. 
        </p>
      </div>
    </div>
    <style jsx>{`
      #current-projects {
        text-align: center;
        background-color: white;
        padding-top: 0.5rem;
      }
      img {
        height: 250px;
        width:  250px;
        margin-bottom:10px;
        margin-left: 175px;
        border-radius: 50%;

      }
      .elevator {
        text-align: center;
      }
      .columns {
        padding: 30px;
      }
      .title {
        font-weight: bold;
        text-align: center;
      }
      .p {
        text-align: center;

      }
    `}</style>
</div>    
)
export default CurrentProjects