import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Howdy! I am <span className='about_name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about_role'>A {role}.</h2>}

      <img
        className='headshot-img'
        src='/headshot.jpg'
        alt='Sterly Deracy in a blue suit with an off-white shirt and blue and yellow tie!'
      />

      <p className='about_desc'>{description && description}</p>

      <div className='about_contact center'>
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <span type='button' className='btn btn--outline'>
            Resume
          </span>
        </a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
