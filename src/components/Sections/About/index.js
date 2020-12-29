import React from 'react'

import Section from './../../Section'
import Button from './../../Button'

const SectionAbout = () => (
  <Section title='about()' id='about'>
    <p>My name is Denilson, I'm 27 years old and I've been working with web development since 2014, currently I'm a full stack web developer at <a href="https://www.climatempo.com.br" className='-featured-color' title="Site da Climatempo" target="_blank" rel="noreferrer">@Climatempo</a>.</p>
    <p>I'm graduated in Databases at Fatec Cruzeiro and post graduated in system development for web and mobile at Unisal Lorena.</p>
    <p>As a developer, I work with both frontend and backend, but working with frontend is my strong point, I really enjoy bringing layouts to life.</p>
    <p>Since 2018 I help to organize <a href="https://phpvale.github.io" className='-featured-color' title="Site da comunidade PHPVale" target="_blank" rel="noreferrer">@PHPVale</a>, a PHP meetup focused on the Paraíba Valley, in the interior of São Paulo.</p>

    <Button
      href='https://drive.google.com/file/d/1pep0BmLe6V6cuziwkB6-vMeKt0Dm6E9y/view?usp=sharing'
      target='_blank'
      title='Download my Resume'
      className='_margin-t-40'
    />
  </Section>
)

export default SectionAbout