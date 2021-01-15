import IconRightArrow from '../svg/IconRightArrow';
import IconRightArrowBox from '../svg/IconRightArrowBox';

function ProjectOneContent() {
  return (
    <>
      <div className="project-info__heading-container">
        <h3 className="heading-three heading-three--project-info">VGL App</h3>
      </div>
      <div className="project-info__content">
        <div className="project-info__description-container">
          <h4 className="heading-four">Description:</h4>
          <p className="project-info__description">
            Application to get information about new and old video games which
            includes video game trailers and user reviews
          </p>
        </div>
        <div className="project-info__features-container">
          <h4 className="heading-four">Features:</h4>
          <ul className="project-info__features">
            <li>
              <IconRightArrow />
              <span>User authentication</span>
            </li>
            <li>
              <IconRightArrow />
              <span>
                User has the ability to create and update video game reviews
              </span>
            </li>
            <li>
              <IconRightArrow />
              <span>User can search specific video games</span>
            </li>
            <li>
              <IconRightArrow />
              <span>User can update or delete their profile</span>
            </li>
            <li>
              <IconRightArrow />
              <span>User can upload a profile photo</span>
            </li>
            <li>
              <IconRightArrow />
              <span>
                User can get info of physical stores to purchase a video game
                depending on their location
              </span>
            </li>
          </ul>
        </div>
        <div className="project-info__technologies-container">
          <ul className="project-info__technologies">
            <li>Javascript</li>
            <li>React</li>
            <li>React-Router</li>
            <li>Redux</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="project-info__examples-container">
          <div className="project-info__example-links">
            <div className="project-info__example-link-container">
              <IconRightArrowBox />
              <a
                href="https://www.vgl-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__example-link"
              >
                Demo
              </a>
            </div>
            <div className="project-info__example-link-container">
              <IconRightArrowBox />
              <a
                href="https://github.com/shallado/Video-Game-Logic-App"
                target="_blank"
                rel="noopener noreferrer"
                className="project-info__example-link"
              >
                Code
              </a>
            </div>
          </div>
          <div className="project-info__example-video-container">
            Video Walk Through of Application
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOneContent;
