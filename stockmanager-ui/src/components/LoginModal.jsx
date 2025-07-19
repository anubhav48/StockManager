import React from 'react';

const LoginModal = () => {

    const [isLogin, setIsLogin] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div
            className="modal fade"
            id="loginModal"
            tabIndex="-1"
            aria-labelledby="loginModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="loginModalLabel">
                            {isLogin? "Login" : "Sign Up"}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    {isLogin ? <div id='login' className="modal-body">
                        <form style={{padding: '30px'}}>
                            <div className="mb-3">
                     
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="mb-3">
                             
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100">
                                Submit
                            </button>
                        </form>
                        </div>
                        :
                        <div id='signup' className="modal-body">
                            <form style={{padding: '20px'}}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter email"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter password"
                                    />
                                </div>

                                
                                <div className="mb-3">
                                    <label htmlFor="re-password" className="form-label">
                                       Re-enter Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="re-password"
                                        placeholder="Re-enter password"
                                    />
                                </div>

                                <button type="submit" className="btn btn-success w-100">
                                    Create Account
                                </button>
                            </form>
                        </div>
                    }



                    <div className="modal-footer justify-content-center">
                        <p className="mb-0">
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                            <button
                                type="button"
                                className="btn btn-link p-0"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? 'Sign Up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
