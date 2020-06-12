import React, { FC } from 'react'
import './App.css'
import Header from './components/Header'
import { ProgressBar } from './components/ProgressBar'
import ScrolView from './components/ScrollView'
import Informational from './components/Informational/Informational'

const App: FC = (props): JSX.Element => {
  const showInformational = false
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
      }}
    >
      <Header>
        <ProgressBar completed={40} />
      </Header>
      <div
        style={{
          display: 'flex',
          height: 'calc(100% - 128px)',
          width: '100%',
          flexDirection: 'column',
          position: 'absolute',
          top: 128,
        }}
      >
        {!showInformational &&
          [0, 1, 2, 3].map((form, index) => (
            <ScrolView key={'n' + index} form={form} count={index} />
          ))}
        {showInformational && (
          <Informational informationType="smileOn60" didQualify={true} />
        )}
      </div>
    </div>
  )
}

export default App
