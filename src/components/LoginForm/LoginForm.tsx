import './LoginForm.css'

const LoginForm = ({onClick}: { onClick: () => void }) => {
    return (
        <div className={"form-container"}>
            <div className={"align-content-center sign-in-font"}>
                <div className={"text-center sign-in-style"}>Sign in</div>
                <form className={"form-input"}>
                    <div className="form-group col-lg-5">
                        <label htmlFor="exampleInputEmail1" className={"label-font"}>Mail ID</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter your Mail ID"/>
                    </div>
                    <div className="form-group col-lg-5">
                        <label htmlFor="exampleInputPassword1" className={"label-font"}>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Enter your Password"/>
                    </div>
                    <button type="submit" className="btn btn-secondary col-lg-5 continue-button-bg"
                            onClick={onClick}>CONTINUE
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm