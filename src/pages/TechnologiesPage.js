import IconCss from '../svg/IconCss';
import IconHtml from '../svg/IconHtml';
import IconJavascript from '../svg/IconJavascript';
import IconMongoDb from '../svg/IconMongoDb';
import IconMySql from '../svg/IconMySql';
import IconNodejs from '../svg/IconNodejs';
import IconReact from '../svg/IconReact';
import IconRedux from '../svg/IconRedux';
import IconSass from '../svg/IconSass';
import IconExpress from '../svg/IconExpress';

function TechnologiesPage() {
  return (
    <div className="technologies">
      <h2 className="heading-two">Technologies</h2>
      <div className="technologies__main-container">
        <div className="technologies__container-one">
          <div className="technologies__icon-container">
            <h3 className="heading-three">React</h3>
            <div>
              <IconReact />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">Nodejs</h3>
            <div>
              <IconNodejs />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">Sass</h3>
            <div>
              <IconSass />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">Express</h3>
            <div>
              <IconExpress />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">Javascript</h3>
            <div>
              <IconJavascript />
            </div>
          </div>
        </div>
        <div className="technologies__container-two">
          <div className="technologies__icon-container">
            <h3 className="heading-three">HTML</h3>
            <div>
              <IconHtml />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">CSS</h3>
            <div>
              <IconCss />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">Redux</h3>
            <div>
              <IconRedux />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">MongoDB</h3>
            <div>
              <IconMongoDb />
            </div>
          </div>
          <div className="technologies__icon-container">
            <h3 className="heading-three">MySql</h3>
            <div>
              <IconMySql />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologiesPage;
