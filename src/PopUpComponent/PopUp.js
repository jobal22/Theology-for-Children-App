import React from "react";
import Images from '../ImagesComponent/Images';
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
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{servant.word}</h2>
      <hr></hr>
      <p className='content'>{servant.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const apostleContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{apostle.word}</h2>
      <hr></hr>
      <p className='content'>{apostle.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const faithContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{faith.word}</h2>
      <hr></hr>
      <p className='content'>{faith.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const truthContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{truth.word}</h2>
      <hr></hr>
      <p className='content1'>{truth.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const eternalLifeContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{eternal.word}</h2>
      <hr></hr>
      <p className='content'>{eternal.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const preachingContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{preaching.word}</h2>
      <hr></hr>
      <p className='content'>{preaching.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const saviorContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{savior.word}</h2>
      <hr></hr>
      <p className='content'>{savior.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const eldersContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{elders.word}</h2>
      <hr></hr>
      <p className='content'>{elders.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const reproachContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{reproach.word}</h2>
      <hr></hr>
      <p className='content'>{reproach.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const oneWifeContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{one.word}</h2>
      <hr></hr>
      <p className='content'>{one.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const arrogantContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{arrogant.word}</h2>
      <hr></hr>
      <p className='content'>{arrogant.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const quickTemperedContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{quick.word}</h2>
      <hr></hr>
      <p className='content'>{quick.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const selfControlledContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{self.word}</h2>
      <hr></hr>
      <p className='content'>{self.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const soundDoctrineContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{sound.word}</h2>
      <hr></hr>
      <p className='content'>{sound.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const insubordinateContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header1'>{insubordinate.word}</h2>
      <hr></hr>
      <p className='content'>{insubordinate.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const emptyTalkersContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{empty.word}</h2>
      <hr></hr>
      <p className='content'>{empty.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const deceiversContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{deceivers.word}</h2>
      <hr></hr>
      <p className='content'>{deceivers.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const shamefulGainContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{shameful.word}</h2>
      <hr></hr>
      <p className='content'>{shameful.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const gluttonsContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{gluttons.word}</h2>
      <hr></hr>
      <p className='content'>{gluttons.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const pureContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{pure.word}</h2>
      <hr></hr>
      <p className='content'>{pure.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const disobedientContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{disobedient.word}</h2>
      <hr></hr>
      <p className='content'>{disobedient.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)

export const quarrelsContent =
  close => (
    <div className='modal'>
      <Images />
      <h2 className='header'>{quarrels.word}</h2>
      <hr></hr>
      <p className='content'>{quarrels.content}</p>
      <button
        className="button"
        onClick={() => {
          console.log("modal closed ");
          close();
        }}
      >
        close modal
      </button>
    </div>)