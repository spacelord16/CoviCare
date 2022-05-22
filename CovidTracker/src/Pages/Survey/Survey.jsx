import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import './Survey.css'
import { addDoc } from 'firebase/firestore';
import { surveyRef } from '../../firebase';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#242424',
    color: "#FFFFFF",
    borderRadius: "20px",
    padding: "2rem 4rem"
  },
};

function Survey() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [formData, setformData] = useState({
    Name: '',
    Age: '',
    Country: '',
    FamilySize: '',
    Sex: "",
    Symptoms: ""
  });

  const handleChange = (e) => {
    setformData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitSurvey = async (e) => {
    e.preventDefault();

    const { Name, Age, Country, Sex, FamilySize, Symptoms } = formData;

    if (Name && Age && Country && Sex && FamilySize && Symptoms) {
      const newRef = await addDoc(surveyRef, {
        Name, Age, Country, Sex, FamilySize, Symptoms,
      });

      closeModal();
      alert('Survey Completed');
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#FFFFFF';
    subtitle.style.textAlign = 'center';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='app__survey'>
      <div>
        <button className='flex__justify' onClick={openModal}>
          <p>Begin Survey</p>
          <p>&rarr;</p>
        </button>
        <p>
          Disclaimer:<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis velit felis, id laoreet erat viverra sit amet. Donec semper ac purus vel placerat. Duis ac nunc tristique, fringilla ex vitae, feugiat tortor. Phasellus sodales ipsum non ipsum gravida, sit amet iaculis ex molestie. Vestibulum at sem leo. Sed eu augue erat. Ut non felis sollicitudin, consectetur neque a
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Personal Details</h2>

        <form className='survey-form flex__center' onSubmit={submitSurvey}>

          <div className='flex__justify'>
            <label id="age">1. What is your Name?</label>
            <input type="text" htmlFor="age" placeholder='Your answer here' name="Name" required={true}
              onChange={handleChange} value={formData.Name} />
          </div>

          <div className='flex__justify'>
            <label id="age">2. What is your age?</label>
            <input type="text" htmlFor="age" placeholder='Your answer here' name="Age" required={true}
              onChange={handleChange} value={formData.Age} />
          </div>

          <div className='flex__justify'>
            <label id="sex">3. What is your sex?</label>
            <input type="text" htmlFor="sex" placeholder='Your answer here' name="Sex" required={true}
              onChange={handleChange} value={formData.Sex} />
          </div>

          <div className='flex__justify'>
            <label id="residence">4. What is your country of residence?</label>
            <input type="text" htmlFor="residence" placeholder='Your answer here' name="Country" required={true} onChange={handleChange} value={formData.Country} />
          </div>

          <div className='flex__justify'>
            <label id="people_count">5. How many people (including yourself) live in this household?</label>
            <input type="text" htmlFor="people_count" placeholder='Your answer here' name="FamilySize" required={true} onChange={handleChange} value={formData.FamilySize} />
          </div>

          <div className='flex__justify'>
            <label id="select-option-2">6. What are you experiencing (Symptoms) ?</label>
            <input type="text" htmlFor="symptoms" placeholder='Your answer here' name="Symptoms" required={true} onChange={handleChange} value={formData.Symptoms} />
          </div>
          <div className="modal-button-container flex__center">
            <button type='submit' onClick={submitSurvey}>Submit</button>
          </div>

        </form>
      </Modal>
    </div>
  )
}

export default Survey