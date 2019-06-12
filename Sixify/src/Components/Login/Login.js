class Login extends Component {
    constructor(){
        super()
        this.state = { 
            email:'',
            password:''
        }
    }
    handleEmail(text)
{
    this.setState({email:text.target.value})
}
render() {
    return ( 
        <div className="Login">
        <header className="Login-header">
        <img src="{logo}" className="Login-logo" alt="logo" />
        <h1 className="Login-title">Login </h1>
        </header>


       <input type="text" placeholder="Enter e-mail"  onChange={(Text)=> { this.handleEmail(text)}} />
       <br />
        <input type="password " placeholder="Enter password" onChange={(Text)=> { this.handlePassword(text)}} />
        <br />
        <button>Login</button>
        </div>
    );
}
}
    


export default Login