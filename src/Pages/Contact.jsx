const Contact=()=>{
    return(<>
     <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="p-5 bg-light rounded">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="text-center mx-auto" style={{ maxWidth: '700px' }}>
                                <h1 className="text-primary">Get in touch</h1>
                             
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="h-100 rounded">
                                <iframe className="rounded w-100" 
                                style={{height: '400px'} }src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        
                        <div className="row">
    <div className="col-md-4 mb-3">
        <div className="d-flex p-4 rounded bg-white h-100">
            <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
            <div>
                <h4>Address</h4>
                <p className="mb-2">Abu Dhabi</p>
            </div>
        </div>
    </div>
    <div className="col-md-4 mb-3">
        <div className="d-flex p-4 rounded bg-white h-100">
            <i className="fas fa-envelope fa-2x text-primary me-4"></i>
            <div>
                <h4>Mail Us</h4>
                <p className="mb-2">Batoul.alsharif@icloud.com</p>
            </div>
        </div>
    </div>
    <div className="col-md-4 mb-3">
        <div className="d-flex p-4 rounded bg-white h-100">
            <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
            <div>
                <h4>Telephone</h4>
                <p className="mb-2">(+971) 558912971</p>
            </div>
        </div>
    </div>
</div>
                    </div>
                </div>
            </div>
        </div>

    
    
    </>)
}
export default Contact