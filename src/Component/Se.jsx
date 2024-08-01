const Se=({Search,HandelInputChange})=>{

    return(<>
    <div className="col-xl-3">
        <div className="input-group w-100 mx-auto d-flex">
                                    <input type="search" className="form-control p-3" placeholder="keywords" value={Search} onChange={HandelInputChange} aria-describedby="search-icon-1"/>
                                    <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                </div>
                                </div>
    </>)

}
export default Se