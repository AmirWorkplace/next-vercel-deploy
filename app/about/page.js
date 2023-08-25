import React from 'react' 
 import Link from 'next/link'

export const About = () => { 
  return ( 
    <div> 
      <p>Hi About </p> 
      <Link href="/">Home</Link>
        <br/>
      <Link href="/about">about</Link>
        <br/>
      <Link href="/contact">contact</Link>
    </div> 
  ) 
} 
  
export default About