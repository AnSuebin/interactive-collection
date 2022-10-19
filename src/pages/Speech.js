import { useState, useEffect } from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import styled from './Speech.module.css';

const Speech = () => {
  const [value, setValue] = useState('');
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div className={styled.container}>
      <h1>아래 버튼 클릭</h1>
      <button onMouseDown={listen} onMouseUp={stop} className={styled.button}>
        🎤
      </button>
      <div className={styled.writing}>{value}</div>
      {listening && <div className={styled.comment}>음성인식 활성화중</div>}
    </div>
  );
};

export default Speech;
