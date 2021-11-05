import React from 'react';
import User from "./User";

cons names = ['Ivan', 'Ivano']

const App() {
    return (
    <div>
    <User name="Ivan" />
    <User name="Ivano" />
    <User name="Ivane" />
    <User name="Ivanko" />
    { names.map( name => <User key={name} name={name} /> ) }
    <Box />


    <Product product={products[0]}/>

    <Product product={products[1]}/>

    </div>
   );
}

export default App;