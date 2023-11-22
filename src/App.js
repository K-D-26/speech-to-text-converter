import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from 'react';

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setIsCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div>
      <div className='container'>
        <h2>Speech to Text Converter</h2>
        <br/>
        <p>This web app helps by converting your speech to text making it available for your use directly. This functionality is achieved with the help of react hook.</p>

        <div className='main-content' onClick={() => setTextToCopy(transcript)}>
          {transcript}
        </div>

        <div className='btn-style'>
          <button onClick={setIsCopied}>
            {isCopied ? 'Copied!' : 'Copy to clipboard'}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </div>
  );
}

export default App;
