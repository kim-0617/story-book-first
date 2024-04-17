import { useState } from 'react'
import Label from './components/Label'
import DefaultTextField from './components/DefaultTextField'
import TagList from './components/TagList';

const App = () => {
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <>
      <div className='w-full bg-primary'>
        <TagList
          tagList={["1~2명", "3~5명", "5~7명", "8~9명"]}
          onTagClick={() => { }}
        />
      </div>
    </>
  )
}

export default App