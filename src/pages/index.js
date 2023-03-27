import React from 'react'
import styled from 'styled-components';
import '../../css/index.css'

const Title = styled.h2`
font-size:  5rem;
color: var(--clr-primary);
font-family: var(--sans)


`
export default () => (
  <div>
    <section  class="hero">
      <p class="name">Hi, my name is <span>Mziyanda Joko.</span></p>
      <Title>Web Developer.</Title>
      <p>I'm a Junior web developer specializing in REACT, FLUTTER & WordPress.</p>
      <p>Currently, I'm looking looking for Work <a href="https://drive.google.com/file/d/13zQrR7VXgGdh6wOHJL3lQ674F-34siV7/view?usp=sharing" target="_blank">Resume</a>.</p>
    </section>
  </div>
)
