import {useState} from 'react'
import axios from 'axios'

const SubmitReview=()=>{
    const[name,setname] = useState('');
    const[email,setemail]= useState('');
    const[body,setbody]=useState('');

    const HandleChange=(e)=>{
        const{name,value}=e.target;
        if(name==='name')
            setname(value)
        else if(name==='email')
            setemail(value)
        else if(name==='body')
            setbody(value)


    }

    const HandleSubmit=(e)=>{
        e.preventDefault();
        const newRev={
            name,email,body
        }
        const apiUrl='https://jsonplaceholder.typicode.com/comments';
        axios.post(apiUrl,newRev)
        .then(response=>{
            console.log(response.data)
            setname('');
            setemail('');
            setbody('');
  
        })
        .catch(error => {
            console.error('Error submitting review:', error);
        });
    }
    return(<>

    
    <form onSubmit={HandleSubmit}>
                                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="text" name="name" value={name} onChange={HandleChange} className="form-control border-0 me-4" placeholder="Yur Name *"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="border-bottom rounded">
                                            <input type="email" name="email" value={email} onChange={HandleChange} className="form-control border-0" placeholder="Your Email *"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="border-bottom rounded my-4">
                                            <textarea name="body" value={body} onChange={HandleChange} className="form-control border-0" cols="30" rows="8" placeholder="Your Review *"    spellCheck="false"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-between py-3 mb-5">
                                            
                                            
                                            <button type="submit" classNameName="btn border border-secondary text-primary rounded-pill px-4 py-3">Post Comment</button>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </form>
    </>)
}
export default SubmitReview