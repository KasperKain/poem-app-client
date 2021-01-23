import React from 'react';
const AddPoem = () => {
  return (
    <form action=''>
      <div className='Form-Row'>
        <div className='Form-Col'>
          <input type='text' placeholder='title' />
        </div>

        <div className='Form-Col'>
          <input type='text' placeholder='body' />
        </div>

        <div className='Form-Col'>
          <select>
            <option value='mood1'>mood1</option>
            <option value='mood2'>mood2</option>
            <option value='mood3'>mood3</option>
            <option value='mood4'>mood4</option>
          </select>
        </div>

        <button>Add</button>
      </div>
    </form>
  );
};

export default AddPoem;
