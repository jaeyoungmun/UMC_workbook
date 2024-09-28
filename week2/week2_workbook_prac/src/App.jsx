
import './App.css'
import List from './components/List.jsx';

function App() {
  const nickname = '제리';
  const meat = '고기';
  const array = ['REACT', 'NEXT', 'VUE', 'SVELTE', 'ANGULAR', 'REACT-NATIVE'];
  // const numbers = [1,2,3,4,5];
  return (
    <>
      <strong className="school">상명대학교</strong>
      <p style={{color: "purple", fontWeight: "bold", fontSize: '3rem'}}>{nickname}/문재영</p>
      <h1>{`${nickname}는 ${meat}를 좋아합니다</h1>`}</h1>
      <ul>
        {array.map((yaho, i) => {
          return <List key={i} tech={yaho}/>
          // return <li key={i}>{yaho}/</li> // ->List컴포넌트를 호출합니다
        })}
        {/* {numbers.map((num,i) => {
          return <li key = {i}> {num}</li> ->List컴포넌트를 호출합니다
        })} */}
      </ul>
    </>
  )
}

export default App
