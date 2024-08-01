import { useEffect, useState } from "react"
import axios from "axios";
const ReviewsDisplay=()=>{
    // for display reviews:
    const[reviews,setreviews] = useState([])
    const[loading, setloading]= useState(true)
    const[currentPage,setcurrentpage]=useState(1)
    const ItemsPerpages=10;
   
    useEffect(()=>{
        setloading(true)

        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response=>{
            setreviews(response.data)
            setloading(false)

            console.log(response.data)


        })
        .catch(error=>{
            console.error('error review' ,error)
            setloading(false)

        })

    },[])
    if (loading) return <p>Loading reviews...</p>;

    const indexlastpage = currentPage * ItemsPerpages;
    const indexfirstpage = indexlastpage - ItemsPerpages;
    const currentRev=reviews.slice(indexfirstpage,indexlastpage)
    // for change the page
    const paginate = (pageNumber)=>setcurrentpage(pageNumber)
    const totalPages = 10
   
    return (
        <>
            {currentRev.map(rev => (
                <div key={rev.id} className="d-flex mb-4">
                    <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3" style={{width: '100px', height: '100px'}} alt="User avatar"/>
                    <div className="flex-grow-1">
                        <p className="mb-2" style={{ fontSize: '14px' }}>{rev.email}</p>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5>{rev.name}</h5>
                            
                        </div>
                        <p>{rev.body}</p>
                    </div>
                </div>
            ))}
            <div className="col-12">
                <div className="pagination d-flex justify-content-center mt-5">
                    <a href="#" className="rounded" onClick={() => paginate(currentPage - 1)}>&laquo;</a>
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`rounded ${currentPage === index + 1 ? 'active' : ''}`}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </a>
                    ))}
                    <a href="#" className="rounded" onClick={() => paginate(currentPage + 1)}>&raquo;</a>
                </div>
            </div>


           
        </>
    );
}

export default ReviewsDisplay