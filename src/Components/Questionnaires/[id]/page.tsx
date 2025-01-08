import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Questionnaires.css';  // Import the CSS file

const questions = [
  {
    id: 1,
    question: "What's the occasion?",
    options: ['Birthday', 'Anniversary', 'Sympathy', 'Congratulations', 'Just Because'],
    field: 'occasion',
  },
  {
    id: 2,
    question: 'Who is the recipient?',
    options: ['Partner', 'Family Member', 'Friend', 'Colleague', 'Other'],
    field: 'recipient',
  },
  {
    id: 3,
    question: "What's your budget?",
    options: ['Under $50', '$50-$100', '$100-$200', 'Over $200'],
    field: 'budget',
  },
  {
    id: 4,
    question: 'How important is the symbolic meaning of flowers?',
    options: ['Very Important', 'Somewhat Important', 'Not at all'],
    field: 'symbolicMeaning',
  },
  {
    id: 5,
    question: 'How long do you want the flowers to last?',
    options: ['1-3 days', '4-7 days', 'Over a week'],
    field: 'longevity',
  },
  {
    id: 6,
    question: 'Do you have a preferred color scheme?',
    options: ['Pastels', 'Vibrant', 'White/Green', 'Red/Pink', 'No Preference'],
    field: 'colorScheme',
  },
  {
    id: 7,
    question: 'What style of arrangement do you prefer?',
    options: ['Classic', 'Modern', 'Rustic', 'Exotic', 'Minimalist'],
    field: 'style',
  },
  {
    id: 8,
    question: 'How important is fragrance?',
    options: ['Very Important', 'Somewhat Important', 'Not at all'],
    field: 'fragrance',
  },
  {
    id: 9,
    question: 'Do you prefer sustainable/eco-friendly options?',
    options: ['Yes', 'No', 'No Preference'],
    field: 'sustainable',
  },
  {
    id: 10,
    question: 'Do you prefer unique or traditional flowers?',
    options: ['Unique', 'Traditional', 'Mix of Both'],
    field: 'flowerType',
  },
];

export default function Questionnaires() {
  const { id } = useParams();
  const navigate = useNavigate();
  const questionId = parseInt(id as string);

  if (isNaN(questionId) || questionId < 1 || questionId > questions.length) {
    return <p>Invalid question id</p>;
  }

  const question = questions[questionId - 1];
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    setAnswer(formData[question.field] || '');
  }, [formData, question]);

  // const handleNext = () => {
  //   setFormData(prev => ({ ...prev, [question.field]: answer }));
  //   if (questionId < questions.length) {
  //     navigate(`/questionnaires/${questionId + 1}`);
  //   } else {
  //     navigate('/results');
  //   }
  // };

  const handleNext = () => {
    setFormData((prev) => ({ ...prev, [question.field]: answer }));
    if (questionId < questions.length) {
      navigate(`/questionnaires/${questionId + 1}`);
    } else {
      navigate('/results', { state: { responses: { ...formData, [question.field]: answer } } });
    }
  };
  

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-card">
        <h2 className="questionnaire-header">Question {questionId} of {questions.length}</h2>
        <p className="questionnaire-question">{question.question}</p>
        <div className="option-container">
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`option-${index}`}
                name={question.field}
                value={option}
                checked={answer === option}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-radio text-purple-600"
              />
              <label htmlFor={`option-${index}`} className="text-gray-700">{option}</label>
            </div>
          ))}
        </div>
        <div className="button-container">
          {questionId > 1 && (
            <button
              onClick={() => navigate(`/questionnaires/${questionId - 1}`)}
              className="previous-button"
            >
              Previous
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!answer}
            className="next-button"
          >
            {questionId === questions.length ? 'See Results' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
