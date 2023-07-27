import "./Pagination.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons"

interface Props {
    pageNumber: number, 
    setPageNumber: (pageNumber: number) => void
};

const Pagination = (props:Props) => {
    const nextPage = () => {
        if(props.pageNumber !== 10) 
            props.setPageNumber(props.pageNumber + 1)
    }
    const prevPage = () => {
        if(props.pageNumber !== 1) 
            props.setPageNumber(props.pageNumber - 1)
    }

    return (
        <div className="page-buttons">
        <button className="page-buttons__button" onClick={() => prevPage()}><FontAwesomeIcon icon={faBackward} /></button>
        <button className="page-buttons__button" onClick={() => nextPage()}><FontAwesomeIcon icon={faForward} /></button>
      </div>
    )
}

export default Pagination