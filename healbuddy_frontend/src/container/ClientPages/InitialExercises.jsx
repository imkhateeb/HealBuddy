import React, { useState, useEffect } from 'react';
import { MentalHealthQuestions } from '../../utils/MHQuestions';
import { v4 as uuidv4 } from 'uuid';
import Roundspinner from '../../component/Spinners/RoundSpinner';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
import Client from '../Client';
import { useNavigate } from 'react-router-dom';

// Logical o start
const min = 1;
const max = 5;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// Logical o end

export default function InitialExercises({ userId }) {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(MentalHealthQuestions(randomNum));
  const [index, setIndex] = useState(0);
  const [answerDetail, setAnswerDetail] = useState([]);
  const [alertAttempt, setAlertAttempt] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [isRoleAdding, setIsRoleAdding] = useState(false);
  const [analyzingTest, setAnalyzingTest] = useState(false);
  const [errorWhileAddingRole, setErrorWhileAddingRole] = useState(false);
  const [errorWhileAnalyzingTest, setErrorWhileAnalyzingTest] = useState(false);
  const [creatingDashboard, setCreatingDashboard] = useState(false);


  useEffect(() => {
    const newAnswerDetail = [];
    for (let i = 0; i < questions?.length; i++) {
      newAnswerDetail.push(-1);
    }
    setAnswerDetail(newAnswerDetail);
  }, []);


  function selectAnswer(key) {
    let newArray = answerDetail;
    for (let i = 0; i < questions?.length; i++) {
      if (i === index) {
        newArray[i] = key;
        return;
      }
    }
    setAnswerDetail(newArray);
  }

  function recordAns() {
    if (answerDetail[index] === -1) {
      setAlertAttempt(true);
      setTimeout(() => {
        setAlertAttempt(false);
      }, 3000);
    } else {
      setIndex(index + 1);
      setSelected(-1);
    }
  }


  function CancelQuestionnaire() {
    localStorage.removeItem("TempRoles");
    window.location.reload();
  }



  function onFinish() {
    if (answerDetail[index] === -1) {
      setAlertAttempt(true);
      setTimeout(() => {
        setAlertAttempt(false);
      }, 3000);
    } else {
      setAnalyzingTest(true);
      for (let i = 0; i < questions?.length; i++) {
        const doc = {
          _key: uuidv4(),
          question: questions[i]?.Question,
          answerGiven: questions[i]?.PossibleAnswers[answerDetail[i]],
          mentalStabilityMagnitude: `${questions[i]?.AnswerDetails[answerDetail[i]].mentalStabilityMagnitude}`,
          anxietyMagnitude: `${questions[i]?.AnswerDetails[answerDetail[i]].anxietyMagnitude}`,
          stressMagnitude: `${questions[i]?.AnswerDetails[answerDetail[i]].stressMagnitude}`,
        };

        Client.patch(userId)
          .setIfMissing({ initialAssessments: [] })
          .insert('after', 'initialAssessments[-1]', [doc])
          .commit()
          .then(() => {
            if (i == (questions?.length) / 2) {
              setAnalyzingTest(false);
              setCreatingDashboard(true);
            }
            if (i == (questions?.length - 1)) {
              setCreatingDashboard(false);

              // Save the role
              setIsRoleAdding(true);
              const prevData = JSON.parse(localStorage.getItem("TempRoles"));
              Client.patch(userId)
                .set({
                  fullName: prevData.fullName,
                  role: 'client',
                  age: prevData.age,
                  activeArea: prevData.district,
                })
                .commit()
                .then(() => {
                  localStorage.removeItem('TempRoles');
                  setIsRoleAdding(false);
                  navigate("/");
                  window.location.reload();
                })
                .catch((error) => {
                  console.log("Error while adding role", error);
                  setErrorWhileAddingRole(true);
                  setTimeout(() => {
                    setErrorWhileAddingRole(false);
                  }, 3000);
                  window.location.reload();
                })
            }
          }).catch((error) => {
            console.log("Error while Analyzing the test", error);
            setTimeout(() => {
              setErrorWhileAnalyzingTest(false);
            }, 3000);
            window.location.reload();
          });
      }
    }
  }



  if (analyzingTest) {
    return (
      <div className='flex flex-col items-center justify-center animate-fade-in'>
        <Roundspinner />
        <p className='text-center text-xl font-bold'>Analyzing your test</p>
      </div>
    )
  }

  if (creatingDashboard) {
    return (
      <div className='flex flex-col items-center justify-center animate-fade-in'>
        <Roundspinner />
        <p className='text-center text-xl font-bold'>Creating your dashboard</p>
      </div>
    )
  }

  if (isRoleAdding) {
    return (
      <div className='flex flex-col items-center justify-center animate-fade-in'>
        <Roundspinner />
        <p className='text-center text-xl font-bold'>Adding Your Role</p>
      </div>
    )
  }

  if (errorWhileAddingRole || errorWhileAnalyzingTest) {
    return (
      <div className='flex flex-col items-center justify-center animate-fade-in'>
        <p className='text-center text-xl text-red-500 font-bold'>Some Error has occured, Try Again!</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col'>
      <div className='p-2'>
        <div className='pb-3 border-b-2 border-gray-400 mb-3'>
          <h1 className='text-xl font-bold'>Question no. {index + 1} : </h1>
          <p>{questions[index]?.Question}</p>
        </div>
        {alertAttempt && (
          <p className='text-center text-red-500 my-3'>Attempt the question then proceed</p>
        )}
        {answerDetail !== [] && (
          <div className='my-3 flex flex-col'>
            {questions[index]?.PossibleAnswers.map((answer, i) => (
              <p
                key={i}
                onClick={() => {
                  selectAnswer(i);
                  setSelected(i)
                }}
                className={`cursor-pointer my-2 py-2 px-3 ${selected === i ? 'bg-gray-200' : (answerDetail[index] === i) ? 'bg-gray-200' : 'bg-white'} border-2 border-gray-200 hover:bg-gray-200 rounded-lg transition-all duration-300 ease-in`}
              >{answer}</p>
            ))}
          </div>
        )}

      </div>
      <div className='flex justify-evenly'>

        {index !== 0 && (
          <button
            type='button'
            onClick={() => {
              setIndex(index - 1)
              setSelected(-1)
            }}
            className='py-1 px-3 outline-none bg-yellow-500 hover:bg-yellow-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
          ><AiOutlineArrowLeft />Back</button>
        )}
        {(index === (questions?.length - 1)) ? (
          <button
            type='button'
            onClick={onFinish}
            className='py-1 px-3 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
          >Finish and Save<AiOutlineArrowRight /></button>
        ) : (
          <button
            type='button'
            onClick={CancelQuestionnaire}
            className='py-1 px-3 outline-none bg-red-500 hover:bg-red-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
          >Cancel <RxCross2 /></button>
        )}

        {(index !== (questions?.length - 1)) && (
          <button
            type='button'
            onClick={() => {
              recordAns();
            }}
            className='py-1 px-3 outline-none bg-blue-500 hover:bg-blue-400 transition-all duration-300 ease-in text-white rounded-lg cursor-pointer my-2 flex items-center animate-fade-in'
          >Next <AiOutlineArrowRight /></button>
        )}
      </div>
      <p className='text-xs underline-offset-1 mt-4 text-center'>***DO NOT REFRESH THE PAGE, DATA CAN DESTROY***</p>
    </div>
  )
}
