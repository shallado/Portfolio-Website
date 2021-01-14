import IconGitHub from '../svg/IconGitHub';
import IconLinkedIn from '../svg/IconLinkedIn';
import IconTwitter from '../svg/IconTwitter';

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://twitter.com/SHallado1012"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconTwitter />
      </a>
      <a
        href="https://github.com/shallado"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconGitHub />
      </a>
      <a
        href="https://www.linkedin.com/in/sandrohallado/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconLinkedIn />
      </a>
    </div>
  );
}

export default SocialLinks;
