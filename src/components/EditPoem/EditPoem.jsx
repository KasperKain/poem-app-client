import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getPoem, updatePoem } from '../../api/poemFinder';
import { getStyle, updateStyle } from '../../api/styleFinder';
import ValidationMessage from '../ValidationMessage/ValidationMessage';

import '../AddPoem/AddPoem.css';
const EditPoem = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mood, setMood] = useState('');
  const [temperature, setTemperature] = useState('');
  const [message, setMessage] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const poem = await getPoem(id);
      const style = await getStyle(poem.data.style);
      setTitle(poem.data.title);
      setBody(poem.data.body);
      setMood(style.data.head_style);
      setTemperature(style.data.body_style);
    };

    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let errMessage = '';
      if (title.length < 3 || title.length > 50) {
        errMessage = 'Title must be between 3 and 50 characters';
      } else if (body.length < 3) {
        errMessage = 'Poem Content must be atleast 3 characters';
      } else if (mood.length < 1 || temperature.length < 1) {
        console.log(mood.length);
        errMessage = 'Please select Mood and Temerature';
      } else {
        errMessage = '';
      }

      if (errMessage.length > 1) {
        setMessage(errMessage);
      } else {
        const poem = await getPoem(id);
        const style = await updateStyle(poem.data.style, {
          head_style: mood,
          body_style: temperature,
        });
        await updatePoem(poem.data.id, {
          title,
          body,
          style: style.id,
        });
        history.push('/poems');
      }
    } catch (err) {
      console.error(err);
    }
  };

  // UI COMPONENT
  return (
    <form className='EditPoem AddPoem' onSubmit={handleSubmit}>
      <div className='Form-Body'>
        <ValidationMessage message={message} />
        <label htmlFor='body'>POEM</label>
        <textarea
          name='body'
          id='body'
          type='text'
          value={body}
          placeholder='body'
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <div className='Form-Options'>
        <div className='Form-Control'>
          <label htmlFor='title'>Title</label>
          <input
            name='title'
            id='title'
            type='text'
            value={title}
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className='Form-Control'>
          <label htmlFor='mood'>Mood</label>
          <select
            name='mood'
            id='mood'
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option>Select Mood</option>
            <option value='mood_joy'>Joy</option>
            <option value='mood_peace'>Peace</option>
            <option value='mood_sorrow'>Sorrow</option>
            <option value='mood_anger'>Anger</option>
            <option value='mood_fear'>Fear</option>
          </select>
        </div>
        <div className='Form-Control'>
          <label htmlFor='temp'>Temperature</label>
          <select
            name='temp'
            id='temp'
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
          >
            <option>Select Temperature</option>
            <option value='temp_cold'>Cold</option>
            <option value='temp_cool'>Cool</option>
            <option value='temp_warm'>Warm</option>
            <option value='temp_hot'>Hot</option>
          </select>
        </div>
        <button type='submit'>SUBMIT</button>
      </div>
    </form>
  );
};

export default EditPoem;
