import React, { FC, useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import Form from './components/Form'
import Informational from './components/Informational/Informational'
import { useBreakpoint } from './components/MediaBreakpointProvider'
import { useSelector } from 'react-redux'
import { UIState } from './store/ui/types'
import { FormState } from './store/form/types'
import { RootState } from './store/index'

const App: FC = (props): JSX.Element => {
  const breakpoints: any = useBreakpoint()
  let showInformational 
 
  const [completed, setCompleted] = useState<number>(0)
  const [message, setMessage] = useState<string>('')

  const { questionsComplete = 0, informationType } = useSelector<
    RootState,
    UIState
  >((state) => state.ui)

  switch (informationType) {
    case 'smileOn60':
     showInformational = true
      break
    case 'oralHealth':
    showInformational = true
      break
    case 'thankYou':
    showInformational = true
      break
    default:
    showInformational = false
      break
    }
  const { questions } = useSelector<RootState, FormState>((state) => state.form)

  const getPercentage = (numCompleted: number, total: number) =>
    Math.ceil((numCompleted / total) * 100)

  useEffect(() => {
    setCompleted(getPercentage(questionsComplete, questions.length))
    setMessage(message)
  }, [questionsComplete, informationType])

  const questionsAsComponents = [
    <Informational
      key={informationType}
      informationType={informationType}
      didQualify={false}
    />,
    ...questions.map((question, index) => (
      <Form
        key={'n' + question.questionDisplayOrder}
        count={question.questionDisplayOrder}
        answerChoices={question.answerChoices}
        questionText={question.questionText}
        questionType={question.questionType}
        lastOf={questions.length - 1 === index}
      />
    )),
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <div id="viewTop" />
      <Header>
        <ProgressBar completed={completed} showSmall={true} />
      </Header>
      <div
        style={{
          display: 'flex',
          height: breakpoints.sm ? 'calc(100% - 178)' : 'calc(100% - 128px)',
          width: '100%',
          flexDirection: 'column',
          // position: 'absolute',
          marginTop: breakpoints.sm ? 178 : 128,
        }}
      >
      {console.log(showInformational, 'show info?')}
        {!showInformational && questionsAsComponents.map((form) => form)}
        {showInformational && (
          <Informational informationType={informationType}  />
        )}
      </div>
    </div>
  )
}

export default App
