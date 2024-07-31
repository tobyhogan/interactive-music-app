import { useState } from 'react'
import './App.css'

function App() {

    // create web audio api context
  var audioCtx = new(window.AudioContext)();

  function playNote(frequency, duration) {
    // create Oscillator node
    var oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.value = frequency; // value in hertz


    oscillator.connect(audioCtx.destination);
    oscillator.start();


    setTimeout(
      function() {
        oscillator.stop();
        playMelody();
      }, duration);
  }

  function playMelody() {
    if (notes.length > 0) {
      var note = notes.pop();
      playNote(note[0], 1000 * 256 / (note[1] * tempo));
    }
  }

  var notes = [
    [659, 4],
    [659, 4],
    [659, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4],
    [0, 4],
    [987, 4],
    [987, 4],
    [987, 4],
    [1046, 8],
    [0, 16],
    [783, 16],
    [622, 4],
    [523, 8],
    [0, 16],
    [783, 16],
    [659, 4]
  ];

  notes.reverse();
  var tempo = 100;

  playMelody();

  return (
    <>
      <h1 className='text-3xl mx-auto mt-5 px-10 py-4 w-fit'>Flex-System Music Player</h1>

      <h2><b>Scale:</b> Phyrgian Dominant</h2>
      <h2><b>Instrument:</b> Grand Piano</h2>

      <div className='flex flex-row w-fit mx-auto mt-16'>

        <button className='MusicButton1'>I</button>
        <button className='MusicButton1'>II</button>
        <button className='MusicButton1'>III</button>
        <button className='MusicButton1'>IV</button>
        <button className='MusicButton1'>V</button>
        <button className='MusicButton1'>VI</button>
        <button className='MusicButton1'>VII</button>
        <button className='MusicButton1'>IIX</button>
        <button className='MusicButton1'>IX</button>
        <button className='MusicButton1'>X</button>
        <button className='MusicButton1'>XI</button>
        <button className='MusicButton1'>XII</button>



      </div>
    </>
  )
}

export default App
