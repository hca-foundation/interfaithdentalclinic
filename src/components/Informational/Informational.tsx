import React, { FC } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { Button } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

interface InformationalProps {
  informationType: string | undefined
  didQualify?: boolean | undefined
}

const Informational: FC<InformationalProps> = ({
  informationType,
  didQualify = false,
}) => {
  switch (informationType) {
    case 'smileOn60':
      return (
        <Container>
          <SmileOn60 />
        </Container>
      )
    case 'welcome':
      return (
        <div style={{ width: '100%', height: '100%' }}>
          <Container>
            <Welcome />
          </Container>
          <div style={{ margin: '0 auto', width: 'max-content' }}>
            <a href={`#view0`}>
              <div
                style={{
                  width: 'max-content',
                  padding: '0 20px',
                  height: '78px',
                  background: '#003B49',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div style={{ margin: '0 auto', color: 'white' }}>
                  GET STARTED
                </div>
                <div style={{ margin: '0 auto' }}>
                  <ExpandMoreIcon style={{ color: 'white' }} />
                </div>
              </div>
            </a>
          </div>
            <div id={`view0`}></div>
        </div>
      )
    case 'oralHealth':
      return (
        <Container>
          <OralHealth />
        </Container>
      )
    case 'thankYou':
      return (
        <Container>
          <ThankYou qualified={didQualify} />
        </Container>
      )
    default:
      return (
        <Container>
          <Default />
        </Container>
      )
  }
}

const Container: FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: 648,
        background: '#003B49',
        padding: 15,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <a
        style={{ textDecoration: 'none', color: 'white' }}
        href="https://www.interfaithdental.com/"
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <ArrowBackIcon />
          <p>Back to interfaithdental.com</p>
        </div>
      </a>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 700,
          margin: '0 auto',
          color: 'white',
        }}
      >
        {children}
      </div>
    </div>
  )
}

const SmileOn60: FC = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Smile on 60+</h1>
      </div>
      <div>
        <p>
          Because you or your family are aged 60 or older, you may be eligible
          for the Smile On 60+ dental program. You qualify if you are:
        </p>
        <ul>
          {[
            '60 or older',
            'A Tennessee resident',
            'Have an income level below 200% poverty level, AND',
            'Dentally uninsured.',
          ].map((point) => {
            return <li key={point}>{point}</li>
          })}
        </ul>
        <p>
          Please visit the Smile On 60+ webpage to learn more and how to call
          the hotline to receive care.
        </p>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button style={{ background: '#F05033', color: 'white' }}>
            <span style={{ padding: '5px 15px' }}>Go to Smile On 60+</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

const Welcome: FC = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome</h1>
      </div>
      <div>
        <p>Welcome to Interfaith Dental’s Patient Screening Form. </p>
        <p>
          This form will help determine whether you or your family member(s)
          qualify for Interfaith Dental’s services as well as inform us of your
          dental needs.
        </p>
        <p>It should take approximately 10 minutes to complete.</p>
        <p>
          If you have any questions or concerns, please call our main office
          number at (615) 329-4790. Thank you!
        </p>
      </div>
    </div>
  )
}

const OralHealth: FC = () => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>TN Oral Health</h1>
      </div>
      <div>
        <p>You have selected a county we currently do not serve.</p>
        <p>
          Tenneseee Oral Health website provides a list of clinics across the
          state of Tennessee you can call to inquire about services.
        </p>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button style={{ background: '#F05033', color: 'white' }}>
            <span style={{ padding: '5px 15px' }}>Go to Clinic List</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface ThankYouProps {
  qualified: boolean | undefined
}

const ThankYou: FC<ThankYouProps> = ({ qualified }) => {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Thank You!</h1>
        {qualified ? (
          <h3>
            You have successfully submitted the form and have conditionally
            qualified.
          </h3>
        ) : (
          <h3>
            You have successfully submitted the form. Unfortunately, you do not
            qualify to become a patient of Interfaith Dental at this time.
          </h3>
        )}
      </div>
      {qualified ? (
        <div>
          <p>
            Based on your answers to the form you and your family have
            conditionally qualified to become an Interfaith Dental patient and
            receive services.
          </p>
          <p>
            A representative from the clinic will be in touch to gather any
            additional information needed and to schedule an appointment when
            available. We look forward to seeing you soon.
          </p>
        </div>
      ) : (
        <div>
          <p>
            Based on the information you provided, you do not meet the
            guidelines for the program.
          </p>
          <p>
            If you believe this is a mistake or your financial situation
            changes, please reach back out to us.
          </p>
          <p>
            Please click the button below to visit the Tennesee Oral Health
            website which offers a list of clinics in the state that may meet
            your needs.
          </p>
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Button style={{ background: '#F05033', color: 'white' }}>
              <span style={{ padding: '5px 15px' }}>Go to Clinic List</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const Default: FC = () => {
  return <div></div>
}

export default Informational
