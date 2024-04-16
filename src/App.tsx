import { useState } from 'react'
import Label from './components/Label'
import DefaultTextField from './components/DefaultTextField'

const App = () => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <>
      <Label htmlFor="email">이메일</Label>
      <DefaultTextField
        id='email'
        value=''
        placeholder='이메일을 입력하세요'
        errorMessage='이메일을 확인해주세요'
        isError={isError}
        onChange={() => { }}
        onClick={() => { }}
      />
      <div className='my-20' />
      <Label htmlFor="address">주소</Label>
      <DefaultTextField
        id='address'
        value=''
        placeholder='주소를 입력하세요'
        errorMessage='주소를 확인해주세요'
        isError={isError}
        onChange={() => { }}
        onClick={() => { }}
      />
      <button
        className='mt-10'
        onClick={() => setIsError(prev => !prev)}
      >
        에러토글
      </button>
    </>
  )
}

export default App