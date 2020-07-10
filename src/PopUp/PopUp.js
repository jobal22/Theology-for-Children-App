import React, { Component } from "react";
import baby from '../Img/boohoobaby.png';
import COMPLEX from '../complex'
import './PopUp.css';
import {zero, first, second, third, four, fifth, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone } from '../helpers'


const complex = COMPLEX
const words = complex.content
const servant = zero(words)
const apostle = first(words)
const faith = second(words)
const truth = third(words)
const eternal = four(words)
const preaching = fifth(words)
const savior = six(words)
const elders = seven(words)
const reproach = eight(words)
const one = nine(words)
const arrogant = ten(words)
const quick = eleven(words)
const self = twelve(words)
const sound = thirteen(words)
const insubordinate = fourteen(words)
const empty = fifteen(words)
const deceivers = sixteen(words)
const shameful = seventeen(words)
const gluttons = eighteen(words)
const pure = nineteen(words)
const disobedient = twenty(words)
const quarrels = twentyone(words)

export const servantContent =
  <div>
    <h2>{servant.word}</h2>
    <p>{servant.content}</p>
  </div>

export const apostleContent =
  <div>
    <h2>{apostle.word}</h2>
    <p>{apostle.content}</p>
  </div>

export const faithContent =
  <div>
    <h2>{faith.word}</h2>
    <p>{faith.content}</p>
  </div>

export const truthContent =
  <div>
    <h2>{truth.word}</h2>
    <p>{truth.content}</p>
  </div>
export const eternalLifeContent =
<div>
  <h2>{eternal.word}</h2>
  <p>{eternal.content}</p>
</div>
export const preachingContent =
<div>
  <h2>{preaching.word}</h2>
  <p>{preaching.content}</p>
</div>
export const saviorContent =
<div>
  <h2>{savior.word}</h2>
  <p>{savior.content}</p>
</div>
export const eldersContent =
<div>
  <h2>{elders.word}</h2>
  <p>{elders.content}</p>
</div>
export const reproachContent =
<div>
  <h2>{reproach.word}</h2>
  <p>{reproach.content}</p>
</div>
export const oneWifeContent =
<div>
  <h2>{one.word}</h2>
  <p>{one.content}</p>
</div>
export const arrogantContent =
<div>
  <h2>{arrogant.word}</h2>
  <p>{arrogant.content}</p>
</div>
export const quickTemperedContent =
<div>
  <h2>{quick.word}</h2>
  <p>{quick.content}</p>
</div>

export const selfControlledContent =
<div>
  <h2>{self.word}</h2>
  <p>{self.content}</p>
</div>
export const soundDoctrineContent =
<div>
  <h2>{sound.word}</h2>
  <p>{sound.content}</p>
</div>
export const insubordinateContent =
<div>
  <h2>{insubordinate.word}</h2>
  <p>{insubordinate.content}</p>
</div>
export const emptyTalkersContent =
<div>
  <h2>{empty.word}</h2>
  <p>{empty.content}</p>
</div>
export const deceiversContent =
<div>
  <h2>{deceivers.word}</h2>
  <p>{deceivers.content}</p>
</div>
export const shamefulGainContent =
<div>
  <h2>{shameful.word}</h2>
  <p>{shameful.content}</p>
</div>
export const gluttonsContent =
<div>
  <h2>{gluttons.word}</h2>
  <p>{gluttons.content}</p>
</div>
export const pureContent =
<div>
  <h2>{pure.word}</h2>
  <p>{pure.content}</p>
</div>
export const disobedientContent =
<div>
  <h2>{disobedient.word}</h2>
  <p>{disobedient.content}</p>
</div>
export const quarrelsContent =
<div>
  <h2>{quarrels.word}</h2>
  <img className='baby' id='baby' src={baby} alt='baby'/>
  <p>{quarrels.content}</p>
</div>



// export default class JumpPop extends Component {

//   render() {
//     return (
//       <div>
//         <div >
//           <h2>Information</h2>
//           <img className='baby' id='baby' src={baby} alt='baby'/>
//           <p>Here is some information about what you clicked on!</p>
//         </div>
//       </div>

//     );
//   }
// }
