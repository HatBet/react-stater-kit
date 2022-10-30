import React, { useEffect, useMemo, useState } from 'react';

function FormUsing() {
  const genders = ['kadın', 'erkek'];
  const [name, setName] = useState('btl');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState(0);
  const [rule, setRule] = useState(false);
  const [rules, setRules] = useState([
    { key: 1, value: '1.kural k.e.', checked: false },
    { key: 2, value: '2.kural k.e.', checked: false },
    { key: 3, value: '3.kural k.e.', checked: false },
    { key: 4, value: '4.kural k.e.', checked: false },

  ]);
  const [avatar, setAvatar] = useState(false);
  const [image, setImage] = useState('');

  useEffect(() => {
    if (avatar) {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', function () {
        setImage(this.result) //base64 formatı
      })
      fileReader.readAsDataURL(avatar)
    }
  }, [avatar]);

  const checkRule = (key, checked) => {
    setRules(rules => rules.map(rule => {
      if (key === rule.key) {
        rule.checked = checked;
      }
      return rule
    }))
  }

  const selectedGender = useMemo(() => {
    return genders[gender];
  }, [gender])

  const submitHandle = () => {
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('name', name);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData
    })
  }

  const enabled = rules.every(rule => rule.checked) && avatar


  return (
    <>
      <button onClick={() => setName('ahmet')}> Adı değiştir</button>
      <input type={"text"} defaultValue={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <textarea value={description} onChange={e => setDescription(e.target.value)} />
      <br />
      <select value={gender} onChange={e => setGender(e.target.value)}>
        {genders.map((obj, index) =>
          <option value={index} key={index}>
            {obj}
          </option>
        )}
      </select>
      {selectedGender}

      <br />

      <pre>{JSON.stringify(selectedGender)}</pre>

      <label>
        <input type={"checkbox"} checked={rule} onChange={e => setRule(e.target.checked)} />
        Kabul ettim.
      </label>

      <br />

      <br />

      {rules.map((rule) => (
        <label key={rule.key}>
          <input type={"checkbox"} checked={rule.checked} onChange={e => checkRule(rule.key, e.target.checked)} />
          {rule.value}
        </label>
      ))
      }
      <br />

      <pre>
        {JSON.stringify(rules, null, 2)}
      </pre>

      <hr />
   
      <br />
      <label>
        <input type={"file"} onChange={e => setAvatar(e.target.files[0])} />
      </label>

      <br />
      {avatar && (<>
        <h3> {avatar.name}</h3>
        {image && <img src={image} alt='' />}
      </>)}
      <hr />  <hr />  <hr />  <hr />
      <br />
      <button disabled={!enabled}  onClick={submitHandle}> Devam</button>
      <hr />
    </>
  );
}

export default FormUsing;