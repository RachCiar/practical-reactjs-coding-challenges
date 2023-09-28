import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import passwordGif from '../../assets/gif/password.gif'
import { ReactComponent as Copy } from '../../assets/icons/copy.svg'
import { ReactComponent as Refresh } from '../../assets/icons/refresh.svg'
import Checkbox from '../Checkbox'
import './index.css'

type copyToClipboardType = {
  value: string
  copied: boolean
}

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState<number>(8)
  const [password, setPassword] = useState<string>('')
  const [upperChecked, setUpperChecked] = useState<boolean>(true)
  const [lowerChecked, setLowerChecked] = useState<boolean>(false)
  const [numberchecked, setNumberChecked] = useState<boolean>(false)
  const [specialChecked, setSpecialCharsChecked] = useState<boolean>(true)
  const [passwordStrength, setPasswordStrength] = useState<{ strength: string; color: string }>({
    strength: '',
    color: '',
  })
  const [copied, setCopied] = useState<boolean>(false)

  const generateRandomPassword = () => {
    let characters = ''
    if (upperChecked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (lowerChecked) characters += 'abcdefghijklmnopqrstuvwxyz'
    if (numberchecked) characters += '0123456789'
    if (specialChecked) characters += '!@#$%^&*()'

    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      result += characters[randomIndex]
    }

    if (!upperChecked && !lowerChecked && !numberchecked && !specialChecked) {
      setLowerChecked(true)
    }
    const strength = evaluatePasswordStrength(result)
    setPasswordStrength(strength)
    setPassword(result)
  }

  const evaluatePasswordStrength = (password: string) => {
    if (password.length < 8) {
      return { strength: 'Too Short', color: '#FF0000' }
    }
    let count = 0
    if (/[A-Z]/.test(password)) count++
    if (/[a-z]/.test(password)) count++
    if (/\d/.test(password)) count++
    if (/[!@#$%^&*()]/.test(password)) count++

    if (count === 4) return { strength: 'Hard', color: 'green' }
    if (count === 3) return { strength: 'Medium', color: 'orange' }
    if (count <= 2) return { strength: 'Easy', color: 'gold' }

    return { strength: '', color: '' }
  }

  const onChangePasswordLength = (value: number | number[]) => {
    setPasswordLength(value as number)
  }

  const onCopy = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  useEffect(() => {
    generateRandomPassword()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="password-wrapper">
      <div className="gif">
        <img src={passwordGif} alt="Password Gif" />
      </div>
      <div className="tac">
        <h2 className="title">PASSWORD GENERATOR</h2>
        <p className="subtitle">
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>
      <div className="password-input-wrapper">
        <div className="password-field">
          <input type="text" placeholder="your password" value={password} />
          <Refresh onClick={generateRandomPassword} />
        </div>
        <CopyToClipboard text={password} onCopy={onCopy}>
          <button className="copy-btn">
            <Copy /> {copied ? 'Copied' : 'Copy'}
          </button>
        </CopyToClipboard>
      </div>
      <span className="fw-500" style={{ color: passwordStrength.color }}>
        {passwordStrength.strength}
      </span>
      <div className="slider">
        <div>
          <label id="slider-label">Password Length: </label>
          <span>{passwordLength}</span>
        </div>
        <Slider
          max={30}
          min={5}
          value={passwordLength}
          onChange={onChangePasswordLength}
          className="slider-style"
        />
      </div>
      <div className="elements">
        <Checkbox
          id="uppercase"
          label="Uppercase"
          checked={upperChecked}
          name="upper"
          onChange={() => setUpperChecked(!upperChecked)}
        />
        <Checkbox
          id="lowercase"
          label="Lowercase"
          checked={lowerChecked}
          name="lower"
          onChange={() => setLowerChecked(!lowerChecked)}
        />
        <Checkbox
          id="numbers"
          label="Numbers"
          checked={numberchecked}
          name="numbers"
          onChange={() => setNumberChecked(!numberchecked)}
        />
        <Checkbox
          id="special chars"
          label="Special Characters"
          checked={specialChecked}
          name="specialChars"
          onChange={() => setSpecialCharsChecked(!specialChecked)}
        />
      </div>
    </div>
  )
}

export default PasswordGenerator
