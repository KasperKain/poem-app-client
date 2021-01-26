import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPoem, getPoem, updatePoem } from '../../api/poemFinder';
import { createStyle } from '../../api/styleFinder';
const AddPoem = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mood, setMood] = useState('Select Mood');
  const [temperature, setTemperature] = useState('Select Temperature');
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const poem = await getPoem(id);
          if (!poem.data) {
            history.push('/');
          } else {
            setTitle(poem.data.title);
            setBody(poem.data.body);
          }
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!id) {
        const style = await createStyle({
          head_style: mood,
          body_style: temperature,
        });

        console.log(style.data);
        const poem = await createPoem({ title, body, style: style.data.id });

        console.log(poem.data);
      } else {
        await updatePoem(id, { title, body });
      }
      history.push('/poems');
    } catch (err) {
      console.error(err);
    }
  };

  // UI COMPONENT
  return (
    <form onSubmit={handleSubmit}>
      <div className='Form-Row'>
        <div className='Form-Col'>
          <input
            type='text'
            value={title}
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='Form-Col'>
          <input
            type='text'
            value={body}
            placeholder='body'
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>

        <div className='Form-Col'>
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
            <option disabled value={mood}>
              Select Mood
            </option>
            <option value='mood_joy'>Joy</option>
            <option value='mood_peace'>Peace</option>
            <option value='mood_sorrow'>Anger</option>
            <option value='mood_anger'>Sorrow</option>
            <option value='mood_fear'>Fear</option>
          </select>

          <select
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            required
          >
            <option disabled value={temperature}>
              Select Temperature
            </option>
            <option value='temp_cold'>Cold</option>
            <option value='temp_cool'>Cool</option>
            <option value='temp_warm'>Warm</option>
            <option value='temp_hot'>Hot</option>
          </select>
        </div>

        <button type='submit'>{!id ? 'Create' : 'Edit'}</button>
      </div>
    </form>
  );
};

export default AddPoem;
