import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlices";

const DisplayUser = () => {

    const data = useSelector((state) => {
        return state.users
    })

    const dispatch = useDispatch();
    const deleteUser = (id)=>{
        dispatch(removeUser(id))
    }

    return (
        <Wrapper>
            {data.map((user, id) => {
                return (
                    <li key={id}>
                        {user}

                        <button className="btn-delete" onClick={()=>deleteUser(id)} >
                            <MdDeleteForever />
                        </button>
                    </li>
                )
            })}

        </Wrapper>
    )

}

const Wrapper = styled.section`
li{
    display:flex;
    justify-content: space-between;
    margin-top: 5px;
    border-bottom: solid 1px #0000001c;
}
 .btn-delete{
  border: none;
  color: red;
  background: none;
  font-size: 3rem;
  cursor: pointer;
}
`

export default DisplayUser