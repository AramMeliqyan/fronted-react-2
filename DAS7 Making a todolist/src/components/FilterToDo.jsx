export const FilterToDo = ({currentFilter,onSet}) =>{
    const list = ["all","completed","active"]
    
    return<>
   { list.map((criteria,i) => <button onClick={()=>onSet(criteria)} key={i}  className={currentFilter == criteria? "button-active":null}> 
        {criteria}
        </button>)
}
    </>
}