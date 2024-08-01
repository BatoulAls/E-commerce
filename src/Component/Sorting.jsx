
const Sorting=({handelSorting,SortingOption})=>{
    
    return(<div className="col-xl-3">
        <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
            <label for="fruits">Default Sorting:</label>
            <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3"  onChange={handelSorting} value={SortingOption} form="fruitform">
                <option value="">Nothing</option>
                <option value="men's clothing">men's clothing</option>
                <option value="women's clothing">women's clothing</option>
                <option value="jewelery">jewelery</option>
                <option value="electronics">electronics</option>
                
                
                
            </select>
        </div>
    </div>)
}
export default Sorting