// props를 호출했을 때 
const List = (props) => {
    console.log(props.tech)
    const { tech, name, food} = props;
   return (
     <li style={{listStyle: 'none'}}>
        {tech}
     </li>
   )
 }
 
 export default List
 