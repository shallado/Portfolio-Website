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
      <div>
        <h3 className="heading-three">React</h3>
        <IconReact />
      </div>
      <div>
        <h3 className="heading-three">Nodejs</h3>
        <IconNodejs />
      </div>
      <div>
        <h3 className="heading-three">Sass</h3>
        <IconSass />
      </div>
      <div>
        <h3 className="heading-three">Express</h3>
        <IconExpress />
      </div>
      <div>
        <h3 className="heading-three">Javascript</h3>
        <IconJavascript />
      </div>
      <div>
        <h3 className="heading-three">HTML</h3>
        <IconHtml />
      </div>
      <div>
        <h3 className="heading-three">CSS</h3>
        <IconCss />
      </div>
      <div>
        <h3 className="heading-three">Redux</h3>
        <IconRedux />
      </div>
      <div>
        <h3 className="heading-three">MongoDB</h3>
        <IconMongoDb />
      </div>
      <div>
        <h3 className="heading-three">MySql</h3>
        <IconMySql />
      </div>
    </div>
  );
}

export default TechnologiesPage;
