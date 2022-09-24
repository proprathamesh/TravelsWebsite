import React from 'react'
import Form from './Form';
import Services from './Services';
import Working from './Working';
import Attribute from './Attribute';

export default function Home() {
  return (
    <div>
      <Form/>
      <Attribute/>
      <Working/>
      <Services/>
    </div>
  )
}
