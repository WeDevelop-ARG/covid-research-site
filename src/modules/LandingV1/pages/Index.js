import React from 'react'
import classnames from 'classnames'

import Button from '~/src/modules/MainApp/components/Button'

import WeDevelopLogo from '~/src/assets/wedevelop_logo_white.svg'
import PurplePin from '~/src/assets/purple_pin.svg'
import OurTeam from '~/src/assets/our_team.jpg'

import AlbertoArias from '../assets/alberto_arias.jpeg'

import classes from './styles.module.scss'

function Index () {
  return (
    <div className={classes.landingV1}>
      <header>
        <a href='https://wedevelop.me' target='_blank' rel='noreferrer'>
          <img src={WeDevelopLogo} alt='WeDevelop logo' className={classes.logo} />
        </a>
        <nav>
          <ul>
            <li>
              <a href='#'>Our research</a>
            </li>
            <li>
              <a href='#'>About us</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <section className={classes.cover}>
          <h1>The world has changed, so have businesses</h1>
          <p>How have companies been doing during the pandemic times? What differentiates a company that found success on COVID-19 times and a company that failed?</p>
          <Button as='a' href='#' className={classes.cta}>I'd like to participate</Button>
        </section>
        <section className={classes.ourResearch}>
          <h2>Our research</h2>
          <h3>Have you asked yourself any of the above questions?</h3>
          <p>We have. And we decided to go outside (not literally, doh) and <strong>talk to real people</strong> to understand this a little more.</p>
          <p>We've been doing this for a while now (since October 2020, to be exact), and <strong>we've gotten many data that we'll share</strong> as soon as we conclude with this research period.</p>
        </section>
        <section className={classes.quotes}>
          <figure>
            <div className={classes.profileImage}>
              <img src={AlbertoArias} alt='Profile image of Alberto Arias' title='Alberto Arias' />
            </div>
            <div className={classes.description}>
              <blockquote>
                Technology must have a soul not only a goal, I saw all my work accelerate. Everything I planned for three or four years goals, happend in one year.
              </blockquote>
              <figcaption>
                <cite className={classes.author}>Alberto Arias</cite>
                Director Global Head HX/CX Transformation at <strong>Dell</strong>
              </figcaption>
            </div>
          </figure>
        </section>
        <section className={classes.joinResearch}>
          <h2>Want to join the research?</h2>
          <p>Cool. Join us in a 20-minute interview and get access to exclusive data coming out from this research.</p>
          <Button as='a' variant='bright-green' href='#' className={classes.cta}>
            I'd like to participate
          </Button>
        </section>
      </article>
      <footer>
        <h2 className={classes.titleMobileUp}>About us</h2>
        <figure>
          <img src={PurplePin} alt='' role='presentation' className={classes.purplePin} />
          <img src={OurTeam} alt='Our team' className={classes.image} />
          <figcaption>
            Tandil, Buenos Aires, Argentina
          </figcaption>
        </figure>
        <div>
          <h2 className={classes.titleDesktopUp}>About us</h2>
          <h3>We are WeDevelop</h3>
          <p>An Argentina-based company that makes Custom Software Development for businesses around the globe.</p>
          <p>Argentinians are known for being warm and people-people. We are not the exception. We love talking and: listening.</p>
          <address>
            <a href='https://wedevelop.me' target='_blank' rel='noreferrer' title='Learn more about WeDevelop'>
              Learn more
              <i className={classnames('far', 'fa-arrow-right', classes.arrow)} alt='' role='presentation' />
            </a>
          </address>
        </div>
      </footer>
    </div>
  )
}

export default Index
