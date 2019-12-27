const CurrentProjects = () => (
  <div>
  <div id="current-projects" className="section" class="center" style={{'textAlign': 'center'}}>
    <h1 className="title is-2">Current Projects</h1>
    </div>
    <div className="row">
    <div className="columns">
     <div className="column">
     <img href="https://podcasts.apple.com/us/podcast/shoot-your-shot-pod/id1333642650"src="/static/syspod.png" alt="" target="_blank"></img>
        <h3 className="title is-3">Shoot Your Shot Podcast</h3>
        <p>A podcast designed to delve deeper into dating, relationship & gender issues for the millennial in the 21st century.</p>
     </div>
     <div className="column">
      <img src="/static/wfw.png" alt="" target="_blank"></img>
        <h3 className="title is-3">Workflow Wednesday</h3>
        <p>Connect with other ambitious individuals in a variety of different fields. 
          Gain access to other perspectives and brainstorm for your passion projects. 
          We are a networking program dedicated to increasing job placement
          in technology.  </p>
      </div>
      <div className="column">
      <img src="/static/taron-const.jpg" alt="" target="_blank"></img>
        <h3 className="title is-3">Foxworth Consulting</h3>
        <p>Creating IoT solutions for businesses. Transforming the landscape of technology by investing in
          people's education.  
        </p>
      </div>
      <div className="column">
      <img src="/static/triibe.png" alt="" target="_blank"></img>
        <h3 className="title is-3">The Triibe</h3>
        <p>A digital media platform showcasing innovative content to reshape the narrative of Black Chicago. 
          Our original works in journalism and documentary, alongside cretive writing and video, capture the 
          multifaceted essense of our communities. We aim to create a safer more vibrant Chicago. 
        </p>
      </div>
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
   

      }

      h1{
        border-radius: 5px;
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