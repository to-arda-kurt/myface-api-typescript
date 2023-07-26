
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
        <div>
        <p onClick={() => prevPage()}>Previous</p>
        <p onClick={() => nextPage()}>Next</p>
      </div>
    )
}

export default Pagination