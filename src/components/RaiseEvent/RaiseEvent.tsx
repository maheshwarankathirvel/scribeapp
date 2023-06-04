import "./RaiseEvent.css"
import "./../LoginForm/LoginForm.css"

const RaiseEvent = () => {
    return (

       <div className={"raise-event-container"}>
            <div className="container">
                <div className="flex-container">
                    <div className="item">
                         <label className={"label-font"}>Event Name</label>
                         <input type="text" className="form-control" placeholder="Enter Event Name"/>
                    </div>
                    <div className="item">
                        <label className={"label-font"}>Organiser</label>
                        <input type="text" className="form-control" placeholder="Enter Organiser Name"/>
                    </div>
                    <div className="item">
                         <label className={"label-font"}>Event date</label>
                         <input type="date" className="form-control" placeholder="Choose a Time"/>
                    </div>
                    <div className="item">
                         <label className={"label-font"}>Event Time</label>
                         <input type="text" className="form-control" placeholder="Enter Organiser Name"/>
                    </div>
                    <div className="item">
                          <label className={"label-font"}>Location</label>
                          <input type="text" className="form-control" placeholder="Enter Event Location"  />
                    </div>
                    <div className="item">
                         <label className={"label-font"}>Government Event</label>
                        <select className="form-control">
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div className="item">
                        <label className={"label-font"}>Candidate Details</label>
                        <input type="file" className="form-control" id="customFile"/>

                    </div>
                    <div className="item">
                     <label className={"label-font"}>Notify Scribes PAN state</label>
                     <select className="form-control">
                       <option value="No">No</option>
                       <option value="Yes">Yes</option>
                     </select>
                    </div>

                    <button type="submit" className="btn btn-secondary col-lg-5 continue-button-bg submit-button"
                            onClick={() => console.log("sdcds")}>RAISE A NEW EVENT
                    </button>
                </div>
            </div>
        </div>

    )
}

export default RaiseEvent